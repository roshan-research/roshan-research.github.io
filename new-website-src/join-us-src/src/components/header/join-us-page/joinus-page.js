import React from 'react';
import JoinUsMobile from "./join-us-mobile";
import {ReactComponent as JoinUsWeb} from "../../../assets/images/web-join-us.svg";
import './joinus-page.scss';
import {isMobile, isSafari,isOpera,isTablet} from "react-device-detect";

const returnBasedOneDevice = () => {
    if(isTablet){
        return(
            <div id={'web'}>
                <JoinUsWeb id={'pic'}/>
            </div>
        )
    } else if(isMobile){
        return(
            <div id={isSafari || isOpera ? 'mobile-safari': 'mobile'}>
                <JoinUsMobile/>
            </div>
        )
    } else {
        return(
            <div id={'web'}>
                <JoinUsWeb id={'pic'}/>
            </div>
        )
    }
};

export default function JoinusPage(props) {
    return (
        <div className={'join-us-page'}>
            {returnBasedOneDevice()}
        </div>
    )
}
