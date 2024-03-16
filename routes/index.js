import { Router } from "express";
import userRoute from "./userRoute.js";
import accountRoute from "./accountRoute.js";
import walletRoute from "./walletRoute.js";

const router = Router();

router.use("/user", userRoute);
router.use("/account", accountRoute);
router.use("/wallet", walletRoute);

export default router;
