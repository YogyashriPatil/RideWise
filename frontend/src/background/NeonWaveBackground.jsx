import { useEffect, useRef } from "react";

export default function NeonWaveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    let t = 0;

    const colors = ["#FF3CAC", "#784BA0", "#2B86C5"];

    const waves = Array.from({ length: 16 }).map((_, i) => ({
      color: colors[i % colors.length],
      y: (h / 16) * i + Math.random() * 20,
      amp: 20 + Math.random() * 40,
      freq: 0.004 + Math.random() * 0.004,
      speed: 0.002 + Math.random() * 0.003,
      phase: Math.random() * Math.PI * 2,
      thickness: 0.7 + Math.random() * 1.2,
    }));

    function drawWave(wave) {
      ctx.beginPath();
      ctx.moveTo(0, wave.y);

      for (let x = 0; x <= w; x += 8) {
        const y =
          wave.y +
          Math.sin(x * wave.freq + t * wave.speed + wave.phase) *
            wave.amp;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = wave.color;
      ctx.lineWidth = wave.thickness;
      ctx.shadowBlur = 18;
      ctx.shadowColor = wave.color;
      ctx.stroke();
    }

    function animate() {
      ctx.fillStyle = "#04050A";
      ctx.fillRect(0, 0, w, h);

      waves.forEach(drawWave);

      t += 0.15; // ultra-smooth motion
      requestAnimationFrame(animate);
    }

    animate();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
      }}
    />
  );
}
