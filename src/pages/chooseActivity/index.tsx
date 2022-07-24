import { SelectCalendar } from "../../components/allActivityMobile";
import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navBar";



export function ChooseActivity(){
    return(
          <>
            <NavBar/>
            <SelectCalendar/>
            <Footer/>
        </>
    )
}