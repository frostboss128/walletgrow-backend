import { Router } from "express";
import userRoute from "./userRoute.js";
import accountRoute from "./accountRoute.js";
import walletRoute from "./walletRoute.js";
import investmentRoute from "./investmentRoute.js";
import addressRoute from "./addressRoute.js";

const router = Router();

router.use("/user", userRoute);
router.use("/account", accountRoute);
router.use("/wallet", walletRoute);
router.use("/invest", investmentRoute);
router.use("/address", addressRoute);

export default router;
