import {isMobile, isSafari, isTablet} from "react-device-detect";
import FooterWeb from "./web/FooterWeb.jsx";
import FooterMobile from "./mobile/footer-mobile";
import {Fullpage} from 'fullpage-react';
const { changeFullpageSlide} = Fullpage;

const goToTop = changeFullpageSlide.bind(null, 0);

const returnBasedOneDevice = (beforehandFunction) => {

    const goToTopAll = () => {
        beforehandFunction();
        goToTop();
    }

    if(isMobile || isTablet){
        return(
            <div id={'footer-mobile'} style={isSafari ? {} :{
                position: 'absolute',
            }}>
                <a role="button" style={{color:'transparent'}} href={'#!'}  onClick={goToTopAll}>
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
                <a role="button" style={{color:'transparent'}} href={'#!'} onClick={goToTopAll}>
                    <div id={'to-top'}>
                        &uarr;
                    </div>
                </a>
                <FooterWeb/>
            </div>
        )
    }
};

export default function Footer(props) {
    return (
        <div>
            {returnBasedOneDevice(props.beforehanadFunction)}
        </div>
    )
};
