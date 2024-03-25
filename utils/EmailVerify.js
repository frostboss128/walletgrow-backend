import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import isEmpty from "./isEmpty.js";

const generateEmailToken = async userId => {
  const token = jwt.sign({ userId }, process.env.EMAIL_JWT_SECRET, {
    expiresIn: process.env.EMAIL_JWT_EXPIRATION,
  });

  return token;
};

const verifyEmailToken = async token => {
  const decoded = jwt.verify(token, process.env.EMAIL_JWT_SECRET);
  if (isEmpty(decoded)) throw new Error("Email verification failed");
  return decoded.userId;
};

export { generateEmailToken, verifyEmailToken };
