import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

export default function TimePulseBackground() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: "#0B1020",
        },
        particles: {
          number: {
            value: 60,
          },
          color: {
            value: "#22D3EE",
          },
          opacity: {
            value: 0.6,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.2,
              sync: false,
            },
          },
          size: {
            value: { min: 1.5, max: 3 },
          },
          move: {
            enable: true,
            speed: 1,
            direction: "right",
            outModes: "out",
          },
        },
      }}
    />
  );
}
