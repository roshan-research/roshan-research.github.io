import HazmMobile from "../jsx-svgs/mobile/hazm.jsx";
import '../../stylesheets/hazm.scss'
import HazmWebImage from "../jsx-svgs/web/hazm-image";
import HazmWebText from "../jsx-svgs/web/hazm-text";
import {isMobile, isSafari, isTablet} from "react-device-detect";
import {Helmet} from "react-helmet";
import keywords from "../keywords";

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
            <Helmet>
                <meta
                    name={'description'}
                    content={'تحلیل متن های فارسی'}
                />
                <meta
                    name={'keywords'}
                    content={`${keywords.hazm[0]}, ${keywords.hazm[1]}, ${keywords.hazm[2]}`}
                />
            </Helmet>
            <div id={'hazm'}>
                {returnBasedOneDevice(props)}
            </div>
        </div>
    )
}

export default Hazm;
