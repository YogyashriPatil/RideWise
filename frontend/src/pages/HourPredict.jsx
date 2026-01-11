import { useState } from "react";
import HourInputPanel from "../components/HourInputPanel";
import PredictionResult from "../components/PredictionResult";

export default function HourPrediction1() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async (data) => {
    setLoading(true);
    const res = await predictHourly(data);
    console.log("API RESULT:", res);
    setResult(res);
    setLoading(false);
  };

  return (
    <div className="page">
      <HourInputPanel onPredict={handlePredict} />

      {loading && <p className="loading">Predicting…</p>}

      <PredictionResult result={result} />
    </div>
  );
}
