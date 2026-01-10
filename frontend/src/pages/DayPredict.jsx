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
    <div className="h-screen text-white  w-full overflow-hidden flex bg-gradient-to-br from-[#2b145f] via-[#4b1f8f] to-[#1a0b3d]">
      <RideWiseBackground>
        <Navbar />

        <div className="flex h-[calc(100vh-64px)]">
          <div className="w-64 h-full">
            <SideNavbar />
          </div>
          
            {/* 2️⃣ INPUT PANEL (STABLE) */}
            <div className="w-[380px] h-full pt-28 px-6">
              <InputPanel mode="day" onPredict={handlePredict} />
            </div>

            <div className="flex-1 h-full overflow-y-auto pt-28 px-10 space-y-8">

              <div>
                <h1 className="text-4xl font-bold mb-2">
                  Day-wise AI Prediction
                </h1>

                <p className="text-gray-400 mb-6">
                  Predict bike rental demand based on day patterns using machine learning
                </p>
              </div>
            

            {/* BEFORE PREDICT */}
            {!predicted &&
                <ReadyToPredict />
            }

            {/* AFTER PREDICT */}
            {predicted && predictionData && (
              <>
                <SummaryCards data={predictionData}/>

                <div className="rounded-2xl bg-black/40 backdrop-blur-xl p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    24-Hour Forecast
                  </h2>
                  <HourlyForecastChart data={predictionData.hourlyForecast} />
                </div>
                  {/* Weather + Seasonal */}
                <div className="grid grid-cols-2 gap-8">
                  <WeatherImpact data={predictionData} />
                  <SeasonalChart data={predictionData} />
                </div>

                {/* AI Insights */}
                <AIInsights data={predictionData} />
              </>
            )}
          </div>
        </div>
      </RideWiseBackground>
    </div>
  );
}
