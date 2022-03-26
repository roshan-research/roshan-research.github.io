import Keshvar from "../../../assets/images/clients/Keshvar.svg";
import Naft from "../../../assets/images/clients/Naft.svg";
import Ketabkhaneh from "../../../assets/images/clients/Ketabkhaneh.svg";
import Setad from "../../../assets/images/clients/Setad.svg";
import Astan from "../../../assets/images/clients/Astan.svg";
import Mokhaberat from "../../../assets/images/clients/Mokhaberat.svg";
import Parsian from "../../../assets/images/clients/Parsian.svg";
import Irandoc from "../../../assets/images/clients/Irandoc.svg";
import Azmoon from "../../../assets/images/clients/Azmoon.svg";
import Tamasha from "../../../assets/images/clients/Tamasha.svg";
import Taghche from "../../../assets/images/clients/Taghche.svg";
import Varzesh from "../../../assets/images/clients/Varzesh.svg";
import Jahad from "../../../assets/images/clients/Jahad.svg";
import Bimeh from "../../../assets/images/clients/Bimeh.svg";
import Nazdika from "../../../assets/images/clients/Nazdika.svg";
import Amin from "../../../assets/images/clients/Amin.svg";
import Ammar from "../../../assets/images/clients/Ammar.svg";
import Farabi from "../../../assets/images/clients/Farabi.svg";
import Fars from "../../../assets/images/clients/Fars.svg";
import Filimo from "../../../assets/images/clients/Filimo.svg";
import Civilica from "../../../assets/images/clients/Civilica.svg";
import Bimarestan from "../../../assets/images/clients/Bimarestan.svg";
import AparatDesktop from '../../../assets/images/clients/AparatDesktop.svg';
import Barid from '../../../assets/images/clients/Barid.svg';
import Savaneh from '../../../assets/images/clients/Savaneh.svg';
import Lenzor from '../../../assets/images/clients/Lenzor.svg';
import Vira from '../../../assets/images/clients/Vira.svg';
import Bamdad from '../../../assets/images/clients/Bamdad.svg';
import IranRayaneh from '../../../assets/images/clients/IranRayaneh.svg';
import AparatMobile from '../../../assets/images/clients/Aparat.svg';

import '../../../stylesheets/slides/clients/clients.scss';
import {motion} from 'framer-motion';
import {ClientsAnimationsDesktop} from "../../../animations/Clients";

