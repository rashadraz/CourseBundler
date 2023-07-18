import express from "express";
import {
	addToPlaylist,
	changePassword,
	forgetPassword,
	getMyProfile,
	login,
	logout,
	register,
	removeFromPlaylist,
	resetPassword,
	updateProfile,
	updateprofilepicture,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();
//To register a new user
router.route("/register").post(singleUpload, register);

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
router
	.route("/updateprofilepicture")
	.put(isAuthenticated, singleUpload, updateprofilepicture);
//Forget pasword
router.route("/forgetpassword").post(forgetPassword);
//reset password
router.route("/resetpassword/:token").put(resetPassword);
//Addtoplaylist
router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);
//remove from playlist
router.route("/removefromplaylist").post(isAuthenticated, removeFromPlaylist);
export default router;
