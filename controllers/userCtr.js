import asyncHandler from "../middleware/asyncHandler.js";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";
import Wallet from "../models/walletModel.js";
import { generateEmailToken, verifyEmailToken } from "../utils/EmailVerify.js";

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ $or: [{ email }, { username: email }] });
  if (user && (await user.matchPassword(password))) {
    user.password = undefined;
    generateToken(res, user._id);
    res.json(user);
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { email, username, password, invited } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({ email, username, password });
  await Wallet.create({ user: user._id });
  if (invited) {
    const inviteUser = await User.findOne({ email: invited });
    if (inviteUser) user.invited = inviteUser._id;
    user.save();
  }

  if (user) {
    generateToken(res, user._id);
    res.status(201).json(user);
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const confirmEmail = asyncHandler(async (req, res, next) => {
  const token = generateEmailToken(req.user._id);
  // Send email
  res.status(200).json("Please check your inbox");
});

const verifyUser = asyncHandler(async (req, res, next) => {
  const { token } = req.query;

  if (!token) throw new Error("Not authorized, no token");
  const userId = verifyEmailToken(token);
  const user = await User.findByIdAndUpdate(userId, { $set: { verified: true } });
  if (!user) throw new Error("Email verification failed.");
  res.status(201).json("success");
});

const logoutUser = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
};

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password").populate("invited", "_id email username");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id, { ...req.body }, { runValidators: true }).select("-password");
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const getUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword ? { email: { $regex: req.query.keyword, $options: "i" } } : {};
  const pageSize = parseInt(req.query.pageSize) || 50;
  const page = parseInt(req.query.page) || 1;
  const sort = req.query.sort || "created_at";
  const sortDirection = parseInt(req.query.sortDirection) || -1;

  const total = await User.countDocuments({ roles: "user", ...keyword });
  const users = await User.find({ roles: "user", ...keyword })
    .select("-password")
    .sort({ [sort]: sortDirection })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ users, total, page, pages: Math.ceil(total / pageSize) });
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.userId).select("-password");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const updateUserById = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.userId);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  req.body._id = user._id;
  req.body.password = user.password;
  req.body.created_at = user.created_at;
  req.body.updated_at = new Date();
  const updatedUser = await User.findByIdAndUpdate(req.params.userId, { ...req.body }, { runValidators: true });
  res.status(201).json(updatedUser);
});

const deleteUserById = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  confirmEmail,
  verifyUser,
};
