import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.userId).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const isAdmin = asyncHandler(async (req, res, next) => {
  if (req.user && (req.user.roles === "admin" || req.user.roles === "superAdmin")) return next();
  res.status(401);
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  throw new Error("Not authorized");
});

const isSuperAdmin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.roles !== "superAdmin") {
    res.status(401);
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    throw new Error("Not authorized");
  }
  next();
});

export { protect, isAdmin, isSuperAdmin };
