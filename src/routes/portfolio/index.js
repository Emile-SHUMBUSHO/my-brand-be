import express from "express";
import blog from "./blog";
import message from "./message";

const router = express.Router();

router.use("/", blog);
router.use("/", message);

export default router;
