import AlefbaMobile from "../../jsx-svgs/mobile/alefba";
import './alefba.scss'
import AlefbaWebText from "../../jsx-svgs/web/alefba-text";
import AlefbaWebImage from "../../jsx-svgs/web/alefba-image";
import {isMobile,isSafari} from "react-device-detect";
import Div100vh from "react-div-100vh";

const returnBasedOneDevice = (props) => {
    if(isMobile){
        return(
            <Div100vh>
                <div id={'mobile'}>
                    <AlefbaMobile status={props.scrollQuantity}/>
                </div>
            </Div100vh>
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
