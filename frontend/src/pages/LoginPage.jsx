import RideWiseBackground from "../background/NewBackground"
import { InputBox } from "../components/InputBox"

export const LoginPage = () => {
    return <div className="relative min-h-screen w-full overflow-hidden">
        <RideWiseBackground>
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
                <InputBox text={"text"} placeholder="Enter Username" />
            </div>
            
        </RideWiseBackground>
    </div>
}