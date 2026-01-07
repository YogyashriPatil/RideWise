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

    console.log("📥 Input received:", req.body);

    const python = spawn("python", [
      "day_predict.py",
      JSON.stringify(req.body)
    ]);
    let result = "";
    python.stdout.on("data", (data) => {
      result += data.toString();
    });

    python.stderr.on("data", (err) => {
      console.error("❌ Python error:", err.toString());
    });
    // -----------------------------
  // ✅ FINAL RESPONSE
  // -----------------------------
    python.on("close", () => {
      try {
        const parsed = JSON.parse(result);
        console.log("📤 Prediction:", parsed);
        res.json(parsed);
      } catch (e) {
        res.status(500).json({ error: "Prediction failed" });
      }
    });
    console.log("📤 Sending prediction:", response);
    // res.json(response);
});

export default router;
