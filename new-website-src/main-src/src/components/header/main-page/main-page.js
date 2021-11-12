import './main-page.scss'
import {isMobile, isTablet} from 'react-device-detect';
import {ReactComponent as MobileBackground} from "../../../assets/images/mobile-background.svg";
import {ReactComponent as WebBackground} from "../../../assets/images/web-background.svg";
import {motion} from "framer-motion";
import {
    imageScrollDownAnimation,
    noneAnimation,
    startingAnimation,
} from "../../../animations/main-page";
import {useEffect} from "react";

const imageAnimationChooser = (props) => {
    if(props.shouldRerender && props.scrollQuantity === 0){
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

const returnBasedOneDevice = () => {
  if(isMobile || isTablet){
        return(
            <div className='mobile-background'>
                <MobileBackground id={'body-main'}/>
            </div>
        )
  } else {
        return(
            <WebBackground className='web-background'/>
        )
  }
};

function MainPage(props) {

    useEffect(() => {
        window.addEventListener("beforeunload", scrollToTop);
        return () => {
            window.removeEventListener("beforeunload", scrollToTop);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <motion.div
            className='all'
            initial={imageAnimationChooser(props).initial}
            animate={imageAnimationChooser(props).animate}
            transition={imageAnimationChooser(props).transition}
        >
            {returnBasedOneDevice()}
        </motion.div>
    )
}

export default MainPage;
