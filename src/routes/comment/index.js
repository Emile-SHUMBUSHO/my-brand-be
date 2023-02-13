import express from "express";
import { postComment, getComment } from "../../controller/comment";

const router = express.Router();

router.post("/blog/:id/comment", postComment);
router.get("/blog/:id/comments", getComment);

export default router;
