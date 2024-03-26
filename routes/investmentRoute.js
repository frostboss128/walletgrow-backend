import { Router } from "express";
import {
  createNewType,
  getInvestmentTypeById,
  updateInvestmentTypeById,
  deleteInvestmentTypeById,
  getAllInvestmentTypes,
  startNewInvestment,
  getInvestmentByUser,
  getInvestmentByUserTypeId,
  investmentRecord,
  getInvestmentHistoryByType,
  reInvestment
} from "../controllers/investmentCtr.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/user/:Id").get(protect, getInvestmentByUserTypeId);
router.route("/invhis/:investTypeId").get(protect, getInvestmentHistoryByType);
router.route("/user").get(protect, getInvestmentByUser);
router.route("/record").get(protect, investmentRecord);
router.route("/reinvest").put(protect, reInvestment);

router.route("/").post(protect, isAdmin, createNewType).get(protect, getAllInvestmentTypes);

router
  .route("/:typeId")
  .post(protect, startNewInvestment)
  .get(protect, getInvestmentTypeById)
  .put(protect, isAdmin, updateInvestmentTypeById)
  .delete(protect, isAdmin, deleteInvestmentTypeById);

export default router;
