import { useState } from "react";
import NeonWaveBackground from "../background/NeonWaveBackground";
import TopNavbar from "../components/TopNavbar";
import SideNavbar from "../components/SideNavbar";
import InputPanel from "../components/InputPanel";
import PredictionPanel from "../components/PredictionPanel";

export default function Predict() {
  const [result, setResult] = useState(null);

  const handlePredict = (data) => {
    // TEMP logic (replace with API)
    const prediction = Math.floor(
      data.temp * 3 + data.humidity + (data.weekend ? 50 : 0)
    );
    setResult(prediction);
  };

  return (
    <div className="min-h-screen text-white">
      <NeonWaveBackground />
      <TopNavbar />

      <div className="flex">
        <SideNavbar />

        <main className="flex-1 pt-28 px-10">
          <h1 className="text-4xl font-bold mb-2">AI Predictions</h1>
          <p className="text-gray-400 mb-6">
            Predict bike rental demand with advanced machine learning models
          </p>

          <div className="flex gap-8">
            <InputPanel onPredict={handlePredict} />
            <PredictionPanel result={result} />
          </div>
        </main>
      </div>
    </div>
  );
}
