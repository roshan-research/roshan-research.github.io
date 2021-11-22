import React from 'react';
import './contact-us-page.scss';
import {motion} from 'framer-motion';
import imageSource from '../../../assets/images/contact-us-image.png';
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

export default function ContactUsPage(props) {
    return (
        <motion.div
            className={'contact-us-page'}
            initial={imageAnimationChooser(props).initial}
            animate={imageAnimationChooser(props).animate}
            transition={imageAnimationChooser(props).transition}
        >
            <div id={'group'}>
                <div id={'texts-links'}>
                    <p id={'in-the-name'}>
                        به نام خداوند جان و خرد
                    </p>
                    <p id={'body-text'}>
                        <span style={{color: '#0077FF'}}>روشن </span>از سال 1390 با همت جمعی از دانشجویان دانشگاه علم و صنعت ایران شروع به کار نموده است. این گروه هدف خود را تلاش در راستای تحقق تمدن نوین اسلامی میداند و در قالب شرکت دانش‌بنیان راهکار پردازش ژرف برای پاسخ به نیازهای کشور، محصولات نرم‌افزاری ارائه می‌کند.
                    </p>
                    <div id={'email-row'}>
                        <img id={'email-icon'} src={emailSource} alt={''}/>
                        <p>
                            salam@roshan-ai.ir
                        </p>
                    </div>
                    <div id={'phone-row'}>
                        <img id={'phone-icon'} src={phoneSource} alt={''}/>
                        <p>
                            91003303 21  98+
                        </p>
                    </div>
                    <div id={'address-row'}>
                        <img id={'location-icon'} src={locationSource} alt={''}/>
                        <p id={'address-text'}>
                            میدان ولیعصر، خیابان کریم‌خان زند، خیابان به‌آفرین، پلاک 30، طبقه دوم
                        </p>
                    </div>
                </div>
                <div id={'contact-image'}>
                    <img src={imageSource} id={'main-image'} alt={''}/>
                </div>
            </div>
        </motion.div>
    )
}
