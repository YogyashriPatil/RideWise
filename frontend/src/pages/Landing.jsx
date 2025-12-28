
import NeonWaveBackground from "../background/NeonWaveBackground";
import Logo from "../logo/Logo";
export default function Landing() {
  return <div>
        <NeonWaveBackground />
      <div style={{
        position: "fixed",
        zIndex: 9999,
        color: "white"
      }}>
            <Logo />
      </div>
        <div className="relative p-40 md:ml-40 text-white bg-center">
            <p className="text-xl leading-relaxed max-w-3xl">
                RideWise predicts bike rental demand using smart data insights. <br />
                It helps cities and businesses plan bikes better, reduce shortages,
                and improve rider experience.
            </p>
        </div>

        <div className="bg-center">
            <button >Explore This</button>
        </div>
      
      
    </div>
}

