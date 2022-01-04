import AlefbaMobile from "./AlefbaMobile";
import '../../../stylesheets/slides/alefba.scss'
import AlefbaWebText from "./AlefbaWebText";
import AlefbaWebImage from "./AlefbaWebImage";
import {isMobile,isSafari,isTablet} from "react-device-detect";
import {Helmet} from "react-helmet";
import React from "react";
import keywords from "../../keywords";

const returnBasedOneDevice = (props) => {
    if(isMobile || isTablet){
        return(
            <div id={isSafari ? 'mobile-safari' : 'mobile'}>
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
            <Helmet>
                <meta
                    name={"description"}
                    content={"تبدیل تصویر به نوشته (OCR)"}
                />
                <meta
                    name={"keywords"}
                    content={`${keywords.alefba[0]}, ${keywords.alefba[1]}, ${keywords.alefba[2]}, ${keywords.alefba[3]}, ${keywords.alefba[4]}`}
                />
            </Helmet>
            <div id={'alefba'}>
                {returnBasedOneDevice(props)}
            </div>
        </div>
    )
}

export default Alefba;
