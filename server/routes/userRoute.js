import express from "express";
import user from "../controllers/userController.js";
import { uploadImage } from "../utils/imageUpload.js";

const router = express();

router.post("/user", uploadImage, user)

export default router;