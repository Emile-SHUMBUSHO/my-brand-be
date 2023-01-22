import express from "express";
import { createBlog } from "../../controller/blog";
import asyncHandler from "../../middlewares/asyncHandler";
import { verifyToken } from "../../middlewares/verifyToken";
import upload from "../../middlewares/multer";

const router = express.Router();

router.post("/", verifyToken, upload.single("image"), asyncHandler(createBlog));

export default router;
