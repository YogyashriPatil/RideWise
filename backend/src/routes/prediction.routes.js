import express from "express";
import {
  dayPrediction,
  hourPrediction,
} from "../controllers/prediction.controller.js";

const router = express.Router();

router.post("/day", dayPrediction);
router.post("/hour", hourPrediction);

export default router;
