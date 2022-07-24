import { ShowActivitiesMobile } from "../../components/showActivitiesMobile";
import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navBar";



export function ChooseActivity(){
    return(
          <>
            <NavBar/>
            <ShowActivitiesMobile/>
            <Footer/>
        </>
    )
}