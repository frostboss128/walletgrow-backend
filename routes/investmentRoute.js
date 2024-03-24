import { Router } from "express";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = Router();

export default router;
