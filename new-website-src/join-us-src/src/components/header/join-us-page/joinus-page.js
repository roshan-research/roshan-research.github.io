import React from 'react';
import JoinUsMobile from "./join-us-mobile";
import JoinUsWeb from "./join-us-web";
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
            <div id={'mobile'}>
                <JoinUsMobile/>
            </div>
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
