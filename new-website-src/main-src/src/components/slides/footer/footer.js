import {isMobile, isSafari, isTablet} from "react-device-detect";
import FooterWeb from "./web/footer-web";
import FooterMobile from "./mobile/footer-mobile";
import {Fullpage} from 'fullpage-react';
const { changeFullpageSlide} = Fullpage;

const goToTop = changeFullpageSlide.bind(null, 0);

const returnBasedOneDevice = () => {
    if(isTablet){
        return(
            <div>
                <a role="button" style={{color:'transparent'}} href={'#!'}  onClick={goToTop}>
                    <div id={'to-top'}>
                        &uarr;
                    </div>
                </a>
                <FooterWeb/>
            </div>
        )
    } else if(isMobile){
        return(
            <div id={'footer-mobile'} style={isSafari ? {} :{
                position: 'absolute',
            }}>
                <a role="button" style={{color:'transparent'}} href={'#!'}  onClick={goToTop}>
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
                <a role="button" style={{color:'transparent'}} href={'#!'} onClick={goToTop}>
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
