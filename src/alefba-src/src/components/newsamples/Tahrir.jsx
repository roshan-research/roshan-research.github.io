import tahrir from '../../assets/images/samples/tahrir.jpg';
import TextGroup from './TextGroup';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useInView } from 'react-intersection-observer';

const Tahrir = () => {
    const observerOptions = {
        delay: 1000,
        triggerOnce: true,
    };

    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [tah, tahInview] = useInView(observerOptions);

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
                    src={tahrir}
                    alt={''}
                />
                <page
                    ref={tah}
                    style={
                        tahInview
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
                            fontSize={`${0.025 * width}px`}
                            text="۶۳"
                            left={`${0.48754636989931105 * width}px`}
                            top={`${0.15055467511885895 * height}px`}
                            width={`${0.026497085320614733 * width}px`}
                            height={`${0.03565768621236133 * height}px`}
                        />
                        <TextGroup
                            delay={'0s'}
                            fontSize={`${0.026 * width}px`}
                            text="اشباع‌مدت ۵ دقیقه جوشانده د رد اخل یک بوته چینی وزن شده صاف‌کنید و باقیمانده را"
                            left={`${0.12983571807101218 * width}px`}
                            top={`${0.22583201267828842 * height}px`}
                            width={`${0.7154213036565977 * width}px`}
                            height={`${0.04754358161648178 * height}px`}
                        />
                        <TextGroup
                            delay={'0.5s'}
                            fontSize={`${0.0254 * width}px`}
                            text="با ۱۰ میلی لیترآب‌گرپشوئید ومایع شستشو را به صاف شده اضافه کنید و به مایع صاف شده"
                            left={`${0.13248542660307366 * width}px`}
                            top={`${0.3090332805071315 * height}px`}
                            width={`${0.7154213036565977 * width}px`}
                            height={`${0.0491283676703645 * height}px`}
                        />
                        <TextGroup
                            delay={'1s'}
                            fontSize={`${0.0254 * width}px`}
                            text="و شستشویك میلی لیتر اسید سولفوریك R افزوده تاحد خشکی تبخیر و تا وزن ثابت تکلیس"
                            left={`${0.13248542660307366 * width}px`}
                            top={`${0.38827258320126784 * height}px`}
                            width={`${0.7154213036565977 * width}px`}
                            height={`${0.041996830427892234 * height}px`}
                        />
                        <TextGroup
                            delay={'1.5s'}
                            fontSize={`${0.026 * width}px`}
                            text="کنید وزن باقیمانده نباید بیش‌از ۳۵ میلی‌گرم باشد (% ۳/۵ )"
                            left={`${0.34287228404875464 * width}px`}
                            top={`${0.4659270998415214 * height}px`}
                            width={`${0.5034446210916799 * width}px`}
                            height={`${0.04833597464342314 * height}px`}
                        />
                        <TextGroup
                            delay={'2s'}
                            fontSize={`${0.0257 * width}px`}
                            text="مواد محلول دراتانل : ۲ گرم آنرا با ۴۰ میلی ‌لیتراتانل ۹۵% R زیریك کندانسور رفلو"
                            left={`${0.13513513513513514 * width}px`}
                            top={`${0.5467511885895404 * height}px`}
                            width={`${0.6518282988871225 * width}px`}
                            height={`${0.0491283676703645 * height}px`}
                        />
                        <TextGroup
                            delay={'2.5s'}
                            fontSize={`${0.0263 * width}px`}
                            text="مدت پنج دقیقه بجوشانید وصاف کنید، ۲۰ میلی لیتر ازصاف شده را روی حمام آبجوش"
                            left={`${0.14043455219925807 * width}px`}
                            top={`${0.6251980982567353 * height}px`}
                            width={`${0.7048224695283519 * width}px`}
                            height={`${0.04754358161648178 * height}px`}
                        />
                        <TextGroup
                            delay={'3s'}
                            fontSize={`${0.0256 * width}px`}
                            text="تاحد خشکی تبخیر ود رحرارت ۱۰۰ درجه مدت یکساعت بخشکانید و وزن‌باقیماند، بیش‌از"
                            left={`${0.12983571807101218 * width}px`}
                            top={`${0.705229793977813 * height}px`}
                            width={`${0.7154213036565977 * width}px`}
                            height={`${0.043581616481774964 * height}px`}
                        />
                        <TextGroup
                            delay={'3.5s'}
                            fontSize={`${0.0256 * width}px`}
                            text="۲ میلی‌گرم نیست ( ۰/۲۶)."
                            left={`${0.6253312135665077 * width}px`}
                            top={`${0.786053882725832 * height}px`}
                            width={`${0.2172760996290408 * width}px`}
                            height={`${0.04992076069730586 * height}px`}
                        />
                    </div>
                </page>
            </div>
        </div>
    );
};

export default Tahrir;
