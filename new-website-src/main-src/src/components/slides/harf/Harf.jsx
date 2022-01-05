import HarfMobile from "./HarfMobile";
import '../../../stylesheets/slides/harf.scss'
import {ReactComponent as HarfWebImage} from "../../../assets/images/harf-image.svg";
import HarfWebText from "./HarfWebText";
import {isMobile, isSafari, isTablet} from "react-device-detect";
import {motion} from 'framer-motion';
import {flowerAnimation} from "../../../animations/kashf-image";
import {noneAnimation} from "../../../animations/main-page";
import {Helmet} from "react-helmet";
import keywords from "../../../keywords";

const animationChooser = (scrollQuantity) => {

    switch (scrollQuantity) {
        case 3:
            return flowerAnimation;
        default:
            return noneAnimation;
    }
};


const returnBasedOneDevice = (props) => {
    if(isMobile || isTablet){
        return(
            <div id={isSafari ? 'mobile-safari' :'mobile'}>
                <HarfMobile status={props.scrollQuantity}/>
            </div>
        )
    } else {
        return(
            <div id={'web'}>
                <motion.div
                    variants={animationChooser(props.scrollQuantity)}
                    initial={"hidden"}
                    animate={"visible"}
                >
                    <HarfWebImage id={'image'} />
                </motion.div>
                <div id={'space-between'} />
                <div id={'text'}>
                    <HarfWebText status={props.scrollQuantity}/>
                </div>
            </div>
        )
    }
};

function Harf(props) {
    return (
        <div>
            <div id={'harf'}>
                {returnBasedOneDevice(props)}
            </div>
        </div>
    )
}

export default Harf;
