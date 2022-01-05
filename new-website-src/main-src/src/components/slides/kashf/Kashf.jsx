import KashfMobile from "./KashfMobile";
import KashfWebText from "./KashfWebText";
import KashfWebImage from "./KashfWebImage";
import '../../../stylesheets/slides/kashf.scss'
import {isMobile,isSafari,isTablet} from "react-device-detect";
import {Helmet} from "react-helmet";
import React from "react";
import keywords from "../../../keywords";

const returnBasedOneDevice = ({scrollQuantity}) => {
    if(isMobile || isTablet){
        return(
            <div id={isSafari ? 'mobile-safari' : 'mobile'}>
                <KashfMobile status={scrollQuantity}/>
            </div>
        )
    } else {
        return(
            <div id={'web'}>
                <div id={'image'}>
                    <KashfWebImage status={scrollQuantity}/>
                </div>
                <div id={'space-between'}/>
                <div id={'text'}>
                    <KashfWebText status={scrollQuantity}/>
                </div>
            </div>
        )
    }
};

function Kashf(props) {
    return (
        <div>
            <div id={'kashf'}>
                {returnBasedOneDevice(props)}
            </div>
        </div>
    )
}

export default Kashf;
