import express from "express";
import { register } from "../controllers/userController.js";

const router = express.Router();
//To register a new user
router.route("/register").post(register);

//login

//logout

//get my profile

//change myprofile

//updateProfile

//updateProfilepicture

//Forget pasword

//reset password

//Addtoplaylist

//remove from playlist

export default router;
