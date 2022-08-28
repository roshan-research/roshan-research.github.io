import '../stylesheets/abilities-section.scss';
import {ReactComponent as Side} from "../assets/images/abilities/side.svg";
import {ReactComponent as Right1} from "../assets/images/abilities/right-1.svg";
import {ReactComponent as Right2} from "../assets/images/abilities/right-2.svg";
import {ReactComponent as Right3} from "../assets/images/abilities/right-3.svg";
import {ReactComponent as Left1} from "../assets/images/abilities/left-1.svg";
import {ReactComponent as Left2} from "../assets/images/abilities/left-2.svg";
import {ReactComponent as Left3} from "../assets/images/abilities/left-3.svg";
import { useInView } from 'react-intersection-observer';

const AbilitiesSection = () => {

    const observerOptions = {
        delay: 1000,
        triggerOnce: true
    };

    const beforeStyle = {
        transform: 'scaleX(0)'
    };
    const afterStyle = {
        transform: 'scaleX(1)'
    };

    const beforeStyleText = {
        color: '#FF6200'
    };
    const afterStyleText = {
        color: 'black'
    };

    const [right1Ref,right1InView] = useInView(observerOptions);
    const [right2Ref,right2InView] = useInView(observerOptions);
    const [right3Ref,right3InView] = useInView(observerOptions);
    const [left1Ref,left1InView] = useInView(observerOptions);
    const [left2Ref,left2InView] = useInView(observerOptions);
    const [left3Ref,left3InView] = useInView(observerOptions);

    return(
        <div id={'abilities'}>
            <p id={'abilities-title'}>
                قابلیت‌های الفبا
            </p>
            <div id={'side'}>
                <Side id={'side-main'}/>
            </div>
            <div id={'abilities-wrapper'}>
                <div id={'left'}>
                    <div style={{height: '8vw'}}/>
                    <div className={'ability-group'} id={'left-1'}>
                        <Left1 className={'ability-icon'}/>
                        <div className={'title-stack'}>
                            <p className={'black-text'} style={left1InView? afterStyleText : beforeStyleText}>
                                تشخیص چند زبان
                            </p>
                            <p className={'black-text-background'}  ref={left1Ref} style={left1InView? afterStyle : beforeStyle}>
                                تشخیص چند زبان
                            </p>
                        </div>
                        <p className={'white-text'}>
                            تشخیص زبان فارسی، انگلیسی و زبان‌های مشابه فارسی، مثل عربی و دری
                        </p>
                    </div>
                    <div className={'ability-group on-left'} id={'left-2'}>
                        <Left2 className={'ability-icon'}/>
                        <div className={'title-stack'}>
                            <p className={'black-text'} style={left2InView? afterStyleText : beforeStyleText}>
                                اصلاح تصویر
                            </p>
                            <p className={'black-text-background'}  ref={left2Ref} style={left2InView? afterStyle : beforeStyle}>
                                اصلاح تصویر
                            </p>
                        </div>
                        <p className={'white-text'}>
                            اصلاح نویز، چرخش و سایه تصویر برای دقیق‌تر خواندن متن
                        </p>
                    </div>
                    <div className={'ability-group'} id={'left-3'}>
                        <Left3 className={'ability-icon'}/>
                        <div className={'title-stack'}>
                            <p className={'black-text'} style={left3InView? afterStyleText : beforeStyleText}>
                                خواندن حرکت‌های حروف
                            </p>
                            <p className={'black-text-background'} ref={left3Ref} style={left3InView? afterStyle : beforeStyle}>
                                خواندن حرکت‌های حروف
                            </p>
                        </div>
                        <p className={'white-text'}>
                        خواندن نوشته ها و حذف حرکت ها از کلمات فارسی و عربی
                        </p>
                    </div>
                </div>
                <div id={'right'}>
                    <div className={'ability-group on-left'} id={'right-1'}>
                        <Right1 className={'ability-icon'}/>
                        <div className={'title-stack'}>
                            <p className={'black-text'} style={right1InView? afterStyleText : beforeStyleText}>
                                خواندن قلم‌های گوناگون
                            </p>
                            <p className={'black-text-background'} ref={right1Ref} style={right1InView? afterStyle : beforeStyle}>
                                خواندن قلم‌های گوناگون
                            </p>
                        </div>
                        <p className={'white-text'}>
                        خواندن متن‌‌ با فونت ها و اندازه‌های گوناگو‌ن؛ مثل عنوان، متن یا پاورقی
                        </p>
                    </div>
                    <div className={'ability-group'} id={'right-2'}>
                        <Right2 className={'ability-icon'}/>
                        <div className={'title-stack'}>
                            <p className={'black-text'} style={right2InView? afterStyleText : beforeStyleText}>
                                حفظ ساختار سند
                            </p>
                            <p className={'black-text-background'} ref={right2Ref} style={right2InView? afterStyle : beforeStyle}>
                                حفظ ساختار سند
                            </p>
                        </div>
                        <p className={'white-text'}>
                        حفظ طول جملات، پاراگراف‌ها، جداول، فواصل و موقعیت تصاویر
                        </p>
                    </div>
                    <div className={'ability-group on-left'} id={'right-3'}>
                        <Right3 className={'ability-icon'}/>
                        <div className={'title-stack'}>
                            <p className={'black-text'} style={right3InView? afterStyleText : beforeStyleText}>
                            تعیین خطاهای احتمالی
                            </p>
                            <p className={'black-text-background'} ref={right3Ref} style={right3InView? afterStyle : beforeStyle}>
                            تعیین خطاهای احتمالی
                            </p>
                        </div>
                        <p className={'white-text'}>
                        مشخص کردن بخش‌هایی از نوشته که با «تردید» خوانده شده‌اند، برای بازنگری توسط انسان
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AbilitiesSection;
