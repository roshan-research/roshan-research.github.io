import './customers-mobile.scss';

import {ReactComponent as Keshvar} from "../../../assets/images/mobile/customers/row1/Keshvar.svg";
import {ReactComponent as Naft} from "../../../assets/images/mobile/customers/row1/Naft.svg";
import {ReactComponent as Ketabkhaneh} from "../../../assets/images/mobile/customers/row1/Ketabkhaneh.svg";

import {ReactComponent as Setad} from "../../../assets/images/mobile/customers/row2/Setad.svg";
import {ReactComponent as Astan} from "../../../assets/images/mobile/customers/row2/Astan.svg";
import {ReactComponent as Mokhaberat} from "../../../assets/images/mobile/customers/row2/Mokhaberat.svg";

import {ReactComponent as Parsian} from "../../../assets/images/mobile/customers/row3/Parsian.svg";
import {ReactComponent as Irandoc} from "../../../assets/images/mobile/customers/row3/Irandoc.svg";
import {ReactComponent as Azmoon} from "../../../assets/images/mobile/customers/row3/Azmoon.svg";

import {ReactComponent as Tamasha} from "../../../assets/images/mobile/customers/row4/Tamasha.svg";
import {ReactComponent as Taghche} from "../../../assets/images/mobile/customers/row4/Taghche.svg";
import {ReactComponent as Varzesh} from "../../../assets/images/mobile/customers/row4/Varzesh.svg";

function CustomersMobile(props){
    return(
        <div id={'table'}>
            <div className={'row'}>
                <div className={'box'} id={'box-left'}>
                    <Keshvar/>
                </div>
                <div className={'box'} id={'box-middle'}>
                    <Naft/>
                </div>
                <div className={'box'} id={'box-right'}>
                    <Ketabkhaneh/>
                </div>
            </div>
            <div className={'row'}>
                <div className={'box'} id={'box-left'}>
                    <Setad/>
                </div>
                <div className={'box'} id={'box-middle'}>
                    <Astan/>
                </div>
                <div className={'box'} id={'box-right'}>
                    <Mokhaberat/>
                </div>
            </div>
            <div className={'row'}>
                <div className={'box'} id={'box-left'}>
                    <Parsian/>
                </div>
                <div className={'box'} id={'box-middle'}>
                    <Irandoc/>
                </div>
                <div className={'box'} id={'box-right'}>
                    <Azmoon/>
                </div>
            </div>
            <div className={'row'}>
                <div className={'box'} id={'box-left'}>
                    <Tamasha/>
                </div>
                <div className={'box'} id={'box-middle'}>
                    <Taghche/>
                </div>
                <div className={'box'} id={'box-right'}>
                    <Varzesh/>
                </div>
            </div>
        </div>
    )
}

export default CustomersMobile;
