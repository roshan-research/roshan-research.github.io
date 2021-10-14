import './customers-mobile.scss';
import {
    couple11Man, couple11Woman, couple12Man, couple12Woman, couple13Man, couple13Woman,

} from "../../../animations/customers-mobile/row1";
import {motion} from 'framer-motion';

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
import {ReactComponent as Varzesh} from "../../../assets/images/mobile/customers/row4/couple3/Varzesh.svg";

import {ReactComponent as Jahad} from "../../../assets/images/mobile/customers/row1/couple1/Jahad.svg";
import {ReactComponent as Bimeh} from "../../../assets/images/mobile/customers/row1/couple2/Bimeh.svg";
import {ReactComponent as Nazdika} from "../../../assets/images/mobile/customers/row1/couple3/Nazdika.svg";

import {ReactComponent as Amin} from "../../../assets/images/mobile/customers/row2/couple1/Amin.svg";
import {ReactComponent as Ammar} from "../../../assets/images/mobile/customers/row2/couple2/Ammar.svg";
import {ReactComponent as Farabi} from "../../../assets/images/mobile/customers/row2/couple3/Farabi.svg";
import {ReactComponent as Text} from '../../../assets/images/mobile/customers/text.svg'
import {
    couple21Man,
    couple21Woman,
    couple22Man,
    couple22Woman, couple23Man,
    couple23Woman
} from "../../../animations/customers-mobile/row2";


function CustomersMobile(props){
    return(
        <div id={'customers'}>
            <div id={'text'}>
                <Text/>
            </div>
            <div id={'table'}>
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
        </div>
    )
}

export default CustomersMobile;
