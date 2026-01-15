import { useState } from "react";
import Navbar from "../components/Navbar";
import ReservationCard from "../components/ReservationCard";
import RideWiseBackground from "../background/NewBackground";
import SideNavbar from "../components/Sidebar";
import { stations as stationData } from "../data/stations";
import { useEffect } from "react";

export default function Reservations() {
  /* -------------------- STATION DATA -------------------- */
  const [stations, setStations] = useState(() => {
    const saved = localStorage.getItem("stations");
    return saved ? JSON.parse(saved) : stationData;
  });
  useEffect(() => {
    localStorage.setItem("stations", JSON.stringify(stations));
  }, [stations]);

  const [form, setForm] = useState({
    stationId: "",
    date: "",
    time: "",
    duration: "1",
  });
  const [reservations, setReservations] = useState([]);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const selectedStation = stations.find(
    (s) => s.id === Number(form.stationId)
  );

  const handleReserve = () => {
  if (!form.stationId || !form.date || !form.time) {
    alert("Please fill all fields");
    return;
  }

  if (selectedStation.available === 0) {
    alert("No bikes available at this station 🚫");
    return;
  }

  const newReservation = {
    id: Date.now(),
    stationId: selectedStation.id,
    station: `${selectedStation.name}, ${selectedStation.city}`,
    date: form.date.split("-").reverse().join("/"),
    time: form.time,
    duration: `${form.duration}h`,
    bikeId: `BK-${Math.floor(100 + Math.random() * 900)}`,
    status: "Active",
  };

  setReservations((prev) => [newReservation, ...prev]);

  // 🔻 Decrease available bikes
  setStations((prev) =>
    prev.map((s) =>
      s.id === selectedStation.id
        ? { ...s, available: s.available - 1 }
        : s
    )
  );

  setForm({
    stationId: "",
    date: "",
    time: "",
    duration: "1",
  });
};


  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <RideWiseBackground>
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* INTERNAL CSS */}
        <style>{`
          .input {
            width: 100%;
            padding: 12px 14px;
            border-radius: 12px;
            background: rgba(0, 0, 0, 0.45);
            border: 1px solid rgba(255, 255, 255, 0.12);
            color: white;
          }
        `}</style>

        <div className="relative z-10 flex pt-28 px-8 gap-8">
          <SideNavbar />

          {/* ================= NEW RESERVATION ================= */}
          <div className="w-[420px] bg-black/30 backdrop-blur border border-white/10 rounded-2xl p-6 h-fit">
            <h2 className="text-2xl font-semibold mb-6">🚲 New Reservation</h2>

            <label className="text-sm mb-2 block">Station</label>
            <select
              className="input"
              name="stationId"
              value={form.stationId}
              onChange={handleChange}
            >
              <option value="">Select station</option>
              {stations.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} {s.city}({s.available} bikes)
                </option>
              ))}
            </select>

            {selectedStation && (
              <p className="text-xs mt-2 text-cyan-400">
                Available bikes: {selectedStation.available} / {selectedStation.capacity}
                <br />
                Demand: {selectedStation.demand}
              </p>
            )}

            <label className="text-sm mt-4 mb-2 block">Date</label>
            <input
              type="date"
              className="input"
              name="date"
              value={form.date}
              onChange={handleChange}
            />

            <label className="text-sm mt-4 mb-2 block">Time</label>
            <input
              type="time"
              className="input"
              name="time"
              value={form.time}
              onChange={handleChange}
            />

            <label className="text-sm mt-4 mb-2 block">
              Duration (hours)
            </label>
            <select
              className="input"
              name="duration"
              value={form.duration}
              onChange={handleChange}
            >
              <option value="1">1 hour</option>
              <option value="2">2 hours</option>
              <option value="3">3 hours</option>
            </select>

            <button
              onClick={handleReserve}
              className="w-full mt-6 py-3 rounded-xl font-semibold
              bg-gradient-to-r from-cyan-400 to-purple-500
              text-black"
            >
              Reserve Bike
            </button>
          </div>

          {/* ================= MY RESERVATIONS ================= */}
          <div className="flex-1 bg-black/30 backdrop-blur border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-6">
              📅 My Reservations
            </h2>

            {reservations.length === 0 ? (
              <p className="text-white/50">No reservations yet</p>
            ) : (
              <div className="space-y-4">
                {reservations.map((r) => (
                  <ReservationCard key={r.id} data={r} />
                ))}
              </div>
            )}
          </div>
        </div>
      </RideWiseBackground>
    </div>
  );
}
