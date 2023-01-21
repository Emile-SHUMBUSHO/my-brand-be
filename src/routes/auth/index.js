import express from "express";
import portfolioAuth from "./portfolioAuth";

const router = express.Router();

router.use("/", portfolioAuth);

export default router;
