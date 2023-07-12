import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../models/User.js";
import { sendToken } from "../utils/sendToken.js";

export const register = catchAsyncError(async (req, res, next) => {
	const { name, email, password } = req.body;
	//const file = req.file
	if (!name || !email || !password)
		return next(new ErrorHandler("Please Enter all Fields", 400));

	let user = await User.findOne({ email });
	if (user) return next(new ErrorHandler("User already exists", 409));

	//upload file on cloudinary

	user = await User.create({
		name,
		email,
		password,
		avatar: {
			public_id: "tempid",
			url: "tempurl",
		},
	});
	sendToken(res, user, "Registered Successfully", 200);
});

export const login = catchAsyncError(async (req, res, next) => {
	try {
		const { email, password } = req.body;
		if (!email || !password)
			return next(new ErrorHandler("Please Enter all Fields", 400));

		const user = await User.findOne({ email }).select("+password");
		if (!user) return next(new ErrorHandler("User not found", 401));

		const isMatch = await user.comparePassword(password);
		if (!isMatch) return next(new ErrorHandler("Incorrect Password", 401));

		sendToken(res, user, `Welcome back. ${user.name}`, 200);
	} catch (error) {
		console.log(error);
	}
});

export const logout = catchAsyncError(async (req, res, next) => {
	res
		.status(200)
		.cookie("token", null, {
			expires: new Date(Date.now()),
			httpOnly: true,
			secure: true,
			sameSite: "none",
		})
		.json({
			success: true,
			message: "Logged Out Successfully",
		});
});
