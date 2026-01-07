import { runPrediction } from "../services/python.service.js";

export const dayPrediction = async (req, res) => {
  try {
    const { day, temperature, humidity, season, isHoliday } = req.body;
    // TODO: pass to ML model
    const predictedDemand = Math.floor(
      200 + temperature * 3 - humidity + (isHoliday ? -40 : 30)
    );
    res.json({
      success: true,
      predictionType: "day",
      day,
      demand: predictedDemand,
      confidence: "92%"
    });
    
  } catch {
    res.status(500).json({ message: "Day prediction failed" });
  }
};

export const hourPrediction = async (req, res) => {
  try {
    const { features } = req.body;
    const result = await runPrediction("hour", features);
    res.json(result);
  } catch {
    res.status(500).json({ message: "Hour prediction failed" });
  }
};
