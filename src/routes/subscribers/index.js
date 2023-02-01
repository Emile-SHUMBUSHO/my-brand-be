import express from "express";
import { saveSubscriberEmail } from "../../controller/subscribers";

const router = express.Router();

router.use("/subscribe", saveSubscriberEmail);

export default router;


