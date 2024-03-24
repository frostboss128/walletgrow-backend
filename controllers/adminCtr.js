import asyncHandler from "../middleware/asyncHandler.js";
import InvestmentType from "../models/InvestmentTypeModel.js";
import Investment from "../models/investmentModel.js";
import Wallet from "../models/walletModel.js";
import History from "../models/HistoryModel.js";
import moment from "moment";

const createNewType = asyncHandler(async (req, res) => {
  const { name, daily, cycle, cycle_description, duration, deration_description } = req.body;
  const newType = await InvestmentType.create({
    name,
    daily,
    cycle,
    cycle_description,
    duration,
    deration_description,
  });
  if (!newType) throw new Error("Invalid InvestmentType");
  res.status(201).json({ message: "New investment type created successfully!" });
});

const getInvestmentTypeById = asyncHandler(async (req, res) => {
  const investment = await InvestmentType.findById(req.params.typeId);
  if (!investment) throw new Error("Not found investment type");
  res.status(201).json(investment);
});

const updateInvestmentTypeById = asyncHandler(async (req, res) => {
  const { name, daily, cycle, cycle_description, duration } = req.body;
  const updated = await InvestmentType.findByIdAndUpdate(req.params.typeId, {
    name,
    daily,
    cycle,
    cycle_description,
    duration,
    deration_description,
  });
  if (!updated) throw new Error("Not found investment type");
  res.status(201).json({ message: "Updated successfully" });
});

const deleteInvestmentTypeById = asyncHandler(async (req, res) => {
  const deleted = await InvestmentType.findByIdAndDelete(req.params.typeId);
  if (!deleted) throw new Error("Not found investment type");
  res.status(201).json({ message: "Deleted successfully" });
});

const getAllInvestmentTypes = asyncHandler(async (req, res) => {
  const types = await InvestmentType.find();
  let temp = [];
  for (let i = 0; i < types.length; i++) {
    let userCnt = await Investment.countDocuments({ type: types[i]._id });
    let newType = JSON.parse(JSON.stringify(types[i]));
    newType.userCnt = userCnt;
    temp.push(newType);
  }
  res.status(200).json(temp);
});

const startNewInvestment = asyncHandler(async (req, res) => {
  const amount = parseFloat(req.body.amount);
  const wallet = await Wallet.findOne({ user: req.user._id });
  if (amount < 0 || amount > wallet.coin) throw new Error(`Invalid amount`);
  const invest = await Investment.countDocuments({ user: req.user._id, type: req.params.typeId });
  if (invest > 0) throw new Error(`You are in this investment progress`);
  wallet.binance = wallet.coin - amount;
  await wallet.save();
  const investmentType = await InvestmentType.findById(req.params.typeId);
  const endDate = moment.utc().add(investmentType.duration, "months");
  const newInvestment = await Investment.create({ user: req.user._id, type: req.params.typeId, end: endDate, amount });
  if (!newInvestment) throw new Error("Unknown error");
  await History.create({ user: req.user._id, type: "invest", amount });
  wallet.investment.push(newInvestment._id);
  await wallet.save();
  res.status(201).json(newInvestment);
});

const getInvestmentByUser = asyncHandler(async (req, res) => {
  const invests = await Investment.findOne({ user: req.user._id, completed: false, end: { $gt: moment.utc() } });
  if (!invests) throw new Error(`Invalid request`);
  res.status(200).json(invests);
});

const getInvestmentByUserTypeId = asyncHandler(async (req, res) => {
  const invest = await Investment.findOne({
    user: req.user._id,
    type: req.params.Id,
    completed: false,
    end: { $gt: moment.utc() },
  });
  res.status(200).json(invest);
});

const investmentRecord = asyncHandler(async (req, res) => {
  const invests = await Investment.find({ user: req.user._id });
  res.status(200).json(invests);
});

export {
  createNewType,
  getInvestmentTypeById,
  updateInvestmentTypeById,
  deleteInvestmentTypeById,
  getAllInvestmentTypes,
  startNewInvestment,
  getInvestmentByUser,
  getInvestmentByUserTypeId,
  investmentRecord,
};
