import KashfMobile from "../../jsx-svgs/mobile/kashf";
import KashfWebText from "../../jsx-svgs/web/kashf-text";
import KashfWebImage from "../../jsx-svgs/web/kashf-image";
import './kashf.scss'
import {isMobile,isTablet} from "react-device-detect";

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
            <div id={'mobile'}>
                <KashfMobile status={props.scrollQuantity}/>
            </div>
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
