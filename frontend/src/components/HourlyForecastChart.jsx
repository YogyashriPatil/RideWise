import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export default function HourlyForecastChart({ data }) {
  return (
    <div className="
      p-6 rounded-2xl
      bg-gradient-to-b from-[#0b1220] to-[#060b16]
      border border-white/10
      shadow-xl
    ">
      <h3 className="text-2xl font-semibold text-white mb-6">
        24-Hour Forecast
      </h3>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          
          {/* Dotted grid */}
          <CartesianGrid
            stroke="#1f2937"
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="time"
            stroke="#9ca3af"
            tick={{ fontSize: 12 }}
          />

          <YAxis
            stroke="#9ca3af"
            tick={{ fontSize: 12 }}
          />

          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#020617",
              borderRadius: "8px",
              border: "1px solid #334155",
            }}
            labelStyle={{ color: "#e5e7eb" }}
          />

            {/* Predicted Line */}
          <Line
            type="monotone"
            dataKey="predicted"
            stroke="#22d3ee"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          {/* Actual Line */}
          <Line
            type="monotone"
            dataKey="actual"
            stroke="#c084fc"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
