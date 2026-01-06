import Reservation from "../models/Reservation.js";

/* ================= CREATE RESERVATION ================= */
export const createReservation = async (req, res) => {
  try {
    const reservation = await Reservation.create(req.body);
    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ message: "Reservation failed" });
  }
};

/* ================= GET USER RESERVATIONS ================= */
export const getMyReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch reservations" });
  }
};

/* ================= CANCEL RESERVATION ================= */
export const cancelReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);

    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }

    reservation.status = "Cancelled";
    await reservation.save();

    res.json({ message: "Reservation cancelled" });
  } catch (error) {
    res.status(500).json({ message: "Cancellation failed" });
  }
};
