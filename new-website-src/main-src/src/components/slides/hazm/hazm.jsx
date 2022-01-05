import HazmMobile from "./HazmMobile.jsx";
import '../../../stylesheets/slides/hazm.scss'
import HazmWebImage from "./HazmWebImage";
import HazmWebText from "./HazmWebText";
import {isMobile, isSafari, isTablet} from "react-device-detect";
import {Helmet} from "react-helmet";
import keywords from "../../../keywords";

const returnBasedOneDevice = (props) => {
    if(isMobile || isTablet){
        return(
            <div id={isSafari ? 'mobile-safari' :'mobile'}>
                <HazmMobile status={props.scrollQuantity}/>
            </div>
        )
    } else {
        return(
            <div id={'web'}>
                <div id={'text'}>
                    <HazmWebText status={props.scrollQuantity}/>
                </div>
                <div id={'space-between'}/>
                <div id={'image'}>
                    <HazmWebImage status={props.scrollQuantity}/>
                </div>
            </div>
        )
    }
};


function Hazm(props) {
    return (
        <div>
            <div id={'hazm'}>
                {returnBasedOneDevice(props)}
            </div>
        </div>
    )
}

export default Hazm;
