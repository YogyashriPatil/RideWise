export default function StationInfo({ station }) {
  const utilization = Math.round(
    ((station.capacity - station.available) / station.capacity) * 100
  );

  if (!station) {
    return (
      <div className="border border-dashed border-white/20 rounded-2xl
        flex items-center justify-center text-gray-400 h-64">
        Select a Station
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-[#0b1220]/90 border border-white/10 p-6 space-y-5">
      
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold">
            {station.name},
            <br />
            {station.city}
          </h2>
          <span className="inline-block mt-2 px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300">
            {station.demand}
          </span>
        </div>
        <span className="text-cyan-400 text-xl">📍</span>
      </div>

      {/* Available Bikes */}
      <div className="rounded-xl bg-cyan-500/10 p-4 flex justify-between">
        <span>🚲 Available Bikes</span>
        <span className="text-cyan-400 text-xl font-bold">
          {station.available}
        </span>
      </div>

      {/* Capacity */}
      <div className="rounded-xl bg-purple-500/10 p-4 flex justify-between">
        <span>👥 Total Capacity</span>
        <span className="text-purple-400 text-xl font-bold">
          {station.capacity}
        </span>
      </div>

      {/* Utilization */}
      <div className="rounded-xl bg-pink-500/10 p-4 flex justify-between">
        <span>📈 Utilization</span>
        <span className="text-pink-400 text-xl font-bold">
          {utilization}%
        </span>
      </div>

      {/* Coordinates */}
      <div className="rounded-xl bg-white/5 p-3 text-sm text-gray-400">
        Coordinates: {station.lat}, {station.lng}
      </div>
    </div>
  );
}
