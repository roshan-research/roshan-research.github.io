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

import '../../../stylesheets/slides/clients.scss';
import {motion} from 'framer-motion';
import {ClientsAnimationsDesktop} from "../../../animations/Clients";

function ClientsDesktop({status}) {
    return (
        <div id={'clients-page-desktop'}>
            <div id={'clients-title-desktop'}>
                مشتریان ما
            </div>
            <div id={'clients-desktop'}>
                <div className={'normal-clients-table'}>
                    <div className={'clients-row-desktop'}>
                        <motion.div
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                        >
                            <Ketabkhaneh className={'client-desktop'}/>
                        </motion.div>
                        <motion.div
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                        >
                            <Naft className={'client-desktop'}/>
                        </motion.div>
                        <motion.div
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                        >
                            <Keshvar className={'client-desktop'}/>
                        </motion.div>
                    </div>
                    <div className={'clients-row-desktop'}>
                        <motion.div
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                        >
                            <Parsian className={'client-desktop'}/>
                        </motion.div>
                        <motion.div
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                        >
                            <Taghche className={'client-desktop'}/>
                        </motion.div>
                        <motion.div
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                        >
                            <Varzesh className={'client-desktop'}/>
                        </motion.div>
                    </div>
                    <div className={'clients-row-desktop'}>
                        <motion.div
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                        >
                            <Jahad className={'client-desktop'}/>
                        </motion.div>
                        <motion.div
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                        >
                            <Farabi className={'client-desktop'}/>
                        </motion.div>
                        <motion.div
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                        >
                            <Ammar className={'client-desktop'}/>
                        </motion.div>
                    </div>
                </div>
                <div className={'normal-clients-table'}>
                    <div  className={'clients-row-desktop'}>
                        <motion.div
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                        >
                            <Mokhaberat className={'client-desktop'}/>
                        </motion.div>
                        <motion.div
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                        >
                            <Astan className={'client-desktop'}/>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={ClientsAnimationsDesktop(status)}
                        initial={"hidden"}
                        animate={"visible"}
                    >
                        <AparatDesktop id={'aparat-desktop'}/>
                    </motion.div>
                    <div  className={'clients-row-desktop'}>
                        <motion.div
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                        >
                            <Amin className={'client-desktop'}/>
                        </motion.div>
                        <motion.div
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                        >
                            <Civilica className={'client-desktop'}/>
                        </motion.div>
                    </div>
                </div>
                <div className={'normal-clients-table'}>
                    <div className={'clients-row-desktop'}>
                        <motion.div
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                        >
                            <Setad className={'client-desktop'}/>
                        </motion.div>
                        <motion.div
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                        >
                            <Azmoon className={'client-desktop'}/>
                        </motion.div>
                        <motion.div
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                        >
                            <Irandoc className={'client-desktop'}/>
                        </motion.div>
                    </div>
                    <div className={'clients-row-desktop'}>
                        <motion.div
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                        >
                            <Filimo className={'client-desktop'}/>
                        </motion.div>
                        <motion.div
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                        >
                            <Nazdika className={'client-desktop'}/>
                        </motion.div>
                        <motion.div
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                        >
                            <Bimeh className={'client-desktop'}/>
                        </motion.div>
                    </div>
                    <div className={'clients-row-desktop'}>
                        <motion.div
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                        >
                            <Tamasha className={'client-desktop'}/>
                        </motion.div>
                        <motion.div
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                        >
                            <Fars className={'client-desktop'}/>
                        </motion.div>
                        <motion.div
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                        >
                            <Bimarestan className={'client-desktop'}/>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientsDesktop;
