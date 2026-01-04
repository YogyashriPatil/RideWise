import { BrowserRouter , Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { SignUp } from "./pages/SignUp";
import Landing1 from "./pages/Landinge1";
import { AuthPage } from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing1 />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Auth" element={<AuthPage />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
}

export default App;
