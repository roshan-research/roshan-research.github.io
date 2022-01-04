import KashfMobile from "../jsx-svgs/mobile/kashf";
import KashfWebText from "../jsx-svgs/web/kashf-text";
import KashfWebImage from "../jsx-svgs/web/kashf-image";
import '../../stylesheets/kashf.scss'
import {isMobile,isSafari,isTablet} from "react-device-detect";
import {Helmet} from "react-helmet";
import React from "react";
import keywords from "../keywords";

const returnBasedOneDevice = (props) => {
    if(isMobile || isTablet){
        return(
            <div id={isSafari ? 'mobile-safari' : 'mobile'}>
                <KashfMobile status={props.scrollQuantity}/>
            </div>
        )
    } else {
        return(
            <div id={'web'}>
                <div id={'image'}>
                    <KashfWebImage status={props.scrollQuantity}/>
                </div>
                <div id={'space-between'}/>
                <div id={'text'}>
                    <KashfWebText status={props.scrollQuantity}/>
                </div>
            </div>
        )
    }
};

function Kashf(props) {
    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content={"پردازش تصویر و کشف محتوا"}
                />
                <meta
                    name="keywords"
                    content={`${keywords.kashf[0]}, ${keywords.kashf[1]}`}
                />
            </Helmet>
            <div id={'kashf'}>
                {returnBasedOneDevice(props)}
            </div>
        </div>
    )
}

export default Kashf;
