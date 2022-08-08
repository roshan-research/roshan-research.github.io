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
        delay: 1000
    };

    const beforeStyle = {
        transform: 'scaleX(0)'
    };
    const afterStyle = {
        transform: 'scaleX(1)'
    };

    const beforeStyleText = {
        color: '#26FF7B'
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
                قابلیت‌های حرف
            </p>
            <div id={'side'}>
                <Side id={'side-main'}/>
            </div>
            <div id={'abilities-title-space'}/>
            <div id={'abilities-wrapper'}>
                <div id={'left'}>
                    <div style={{height: '8vw'}}/>
                    <div className={'ability-group'} id={'left-1'}>
                        <Left1 className={'ability-icon'}/>
                        <div className={'title-stack'}>
                            <p className={'black-text'} style={left1InView? afterStyleText : beforeStyleText}>
                                نمایش خطاهای احتمالی
                            </p>
                            <p className={'black-text-background'}  ref={left1Ref} style={left1InView? afterStyle : beforeStyle}>
                                نمایش خطاهای احتمالی
                            </p>
                        </div>
                        <p className={'white-text'}>
                            مشخص کردن بخش‌هایی از خروجی که با تردید نوشته شده‌اند برای بازنگری توسط انسان
                        </p>
                    </div>
                    <div className={'ability-group'} id={'left-2'}>
                        <Left2 className={'ability-icon'}/>
                        <div className={'title-stack'}>
                            <p className={'black-text'} style={left2InView? afterStyleText : beforeStyleText}>
                                امکان شخصی‌سازی
                            </p>
                            <p className={'black-text-background'}  ref={left2Ref} style={left2InView? afterStyle : beforeStyle}>
                                امکان شخصی‌سازی
                            </p>
                        </div>
                        <p className={'white-text'}>
                            افزایش دقت تبدیل از طریق آموزش سیستم با انبوهِ داده‌های خام به درخواست مشتری
                        </p>
                    </div>
                </div>
                <div id={'right'}>
                    <div className={'ability-group'} id={'right-1'}>
                        <Right1 className={'ability-icon'}/>
                        <div className={'title-stack'}>
                            <p className={'black-text'} style={right1InView? afterStyleText : beforeStyleText}>
                                فهم گفتار محاوره
                            </p>
                            <p className={'black-text-background'} ref={right1Ref} style={right1InView? afterStyle : beforeStyle}>
                                فهم گفتار محاوره
                            </p>
                        </div>
                        <p className={'white-text'}>
                            تبدیل گفتار محاوره‌ای به متن محاوره‌ای
                        </p>
                    </div>
                    <div className={'ability-group'} id={'right-2'}>
                        <Right2 className={'ability-icon'}/>
                        <div className={'title-stack'}>
                            <p className={'black-text'} style={right2InView? afterStyleText : beforeStyleText}>
                                تحلیل برخط
                            </p>
                            <p className={'black-text-background'} ref={right2Ref} style={right2InView? afterStyle : beforeStyle}>
                                تحلیل برخط
                            </p>
                        </div>
                        <p className={'white-text'}>
                            تبدیل آنی گفتار در حال پخش (استریم، پخش زنده) به متن
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AbilitiesSection;
