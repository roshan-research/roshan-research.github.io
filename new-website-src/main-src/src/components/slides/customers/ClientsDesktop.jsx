import {ReactComponent as Keshvar} from "../../../assets/images/clients/Keshvar.svg";
import {ReactComponent as Naft} from "../../../assets/images/clients/Naft.svg";
import {ReactComponent as Ketabkhaneh} from "../../../assets/images/clients/Ketabkhaneh.svg";
import {ReactComponent as Setad} from "../../../assets/images/clients/Setad.svg";
import {ReactComponent as Astan} from "../../../assets/images/clients/Astan.svg";
import {ReactComponent as Mokhaberat} from "../../../assets/images/clients/Mokhaberat.svg";
import {ReactComponent as Parsian} from "../../../assets/images/clients/Parsian.svg";
import {ReactComponent as Irandoc} from "../../../assets/images/clients/Irandoc.svg";
import {ReactComponent as Azmoon} from "../../../assets/images/clients/Azmoon.svg";
import {ReactComponent as Tamasha} from "../../../assets/images/clients/Tamasha.svg";
import {ReactComponent as Taghche} from "../../../assets/images/clients/Taghche.svg";
import {ReactComponent as Varzesh} from "../../../assets/images/clients/Varzesh.svg";
import {ReactComponent as Jahad} from "../../../assets/images/clients/Jahad.svg";
import {ReactComponent as Bimeh} from "../../../assets/images/clients/Bimeh.svg";
import {ReactComponent as Nazdika} from "../../../assets/images/clients/Nazdika.svg";
import {ReactComponent as Amin} from "../../../assets/images/clients/Amin.svg";
import {ReactComponent as Ammar} from "../../../assets/images/clients/Ammar.svg";
import {ReactComponent as Farabi} from "../../../assets/images/clients/Farabi.svg";
import {ReactComponent as Fars} from "../../../assets/images/clients/Fars.svg";
import {ReactComponent as Filimo} from "../../../assets/images/clients/Filimo.svg";
import {ReactComponent as Civilica} from "../../../assets/images/clients/Civilica.svg";
import {ReactComponent as Bimarestan} from "../../../assets/images/clients/Bimarestan.svg";
import {ReactComponent as AparatDesktop} from '../../../assets/images/clients/AparatDesktop.svg';

function ClientsDesktop({status}) {
    return (
        <div id={'clients-page-desktop'}>
            <div id={'clients-title-desktop'}>
                مشتریان ما
            </div>

            <div id={'clients-desktop'}>
                <div className={'normal-clients-table'}>
                    <div className={'clients-row-desktop'}>
                        <Ketabkhaneh className={'client-desktop'}/>
                        <Naft className={'client-desktop'}/>
                        <Keshvar className={'client-desktop'}/>
                    </div>
                    <div className={'clients-row-desktop'}>
                        <Parsian className={'client-desktop'}/>
                        <Taghche className={'client-desktop'}/>
                        <Varzesh className={'client-desktop'}/>
                    </div>
                    <div className={'clients-row-desktop'}>
                        <Jahad className={'client-desktop'}/>
                        <Farabi className={'client-desktop'}/>
                        <Ammar className={'client-desktop'}/>
                    </div>
                </div>
                <div className={'normal-clients-table'}>
                    <div  className={'clients-row-desktop'}>
                        <Mokhaberat className={'client-desktop'}/>
                        <Astan className={'client-desktop'}/>
                    </div>
                    <AparatDesktop id={'aparat-desktop'}/>
                    <div  className={'clients-row-desktop'}>
                        <Amin className={'client-desktop'}/>
                        <Civilica className={'client-desktop'}/>
                    </div>
                </div>
                <div className={'normal-clients-table'}>
                    <div className={'clients-row-desktop'}>
                        <Setad className={'client-desktop'}/>
                        <Azmoon className={'client-desktop'}/>
                        <Irandoc className={'client-desktop'}/>
                    </div>
                    <div className={'clients-row-desktop'}>
                        <Filimo className={'client-desktop'}/>
                        <Nazdika className={'client-desktop'}/>
                        <Bimeh className={'client-desktop'}/>
                    </div>
                    <div className={'clients-row-desktop'}>
                        <Tamasha className={'client-desktop'}/>
                        <Fars className={'client-desktop'}/>
                        <Bimarestan className={'client-desktop'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientsDesktop;