function ClientsDesktop({status}) {
    return (
        <div id={'clients-page-desktop'}>
            <motion.div
                id={'clients-title-desktop'}
                variants={ClientsAnimationsDesktop(status)}
                initial={"hidden"}
                animate={"visible"}
            >
                مشتریان ما
            </motion.div>
            <div id={'clients-desktop'}>
                <div
                    className={'normal-clients-table'}
                    id={'primary-clients-table'}
                >
                    <div className={'clients-row-desktop'}>
                        <motion.div
                            title={'سازمان اسناد و کتابخانه ملی'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Ketabkhaneh} id={'desktop-ketabkhaneh'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'شرکت ملی پالایش نفت و فرآورده های نفتی ایران'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Naft} id={'desktop-naft'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'وزارت کشور'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Keshvar} id={'desktop-keshvar'} alt={''}/>
                            <img src={Astan} className={'replacer-logo'} id={'astan-after-keshvar'} alt={''}/>
                        </motion.div>
                    </div>
                    <div className={'clients-row-desktop'}>
                        <motion.div
                            title={'شرکت تجارت الکترونیک پارسیان'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Parsian} id={'desktop-parsian'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'طاقچه'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Taghche} id={'desktop-taghche'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'ورزش سه'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Varzesh} id={'desktop-varzesh'} alt={''}/>
                            <img src={Keshvar} className={'replacer-logo'} id={'keshvar-after-varzesh'} alt={''}/>
                        </motion.div>
                    </div>
                    <div className={'clients-row-desktop'}>
                        <motion.div
                            title={'پژوهشکده فناوری اطلاعات و ارتباطات'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Jahad} id={'desktop-jahad'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'بنیاد سینمایی فارابی'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Farabi} id={'desktop-farabi'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'جشنواره مردمی فیلم عمار'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Ammar} id={'desktop-ammar'} alt={''}/>
                        </motion.div>
                    </div>
                    <div className={'clients-row-desktop'}>
                        <motion.div
                            title={'برید سامانه نوین'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Barid} id={'desktop-barid'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'فارس'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Fars} id={'desktop-fars'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'پژوهشکده سوانح طبیعی'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Savaneh} id={'desktop-savaneh'} alt={''}/>
                        </motion.div>
                    </div>
                </div>
                <div
                    className={'normal-clients-table'}
                    id={'secondary-clients-table'}
                >
                    <div className={'clients-row-desktop'}>
                        <motion.div
                            title={'شرکت مخابرات ایران'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Mokhaberat} className={'initially-hidden'}
                                        id={'desktop-mokhaberat'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'آستان قدس رضوی'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Astan} className={'initially-hidden'}
                                   id={'desktop-astan'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'آپارات'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={AparatMobile} className={'initially-hidden'}
                                          id={'desktop-aparat-3'} alt={''}/>
                        </motion.div>
                    </div>
                    <div className={'clients-row-desktop'}>
                        <motion.div
                            title={'لنزور'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Lenzor} className={'initially-hidden'}
                                    id={'desktop-lenzor'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'ویرا ویراست'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Vira} className={'initially-hidden'} id={'desktop-vira'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'پژوهشکده فناوری اطلاعات و ارتباطات'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Jahad} className={'initially-hidden'} id={'desktop-jahad-6'} alt={''}/>
                        </motion.div>
                    </div>
                    <div className={'clients-row-desktop'}>
                        <motion.div
                            title={'بنیاد سینمایی فارابی'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Farabi} className={'initially-hidden'} id={'desktop-farabi-7'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'جشنواره مردمی فیلم عمار'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Ammar} className={'initially-hidden'} id={'desktop-ammar-8'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'برید سامانه نوین'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Barid} className={'initially-hidden'} id={'desktop-barid-9'} alt={''}/>
                        </motion.div>
                    </div>
                    <div className={'clients-row-desktop'}>
                        <motion.div
                            title={'فارس'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Fars} className={'initially-hidden'} id={'desktop-fars-10'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'پژوهشکده سوانح طبیعی'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Savaneh} className={'initially-hidden'} id={'desktop-savaneh-11'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'آپارات'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={AparatMobile} className={'initially-hidden'} id={'desktop-aparat-12'} alt={''}/>
                        </motion.div>
                    </div>
                </div
                >
                <div
                    className={'normal-clients-table'}
                    id={'absurd-clients-table'}
                >
                    <div  className={'clients-row-desktop'}>
                        <motion.div
                            title={'شرکت مخابرات ایران'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Mokhaberat} id={'desktop-mokhaberat'} alt={''}/>
                            <img src={Filimo} className={'replacer-logo'} id={'filimo-after-mokhaberat'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'آستان قدس رضوی'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Astan} id={'desktop-astan'} alt={''}/>
                            <img src={Setad} className={'replacer-logo'} id={'setad-after-astan'} alt={''}/>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={ClientsAnimationsDesktop(status)}
                        initial={"hidden"}
                        animate={"visible"}
                        id={'client-center'}
                    >
                        <img src={AparatDesktop}
                            className={'center-logo'}
                            id={'aparat-center'} alt={''}/>
                        <img src={Filimo}
                            className={'center-logo'}
                            id={'filimo-center'} alt={''}/>
                        <img src={Mokhaberat}
                            className={'center-logo'}
                            id={'mokhaberat-center'} alt={''}/>
                        <img src={Astan}
                            className={'center-logo'}
                            id={'astan-center'} alt={''}/>
                        <img src={Setad}
                            className={'center-logo'}
                            id={'setad-center'} alt={''}/>
                        <img src={Keshvar}
                            className={'center-logo'}
                            id={'keshvar-center'} alt={''}/>
                        <img src={Varzesh}
                            className={'center-logo'}
                            id={'varzesh-center'} alt={''}/>
                    </motion.div>
                    <div  className={'clients-row-desktop'}>
                        <motion.div
                            title={'لنزور'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Lenzor} id={'desktop-lenzor'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'ویرا ویراست'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Vira} id={'desktop-vira'} alt={''}/>
                        </motion.div>
                    </div>
                </div>
                <div
                    className={'normal-clients-table'}
                    id={'tertiary-clients-table'}
                >
                    <div className={'clients-row-desktop'}>
                        <motion.div
                            title={'ستاد اجرایی فرمان حضرت امام'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Setad} className={'initially-hidden'} id={'desktop-setad'} alt={''}/>
                            <img src={Mokhaberat}
                                id={'mokhaberat-after-setad'}
                                className={'initially-hidden replacer-logo'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'آزمون استخدام بخش خصوصی'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Azmoon} className={'initially-hidden'} id={'desktop-azmoon'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'ایرانداک'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Irandoc} className={'initially-hidden'} id={'desktop-irandoc'} alt={''}/>
                        </motion.div>
                    </div>
                    <div className={'clients-row-desktop'}>
                        <motion.div
                            title={'فیلیمو'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Filimo}
                                className={'initially-hidden'}
                                id={'desktop-filimo'} alt={''}/>
                            <img src={AparatMobile}
                                className={'initially-hidden replacer-logo'}
                                id={'aparat-after-filimo'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'نزدیکا'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Nazdika} className={'initially-hidden'} id={'desktop-nazdika'}/>
                        </motion.div>
                        <motion.div
                            title={'بیمه پارسیان'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Bimeh} className={'initially-hidden'} id={'desktop-bimeh'} alt={''}/>
                        </motion.div>
                    </div>
                    <div className={'clients-row-desktop'}>
                        <motion.div
                            title={'تماشا'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Tamasha} className={'initially-hidden'} id={'desktop-tamasha'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'نوآوران امین'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Amin} className={'initially-hidden'} id={'desktop-amin'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'مجتمع بیمارستانی امام خمینی'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Bimarestan} className={'initially-hidden'} id={'desktop-bimarestan'} alt={''}/>
                        </motion.div>
                    </div>
                    <div className={'clients-row-desktop'}>
                        <motion.div
                            title={'ایران رایانه'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={IranRayaneh} className={'initially-hidden'} id={'desktop-iranrayaneh'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'بامداد عصر پردازش'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Bamdad} className={'initially-hidden'} id={'desktop-bamdad'} alt={''}/>
                        </motion.div>
                        <motion.div
                            title={'CIVILICA'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <img src={Civilica} className={'initially-hidden'} id={'desktop-civilica'} alt={''}/>
                        </motion.div>
                    </div>
                </div
                >
            </div>
        </div>
    )
}

export default ClientsDesktop;
