import express from "express";
import blog from "./blog";
import comment from "./comment";
import message from "./message";
import subscribers from "./subscribers";
import auth from "./auth";

const router = express.Router();

router.use('/blogs', blog);
router.use('/', comment);
router.use('/', message);
router.use('/', subscribers);
router.use('/auth', auth);

export default router;
