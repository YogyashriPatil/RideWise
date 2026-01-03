import RideWiseBackground from "../background/NewBackground"
import Button from "../components/Button"
import { InputBox } from "../components/InputBox"
import Text from "../components/Text"

export const LoginPage = () => {
    return <div className="relative min-h-screen w-full overflow-hidden">
        <RideWiseBackground>
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
                {/* <Text text="Login"/> */}
                <div className="flex flex-col gap-6">
                    <InputBox text={"text"} placeholder="Enter Username" />
                    <InputBox text={"text"} placeholder="Enter Password" />
                    <Button text={"Login"} />
                </div>

            </div>
            
        </RideWiseBackground>
    </div>
}


