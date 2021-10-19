import React from 'react';
import {ReactComponent as JoinUsMobile} from "../../../assets/images/mobile-join-us.svg";
import {ReactComponent as JoinUsWeb} from "../../../assets/images/web-join-us.svg";
import './joinus-page.scss';
import {motion} from 'framer-motion';
import {noneAnimation, startingAnimation} from "../../../animations/main-page";
import {isMobile} from "react-device-detect";

const imageAnimationChooser = (scrollQuantity) => {
    switch (scrollQuantity) {
        case 0:
            return startingAnimation;
        default:
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

function JoinusPage(props) {
    return (
        <motion.div
            className={'join-us-page'}
            initial={imageAnimationChooser(props.scrollQuantity).initial}
            animate={imageAnimationChooser(props.scrollQuantity).animate}
            transition={imageAnimationChooser(props.scrollQuantity).transition}
        >
            {returnBasedOneDevice()}
        </motion.div>
    )
}

export default JoinusPage;
