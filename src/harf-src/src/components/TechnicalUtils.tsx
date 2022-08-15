import '../stylesheets/technical-utils.scss';
import Left1 from "../assets/images/utils/left-1.svg";
import Left2 from "../assets/images/utils/left-2.svg";
import Right1 from "../assets/images/utils/right-1.svg";
import Right2 from "../assets/images/utils/right-2.svg";

import {ReactComponent as Accuracy} from "../assets/images/utils/accuracy-mobile.svg";
import {ReactComponent as Parallel} from "../assets/images/utils/parallel-mobile.svg";
import {ReactComponent as NLP} from "../assets/images/utils/nlp-mobile.svg";
import {ReactComponent as Deep} from "../assets/images/utils/deep-mobile.svg";
import {useInView} from "react-intersection-observer";

const TechnicalUtils = () => {

    const observerOptions = {
        delay: 1000,
        triggerOnce: true
    };

    const [right1Ref,right1InView] = useInView(observerOptions);
    const [right2Ref,right2InView] = useInView(observerOptions);
    const [left1Ref,left1InView] = useInView(observerOptions);
    const [left2Ref,left2InView] = useInView(observerOptions);

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

    return(
        <div id={'tech-utils'}>
            <p id={'utils-title'}>
                امکانات فنی حرف
            </p>
            <div style={{height: '15vh'}}/>
            <div id={'utils-wrapper'}>
                <div id={'left-utils'}>
                    <div className={'util-group right-to-left'} id={'left-1'}>
                        <Accuracy id={'accuracy'}/>
                        <div className={'util-row'}>
                            <div className={'title-stack-utils'}>
                                <p className={'black-util-text'} style={left1InView? afterStyleText : beforeStyleText}>
                                    دقت و سرعت
                                </p>
                                <p className={'black-util-text-background'} ref={left1Ref} style={left1InView? afterStyle : beforeStyle}>
                                    دقت و سرعت
                                </p>
                            </div>
                        </div>
                        <img src={Left1} id={'left1-icon'} alt={''}/>
                        <p className={'white-util-text'}>
                            حرف با دقت واژه‌ای ۹۲٪ گفتار را به متن تبدیل می‌کند و با سخت‌افزار مناسب می‌تواند یک ساعت صدا را تقریبا در زمان یک دقیقه تحلیل کند.
                        </p>
                    </div>
                    <div id={'right-space'}/>
                    <div className={'util-group left-to-right'} id={'right-1'}>
                        <NLP id={'nlp'}/>
                        <div className={'util-row left-to-right-row1'}>
                            <div className={'title-stack-utils'}>
                                <p className={'black-util-text'} style={right1InView? afterStyleText : beforeStyleText}>
                                    فهم زبان فارسی
                                </p>
                                <p className={'black-util-text-background'} ref={right1Ref} style={right1InView? afterStyle : beforeStyle}>
                                    فهم زبان فارسی
                                </p>
                            </div>
                        </div>
                        <img src={Right1} id={'right1-icon'} alt={''}/>
                        <p className={'white-util-text left-to-right'}>
                            حرف، جمله‌های فارسی را می‌شناسد. یعنی وقتی که میان چند واژه تردید دارد، واژه‌ای را انتخاب می‌کند که دیگر کلمات گفتار را بهتر تکمیل می‌کند.
                        </p>
                    </div>
                </div>
                <div id={'right-utils'}>
                    <div id={'right-space'}/>
                    <div className={'util-group right-to-left'} id={'left-2'}>
                        <Parallel id={'parallel'}/>
                        <div className={'util-row'}>
                            <div className={'title-stack-utils'}>
                                <p className={'black-util-text'} style={left2InView? afterStyleText : beforeStyleText}>
                                    پردازش موازی
                                </p>
                                <p className={'black-util-text-background'} ref={left2Ref} style={left2InView? afterStyle : beforeStyle}>
                                    پردازش موازی
                                </p>
                            </div>
                        </div>
                        <img src={Left2} id={'left2-icon'} alt={''}/>
                        <p className={'white-util-text'}>
                            حرف می‌تواند با استفاده از پردازنده گرافیکی (کارت گرافیک)، داده‌ها را چند برابر سریع‌تر پردازش کند. همچنین پردازش توزیع‌شده، امکان تحلیل انبوه داده‌ها را فراهم می‌کند.
                        </p>
                    </div>
                    <div id={'right-space'}/>
                    <div className={'util-group left-to-right'} id={'right-2'}>
                        <Deep id={'deep'}/>
                        <div className={'util-row left-to-right-row2'}>
                            <div className={'title-stack-utils'}>
                                <p className={'black-util-text'} style={right2InView? afterStyleText : beforeStyleText}>
                                    یادگیری عمیق
                                </p>
                                <p className={'black-util-text-background'} ref={right2Ref} style={right2InView? afterStyle : beforeStyle}>
                                    یادگیری عمیق
                                </p>
                            </div>
                        </div>
                        <img src={Right2} id={'right2-icon'} alt={''}/>
                        <p className={'white-util-text left-to-right'}>
                            حرف با کمک فناوری روز دنیا یعنی یادگیری عمیق، تبدیل کردن گفتار افراد مختلف به نوشته را یاد گرفته است. هوش مصنوعی با کمک این فناوری توانسته است در بعضی کارها از هوش انسانی پیشی بگیرد.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnicalUtils;
