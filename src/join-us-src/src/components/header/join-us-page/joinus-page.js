import React from 'react';
import { ReactComponent as Logo } from "../../../assets/images/roshan-logosvg.svg";

import Jobinja from '../../../assets/images/jobinja.svg';
import Linkedin from '../../../assets/images/linkedin.svg';
import Mail from '../../../assets/images/mail.svg';

import './joinus-page.scss';

export default function JoinusPage() {
    return (
        <div className={'join-us-page'}>
            <div id={'wrapper'}>
                <div className='text-wrapper'>
                    <p>اگر به هوش مصنوعی و چالش‌های جذابِ آن</p>                    
                    <p>و کار در یک محیط جوان، صمیمی و پویا علاقه دارید،</p>
                    <p>جای درستی آمده‌اید.</p>
                </div>
                <div className="social">
                    <a href="mailto:salam@roshan-ai.ir">
                        <img src={Mail} alt="" width="76" height="34" />
                    </a>
                    <a href="https://jobinja.ir/companies/roshan-ai/jobs">
                        <img src={Linkedin} alt="" width="76" height="34" />
                    </a>
                    <a href="https://www.linkedin.com/company/roshan-ai/">
                        <img src={Jobinja} alt="" width="76" height="34" />
                    </a>
                </div>
            </div>
        </div>
    );
}
