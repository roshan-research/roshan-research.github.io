import {isMobile, isTablet} from "react-device-detect";
import FooterWeb from "./web/footer-web";
import FooterMobile from "./mobile/footer-mobile";

const returnBasedOneDevice = () => {
    if(isTablet){
        return(
            <FooterWeb/>
        )
    } else if(isMobile){
        return(
            <FooterMobile/>
        )
    } else {
        return(
            <FooterWeb/>
        )
    }
};

export default function Footer() {

    return (
        <div>
            {returnBasedOneDevice()}
        </div>
    )

};
