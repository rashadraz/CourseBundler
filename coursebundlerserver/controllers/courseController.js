import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Course } from "../models/Course.js";
import getDataUri from "../utils/dataUri.js";
import ErrorHandler from "../utils/errorHandler.js";
import cloudinary from "cloudinary";

export const getAllCourses = catchAsyncError(async (req, res, next) => {
	const courses = await Course.find().select("-lectures");
	res.status(200).json({
		success: true,
		courses,
	});
});

export const createCourse = catchAsyncError(async (req, res, next) => {
	const { title, description, category, createdBy } = req.body;
	if (!title || !description || !category || !createdBy)
		return next(new ErrorHandler("Please add All Fields", 400));

	const file = req.file;

	const fileUri = getDataUri(file);

	const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);

	await Course.create({
		title,
		description,
		category,
		createdBy,
		poster: {
			public_id: mycloud.public_id,
			url: mycloud.secure_url,
		},
	});

	res.status(201).json({
		success: true,
		message: "Course Created Successfully. You can add lectures now",
	});
});

export const getCourseLectures = catchAsyncError(async (req, res, next) => {
	const course = await Course.findById(req.params.id);

	course.views += 1;

	await course.save();

	if (!course) return next(new ErrorHandler("Course not found", 404));
	res.status(200).json({
		success: true,
		lectures: course.lectures,
	});
});

export const addLecture = catchAsyncError(async (req, res, next) => {
	const { id } = req.params;
	const { title, description } = req.body;
	const course = await Course.findById(id);
	if (!course) return next(new ErrorHandler("Course not found", 404));

	// const file = req.file

	//upload file here

	course.lectures.push({
		title,
		description,
		video: {
			public_id: "url",
			url: "url",
		},
	});

	course.numOfVideos = course.lectures.length;

	await course.save();

	if (!course) return next(new ErrorHandler("Course not found", 404));
	res.status(200).json({
		success: true,
		message: "Lectures Added in Course Successfully",
	});
});
