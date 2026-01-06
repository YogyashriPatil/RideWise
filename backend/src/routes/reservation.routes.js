import express from "express";
import {
  createReservation,
  getMyReservations,
  cancelReservation,
} from "../controllers/reservation.controller.js";

const router = express.Router();

router.post("/", createReservation);
router.get("/my", getMyReservations);
router.delete("/:id", cancelReservation);

export default router;
