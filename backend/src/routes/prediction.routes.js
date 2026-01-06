import express from "express";
import { predictDemand } from "../controllers/prediction.controller.js";

const router = express.Router();
router.post("/", predictDemand);
export default router;
