import express from "express";
import { login, logout, register } from "../controllers/userController.js";

const router = express.Router();
//To register a new user
router.route("/register").post(register);

//login
router.route("/login").post(login);
//logout
router.route("/logout").get(logout);
//get my profile

//change myprofile

//updateProfile

//updateProfilepicture

//Forget pasword

//reset password

//Addtoplaylist

//remove from playlist

export default router;
