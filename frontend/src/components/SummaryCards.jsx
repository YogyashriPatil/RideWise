export default function SummaryCards() {
  const data = [
    { title: "Next 24h Forecast", value: "8961 rentals" },
    { title: "Peak Hour", value: "05:00 PM" },
    { title: "Peak Demand", value: "660 bikes" },
    { title: "Confidence", value: "95%" }
  ];

  return (
    <div className="grid grid-cols-4 gap-6 mt-6">
      {data.map((item) => (
        <div
          key={item.title}
          className="p-6 rounded-2xl bg-black/30 border border-white/10"
        >
          <p className="text-gray-400">{item.title}</p>
          <h2 className="text-3xl font-bold text-cyan-400 mt-2">
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}
