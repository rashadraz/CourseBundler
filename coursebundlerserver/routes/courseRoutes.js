import express from "express";
import {
	addLecture,
	createCourse,
	deleteCourse,
	deleteLecture,
	getAllCourses,
	getCourseLectures,
} from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";
import {
	authorizeAdmin,
	authorizeSubscribers,
	isAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();
//Get all Courses without lectures
router.route("/courses").get(getAllCourses);

//create new course only admin
router
	.route("/createcourses")
	.post(isAuthenticated, authorizeAdmin, singleUpload, createCourse);

//Add Lecture ,Delete Course , Get Course Details

router
	.route("/course/:id")
	.get(isAuthenticated, authorizeSubscribers, getCourseLectures)
	.post(isAuthenticated, authorizeAdmin, singleUpload, addLecture)
	.delete(isAuthenticated, authorizeAdmin, deleteCourse);

// Delete Lecture
router.route("/lecture").delete(isAuthenticated, authorizeAdmin, deleteLecture);

export default router;
