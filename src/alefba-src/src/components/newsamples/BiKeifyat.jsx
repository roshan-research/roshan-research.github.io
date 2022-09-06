import bikeifyat from '../../assets/images/samples/bikeifyat.jpg';
import TextGroup from './TextGroup';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useInView } from 'react-intersection-observer';

const BiKeifyat = () => {
    const observerOptions = {
        delay: 1000,
        triggerOnce: true,
    };

    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [bi, biInview] = useInView(observerOptions);

    let scaleW = isMobile ? 0.85 : 0.4;
    let scaleH = isMobile ? 0.61 : 0.27;

    const resizeHandler = () => {
        setWidth(scaleW * window.innerWidth);
        setHeight(scaleH * window.innerWidth);
    };

    window.addEventListener('resize', resizeHandler);

    useEffect(() => {
        resizeHandler();
    }, []);

    return (
        <div className="container">
            <div
                id="document"
                style={{ position: 'relative', transition: '0s' }}
            >
                <img
                    style={{
                        position: 'absolute',
                        left: 0,
                        width: width,
                        height: height,
                    }}
                    id="raw"
                    src={bikeifyat}
                    alt={''}
                />
                <page
                    ref={bi}
                    style={
                        biInview
                            ? {
                                  height: height,
                                  width: width,
                                  animationPlayState: 'running',
                              }
                            : {
                                  height: height,
                                  width: width,
                                  animationPlayState: 'paused',
                              }
                    }
                >
                    <div
                        className="document line-view"
                        style={{ animationPlayState: 'inherit' }}
                    >
                        <TextGroup
                            delay={'0s'}
                            fontSize={`${0.0336 * width}px`}
                            text="- یعطي أمثلة عن مرکبات کیمیائیة شائعة الاستعمال في محیطه."
                            left={`${0.26979982593559615 * width}px`}
                            top={`${0.19448373408769448 * height}px`}
                            width={`${0.669 * width}px`}
                            height={`${0.06364922206506365 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            delay={'1s'}
                            fontSize={`${0.0356 * width}px`}
                            text="- یتعرف الی بعض الکواشف (محلول قشر الفجل، محلول الملفوف البنفسجي،"
                            left={`${0.07397737162750218 * width}px`}
                            top={`${0.2758132956152758 * height}px`}
                            width={`${0.8637946040034813 * width}px`}
                            height={`${0.06364922206506365 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            delay={'1.5s'}
                            fontSize={`${0.0322 * width}px`}
                            text="محلول عباد الشمس)، ویستدل علي أنها تغیر ألوانها حسب الوسط الکیمیائي."
                            left={`${0.12619669277632725 * width}px`}
                            top={`${0.35714285714285715 * height}px`}
                            width={`${0.786 * width}px`}
                            height={`${0.06223479490806223 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            delay={'2s'}
                            fontSize={`${0.0338 * width}px`}
                            text="- یمیز بین المواد الحمضیة والمواد القلویة (القاعدیة) باستخدام أحد الکواشف."
                            left={`${0.11314186248912098 * width}px`}
                            top={`${0.43847241867043846 * height}px`}
                            width={`${0.8268059181897301 * width}px`}
                            height={`${0.06364922206506365 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            delay={'2s'}
                            fontSize={`${0.034 * width}px`}
                            text="یعطي أمثلة عن بعض الأملاح الشائعة."
                            left={`${0.5091383812010444 * width}px`}
                            top={`${0.5268741159830269 * height}px`}
                            width={`${0.4134029590948651 * width}px`}
                            height={`${0.06506364922206506 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            delay={'3.5s'}
                            fontSize={`${0.036 * width}px`}
                            text="- یعطي أمثلة عن التفاعل الکیمیائي: الاحتراق، تکون الصدأ، تفاعل الحمض مع"
                            left={`${0.05221932114882506 * width}px`}
                            top={`${0.6039603960396039 * height}px`}
                            width={`${0.8877284595300261 * width}px`}
                            height={`${0.06364922206506365 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            delay={'4s'}
                            fontSize={`${0.0335 * width}px`}
                            text="مواد کلسیة ومع بعض الفلزات."
                            left={`${0.587467362924282 * width}px`}
                            top={`${0.685997171145686 * height}px`}
                            width={`${0.3263707571801567 * width}px`}
                            height={`${0.056577086280056574 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            delay={'5s'}
                            fontSize={`${0.034 * width}px`}
                            text="- یستدل علي حدوث تفاعل کیمیائي من ملاحظة انتاج مادة أو مواد جدیدة."
                            left={`${0.14795474325500435 * width}px`}
                            top={`${0.7708628005657708 * height}px`}
                            width={`${0.7963446475195822 * width}px`}
                            height={`${0.06082036775106082 * height}px`}
                            linetype="line"
                        />
                    </div>
                </page>
            </div>
        </div>
    );
};

export default BiKeifyat;
