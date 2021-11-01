import React from 'react';
import {ReactComponent as JoinUsMobile} from "../../../assets/images/mobile-join-us.svg";
import {ReactComponent as JoinUsWeb} from "../../../assets/images/web-join-us.svg";
import {ReactComponent as JoinUsText} from "../../../assets/images/join-us-text-group.svg";
import './joinus-page.scss';
import {isMobile,isTablet} from "react-device-detect";

const returnBasedOneDevice = () => {
    if(isTablet){
        return(
            <div id={'web'}>
                <JoinUsWeb id={'pic'}/>
                <div id={'text-group'}>
                    <JoinUsText id={'inner'}/>
                </div>
            </div>
        )
    } else if(!isMobile){
        return(
            <div id={ 'mobile-j'}>
                <JoinUsMobile id={'pic'}/>
            </div>
        )
    } else {
        return(
            <div id={'web'}>
                <JoinUsWeb id={'pic'}/>
                <div id={'text-group'}>
                    <JoinUsText id={'inner'}/>
                </div>
            </div>
        )
    }
};

export default function JoinusPage() {
    return (
        <div className={'join-us-page'}>
            {returnBasedOneDevice()}
        </div>
    )
}
