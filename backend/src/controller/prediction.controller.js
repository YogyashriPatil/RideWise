import axios from "axios";

export const predictDemand = async (req, res) => {
  const response = await axios.post(
    "http://localhost:8000/predict",
    req.body
  );
  res.json(response.data);
};
