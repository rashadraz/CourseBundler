import express from "express";
import {
    changePassword,
	getMyProfile,
	login,
	logout,
	register,
    updateProfile,
    updateprofilepicture,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
//To register a new user
router.route("/register").post(register);

//login
router.route("/login").post(login);
//logout
router.route("/logout").get(logout);
//get my profile
router.route("/me").get(isAuthenticated, getMyProfile);
//change myprofile
router.route("/changepassword").put(isAuthenticated, changePassword);
//updateProfile
router.route("/updateprofile").put(isAuthenticated, updateProfile);
//updateProfilepicture
router.route("/updateprofilepicture").put(isAuthenticated, updateprofilepicture);
//Forget pasword

//reset password

//Addtoplaylist

//remove from playlist

export default router;
