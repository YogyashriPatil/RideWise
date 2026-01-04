// import NeonWaveBackground from "./background/NeonWaveBackground";
// import Button from "./components/Button";
// import Logo from "./logo/Logo";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { SignUp } from "./pages/SignUp";
import Landing1 from "./pages/Landinge1";
import { Home } from "lucide-react";
function App() {
  return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing1 />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            
        </Routes>
    </BrowserRouter>
}

export default App;
