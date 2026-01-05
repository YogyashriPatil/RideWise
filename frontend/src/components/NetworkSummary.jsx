export default function NetworkSummary() {
  return (
    <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-400/30">
      <h3 className="text-lg font-semibold mb-3">Network Summary</h3>
      <p>Total Stations: <span className="float-right text-white">70</span></p>
      <p>Available Bikes: <span className="float-right text-cyan-400">816</span></p>
      <p>High Demand: <span className="float-right text-pink-400">45</span></p>
    </div>
  );
}
