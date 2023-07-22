import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
config({
	path: "./config/config.env",
});
const app = express();

//Using middlewares
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(cookieParser());
app.use(
	cors({
		origin: process.env.FRONTEND_URL,
		credentials: true,
		methods: ["GET", "POST", "PUT", "DELETE"],
	})
);

//Importing & Using Routes
import course from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js";
import payment from "./routes/paymentRoutes.js";
import otherRoutes from "./routes/otherRoutes.js";
import { ErrorMiddleware } from "./middlewares/Error.js";

app.use("/api/v1", course);
app.use("/api/v1", user);
app.use("/api/v1", payment);
app.use("/api/v1", otherRoutes);
app.get("/", (req, res) =>
	res.send(
		`<h1>Server is Working. click <a href=${process.env.FRONTEND_URL}>Here</a></h1>`
	)
);

export default app;

app.use(ErrorMiddleware);
