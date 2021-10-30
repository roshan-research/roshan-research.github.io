import React from 'react';
import JoinUsMobile from "./join-us-mobile";
import {ReactComponent as JoinUsWeb} from "../../../assets/images/web-join-us.svg";
import './joinus-page.scss';
import {motion} from 'framer-motion';
import {noneAnimation, startingAnimation} from "../../../animations/main-page";
import {isMobile, isSafari,isOpera,isTablet} from "react-device-detect";

const imageAnimationChooser = (props) => {
    if(props.shouldRerender){
        return startingAnimation;
    } else {
        return noneAnimation;
    }
};

const returnBasedOneDevice = () => {
    if(isTablet){
        return(
            <div id={'web'}>
                <JoinUsWeb id={'pic'}/>
            </div>
        )
    } else if(isMobile){
        return(
            <div id={isSafari || isOpera? 'mobile-safari': 'mobile'}>
                <JoinUsMobile />
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
        <motion.div
            className={'join-us-page'}
            initial={imageAnimationChooser(props).initial}
            animate={imageAnimationChooser(props).animate}
            transition={imageAnimationChooser(props).transition}
        >
            {returnBasedOneDevice()}
        </motion.div>
    )
}
