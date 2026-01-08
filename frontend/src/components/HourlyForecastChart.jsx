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

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          
          {/* Dotted grid */}
          <CartesianGrid
            stroke="rgba(255,255,255,0.08)"
            strokeDasharray="3 6"
          />

          <XAxis
            dataKey="hour"
            stroke="rgba(255,255,255,0.5)"
            tick={{ fontSize: 12 }}
          />

          <YAxis
            stroke="rgba(255,255,255,0.5)"
            tick={{ fontSize: 12 }}
          />

          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "10px",
              color: "#fff"
            }}
          />

          {/* Legend */}
          <Legend
            verticalAlign="bottom"
            iconType="circle"
            formatter={(value) => (
              <span className="text-sm text-white">{value}</span>
            )}
          />

          {/* Predicted line */}
          <Line
            type="monotone"
            dataKey="predicted"
            name="predicted"
            stroke="#22d3ee"
            strokeWidth={3}
            dot={{ r: 4, strokeWidth: 2 }}
            activeDot={{ r: 6 }}
          />

          {/* Actual line */}
          <Line
            type="monotone"
            dataKey="actual"
            name="actual"
            stroke="#a855f7"
            strokeWidth={3}
            strokeDasharray="4 4"
            dot={{ r: 4, strokeWidth: 2 }}
            activeDot={{ r: 6 }}
          />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
