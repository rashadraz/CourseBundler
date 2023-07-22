import app from "./app.js";
import { connectdb } from "./config/database.js";
import cloudinary from "cloudinary";
import Razorpay from "razorpay";

import nodeCron from "node-cron";
import { Stats } from "./models/Stats.js";

try {
	connectdb();
} catch (error) {
	console.error(error);
}

cloudinary.v2.config({
	cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
	api_key: process.env.CLOUDINARY_CLIENT_API,
	api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

export const instance = new Razorpay({
	key_id: process.env.RAZORPAY_API_KEY,
	key_secret: process.env.RAZORPAY_API_SECRET,
});

try {
	nodeCron.schedule("0 0 0 1 * *", async () => {
		try {
			await Stats.create();
		} catch (error) {
			console.log(error);
		}
	});

	const temp = async () => {
		await Stats.create({});
	};

	temp();
} catch (error) {
	console.error(error);
}

try {
	app.listen(process.env.PORT, () => {
		console.log("server listening on port" + process.env.PORT);
	});
} catch (error) {
	console.log(error);
}
