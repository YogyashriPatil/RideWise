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

export default function DayPredict() {
  const [predicted, setPredicted] = useState(false);

  const handlePredict = () => {
    // simulate Day-based ML API delay
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
              Day-wise AI Prediction
            </h1>

            <p className="text-gray-400 mb-6">
              Predict bike rental demand based on day patterns using machine learning
            </p>

            {/* BEFORE PREDICT */}
            {!predicted && (
              <div className="flex gap-8">
                <InputPanel
                  mode="day"           // 👈 day-specific hint
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
                    mode="day"
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
