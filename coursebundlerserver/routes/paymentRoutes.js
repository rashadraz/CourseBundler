import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
	buySubscription,
	getRazorPayKey,
	paymentVerification,
} from "../controllers/paymentController.js";

const router = express.Router();

//Buy Subscription
router.route("/subscribe").get(isAuthenticated, buySubscription);
//verify payment and save in db
router.route("/paymentverification").post(isAuthenticated, paymentVerification);
//get razorpaykey
router.route("/razorpaykey").get(getRazorPayKey);

export default router;
