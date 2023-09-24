import '../../stylesheets/main-page.scss';
import EarthImage from '../../assets/images/wallpaper.png';
import { motion } from 'framer-motion';
import {
    imageScrollDownAnimation,
    noneAnimation,
    startingAnimation,
} from '../../animations/main-page';
import React, { useEffect } from 'react';

const imageAnimationChooser = (props) => {
    if (props.shouldRerender && props.scrollQuantity === 0) {
        return startingAnimation;
    } else {
        switch (props.scrollQuantity) {
            case 1:
                return imageScrollDownAnimation;
            default:
                return noneAnimation;
        }
    }
};

function MainPage(props) {
    useEffect(() => {
        window.addEventListener('beforeunload', scrollToTop);
        return () => {
            window.removeEventListener('beforeunload', scrollToTop);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <motion.div
            className="all"
            initial={imageAnimationChooser(props).initial}
            animate={imageAnimationChooser(props).animate}
            transition={imageAnimationChooser(props).transition}
        >
            <p>
                انسان به توان ماشین
            </p>
            <img src={EarthImage} className="web-background" alt={''} />
        </motion.div>
    );
}

export default MainPage;
