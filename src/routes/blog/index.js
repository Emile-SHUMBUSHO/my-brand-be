import express from "express";
import {
  createBlog,
  allBlogs,
  singleBlog,
  updateBlog,
  deleteBlog,
} from "../../controller/blog";
import { verifyToken } from "../../middlewares/verifyToken";
const router = express.Router();
import {
  validateBlog,
  validateUniqueBlog,
} from "../../middlewares/validateBlog";

router.post(
  "/createBlog",
  verifyToken,
  validateBlog,
  validateUniqueBlog,
  createBlog,
);
router.get("/", allBlogs);
router.get("/:id", singleBlog);
router.put(
  "/update/:id",
  verifyToken,
  validateBlog,
  validateUniqueBlog,
  updateBlog
);
router.delete("/delete/:id", verifyToken, deleteBlog);

export default router;
