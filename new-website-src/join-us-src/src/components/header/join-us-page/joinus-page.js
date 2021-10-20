import React from 'react';
import {ReactComponent as JoinUsMobile} from "../../../assets/images/mobile-join-us.svg";
import {ReactComponent as JoinUsWeb} from "../../../assets/images/web-join-us.svg";
import './joinus-page.scss';
import {motion} from 'framer-motion';
import {noneAnimation, startingAnimation} from "../../../animations/main-page";
import {isMobile} from "react-device-detect";

const imageAnimationChooser = (props) => {
    if(props.shouldRerender){
        return startingAnimation;
    } else {
        return noneAnimation;
    }
};

const returnBasedOneDevice = () => {
    if(isMobile){
        return(
            <JoinUsMobile id={'mobile'}/>
        )
    } else {
        return(
            <JoinUsWeb id={'web'}/>
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
