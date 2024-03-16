import { Router } from "express";
import {
  rechargeToAccount,
  getRecharge,
  inAccount,
  getAllRecharges,
  getRechargeById,
  updateRechargeStatus,
  deleteRechargeById,
  getHistories,
} from "../controllers/accountCtr.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/").get(protect, getRecharge).post(protect, rechargeToAccount);

router.route("/in").post(protect, inAccount);
router.route("/recharges").get(protect, isAdmin, getAllRecharges);
router.route("/history").get(protect, isAdmin, getHistories);

router
  .route("/:rechargeId")
  .get(protect, isAdmin, getRechargeById)
  .put(protect, isAdmin, updateRechargeStatus)
  .delete(protect, isAdmin, deleteRechargeById);

export default router;
