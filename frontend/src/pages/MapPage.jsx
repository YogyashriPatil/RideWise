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
    <div className="h-screen w-full overflow-hidden text-white">
      <RideWiseBackground >
      <Navbar />

      <div className="flex h-[calc(100vh-60px)]">
        <div className="w-64 h-full">
          <SideNavbar />
        </div>

         <div className="flex-1 h-full overflow-y-auto px-6 pt-24 space-y-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Real-Time Station Tracking
            </h1>
            <p className="text-gray-400 mt-2">
              AI Powered Bike Rental Prediction – Live station monitoring
            </p>
          </div>

          {/* SEARCH BAR */}
          <div className="max-w-3xl mx-auto">
            <input
              type="text"
              placeholder="Search for any location worldwide..."
              className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
            />
          </div>

          {/* MAP + RIGHT PANEL */}
          <div className="grid grid-cols-12 gap-4">

            {/* MAP */}
            <div className="col-span-12 lg:col-span-7 h-[460px] w-[469px] rounded-2xl overflow-hidden bg-[#0b1220]/80 border border-white/10 shadow-lg">
              <StationMap onSelectStation={setSelectedStation} />
            </div>

            {/* RIGHT SIDE */}
            <div className="col-span-12 lg:col-span-5 space-y-5">
              {selectedStation ? (
                <StationInfo station={selectedStation} />
              ) : (
                <div className="rounded-2xl border border-dashed border-white/20 bg-white/5 p-6 text-center text-gray-400">
                  Select a station on the map
                </div>
              )}

              <NetworkSummary />
            </div>
          </div>
        </div>
        </div>
      </RideWiseBackground>
    </div>
  );
}
