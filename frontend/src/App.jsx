import { BrowserRouter , Route, Routes } from "react-router-dom";
import Landing1 from "./pages/Landinge1";
import { AuthPage } from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import DashBoard from "./pages/DashBoard";
function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing1 />} />
            <Route path="/Auth" element={<AuthPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
    </BrowserRouter>
}

export default App;
