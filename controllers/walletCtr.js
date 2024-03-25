import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import Wallet from "../models/walletModel.js";
import History from "../models/HistoryModel.js";
import Withdraw from "../models/withdrawModel.js";
import Investment from "../models/investmentModel.js";

const getWalletByUserId = asyncHandler(async (req, res) => {
  const wallet = await Wallet.findOne({ user: req.user._id }).populate("investment").populate("investment.type");
  if (wallet) {
    res.status(200).json(wallet);
  } else {
    throw new Error(`Wallet not found`);
  }
});

const outWallet = asyncHandler(async (req, res) => {
  const { coin } = req.body;
  if (!coin || coin === "0" || coin === 0) throw new Error(`Invalid coin`);

  await User.findByIdAndUpdate(req.user._id, { $inc: { binance: parseFloat(coin) } });
  await Wallet.findOneAndUpdate({ user: req.user._id }, { $inc: { binance: -1 * parseFloat(coin) } });
  await History.create({ user: req.user._id, type: "out", amount: coin });
  res.json(`${coin} Coin have been transferred to your account`);
});

const withdrawWallet = asyncHandler(async (req, res) => {
  const { address } = req.body;
  const coin = parseFloat(req.body.coin);
  if (!coin) throw new Error(`Invalid coin`);
  if (!address) throw new Error(`Invalid address`);
  const wallet = await Wallet.findOne({ user: req.user._id });
  const binance = await Withdraw.aggregate([
    { $match: { user: req.user._id, status: "Pending" } },
    { $group: { _id: null, totalBinance: { $sum: "$binance" } } },
  ]);
  let binanceSum = 0;
  if (binance.length) binanceSum = parseFloat(binance[0].totalBinance);
  if (wallet.coin < coin + binanceSum) throw new Error(`Invalid coin. Please recheck your withdraw records`);

  const withdraw = await Withdraw.create({ user: req.user._id, address, binance: parseFloat(coin) });
  wallet.binance = parseFloat(wallet.binance) - coin;
  await wallet.save();

  if (withdraw) res.status(201).json(`Withdraw request has been submitted successfully`);
  else throw new Error("Invalid withdraw");
});

const getWithdraws = asyncHandler(async (req, res) => {
  const withdraws = await Withdraw.find({ user: req.user._id }).sort("-updated_at");
  res.status(200).json(withdraws);
});

const getAllWithdraws = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword ? { "user.email": { $regex: req.query.keyword, $options: "i" } } : {};
  const pageSize = parseInt(req.query.pageSize) || 50;
  const page = parseInt(req.query.page) || 1;
  const sort = req.query.sort || "created_at";
  const sortDirection = parseInt(req.query.sortDirection) || -1;

  const total = await Withdraw.countDocuments({ ...keyword });
  const withdraws = await Withdraw.find({ ...keyword })
    .populate("user", "-password")
    .sort({ [sort]: sortDirection })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ withdraws, total, page, pages: Math.ceil(total / pageSize) });
});

const getWithdrawById = asyncHandler(async (req, res) => {
  const withdraw = await Withdraw.findById(req.params.withdrawId).populate("user", "-password");
  res.status(200).json(withdraw);
});

const updateWithdrawStatus = asyncHandler(async (req, res) => {
  const { status, userId } = req.body;
  const withdraw = await Withdraw.findById(req.params.withdrawId);
  if (!withdraw) throw new Error(`Not found`);

  if (!(withdraw.status !== "Approved" && status === "Approved")) {
    await Wallet.findOneAndUpdate({ user: userId }, { $inc: { binance: parseFloat(withdraw.coin) } });
  }

  withdraw.status = status;
  await withdraw.save();

  res.status(201).json(`Withdraw request has been ${status}`);
});

const deleteWithdrawById = asyncHandler(async (req, res) => {
  const withdraw = await Withdraw.findByIdAndDelete(req.params.withdrawId);
  if (withdraw) res.status(200).json(withdraw);
  else throw new Error(`Not found withdraw record`);
});

export {
  getWalletByUserId,
  outWallet,
  withdrawWallet,
  getWithdraws,
  getAllWithdraws,
  getWithdrawById,
  updateWithdrawStatus,
  deleteWithdrawById,
};
