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
} from "../controllers/adminCtr.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/user/:Id").get(protect, getInvestmentByUserTypeId);
router.route("/user").get(protect, getInvestmentByUser);
router.route("/record").get(protect, investmentRecord);

router.route("/").post(protect, isAdmin, createNewType).get(protect, getAllInvestmentTypes);

router
  .route("/:typeId")
  .post(protect, startNewInvestment)
  .get(protect, getInvestmentTypeById)
  .put(protect, isAdmin, updateInvestmentTypeById)
  .delete(protect, isAdmin, deleteInvestmentTypeById);

export default router;
