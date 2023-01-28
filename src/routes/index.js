import express from "express";
import blog from "./blog";
import message from "./message";
import auth from "./auth";

const router = express.Router();

router.use('/blogs', blog);
router.use('/', message);
router.use('/auth', auth);

export default router;
