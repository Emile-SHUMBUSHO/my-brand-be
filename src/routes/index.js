import express from "express";
import api from "./api/blog";

const router = express.Router();

router.use(api);

export default router;
