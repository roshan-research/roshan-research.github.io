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
import {ReactComponent as Barid} from '../../../assets/images/clients/Barid.svg';
import {ReactComponent as Savaneh} from '../../../assets/images/clients/Savaneh.svg';
import {ReactComponent as Lenzor} from '../../../assets/images/clients/Lenzor.svg';
import {ReactComponent as Vira} from '../../../assets/images/clients/Vira.svg';
import {ReactComponent as Bamdad} from '../../../assets/images/clients/Bamdad.svg';
import {ReactComponent as IranRayaneh} from '../../../assets/images/clients/IranRayaneh.svg';
import {ReactComponent as AparatMobile} from '../../../assets/images/clients/Aparat.svg';

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
                            <Ketabkhaneh id={'desktop-ketabkhaneh'}/>
                        </motion.div>
                        <motion.div
                            title={'شرکت ملی پالایش نفت و فرآورده های نفتی ایران'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Naft id={'desktop-naft'}/>
                        </motion.div>
                        <motion.div
                            title={'وزارت کشور'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Keshvar id={'desktop-keshvar'}/>
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
                            <Parsian id={'desktop-parsian'}/>
                        </motion.div>
                        <motion.div
                            title={'طاقچه'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Taghche id={'desktop-taghche'}/>
                        </motion.div>
                        <motion.div
                            title={'ورزش سه'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Varzesh id={'desktop-varzesh'}/>
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
                            <Jahad id={'desktop-jahad'}/>
                        </motion.div>
                        <motion.div
                            title={'بنیاد سینمایی فارابی'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Farabi id={'desktop-farabi'}/>
                        </motion.div>
                        <motion.div
                            title={'جشنواره مردمی فیلم عمار'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Ammar id={'desktop-ammar'}/>
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
                            <Barid id={'desktop-barid'}/>
                        </motion.div>
                        <motion.div
                            title={'فارس'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Fars id={'desktop-fars'}/>
                        </motion.div>
                        <motion.div
                            title={'پژوهشکده سوانح طبیعی'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Savaneh id={'desktop-savaneh'}/>
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
                            <Mokhaberat id={'desktop-mokhaberat'}/>
                        </motion.div>
                        <motion.div
                            title={'آستان قدس رضوی'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Astan id={'desktop-astan'}/>
                        </motion.div>
                        <motion.div
                            title={'آپارات'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <AparatMobile id={'desktop-keshvar'}/>
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
                            <Lenzor id={'desktop-lenzor'}/>
                        </motion.div>
                        <motion.div
                            title={'ویرا ویراست'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Vira id={'desktop-vira'}/>
                        </motion.div>
                        <motion.div
                            title={'پژوهشکده فناوری اطلاعات و ارتباطات'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Jahad id={'desktop-jahad'}/>
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
                            <Farabi id={'desktop-farabi'}/>
                        </motion.div>
                        <motion.div
                            title={'جشنواره مردمی فیلم عمار'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Ammar id={'desktop-ammar'}/>
                        </motion.div>
                        <motion.div
                            title={'برید سامانه نوین'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Barid id={'desktop-barid'}/>
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
                            <Fars id={'desktop-fars'}/>
                        </motion.div>
                        <motion.div
                            title={'پژوهشکده سوانح طبیعی'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Savaneh id={'desktop-savaneh'}/>
                        </motion.div>
                        <motion.div
                            title={'آپارات'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <AparatMobile id={'desktop-keshvar'}/>
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
                            <Mokhaberat id={'desktop-mokhaberat'}/>
                        </motion.div>
                        <motion.div
                            title={'آستان قدس رضوی'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Astan id={'desktop-astan'}/>
                        </motion.div>
                    </div>
                    <motion.div
                        title={'آپارات'}
                        variants={ClientsAnimationsDesktop(status)}
                        initial={"hidden"}
                        animate={"visible"}
                    >
                        <AparatDesktop id={'aparat-desktop'}/>
                    </motion.div>
                    <div  className={'clients-row-desktop'}>
                        <motion.div
                            title={'لنزور'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Lenzor id={'desktop-lenzor'}/>
                        </motion.div>
                        <motion.div
                            title={'ویرا ویراست'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Vira id={'desktop-vira'}/>
                        </motion.div>
                    </div>
                </div
                >
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
                            <Setad id={'desktop-setad'}/>
                        </motion.div>
                        <motion.div
                            title={'آزمون استخدام بخش خصوصی'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Azmoon id={'desktop-azmoon'}/>
                        </motion.div>
                        <motion.div
                            title={'ایرانداک'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Irandoc id={'desktop-irandoc'}/>
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
                            <Filimo id={'desktop-filimo'}/>
                        </motion.div>
                        <motion.div
                            title={'نزدیکا'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Nazdika id={'desktop-nazdika'}/>
                        </motion.div>
                        <motion.div
                            title={'بیمه پارسیان'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Bimeh id={'desktop-bimeh'}/>
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
                            <Tamasha id={'desktop-tamasha'}/>
                        </motion.div>
                        <motion.div
                            title={'نوآوران امین'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Amin id={'desktop-amin'}/>
                        </motion.div>
                        <motion.div
                            title={'مجتمع بیمارستانی امام خمینی'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Bimarestan id={'desktop-bimarestan'}/>
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
                            <IranRayaneh id={'desktop-iranrayaneh'}/>
                        </motion.div>
                        <motion.div
                            title={'بامداد عصر پردازش'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Bamdad id={'desktop-bamdad'}/>
                        </motion.div>
                        <motion.div
                            title={'CIVILICA'}
                            variants={ClientsAnimationsDesktop(status)}
                            initial={"hidden"}
                            animate={"visible"}
                            className={'client-desktop'}
                        >
                            <Civilica id={'desktop-civilica'}/>
                        </motion.div>
                    </div>
                </div
                >
            </div>
        </div>
    )
}

export default ClientsDesktop;
