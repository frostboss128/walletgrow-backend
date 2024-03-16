import { Router } from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../controllers/userCtr.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";
import { loginValidation, registerValidation } from "../validation/index.js";

const router = Router();

router.route("/").post(registerValidation, registerUser).get(protect, isAdmin, getUsers);
router.post("/login", loginValidation, loginUser);
router.post("/logout", logoutUser);
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);

router
  .route("/:userId")
  .get(protect, isAdmin, getUserById)
  .put(protect, isAdmin, updateUserById)
  .delete(protect, isAdmin, deleteUserById);

export default router;
