import { useState } from "react";
import HourInputPanel from "../components/HourInputPanel";
import PredictionResult from "../components/PredictionResult";
import { predictHourly } from "../api/predictApi";

export default function HourPrediction() {
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
    <div className="predict-container">
      <div className="predict-left">
        <HourInputPanel onPredict={handlePredict} />
      </div>

      <div className="predict-right">
        {!result && (
          <div className="ready-card">
            <h2>Hour-wise AI Prediction</h2>
            <p>
              Select date & hour, adjust conditions and click
              <b> Predict Rentals</b>
            </p>
          </div>
        )}

        {loading && <p className="loading-text">Predicting…</p>}

        {result && <HourResultCard result={result} />}
      </div>
    </div>
  );
}
