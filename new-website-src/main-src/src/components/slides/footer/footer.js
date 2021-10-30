import {isMobile, isTablet} from "react-device-detect";
import FooterWeb from "./web/footer-web";
import FooterMobile from "./mobile/footer-mobile";
import scrollToTop from "../scroll-to-top";

const returnBasedOneDevice = () => {
    if(isTablet){
        return(
            <div>
                <a role="button" style={{color:'transparent'}} href={'#!'}  onClick={scrollToTop}>
                    <div id={'to-top'}>
                        &uarr;
                    </div>
                </a>
                <FooterWeb/>
            </div>
        )
    } else if(isMobile){
        return(
            <div style={{
                position: 'absolute',
            }}>
                <a role="button" style={{color:'transparent'}} href={'#!'}  onClick={scrollToTop}>
                    <div id={'to-top-mobile'}>
                        &uarr;
                    </div>
                </a>
                <div style={{
                    height: '5vh'
                }}/>
                <FooterMobile/>
            </div>
        )
    } else {
        return(
            <div>
                <a role="button" style={{color:'transparent'}} href={'#!'} onClick={scrollToTop}>
                    <div id={'to-top'}>
                        &uarr;
                    </div>
                </a>
                <FooterWeb/>
            </div>
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
