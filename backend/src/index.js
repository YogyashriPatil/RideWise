import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import stationRoutes from "./routes/station.routes.js";
import reservationRoutes from "./routes/reservation.routes.js";


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("RideWise Backend Running");
});
app.use("/api/stations", stationRoutes);
app.use("/api/reservations", reservationRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
