import express from 'express'
import BlogController from '../../controller/blog'
import asyncHandler from '../../middlewares/asyncHandler'
import { verifyToken } from '../../middlewares/verifyToken';

const router = express.Router();

router.post('/', verifyToken, asyncHandler(BlogController.createBlog))

export default router