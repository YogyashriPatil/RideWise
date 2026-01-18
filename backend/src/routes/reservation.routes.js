import express from "express";
import {
  createReservation,
  getMyReservations,
  cancelReservation,
} from "../controllers/reservation.controller.js";
import Reservation from "../models/Reservation.js";

const router = express.Router();

router.post("/create", createReservation);
router.get("/my", getMyReservations);
router.delete("/:id", cancelReservation);
router.get("/my/:userId",  async (req, res) => {
  try {
    const reservations = await Reservation.find({
      userId: req.params.userId
    }).sort({ createdAt: -1 });

    res.json(reservations);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch reservations" });
  }
});
export default router;
