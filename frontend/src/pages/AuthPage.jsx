import { useState } from "react";
import RideWiseBackground from "../background/NewBackground";
import Logo from "../logo/Logo";
import { useNavigate } from "react-router-dom";

export const AuthPage = () => {
  const [mode, setMode] = useState("login"); // login | signup
    const navigate = useNavigate();
    const handleSubmit = () => {
        if (mode === "login") {
        // later: validate credentials via API
        navigate("/home"); // ✅ redirect to Home
        } else {
        // signup logic later
        alert("Signup successful");
        setMode("login");
        }
    };
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <RideWiseBackground>
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">

          {/* Glass Card */}
          <div className="
            w-full max-w-md
            rounded-2xl
            bg-white/10
            backdrop-blur-xl
            border border-white/20
            shadow-2xl
            p-8
          ">

            {/* Logo */}
            <div className="flex flex-col items-center mb-6">
                <Logo />

                <p className="text-white/60 text-center text-sm mt-2">
                    Smart predictions for smarter rides – Join the future of bike sharing
                </p>
            </div>

            {/* Tabs */}
            <div className="flex bg-white/10 rounded-xl p-1 mb-6">
              <button
                onClick={ () => setMode("login")}
                className={`w-1/2 py-2 rounded-lg text-sm font-medium transition
                  ${mode === "login"
                    ? "bg-black/40 text-white" 
                    : "text-white/60 hover:text-white"
                  }`}
              >
                Log In
              </button>

              <button
                onClick={() => setMode("signup")}
                className={`w-1/2 py-2 rounded-lg text-sm font-medium transition
                  ${mode === "signup"
                    ? "bg-black/40 text-white"
                    : "text-white/60 hover:text-white"
                  }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-4">
              {mode === "signup" && (
                <Input label="Username" placeholder="Your name" />
              )}

              <Input label="Email" placeholder="you@example.com" />
              <Input label="Password" placeholder="••••••••" type="password" />

              {mode === "signup" && (
                <Input label="Confirm Password" placeholder="••••••••" type="password" />
              )}

              <button className="hover:cursor-pointer
                mt-4 py-3 rounded-xl text-white font-semibold
                bg-gradient-to-r from-cyan-400 to-purple-500
                hover:opacity-90 transition"
                onClick={handleSubmit}>
                {mode === "login" ? "Log In" : "Sign Up"}
              </button>
            </div>

          </div>
        </div>
      </RideWiseBackground>
    </div>
  );
};

const Input = ({ label, ...props }) => (
  <div className="flex flex-col gap-1">
    <label className="text-white text-sm">{label}</label>
    <input
      {...props}
      className="
        bg-black/30
        border border-white/20
        rounded-lg px-4 py-2
        text-white
        placeholder-white/40
        focus:outline-none focus:border-cyan-400
      "
    />
  </div>
);
