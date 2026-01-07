import { runPrediction } from "../services/python.service.js";

export const dayPrediction = async (req, res) => {
  try {
    const { features } = req.body;
    const result = await runPrediction("day", features);
    res.json(result);
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
