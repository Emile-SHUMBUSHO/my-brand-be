import express from "express";
import {
  createBlog,
  allBlogs,
  singleBlog,
  updateBlog,
  deleteBlog,
} from "../../controller/blog";
import { verifyToken } from "../../middlewares/verifyToken";
import upload from "../../middlewares/multer";
const router = express.Router();
import { validateBlog, validateUniqueBlog } from "../../middlewares/validateBlog";

router.post(
  "/createBlog",
  verifyToken,
  upload.single("image"),
  validateBlog,
  validateUniqueBlog,
  createBlog
);
router.get("/blogs", allBlogs);
router.get("/blogs/:id", singleBlog);
router.put("/blogs/:id", verifyToken, upload.single("image"), updateBlog);
router.delete("/blogs/:id", verifyToken, deleteBlog);

export default router;
