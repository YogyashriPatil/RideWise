import { useState } from "react";
import Navbar from "../components/Navbar";
import InputPanel from "../components/InputPanel";
import ReadyToPredict from "../components/ReadyToPredict";
import { AIInsights, ForecastChart, SeasonalChart, WeatherImpact } from "../components/AIInsights";
import SideNavbar from "../components/Sidebar";
import SummaryCards from "../components/SummaryCards";
import RideWiseBackground from "../background/NewBackground";
import HourlyForecastChart from "../components/HourlyForecastChart";
import { generateHourlyForecast } from "../utils/generateHourlyForecast";
export default function DayPredict() {
  const [predicted, setPredicted] = useState(false);
  const [predictionData, setPredictionData] = useState(null);

  // const handlePredict = async () => {
  //   // simulate Day-based ML API delay
  //   const payload = {
  //     day,
  //     temperature,
  //     humidity,
  //     season,
  //     isHoliday
  //   };
  //   const res = await fetch("http://localhost:5000/api/predict/day", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(payload)
  //   });
  //   const data = await res.json();
  //   onPredict(data); // pass to parent
  // };
  const handlePredict = (result) => {
    setPredictionData({ ...result,
      hourlyForecast: generateHourlyForecast(result.predictionData)
     });
    setPredicted(true);
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
            {predicted && predictionData && (
              <>
                <SummaryCards data={predictionData}/>

                <div className="grid grid-cols-2 gap-8 mt-8">
                  <InputPanel
                    mode="day"
                    onPredict={handlePredict}
                  />
                  <HourlyForecastChart data={predictionData.hourlyForecast} />
                  {/* <ForecastChart data={predictionData} /> */}
                </div>

                <div className="grid grid-cols-2 gap-8 mt-8">
                  <WeatherImpact data={predictionData} />
                  <SeasonalChart data={predictionData} />
                </div>

                <AIInsights data={predictionData} />
              </>
            )}
          </main>
        </div>
      </RideWiseBackground>
    </div>
  );
}
