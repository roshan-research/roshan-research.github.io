import './customers-mobile.scss';
import {motion} from 'framer-motion';
import customersAnimation from "../../../animations/customers-mobile";
import {ReactComponent as Keshvar} from "../../../assets/images/mobile/customers/row1/couple1/Keshvar.svg";
import {ReactComponent as Naft} from "../../../assets/images/mobile/customers/row1/couple2/Naft.svg";
import {ReactComponent as Ketabkhaneh} from "../../../assets/images/mobile/customers/row1/couple3/Ketabkhaneh.svg";
import {ReactComponent as Setad} from "../../../assets/images/mobile/customers/row2/couple1/Setad.svg";
import {ReactComponent as Astan} from "../../../assets/images/mobile/customers/row2/couple2/Astan.svg";
import {ReactComponent as Mokhaberat} from "../../../assets/images/mobile/customers/row2/couple3/Mokhaberat.svg";
import {ReactComponent as Parsian} from "../../../assets/images/mobile/customers/row3/couple1/Parsian.svg";
import {ReactComponent as Irandoc} from "../../../assets/images/mobile/customers/row3/couple2/Irandoc.svg";
import {ReactComponent as Azmoon} from "../../../assets/images/mobile/customers/row3/couple3/Azmoon.svg";
import {ReactComponent as Tamasha} from "../../../assets/images/mobile/customers/row4/couple1/Tamasha.svg";
import {ReactComponent as Taghche} from "../../../assets/images/mobile/customers/row4/couple2/Taghche.svg";
import {ReactComponent as Varzesh} from "../../../assets/images/mobile/customers/row4/couple1/Varzesh.svg";
import {ReactComponent as Jahad} from "../../../assets/images/mobile/customers/row1/couple1/Jahad.svg";
import {ReactComponent as Bimeh} from "../../../assets/images/mobile/customers/row1/couple2/Bimeh.svg";
import {ReactComponent as Nazdika} from "../../../assets/images/mobile/customers/row1/couple3/Nazdika.svg";
import {ReactComponent as Amin} from "../../../assets/images/mobile/customers/row2/couple1/Amin.svg";
import {ReactComponent as Ammar} from "../../../assets/images/mobile/customers/row2/couple2/Ammar.svg";
import {ReactComponent as Farabi} from "../../../assets/images/mobile/customers/row2/couple3/Farabi.svg";
import {ReactComponent as Fars} from "../../../assets/images/mobile/customers/row3/couple1/Fars.svg";
import {ReactComponent as Tabeii} from "../../../assets/images/mobile/customers/row3/couple2/Tabeii.svg";
import {ReactComponent as Civilica} from "../../../assets/images/mobile/customers/row3/couple3/Civilica.svg";
import {ReactComponent as Bimarestan} from "../../../assets/images/mobile/customers/row4/couple2/Bimarestan.svg";
import {ReactComponent as Text} from '../../../assets/images/mobile/customers/text.svg'

const couple11Man = customersAnimation(10, 0, 1, 0);
const couple11Woman = customersAnimation(10, 0, 0, 1);
const couple12Man = customersAnimation(10, 4, 1, 0);
const couple12Woman = customersAnimation(10, 4, 0, 1);
const couple13Man = customersAnimation(10, 10, 1, 0);
const couple13Woman = customersAnimation(10, 10, 0, 1);
const couple21Man = customersAnimation(5, 2, 1, 0);
const couple21Woman = customersAnimation(5, 2, 0, 1);
const couple22Man = customersAnimation(15, 7, 1, 0);
const couple22Woman = customersAnimation(15, 7, 0, 1);
const couple23Man = customersAnimation(6, 10, 1, 0);
const couple23Woman = customersAnimation(6, 10, 0, 1);
const couple31Man = customersAnimation(5, 3, 1, 0);
const couple31Woman = customersAnimation(5, 3, 0, 1);
const couple32Man = customersAnimation(5, 14, 1, 0);
const couple32Woman = customersAnimation(5, 14, 0, 1);
const couple33Man = customersAnimation(20, 3, 1, 0);
const couple33Woman = customersAnimation(20, 3, 0, 1);
const couple41Man = customersAnimation(13, 0, 1, 0);
const couple41Woman = customersAnimation(13, 0, 0, 1);
const couple42Man = customersAnimation(10, 4, 1, 0);
const couple42Woman = customersAnimation(10, 4, 0, 1);
const couple43Man = customersAnimation(10, 9, 1, 0);
const couple43Woman = customersAnimation(10, 9, 0, 1);

