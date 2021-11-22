import React from 'react';
import './contact-us-page.scss';
import {motion} from 'framer-motion';
import imageSource from '../../../assets/images/contact-us-image.png';

import {noneAnimation, startingAnimation} from "../../../animations/main-page";

const imageAnimationChooser = (props) => {
    if(props.shouldRerender){
        return startingAnimation;
    } else {
        return noneAnimation;
    }
};

export default function ContactUsPage(props) {
    return (
        <motion.div
            className={'contact-us'}
            initial={imageAnimationChooser(props).initial}
            animate={imageAnimationChooser(props).animate}
            transition={imageAnimationChooser(props).transition}
        >
            <div id={'texts-links'}>
                <p id={'in-the-name'}>
                    به نام خداوند جان و خرد
                </p>
                <p id={'body-text'}>

                </p>
                <div id={'email-row'}>
                    <p>

                    </p>
                    <img alt={''}/>
                </div>
                <div id={'phone-row'}>
                    <p>

                    </p>
                    <img alt={''}/>
                </div>
                <div id={'address-row'}>
                    <p>

                    </p>
                    <img alt={''}/>
                </div>
            </div>
            <div id={'contact-image'}>
                <img src={imageSource} id={'main-image'} alt={''}/>
            </div>
        </motion.div>
    )
}
