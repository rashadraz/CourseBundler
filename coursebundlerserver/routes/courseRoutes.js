import express from "express";
import {
	addLecture,
	createCourse,
	getAllCourses,
	getCourseLectures,
} from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();
//Get all Courses without lectures
router.route("/courses").get(getAllCourses);

//create new course only admin
router.route("/createcourses").post(singleUpload, createCourse);

//Add Lecture ,Delete Course , Get Course Details

router
	.route("/course/:id")
	.get(getCourseLectures)
	.post(singleUpload, addLecture);

// Delete Lecture

export default router;
