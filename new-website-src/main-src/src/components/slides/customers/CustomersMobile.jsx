import '../../../stylesheets/slides/customers-mobile.scss';
import {CustomerMobileAnimations} from "../../../animations/CustomerMobile";
import CustomerBoxMobile from "./CustomerBoxMobile";

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
import {ReactComponent as Filimo} from "../../../assets/images/mobile/customers/row3/couple2/Filimo.svg";
import {ReactComponent as Civilica} from "../../../assets/images/mobile/customers/row3/couple3/Civilica.svg";
import {ReactComponent as Bimarestan} from "../../../assets/images/mobile/customers/row4/couple2/Bimarestan.svg";
import {ReactComponent as Text} from '../../../assets/images/mobile/customers/text.svg';
import {ReactComponent as Aparat} from '../../../assets/images/mobile/customers/row4/couple1/Aparat.svg';
import {useEffect, useState} from "react";
import {flowerAnimation} from "../../../animations/kashf-image";
import {motion} from 'framer-motion';

function CustomersMobile(){

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 25000);
        return () => clearInterval(interval);
    })

    return(
        <div id={'customers'}>
            <div id={'text'}>
                <Text/>
            </div>
            <motion.div
                id={'table stack'}
                variants={flowerAnimation}
                initial={"hidden"}
                animate={"visible"}
                key={count}
            >
                <div className={'row'}>
                    <CustomerBoxMobile
                        animationMan={CustomerMobileAnimations.couple11Man}
                        animationWoman={CustomerMobileAnimations.couple11Woman}
                        boxID={'box-left'}
                        manComponent={<Keshvar/>}
                        womanComponent={<Jahad/>}
                    />
                    <CustomerBoxMobile
                        animationMan={CustomerMobileAnimations.couple12Man}
                        animationWoman={CustomerMobileAnimations.couple12Woman}
                        boxID={'box-middle'}
                        manComponent={<Naft/>}
                        womanComponent={<Bimeh/>}
                    />
                    <CustomerBoxMobile
                        animationMan={CustomerMobileAnimations.couple13Man}
                        animationWoman={CustomerMobileAnimations.couple13Woman}
                        boxID={'box-right'}
                        manComponent={<Ketabkhaneh/>}
                        womanComponent={<Nazdika/>}
                    />
                </div>
                <div className={'row'}>
                    <CustomerBoxMobile
                        animationMan={CustomerMobileAnimations.couple21Man}
                        animationWoman={CustomerMobileAnimations.couple21Woman}
                        boxID={'box-left'}
                        manComponent={<Setad/>}
                        womanComponent={<Amin/>}
                    />
                    <CustomerBoxMobile
                        animationMan={CustomerMobileAnimations.couple22Man}
                        animationWoman={CustomerMobileAnimations.couple22Woman}
                        boxID={'box-middle'}
                        manComponent={<Astan/>}
                        womanComponent={<Ammar/>}
                    />
                    <CustomerBoxMobile
                        animationMan={CustomerMobileAnimations.couple23Man}
                        animationWoman={CustomerMobileAnimations.couple23Woman}
                        boxID={'box-right'}
                        manComponent={<Mokhaberat/>}
                        womanComponent={<Farabi/>}
                    />
                </div>
                <div className={'row'}>
                    <CustomerBoxMobile
                        animationMan={CustomerMobileAnimations.couple31Man}
                        animationWoman={CustomerMobileAnimations.couple31Woman}
                        boxID={'box-left'}
                        manComponent={<Parsian/>}
                        womanComponent={<Fars/>}
                    />
                    <CustomerBoxMobile
                        animationMan={CustomerMobileAnimations.couple32Man}
                        animationWoman={CustomerMobileAnimations.couple32Woman}
                        boxID={'box-middle'}
                        manComponent={<Irandoc/>}
                        womanComponent={<Filimo/>}
                    />
                    <CustomerBoxMobile
                        animationMan={CustomerMobileAnimations.couple33Man}
                        animationWoman={CustomerMobileAnimations.couple33Woman}
                        boxID={'box-right'}
                        manComponent={<Azmoon/>}
                        womanComponent={<Civilica/>}
                    />
                </div>
                <div className={'row'}>
                    <CustomerBoxMobile
                        animationMan={CustomerMobileAnimations.couple41Man}
                        animationWoman={CustomerMobileAnimations.couple41Woman}
                        boxID={'box-left'}
                        manComponent={<Tamasha/>}
                        womanComponent={<Aparat/>}
                    />
                    <CustomerBoxMobile
                        animationMan={CustomerMobileAnimations.couple42Man}
                        animationWoman={CustomerMobileAnimations.couple42Woman}
                        boxID={'box-middle'}
                        manComponent={<Taghche/>}
                        womanComponent={<Bimarestan/>}
                    />
                    <CustomerBoxMobile
                        animationMan={CustomerMobileAnimations.couple43Man}
                        animationWoman={CustomerMobileAnimations.couple43Woman}
                        boxID={'box-right'}
                        manComponent={<Varzesh/>}
                        womanComponent={<Azmoon/>}
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default CustomersMobile;
