import { useState } from "react";
import Navbar from "../components/Navbar";
import InputPanel from "../components/InputPanel";
import ReadyToPredict from "../components/ReadyToPredict";
import {
  AIInsights,
  ForecastChart,
  SeasonalChart,
  WeatherImpact
} from "../components/AIInsights";
import SideNavbar from "../components/Sidebar";
import SummaryCards from "../components/SummaryCards";
import RideWiseBackground from "../background/NewBackground";

export default function HourPredict() {
  const [predicted, setPredicted] = useState(false);

  const handlePredict = () => {
    // simulate Hour-based ML API delay
    setTimeout(() => {
      setPredicted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen text-white">
      <RideWiseBackground>
        <Navbar />

        <div className="flex">
          <SideNavbar />

          <main className="flex-1 pt-28 px-10">
            <h1 className="text-4xl font-bold mb-2">
              Hour-wise AI Prediction
            </h1>

            <p className="text-gray-400 mb-6">
              Predict bike rental demand based on specific hours using AI models
            </p>

            {/* BEFORE PREDICT */}
            {!predicted && (
              <div className="flex gap-8">
                <InputPanel
                  mode="hour"        // optional prop for future logic
                  onPredict={handlePredict}
                />
                <ReadyToPredict />
              </div>
            )}

            {/* AFTER PREDICT */}
            {predicted && (
              <>
                <SummaryCards />

                <div className="grid grid-cols-2 gap-8 mt-8">
                  <InputPanel
                    mode="hour"
                    onPredict={handlePredict}
                  />
                  <ForecastChart />
                </div>

                <div className="grid grid-cols-2 gap-8 mt-8">
                  <WeatherImpact />
                  <SeasonalChart />
                </div>

                <AIInsights />
              </>
            )}
          </main>
        </div>
      </RideWiseBackground>
    </div>
  );
}
