import AlefbaMobile from "./AlefbaMobile";
import '../../../stylesheets/slides/alefba.scss';
import AlefbaWebText from "./AlefbaWebText";
import AlefbaWebImage from "../../../assets/images/alefba-web-image.svg";
import {isMobile,isSafari,isTablet} from "react-device-detect";
import React from "react";
import {motion} from "framer-motion";
import {flowerAnimation} from "../../../animations/kashf-image";
import {noneAnimation} from "../../../animations/main-page";
import ToTopButton from "../footer/ToTopButton";
import HamburgerMenuSlides from "../../header/HamburgerMenuSlides";

const animationChooser = (scrollQuantity) => {
    switch (scrollQuantity) {
        case 2:
            return flowerAnimation;
        default:
            return noneAnimation;
    }
};

const returnBasedOneDevice = ({scrollQuantity}) => {
    if(isMobile || isTablet){
        return(
            <div id={isSafari ? 'clients-safari' : 'clients'}>
                <AlefbaMobile status={scrollQuantity}/>
            </div>
        )
    } else {
        return(
            <div id={'web'}>
                <HamburgerMenuSlides/>
                <div id={'text'}>
                    <AlefbaWebText status={scrollQuantity}/>
                </div>
                <div id={'space-between'}/>
                <div>
                    <motion.img
                        src={AlefbaWebImage}
                        id={'image'}
                        alt={'الفبا'}
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
function Alefba(props) {
    return (
        <article>
            <div id={'alefba'}>
                {returnBasedOneDevice(props)}
            </div>
        </article>
    )
}

export default Alefba;
