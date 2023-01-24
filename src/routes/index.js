import express from "express";
import portfolio from "./portfolio/blog";
import auth from "./auth/portfolioAuth";

const router = express.Router();

router.use('/', portfolio);
router.use('/auth', auth);

export default router;
