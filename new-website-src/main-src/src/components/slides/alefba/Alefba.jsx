import AlefbaMobile from "./AlefbaMobile";
import '../../../stylesheets/slides/alefba.scss'
import AlefbaWebText from "./AlefbaWebText";
import AlefbaWebImage from "./AlefbaWebImage";
import {isMobile,isSafari,isTablet} from "react-device-detect";
import React from "react";

const returnBasedOneDevice = (props) => {
    if(isMobile || isTablet){
        return(
            <div id={isSafari ? 'clients-safari' : 'clients'}>
                <AlefbaMobile status={props.scrollQuantity}/>
            </div>
        )
    } else {
        return(
            <div id={'web'}>
                <div id={'text'}>
                    <AlefbaWebText status={props.scrollQuantity}/>
                </div>
                <div id={'space-between'}/>
                <div id={'image'}>
                    <AlefbaWebImage status={props.scrollQuantity}/>
                </div>
            </div>
        )
    }
};
function Alefba(props) {
    return (
        <article>
            <div id={'alefba'}>
                {returnBasedOneDevice(props)}
            </div>
        </article>
    )
}

export default Alefba;
