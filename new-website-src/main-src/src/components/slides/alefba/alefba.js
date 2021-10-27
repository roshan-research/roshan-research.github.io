import AlefbaMobile from "../../jsx-svgs/mobile/alefba";
import './alefba.scss'
import AlefbaWebText from "../../jsx-svgs/web/alefba-text";
import AlefbaWebImage from "../../jsx-svgs/web/alefba-image";
import {isMobile,isTablet} from "react-device-detect";

const returnBasedOneDevice = (props) => {
    if(isTablet){
        return(
            <div id={'web'}>
                <div id={'text'}>
                    <AlefbaWebText status={props.scrollQuantity}/>
                </div>
                <div id={'space-between'}/>
                <div id={'image'}>
                    <AlefbaWebImage status={props.scrollQuantity}/>
                </div>
            </div>
        )
    } else if(isMobile){
        return(
            <div id={'mobile'}>
                <AlefbaMobile status={props.scrollQuantity}/>
            </div>
        )
    } else {
        return(
            <div id={'web'}>
                <div id={'text'}>
                    <AlefbaWebText status={props.scrollQuantity}/>
                </div>
                <div id={'space-between'}/>
                <div id={'image'}>
                    <AlefbaWebImage status={props.scrollQuantity}/>
                </div>
            </div>
        )
    }
};
function Alefba(props) {
    return (
        <div>
            <div id={'alefba'}>
                {returnBasedOneDevice(props)}
            </div>
        </div>
    )
}

export default Alefba;
