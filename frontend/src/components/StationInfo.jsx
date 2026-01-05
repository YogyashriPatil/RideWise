export default function StationInfo({ station }) {
  if (!station) {
    return (
      <div className="border border-dashed border-white/20 rounded-2xl
        flex items-center justify-center text-gray-400 h-64">
        Select a Station
      </div>
    );
  }

  return (
    <div className="p-6 rounded-2xl bg-black/30 border border-white/10">
      <h3 className="text-xl font-semibold">{station.name}</h3>
      <p className="mt-2 text-gray-400">Demand Level: 
        <span className="ml-2 capitalize text-cyan-400">{station.demand}</span>
      </p>
      <p className="mt-1 text-gray-400">
        Available Bikes: <span className="text-green-400">{station.bikes}</span>
      </p>
    </div>
  );
}
