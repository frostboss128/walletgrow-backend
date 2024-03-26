import { Router } from "express";
import {
  addNewAddress,
  getAddresses,
  updateAddress,
  deleteAddress,
  getActiveAddress
} from "../controllers/addressCtr.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/active").get(protect, getActiveAddress);

router.route("/:addressId").put(protect, isAdmin, updateAddress).delete(protect, isAdmin, deleteAddress);

router.route("/").post(protect, isAdmin, addNewAddress).get(protect, isAdmin, getAddresses);

export default router;
