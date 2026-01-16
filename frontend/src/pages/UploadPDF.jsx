import { useState } from "react";
import Navbar from "../components/Navbar";
import RideWiseBackground from "../background/NewBackground";
import { useNavigate } from "react-router-dom";
import SideNavbar from "../components/Sidebar";

export default function UploadPDF() 
{
  const [file, setFile] = useState(null);
  const [insights, setInsights] = useState(null);
  const navigate = useNavigate();

  const uploadPDF = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("pdf", file);

    const res = await fetch("http://localhost:5000/api/analyze-pdf", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setInsights(data);
  };

  return (
    <RideWiseBackground>
      <Navbar />
      <SideNavbar />

      <main className="ml-[260px] pt-28 px-10 text-white min-h-screen">
        <h1 className="text-3xl font-bold mb-2">Upload PDF</h1>
        <p className="text-white/60 mb-8">
          Upload a bike rental or city mobility report
        </p>

        {/* UPLOAD */}
        <div className="mb-8">
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="mb-4"
          />
          <button
            onClick={uploadPDF}
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black"
          >
            Analyze PDF
          </button>
        </div>

        {/* INSIGHTS */}
        {insights && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Insight title="Rental Demand" value={insights.rentals} />
            <Insight title="Weather" value={insights.weather} />
            <Insight title="Temperature" value={insights.temperature} />
            <Insight title="Availability" value={insights.availability} />
          </div>
        )}

        {/* REDIRECT */}
        {insights && (
          <div className="mt-10 flex gap-4">
            <button
              onClick={() => navigate("/predict/hour")}
              className="px-6 py-3 rounded-xl bg-white/10 border border-white/10"
            >
              Hour Prediction →
            </button>

            <button
              onClick={() => navigate("/predict/day")}
              className="px-6 py-3 rounded-xl bg-white/10 border border-white/10"
            >
              Day Prediction →
            </button>
          </div>
        )}
      </main>
    </RideWiseBackground>
  );
}

const Insight = ({ title, value }) => (
  <div className="
    p-6 rounded-2xl
    bg-white/5 backdrop-blur-xl
    border border-white/10
  ">
    <p className="text-sm text-white/60">{title}</p>
    <p className="text-xl font-semibold mt-2">{value}</p>
  </div>
);
