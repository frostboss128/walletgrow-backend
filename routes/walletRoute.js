import { Router } from "express";
import {
  getWalletByUserId,
  outWallet,
  withdrawWallet,
  getWithdraws,
  getAllWithdraws,
  getWithdrawById,
  updateWithdrawStatus,
  deleteWithdrawById,
} from "../controllers/walletCtr.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/").get(protect, getWalletByUserId);

router.route("/out").post(protect, outWallet);
router.route("/withdraw").get(protect, getWithdraws).post(protect, withdrawWallet);

router.route("/withdraws").get(protect, getAllWithdraws);
router
  .route("/:withdrawId")
  .get(protect, isAdmin, getWithdrawById)
  .put(protect, isAdmin, updateWithdrawStatus)
  .delete(protect, isAdmin, deleteWithdrawById);

export default router;
