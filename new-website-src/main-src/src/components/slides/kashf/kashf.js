import KashfMobile from "../../jsx-svgs/mobile/kashf";
import KashfWebText from "../../jsx-svgs/web/kashf-text";
import KashfWebImage from "../../jsx-svgs/web/kashf-image";
import './kashf.scss'
import {isMobile, isOpera, isSafari, isTablet} from "react-device-detect";
import Div100vh from 'react-div-100vh'

const returnBasedOneDevice = (props) => {
    if(isTablet){
        return(
            <div id={'web'}>
                <div id={'image'}>
                    <KashfWebImage status={props.scrollQuantity}/>
                </div>
                <div id={'space-between'}/>
                <div id={'text'}>
                    <KashfWebText status={props.scrollQuantity}/>
                </div>
            </div>
        )
    } else if(isMobile){
        return(
            <Div100vh>
                <div id={'mobile'}>
                    <KashfMobile status={props.scrollQuantity}/>
                </div>
            </Div100vh>
        )
    } else {
        return(
            <div id={'web'}>
                <div id={'image'}>
                    <KashfWebImage status={props.scrollQuantity}/>
                </div>
                <div id={'space-between'}/>
                <div id={'text'}>
                    <KashfWebText status={props.scrollQuantity}/>
                </div>
            </div>
        )
    }
};

function Kashf(props) {
    return (
        <div>
            <div id={'kashf'}>
                {returnBasedOneDevice(props)}
            </div>
        </div>
    )
}

export default Kashf;
