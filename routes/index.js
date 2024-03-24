import { Router } from "express";
import userRoute from "./userRoute.js";
import accountRoute from "./accountRoute.js";
import walletRoute from "./walletRoute.js";
import adminRoute from "./adminRoute.js";
import investmentRoute from "./investmentRoute.js";

const router = Router();

router.use("/user", userRoute);
router.use("/account", accountRoute);
router.use("/wallet", walletRoute);
router.use("/config", adminRoute);
router.use("/investment", investmentRoute);

export default router;
