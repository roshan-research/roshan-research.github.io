import React from 'react';
import './contact-us-page.scss';
import {ReactComponent as ContactUsMobile} from "../../../assets/images/mobile-contact-us.svg";
import {ReactComponent as ContactUsWeb} from "../../../assets/images/web-contact-us.svg";
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
            <ContactUsMobile id={'mobile'}/>
        )
    } else {
        return(
            <ContactUsWeb id={'web'}/>
        )
    }
};

function ContactUsPage(props) {
    return (
        <motion.div
            className={'contact-us-page'}
            initial={imageAnimationChooser(props.scrollQuantity).initial}
            animate={imageAnimationChooser(props.scrollQuantity).animate}
            transition={imageAnimationChooser(props.scrollQuantity).transition}
        >
            {returnBasedOneDevice()}
        </motion.div>
    )
}

export default ContactUsPage;
