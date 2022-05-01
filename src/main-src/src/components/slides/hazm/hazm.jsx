import HazmMobile from "./HazmMobile.jsx";
import '../../../stylesheets/slides/hazm.scss'
import HazmWebImage from "../../../assets/images/hazm-web-image.svg";
import HazmWebText from "./HazmWebText";
import {isMobile, isSafari, isTablet} from "react-device-detect";
import {motion} from "framer-motion";
import React from "react";
import {flowerAnimation} from "../../../animations/kashf-image";
import {noneAnimation} from "../../../animations/main-page";
import ToTopButton from "../footer/ToTopButton";
import HamburgerMenuSlides from "../../header/HamburgerMenuSlides";


const animationChooser = (scrollQuantity) => {
    switch (scrollQuantity) {
        case 4:
            return flowerAnimation;
        default:
            return noneAnimation;
    }
};

const returnBasedOneDevice = (scrollQuantity) => {
    if(isMobile || isTablet){
        return(
            <div id={isSafari ? 'clients-safari' :'clients'}>
                <HazmMobile status={scrollQuantity}/>
            </div>
        )
    } else {
        return(
            <div id={'web'}>
                <HamburgerMenuSlides/>
                <div id={'text'}>
                    <HazmWebText status={scrollQuantity}/>
                </div>
                <div id={'space-between'}/>
                <div>
                    <motion.img
                        src={HazmWebImage}
                        id={'image'}
                        alt={' هضم'}
                        variants={animationChooser(scrollQuantity)}
                        initial={"hidden"}
                        animate={"visible"}
                    />
                </div>
                <ToTopButton/>
            </div>
        )
    }
};


function Hazm({scrollQuantity}) {
    return (
        <article>
            <div id={'hazm'}>
                {returnBasedOneDevice(scrollQuantity)}
            </div>
        </article>
    )
}

export default Hazm;
