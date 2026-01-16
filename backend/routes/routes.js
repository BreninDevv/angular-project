import { Router } from "express";
import { nutritionController } from "../controller/controller.js";

const router = Router();

router.get("/nutrition", nutritionController);

export default router;
