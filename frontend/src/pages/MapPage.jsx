import { useState } from "react";
import Navbar from "../components/Navbar";
import SideNavbar from "../components/Sidebar";
import StationMap from "../components/StationMap";
import StationInfo from "../components/StationInfo";
import NetworkSummary from "../components/NetworkSummary";
import RideWiseBackground from "../background/NewBackground";

export default function MapPage() {
  const [selectedStation, setSelectedStation] = useState(null);

  return (
    <div className="min-h-screen text-white">
      <RideWiseBackground >
      <Navbar />

      <div className="flex">
        <SideNavbar />

        <main className="flex-1 pt-28 px-10">
          <h1 className="text-4xl font-bold mb-2">
            Real-Time Station Tracking
          </h1>
          <p className="text-gray-400 mb-6">
            AI Powered Bike Rental Prediction – Live station monitoring
          </p>

          <input
            placeholder="Search for any location worldwide..."
            className="w-full mb-6 px-4 py-3 rounded-xl bg-black/30 border border-white/10"
          />

          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2 h-[500px]">
              
              <StationMap onSelect={setSelectedStation} />
            </div>

            <div>
              
              <StationInfo station={selectedStation} />
              <NetworkSummary />
            </div>
          </div>
        </main>
      </div>
      </RideWiseBackground>
    </div>
  );
}
