import { useState } from "react";

export default function HourInputCard({ onPredict }) {
  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    date: today,
    hour: 9,
    temperature: 20,
    atemp: 18,
    humidity: 60,
    windspeed: 10,
    weathersit: 1,
    holiday: 0,
  });

  const update = (k, v) => setForm({ ...form, [k]: v });

  return (
    <div className="glass-card">
      <h3>Input Features</h3>

      <label>Date</label>
      <input
        type="date"
        value={form.date}
        onChange={(e) => update("date", e.target.value)}
      />

      <label>Hour: {form.hour}:00</label>
      <input
        type="range"
        min="0"
        max="23"
        value={form.hour}
        onChange={(e) => update("hour", +e.target.value)}
      />

      <label>Temperature: {form.temperature}°C</label>
      <input
        type="range"
        min="0"
        max="45"
        value={form.temperature}
        onChange={(e) => update("temperature", +e.target.value)}
      />

      <label>Humidity: {form.humidity}%</label>
      <input
        type="range"
        min="0"
        max="100"
        value={form.humidity}
        onChange={(e) => update("humidity", +e.target.value)}
      />

      <label>Wind Speed: {form.windspeed} km/h</label>
      <input
        type="range"
        min="0"
        max="50"
        value={form.windspeed}
        onChange={(e) => update("windspeed", +e.target.value)}
      />

      <label>Weather</label>
      <select onChange={(e) => update("weathersit", +e.target.value)}>
        <option value={1}>Clear</option>
        <option value={2}>Cloudy</option>
        <option value={3}>Rain</option>
      </select>

      <label className="checkbox">
        <input
          type="checkbox"
          onChange={(e) => update("holiday", e.target.checked ? 1 : 0)}
        />
        Holiday
      </label>

      <button onClick={() => onPredict(form)}>Predict Rentals</button>
    </div>
  );
}
