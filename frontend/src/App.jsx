import { BrowserRouter , Route, Routes } from "react-router-dom";
import Landing1 from "./pages/Landinge1";
import { AuthPage } from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import Predict from "./pages/Predict";
import MapPage from "./pages/MapPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing1 />} />
            <Route path="/Auth" element={<AuthPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/predict" element={<Predict />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        
        </Routes>
    </BrowserRouter>
}

export default App;
