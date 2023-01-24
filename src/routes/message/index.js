import express from "express";
import { createMessage, allMessages, deleteMessage } from "../../controller/message";
import { verifyToken } from "../../middlewares/verifyToken";

const router = express.Router();

router.post("/message", createMessage);
router.get("/all-message", verifyToken, allMessages);
router.delete("/message/:id", verifyToken, deleteMessage);

export default router;
