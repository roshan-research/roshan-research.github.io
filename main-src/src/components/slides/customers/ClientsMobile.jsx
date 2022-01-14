import '../../../stylesheets/slides/customers-mobile.scss';
import {ClientsMobileAnimations} from "../../../animations/Clients";
import ClientMobile from "./ClientMobile";

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
import {ReactComponent as Text} from '../../../assets/images/clients/title.svg';
import {ReactComponent as Aparat} from '../../../assets/images/clients/Aparat.svg';

import {useEffect, useState} from "react";
import {flowerAnimation} from "../../../animations/kashf-image";
import {motion} from 'framer-motion';

function ClientsMobile(){

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
                    <ClientMobile
                        animationMan={ClientsMobileAnimations.couple11Man}
                        animationWoman={ClientsMobileAnimations.couple11Woman}
                        boxID={'box-left'}
                        manComponent={<Keshvar/>}
                        womanComponent={<Jahad/>}
                    />
                    <ClientMobile
                        animationMan={ClientsMobileAnimations.couple12Man}
                        animationWoman={ClientsMobileAnimations.couple12Woman}
                        boxID={'box-middle'}
                        manComponent={<Naft/>}
                        womanComponent={<Bimeh/>}
                    />
                    <ClientMobile
                        animationMan={ClientsMobileAnimations.couple13Man}
                        animationWoman={ClientsMobileAnimations.couple13Woman}
                        boxID={'box-right'}
                        manComponent={<Ketabkhaneh/>}
                        womanComponent={<Nazdika/>}
                    />
                </div>
                <div className={'row'}>
                    <ClientMobile
                        animationMan={ClientsMobileAnimations.couple21Man}
                        animationWoman={ClientsMobileAnimations.couple21Woman}
                        boxID={'box-left'}
                        manComponent={<Setad/>}
                        womanComponent={<Amin/>}
                    />
                    <ClientMobile
                        animationMan={ClientsMobileAnimations.couple22Man}
                        animationWoman={ClientsMobileAnimations.couple22Woman}
                        boxID={'box-middle'}
                        manComponent={<Astan/>}
                        womanComponent={<Ammar/>}
                    />
                    <ClientMobile
                        animationMan={ClientsMobileAnimations.couple23Man}
                        animationWoman={ClientsMobileAnimations.couple23Woman}
                        boxID={'box-right'}
                        manComponent={<Mokhaberat/>}
                        womanComponent={<Farabi/>}
                    />
                </div>
                <div className={'row'}>
                    <ClientMobile
                        animationMan={ClientsMobileAnimations.couple31Man}
                        animationWoman={ClientsMobileAnimations.couple31Woman}
                        boxID={'box-left'}
                        manComponent={<Parsian/>}
                        womanComponent={<Fars/>}
                    />
                    <ClientMobile
                        animationMan={ClientsMobileAnimations.couple32Man}
                        animationWoman={ClientsMobileAnimations.couple32Woman}
                        boxID={'box-middle'}
                        manComponent={<Irandoc/>}
                        womanComponent={<Filimo/>}
                    />
                    <ClientMobile
                        animationMan={ClientsMobileAnimations.couple33Man}
                        animationWoman={ClientsMobileAnimations.couple33Woman}
                        boxID={'box-right'}
                        manComponent={<Azmoon/>}
                        womanComponent={<Civilica/>}
                    />
                </div>
                <div className={'row'}>
                    <ClientMobile
                        animationMan={ClientsMobileAnimations.couple41Man}
                        animationWoman={ClientsMobileAnimations.couple41Woman}
                        boxID={'box-left'}
                        manComponent={<Tamasha/>}
                        womanComponent={<Aparat/>}
                    />
                    <ClientMobile
                        animationMan={ClientsMobileAnimations.couple42Man}
                        animationWoman={ClientsMobileAnimations.couple42Woman}
                        boxID={'box-middle'}
                        manComponent={<Taghche/>}
                        womanComponent={<Bimarestan/>}
                    />
                    <ClientMobile
                        animationMan={ClientsMobileAnimations.couple43Man}
                        animationWoman={ClientsMobileAnimations.couple43Woman}
                        boxID={'box-right'}
                        manComponent={<Varzesh/>}
                        womanComponent={<Azmoon/>}
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default ClientsMobile;
