import express from "express";
import asyncHandler from "../../middlewares/asyncHandler";
import { loginController, signupController } from "../../controller/auth";

const router = express.Router();

router.post('/signup', asyncHandler(signupController));
router.post('/login', asyncHandler(loginController));

export default router;
