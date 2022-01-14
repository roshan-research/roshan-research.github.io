import {isMobile, isSafari, isTablet} from "react-device-detect";
import FooterWeb from "./FooterWeb";
import FooterMobile from "./footer-mobile";
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
            <div id={'footer-clients'} style={isSafari ? {} :{
                position: 'absolute',
            }}>
                <a role="button" style={{color:'transparent'}} href={'#!'}  onClick={goToTopAll}>
                    <div id={'to-top-clients'}>
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
                <div id={'to-top'} onClick={goToTopAll}>
                    &uarr;
                </div>
                <FooterWeb/>
            </div>
        )
    }
};

export default function Footer(props) {
    return (
        <footer>
            {returnBasedOneDevice(props.beforehanadFunction)}
        </footer>
    )
};
