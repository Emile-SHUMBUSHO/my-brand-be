import express from 'express'
import BlogController from '../../controller/blog'
import asyncHandler from '../../middlewares/asyncHandler'

const router = express.Router();

router.post('/', asyncHandler(BlogController.createBlog))

export default router