import KashfMobile from "./KashfMobile";
import KashfWebText from "./KashfWebText";
import KashfWebImage from "./KashfWebImage";
import '../../../stylesheets/slides/kashf.scss'
import {isMobile,isSafari,isTablet} from "react-device-detect";
import React from "react";

const returnBasedOneDevice = ({scrollQuantity}) => {
    if(isMobile || isTablet){
        return(
            <div id={isSafari ? 'clients-safari' : 'clients'}>
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
        <article>
            <div id={'kashf'}>
                {returnBasedOneDevice(props)}
            </div>
        </article>
    )
}

export default Kashf;
