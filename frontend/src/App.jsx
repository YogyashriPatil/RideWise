import { BrowserRouter , Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import { AuthPage } from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import Predict from "./pages/Predict";
import MapPage from "./pages/MapPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Reservations from "./pages/Reservations";
import Profile from "./pages/Profile";
import HourPredict from "./pages/HourPredict";
import DayPredict from "./pages/DayPredict";
function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Auth" element={<AuthPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/predict" element={<Predict />} />
            <Route path="/predict/hour" element={<HourPredict />} />
            <Route path="/predict/day" element={<DayPredict />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reserve" element={<Reservations />} />
            <Route path="/profile" element={<Profile />} />
        
        </Routes>
    </BrowserRouter>
}

export default App;
