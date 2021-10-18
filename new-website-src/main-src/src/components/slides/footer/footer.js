import {isMobile} from "react-device-detect";
import FooterWeb from "./web/footer-web";
import FooterMobile from "./mobile/footer-mobile";

const returnBasedOneDevice = () => {
    if(isMobile){
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
