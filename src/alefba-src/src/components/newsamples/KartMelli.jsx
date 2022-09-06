import kart from '../../assets/images/samples/kart.png';
import '../../stylesheets/fish.scss';
import TextGroup from './TextGroup';
import { useCallback, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useInView } from 'react-intersection-observer';

const KartMelli = () => {
    const observerOptions = {
        delay: 1000,
        triggerOnce: true,
    };
    const [kartMelli, kartInview] = useInView(observerOptions);

    let scaleW = isMobile ? 0.85 : 0.4;
    let scaleH = isMobile ? 0.61 : 0.27;

    const [width, setWidth] = useState(scaleW * window.innerWidth);
    const [height, setHeight] = useState(scaleH * window.innerWidth);

    const resizeHandler = useCallback(() => {
        setWidth(scaleW * window.innerWidth);
        setHeight(scaleH * window.innerWidth);
    }, [scaleW, scaleH]);

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, [resizeHandler]);

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
                    src={kart}
                    alt={''}
                />
                <page
                    ref={kartMelli}
                    style={
                        kartInview
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
                            fontSize={`${0.02 * width}px`}
                            text="جمهوری اسلامی ایران"
                            left={`${0.8104 * width}px`}
                            top={`${0.15901712111604312 * height}px`}
                            width={`${0.15 * width}px`}
                            height={`${0.043899809765377296 * height}px`}
                        />
                        <TextGroup
                            delay={'2s'}
                            fontSize={`${0.082 * width}px`}
                            text="کارت ملی"
                            left={`${0.368 * width}px`}
                            top={`${0.04185161699429296 * height}px`}
                            width={`${0.252 * width}px`}
                            height={`${0.14204185161699429 * height}px`}
                        />
                        <TextGroup
                            delay={'2.5s'}
                            fontSize={`${0.0507 * width}px`}
                            text="شماره ملی: ۰۰۴۰۳۱۶۲۸۵"
                            left={`${0.555 * width}px`}
                            top={`${0.2593532022828155 * height}px`}
                            width={`${0.41 * width}px`}
                            height={`${0.08560558021559923 * height}px`}
                        />
                        <TextGroup
                            delay={'3s'}
                            fontSize={`${0.032 * width}px`}
                            text="نام :"
                            left={`${0.81 * width}px`}
                            top={`${0.37476220672162336 * height}px`}
                            width={`${0.045 * width}px`}
                            height={`${0.054533925174381735 * height}px`}
                        />
                        <TextGroup
                            delay={'4.5s'}
                            fontSize={`${0.05 * width}px`}
                            text="حمید رضا"
                            left={`${0.6368 * width}px`}
                            top={`${0.34876347495244137 * height}px`}
                            width={`${0.15 * width}px`}
                            height={`${0.08116677235256817 * height}px`}
                        />
                        <TextGroup
                            delay={'4s'}
                            fontSize={`${0.03 * width}px`}
                            text="نام خانوادگی :"
                            left={`${0.8016 * width}px`}
                            top={`${0.47114774889029803 * height}px`}
                            width={`${0.136 * width}px`}
                            height={`${0.0653138871274572 * height}px`}
                        />
                        <TextGroup
                            delay={'5s'}
                            fontSize={`${0.05 * width}px`}
                            text="نکویی"
                            left={`${0.6884 * width}px`}
                            top={`${0.4438807863031072 * height}px`}
                            width={`${0.1 * width}px`}
                            height={`${0.08877615726062144 * height}px`}
                        />
                        <TextGroup
                            delay={'5.5s'}
                            fontSize={`${0.03 * width}px`}
                            text="تاریخ تولد :"
                            left={`${0.8076 * width}px`}
                            top={`${0.5713379835129994 * height}px`}
                            width={`${0.1052 * width}px`}
                            height={`${0.05960684844641725 * height}px`}
                        />
                        <TextGroup
                            delay={'7.5s'}
                            fontSize={`${0.051 * width}px`}
                            text="۱۳۶۷/۰۲/۲۶"
                            left={`${0.56 * width}px`}
                            top={`${0.5440710209258085 * height}px`}
                            width={`${0.221 * width}px`}
                            height={`${0.08370323398858592 * height}px`}
                        />
                        <TextGroup
                            delay={'8s'}
                            fontSize={`${0.0335 * width}px`}
                            text="نام پدر :"
                            left={`${0.8032 * width}px`}
                            top={`${0.6702599873176919 * height}px`}
                            width={`${0.0876 * width}px`}
                            height={`${0.060240963855421686 * height}px`}
                        />
                        <TextGroup
                            delay={'10s'}
                            fontSize={`${0.045 * width}px`}
                            text="محمد"
                            left={`${0.7 * width}px`}
                            top={`${0.6525047558655676 * height}px`}
                            width={`${0.084 * width}px`}
                            height={`${0.07102092580849714 * height}px`}
                        />
                        <TextGroup
                            delay={'10.5s'}
                            fontSize={`${0.029 * width}px`}
                            text="پایان اعتبار :"
                            left={`${0.806 * width}px`}
                            top={`${0.7653772986683577 * height}px`}
                            width={`${0.1164 * width}px`}
                            height={`${0.060240963855421686 * height}px`}
                        />
                        <TextGroup
                            delay={'12s'}
                            fontSize={`${0.0555 * width}px`}
                            text="۱۴۰۳/۰۸/۱۲"
                            left={`${0.56 * width}px`}
                            top={`${0.7577679137603044 * height}px`}
                            width={`${0.23 * width}px`}
                            height={`${0.07102092580849714 * height}px`}
                        />
                    </div>
                </page>
            </div>
        </div>
    );
};

export default KartMelli;
