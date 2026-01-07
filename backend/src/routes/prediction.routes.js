import express from "express";
const router = express.Router();

/**
 * DAY-WISE BIKE RENTAL PREDICTION
 */
router.post("/day", (req, res) => {
  console.log("📥 Received day prediction input:", req.body);

  const {
    season,
    weather,
    temp,
    humidity,
    wind,
    weekend
  } = req.body;

  // 🔒 Basic validation
  if (
    season === undefined ||
    weather === undefined ||
    temp === undefined
  ) {
    return res.status(400).json({ error: "Missing required inputs" });
  }

  // -----------------------------
  // 🧠 DAY PREDICTION LOGIC
  // -----------------------------
  let demand = 300; // base demand

  // Season impact
  if (season === "Summer") demand += 120;
  if (season === "Spring") demand += 80;
  if (season === "Fall") demand += 40;
  if (season === "Winter") demand -= 60;

  // Weather impact
  if (weather === "Clear") demand += 100;
  if (weather === "Cloudy") demand += 40;
  if (weather === "Rainy") demand -= 120;

  // Temperature impact
  if (temp >= 20 && temp <= 30) demand += 90;
  else if (temp < 10 || temp > 38) demand -= 70;

  // Humidity impact
  if (humidity > 80) demand -= 50;
  if (humidity < 40) demand += 30;

  // Wind impact
  if (wind > 25) demand -= 40;

  // Weekend impact
  if (weekend) demand += 150;

  // Avoid negative demand
  demand = Math.max(demand, 50);

  // Confidence (fake but dynamic)
  const confidence = `${Math.min(95, 70 + Math.floor(Math.random() * 20))}%`;

  // -----------------------------
  // ✅ FINAL RESPONSE
  // -----------------------------
  const response = {
    type: "day",
    predictedDemand: Math.round(demand),
    confidence,
    insights: {
      season,
      weather,
      weekend
    }
  };

  console.log("📤 Sending prediction:", response);
  res.json(response);
});

export default router;
