import NeonWaveBackground from "../background/NeonWaveBackground";
import RideWiseBackground from "../background/NewBackground";
import Navbar from "../components/Navbar";
import Logo from "../logo/Logo";

export default function Home(){
    return <div>
        <RideWiseBackground />
        <div style={{
            position: "fixed",
            zIndex: 9999,
            color: "white"
        }}>
            <Logo />
        </div>
        <div className="fixed md:pt-20 top-6 md:left-200 z-20 flex gap-4 text-white">
            <Navbar text="Day Prediction" />
            <Navbar text="Hour Prediction" />
            <Navbar text="History" />
            <Navbar text="Profile" />
            <Navbar text="Review" />
        </div>
    </div>
}