function CustomersMobile(props){
    return(
        <div id={'customers'}>
            <div id={'text'}>
                <Text/>
            </div>
            <div id={'table stack'}>
                <div className={'row'}>
                    <div className={'box'} id={'box-left'}>
                        <motion.div
                            className={'box'}
                            id={'stack'}
                            initial={couple11Man.initial}
                            animate={couple11Man.animate}
                            transition={couple11Man.transition}
                        >
                            <Keshvar/>
                        </motion.div>
                        <motion.div
                            className={'box'}
                            id={'stack'}
                            initial={couple11Woman.initial}
                            animate={couple11Woman.animate}
                            transition={couple11Woman.transition}
                        >
                            <Jahad/>
                        </motion.div>
                    </div>
                    <div className={'box'} id={'box-middle'}>
                        <motion.div
                            className={'box'}
                            id={'stack'}
                            initial={couple12Man.initial}
                            animate={couple12Man.animate}
                            transition={couple12Man.transition}
                        >
                            <Naft/>
                        </motion.div>
                        <motion.div
                            className={'box'}
                            id={'stack'}
                            initial={couple12Woman.initial}
                            animate={couple12Woman.animate}
                            transition={couple12Woman.transition}
                        >
                            <Bimeh/>
                        </motion.div>
                    </div>
                    <div className={'box'} id={'box-right'}>
                        <motion.div
                            className={'box'}
                            id={'stack'}
                            initial={couple13Man.initial}
                            animate={couple13Man.animate}
                            transition={couple13Man.transition}
                        >
                            <Ketabkhaneh/>
                        </motion.div>
                        <motion.div
                            className={'box'}
                            id={'stack'}
                            initial={couple13Woman.initial}
                            animate={couple13Woman.animate}
                            transition={couple13Woman.transition}
                        >
                            <Nazdika/>
                        </motion.div>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'box'} id={'box-left'}>
                        <motion.div
                            className={'box'}
                            id={'stack'}
                            initial={couple21Man.initial}
                            animate={couple21Man.animate}
                            transition={couple21Man.transition}
                        >
                            <Setad/>
                        </motion.div>
                        <motion.div
                            className={'box'}
                            id={'stack'}
                            initial={couple21Woman.initial}
                            animate={couple21Woman.animate}
                            transition={couple21Woman.transition}
                        >
                            <Amin/>
                        </motion.div>
                    </div>
                    <div className={'box'} id={'box-middle'}>
                        <motion.div
                            className={'box'}
                            id={'stack'}
                            initial={couple22Man.initial}
                            animate={couple22Man.animate}
                            transition={couple22Man.transition}
                        >
                            <Astan/>
                        </motion.div>
                        <motion.div
                            className={'box'}
                            id={'stack'}
                            initial={couple22Woman.initial}
                            animate={couple22Woman.animate}
                            transition={couple22Woman.transition}
                        >
                            <Ammar/>
                        </motion.div>
                    </div>
                    <div className={'box'} id={'box-right'}>
                        <motion.div
                            className={'box'}
                            id={'stack'}
                            initial={couple23Man.initial}
                            animate={couple23Man.animate}
                            transition={couple23Man.transition}
                        >
                            <Mokhaberat/>
                        </motion.div>
                        <motion.div
                            className={'box'}
                            id={'stack'}
                            initial={couple23Woman.initial}
                            animate={couple23Woman.animate}
                            transition={couple23Woman.transition}
                        >
                            <Farabi/>
                        </motion.div>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'box'} id={'box-left'}>
                        <motion.div
                            className={'box'}
                            id={'stack'}
                            initial={couple31Man.initial}
                            animate={couple31Man.animate}
                            transition={couple31Man.transition}
                        >
                            <Parsian/>
                        </motion.div>
                        <motion.div
                            className={'box'}
                            id={'stack'}
                            initial={couple31Woman.initial}
                            animate={couple31Woman.animate}
                            transition={couple31Woman.transition}
                        >
                            <Fars/>
                        </motion.div>
                    </div>
                    <div className={'box'} id={'box-middle'}>
                        <motion.div
                            className={'box'}
                            id={'stack'}
                            initial={couple32Man.initial}
                            animate={couple32Man.animate}
                            transition={couple32Man.transition}
                        >
                            <Irandoc/>
                        </motion.div>
                        <motion.div
                            className={'box'}
                            id={'stack'}
                            initial={couple32Woman.initial}
                            animate={couple32Woman.animate}
                            transition={couple32Woman.transition}
                        >
                            <Tabeii/>
                        </motion.div>
                    </div>
                    <div className={'box'} id={'box-right'}>
                        <motion.div
                            className={'box'}
                            id={'stack'}
                            initial={couple33Man.initial}
                            animate={couple33Man.animate}
                            transition={couple33Man.transition}
                        >
                            <Azmoon/>
                        </motion.div>
                        <motion.div
                            className={'box'}
                            id={'stack'}
                            initial={couple33Woman.initial}
                            animate={couple33Woman.animate}
                            transition={couple33Woman.transition}
                        >
                            <Civilica/>
                        </motion.div>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'box'} id={'box-left'}>
                        <motion.div
                            className={'box'}
                            id={'stack'}
                            initial={couple41Man.initial}
                            animate={couple41Man.animate}
                            transition={couple41Man.transition}
                        >
                            <Tamasha/>
                        </motion.div>
                        <motion.div
                            className={'box'}
                            id={'stack'}
                            initial={couple41Woman.initial}
                            animate={couple41Woman.animate}
                            transition={couple41Woman.transition}
                        >
                            <Ketabkhaneh/>
                        </motion.div>
                    </div>
                    <div className={'box'} id={'box-middle'}>
                        <motion.div
                            className={'box'}
                            id={'stack'}
                            initial={couple42Man.initial}
                            animate={couple42Man.animate}
                            transition={couple42Man.transition}
                        >
                            <Taghche/>
                        </motion.div>
                        <motion.div
                            className={'box'}
                            id={'stack'}
                            initial={couple42Woman.initial}
                            animate={couple42Woman.animate}
                            transition={couple42Woman.transition}
                        >
                            <Bimarestan/>
                        </motion.div>
                    </div>
                    <div className={'box'} id={'box-right'}>
                        <motion.div
                            className={'box'}
                            id={'stack'}
                            initial={couple43Man.initial}
                            animate={couple43Man.animate}
                            transition={couple43Man.transition}
                        >
                            <Varzesh/>
                        </motion.div>
                        <motion.div
                            className={'box'}
                            id={'stack'}
                            initial={couple43Woman.initial}
                            animate={couple43Woman.animate}
                            transition={couple43Woman.transition}
                        >
                            <Azmoon/>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomersMobile;
