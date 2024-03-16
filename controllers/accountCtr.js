import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import Wallet from "../models/walletModel.js";
import Recharge from "../models/rechargeModel.js";
import History from "../models/HistoryModel.js";
import Admin from "../models/adminModel.js";

const rechargeToAccount = asyncHandler(async (req, res) => {
  const { type, coin, transactionId } = req.body;
  if (!(type === "usdt" || type === "trx" || !transactionId)) throw new Error(`Please recheck the recharge rules!`);
  if ((type === "usdt" && coin < 10) || (type === "trx" && coin < 100))
    throw new Error(`Please recheck the recharge rules!`);

  const newRecharge = await Recharge.create({ user: req.user._id, type, coin, transactionId });
  if (newRecharge) {
    res.json(newRecharge);
  } else {
    res.status(400);
    throw new Error("Invalid recharge data");
  }
});

const getRecharge = asyncHandler(async (req, res) => {
  const recharges = await Recharge.find({ user: req.user._id });
  res.status(200).json(recharges);
});

const inAccount = asyncHandler(async (req, res) => {
  const coin = parseFloat(req.body.coin);
  if (!coin) throw new Error(`Invalid coin`);
  const user = await User.findById(req.user._id);
  if (user.coin < coin) throw new Error(`Invalid coin`);

  user.binance -= coin;
  await user.save();
  await Wallet.findOneAndUpdate({ user: req.user._id }, { $inc: { binance: coin } });
  await History.create({ user: req.user._id, type: "in", amount: coin });
  res.json(`${coin} Coin have been transferred to your X-Wallet`);
});

const getAllRecharges = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword ? { "user.email": { $regex: req.query.keyword, $options: "i" } } : {};
  const pageSize = parseInt(req.query.pageSize) || 50;
  const page = parseInt(req.query.page) || 1;
  const sort = req.query.sort || "created_at";
  const sortDirection = parseInt(req.query.sortDirection) || 1;

  const total = await Recharge.countDocuments({ ...keyword });
  const recharges = await Recharge.find({ ...keyword })
    .populate("user", "-password")
    .sort({ [sort]: sortDirection })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ recharges, total, page, pages: Math.ceil(total / pageSize) });
});

const getRechargeById = asyncHandler(async (req, res) => {
  const recharge = await Recharge.findById(req.params.rechargeId).populate("user", "-password");
  res.status(200).json(recharge);
});

const updateRechargeStatus = asyncHandler(async (req, res) => {
  const { status, userId } = req.body;
  const recharge = await Recharge.findById(req.params.rechargeId);
  if (!recharge) throw new Error(`Not found`);

  if (recharge.status !== "Approved" && status === "Approved")
    await User.findByIdAndUpdate(userId, { $inc: { binance: parseFloat(recharge.coin) } });
  recharge.status = status;
  await recharge.save();

  res.status(201).json(`Recharge request has been ${status}`);
});

const deleteRechargeById = asyncHandler(async (req, res) => {
  const recharge = await Recharge.findByIdAndDelete(req.params.rechargeId);
  if (recharge) res.status(200).json(recharge);
  else throw new Error(`Not found recharge record`);
});

const getHistories = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword ? { "user.email": { $regex: req.query.keyword, $options: "i" } } : {};
  const pageSize = parseInt(req.query.pageSize) || 50;
  const page = parseInt(req.query.page) || 1;
  const sort = req.query.sort || "created_at";
  const sortDirection = parseInt(req.query.sortDirection) || 1;

  const total = await History.countDocuments({ ...keyword });
  const histories = await History.find({ ...keyword })
    .populate("user", "-password")
    .sort({ [sort]: sortDirection })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ histories, total, page, pages: Math.ceil(total / pageSize) });
});

export {
  rechargeToAccount,
  getRecharge,
  inAccount,
  getAllRecharges,
  getRechargeById,
  updateRechargeStatus,
  deleteRechargeById,
  getHistories,
};
