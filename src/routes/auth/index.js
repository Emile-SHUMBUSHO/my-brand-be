import express from "express";
import { loginController, signupController } from "../../controller/auth";
import {
  validateSignUp,
  validateUniqueUser,
} from "../../middlewares/authValidation";

const router = express.Router();

router.post("/signup", validateSignUp, validateUniqueUser, signupController);
router.post("/login", loginController);

export default router;
