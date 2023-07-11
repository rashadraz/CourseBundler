import express from "express";
import { createCourse, getAllCourses } from "../controllers/courseController.js";

const router = express.Router();
//Get all Courses without lectures
router.route('/courses').get(getAllCourses)

//create new course only admin
router.route('/createcourses').post(createCourse)

//Add Lecture ,Delete Course , Get Course Details

// Delete Lecture

export default router;
