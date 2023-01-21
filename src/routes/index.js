import express from "express";
import api from "./api/blog";
import auth from "./auth/portfolioAuth";

const router = express.Router();

router.use('/api', api);
router.use('/auth', auth);

export default router;
