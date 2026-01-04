import RideWiseBackground from "../background/NewBackground";
import Button from "../components/Button";
import { InputBox } from "../components/InputBox";

export const SignUp = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <RideWiseBackground>
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">

          {/* Glass Card */}
          <div className="
            relative
            w-full max-w-md
            rounded-2xl
            bg-white/10
            backdrop-blur-xl
            border border-white/20
            shadow-2xl
            px-8 pt-20 pb-8
          ">

            {/* Center Floating Icon */}
            <div className="
              absolute -top-10 left-1/2 -translate-x-1/2
              w-20 h-20
              rounded-full
              bg-cyan-500/20
              backdrop-blur-xl
              flex items-center justify-center
              border border-cyan-400/30
              shadow-lg
            ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-cyan-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5m0 0l-5-5m5 5H3"
                />
              </svg>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-semibold text-white text-center mb-8">
              Login
            </h1>

            {/* Form */}
            <div className="flex flex-col gap-6">
              <InputBox text="text" placeholder="Enter Username" />
              <InputBox text="password" placeholder="Enter Password" />
              <Button text="Login" />
            </div>
            <Link to="/Signup"><button className="text-blue-500 underline" onClick={navigate("")}>Don't Have an Account ? </button></Link>
          </div>
        </div>
      </RideWiseBackground>
    </div>
  );
};
