import HarfMobile from "../jsx-svgs/mobile/harf";
import '../../stylesheets/harf.scss'
import {ReactComponent as HarfWebImage} from "../../assets/images/harf-image.svg";
import HarfWebText from "../jsx-svgs/web/harf-text";
import {isMobile, isSafari, isTablet} from "react-device-detect";
import {motion} from 'framer-motion';
import {flowerAnimation} from "../../animations/kashf-image";
import {noneAnimation} from "../../animations/main-page";
import {Helmet} from "react-helmet";
import keywords from "../keywords";

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
            <Helmet>
                <meta
                    name={'description'}
                    content={'تبدیل گفتار به متن'}
                />
                <meta
                    name={'keywords'}
                    content={`${keywords.harf[0]}`}
                />
            </Helmet>
            <div id={'harf'}>
                {returnBasedOneDevice(props)}
            </div>
        </div>
    )
}

export default Harf;
