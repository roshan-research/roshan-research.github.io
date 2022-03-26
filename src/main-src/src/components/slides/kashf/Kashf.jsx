import KashfMobile from "./KashfMobile";
import KashfWebText from "./KashfWebText";
import KashfWebImage from "../../../assets/images/kashf-web-image.svg";
import '../../../stylesheets/slides/kashf.scss'
import {isMobile,isSafari,isTablet} from "react-device-detect";
import React from "react";
import {motion} from 'framer-motion'
import {flowerAnimation} from "../../../animations/kashf-image";
import {noneAnimation} from "../../../animations/main-page";
import ToTopButton from "../footer/ToTopButton";
import HamburgerMenuSlides from "../../header/HamburgerMenuSlides";

const animationChooser = (scrollQuantity) => {
    switch (scrollQuantity) {
        case 1:
            return flowerAnimation;
        default:
            return noneAnimation;
    }
};

const returnBasedOneDevice = ({scrollQuantity}) => {
    if(isMobile || isTablet){
        return(
            <div id={isSafari ? 'clients-safari' : 'clients'}>
                <KashfMobile status={scrollQuantity}/>
            </div>
        )
    } else {
        return(
            <div id={'web'}>
                <HamburgerMenuSlides/>
                <div>
                    <motion.img
                        src={KashfWebImage}
                        id={'image'}
                        alt={'کشف'}
                        variants={animationChooser(scrollQuantity)}
                        initial={"hidden"}
                        animate={"visible"}
                    />
                </div>
                <div id={'space-between'}/>
                <div id={'text'}>
                    <KashfWebText status={scrollQuantity}/>
                </div>
                <ToTopButton/>
            </div>
        )
    }
};

function Kashf(props) {
    return (
        <article>
            <div id={'kashf'}>
                {returnBasedOneDevice(props)}
            </div>
        </article>
    )
}

export default Kashf;
