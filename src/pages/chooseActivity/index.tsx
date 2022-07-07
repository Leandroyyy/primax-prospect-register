import { AllActivity } from "../../components/allActivity";
import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navBar";



export function ChooseActivity(){
    return(
        <>
            <NavBar/>
                <AllActivity/>
            <Footer/>
        </>
    )
}