import NeonWaveBackground from "../background/NeonWaveBackground";
import Navbar from "../components/Navbar";
import Logo from "../logo/Logo";

export default function Home(){
    return <div>
        <NeonWaveBackground />
        <div style={{
            position: "fixed",
            zIndex: 9999,
            color: "white"
        }}>
            {/* <Logo /> */}
        </div>
        <div className="flex gap-3">
            <Navbar text="Day Prediction" />
            {/* <Navbar text="Hour Prediction" /> */}

        </div>
    </div>
}