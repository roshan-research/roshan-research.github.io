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

    const [right1Ref,right1InView] = useInView(observerOptions);
    const [right2Ref,right2InView] = useInView(observerOptions);
    const [left1Ref,left1InView] = useInView(observerOptions);
    const [left2Ref,left2InView] = useInView(observerOptions);

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
                            <p 
                                className={left1InView? "black-text in-view" : "black-text"}
                                ref={left1Ref}
                                data-title={"نمایش خطاهای احتمالی"}
                            >
                                نمایش خطاهای احتمالی
                            </p>

                            <p 
                                className={left1InView? "black-text-background in-view-bg" : 
                                "black-text-background"}
                                ref={left1Ref}
                                data-title={"نمایش خطاهای احتمالی"}
                            >
                                نمایش خطاهای احتمالی
                            </p>
                        </div>
                        <p className={'white-text'}>
                            مشخص کردن بخش‌هایی از خروجی که با تردید نوشته شده‌اند برای بازنگری توسط انسان
                        </p>
                    </div>
                    <div className={'ability-group on-left'} id={'left-2'}>
                        <Left2 className={'ability-icon'}/>
                        <div className={'title-stack'}>
                            <p 
                                className={left2InView? "black-text in-view" : "black-text"}
                                ref={left2Ref}
                                data-title={"امکان شخصی‌سازی"}
                            >
                                امکان شخصی‌سازی
                            </p>
                            <p 
                                className={left2InView? "black-text-background in-view-bg" : "black-text-background"}
                                ref={left2Ref}
                                data-title={"امکان شخصی‌سازی"}
                            >
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
                            <p 
                                className={right1InView? "black-text in-view":"black-text"}
                                ref={right1Ref}
                                data-title={"فهم گفتار محاوره"}
                            >
                                فهم گفتار محاوره
                            </p>
                            <p 
                                className={right1InView? "black-text-background in-view-bg":"black-text-background"}
                                ref={right1Ref}
                                data-title={"فهم گفتار محاوره"}
                            >
                                فهم گفتار محاوره
                            </p>
                        </div>
                        <p className={'white-text'}>
                            تبدیل گفتار محاوره‌ای به متن محاوره‌ای
                        </p>
                    </div>
                    <div className={'ability-group on-left'} id={'right-2'}>
                        <Right2 className={'ability-icon'}/>
                        <div className={'title-stack'}>
                            <p
                                className={right2InView? "black-text in-view":"black-text"}
                                ref={right2Ref}
                                data-title={"تحلیل برخط"}
                            >
                                تحلیل برخط
                            </p>
                            <p
                                className={right2InView? "black-text-background in-view-bg":"black-text-background"}
                                ref={right2Ref}
                                data-title={"تحلیل برخط"}
                            >
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
