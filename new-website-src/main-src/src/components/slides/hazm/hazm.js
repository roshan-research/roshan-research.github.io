import HazmMobile from "../../jsx-svgs/mobile/hazm";
import './hazm.scss'
import HazmWebImage from "../../jsx-svgs/web/hazm-image";
import HazmWebText from "../../jsx-svgs/web/hazm-text";
import {isMobile, isSafari, isTablet} from "react-device-detect";

const returnBasedOneDevice = (props) => {
    if(isTablet){
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
    } else if(isMobile){
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
