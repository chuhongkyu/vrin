import { useCheckwViewPort } from "utils/helper";
import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";


export default function Header() {
    const mobile = useCheckwViewPort(600 + 1);
    
    return(
        <>
            {mobile ? 
                <MobileNavBar/>:
                <NavBar/>
            }
        </>
    )
}