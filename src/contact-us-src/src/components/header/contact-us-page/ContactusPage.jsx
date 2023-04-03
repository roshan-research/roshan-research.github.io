import React from 'react';
import './contact-us-page.scss';
import {motion} from 'framer-motion';
import emailSource from '../../../assets/images/email-icon.svg';
import phoneSource from '../../../assets/images/phone-icon.svg';
import locationSource from '../../../assets/images/location-icon.svg';

import {noneAnimation, startingAnimation} from "../../../animations/main-page";

const imageAnimationChooser = (props) => {
    if(props.shouldRerender){
        return startingAnimation;
    } else {
        return noneAnimation;
    }
};

export default function ContactusPage(props) {
    return (
        <motion.div
            className={'contact-us-page'}
            initial={imageAnimationChooser(props).initial}
            animate={imageAnimationChooser(props).animate}
            transition={imageAnimationChooser(props).transition}
        >
            <div id={'group'}>
                <div id={'texts-links'}>
                    {/*<p id={'in-the-name'}>*/}
                    {/*    به نام خداوند جان و خرد*/}
                    {/*</p>*/}
                    {/*<p id={'body-text'}>*/}
                    {/*    <span style={{color: '#0077FF'}}>روشن </span>از سال 1390 با همت جمعی از دانشجویان دانشگاه علم و صنعت ایران شروع به کار نموده است. این گروه هدف خود را تلاش در راستای تحقق تمدن نوین اسلامی میداند و در قالب شرکت دانش‌بنیان راهکار پردازش ژرف برای پاسخ به نیازهای کشور، محصولات نرم‌افزاری ارائه می‌کند.*/}
                    {/*</p>*/}
                    <div id={'email-row'}>
                        <img id={'email-icon'} src={emailSource} alt={''}/>
                        <a href={'mailto:salam@roshan-ai.ir'} className={'link-content'}>
                            <p id={'email-text'}>
                                salam@roshan-ai.ir
                            </p>
                        </a>
                    </div>
                    <div id={'phone-row'}>
                        <img id={'phone-icon'} src={phoneSource} alt={''}/>
                        <p id={'phone-text'} className={'link-content'}>                            
                            <a href={'tel:+98 21 88943638'}>
                                88943638 21 98+
                            </a>
                        </p>
                    </div>
                    <div id={'address-row'}>
                        <img id={'location-icon'} src={locationSource} alt={''}/>
                        <a href={'geo:35.7113,51.4105;u=35'} id={'location-row'}>
                            <p id={'address-text'} className={'link-content'}>
                                تهران، میدان ولیعصر،
                                <br/>
                                بلوار کریمخان، خیابان به‌آفرین، پلاک 30
                            </p>
                        </a>
                    </div>
                </div>
                <div id={'image-wrapper'}>
                </div>
            </div>
        </motion.div>
    )
}
