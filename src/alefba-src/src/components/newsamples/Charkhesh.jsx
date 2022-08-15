import charkhesh from "../../assets/images/samples/charkhesh.jpg";
import TextGroup from "./TextGroup";
import {useEffect, useState} from "react";
import {isMobile} from "react-device-detect";
import { useInView } from 'react-intersection-observer';

const Charkhesh = () => {

    const observerOptions = {
        delay: 1000,
        triggerOnce: true
    };

    const[width,setWidth] = useState();
    const[height,setHeight] = useState();
    const[charkh,charkhInview] = useInView(observerOptions);

    let scaleW = isMobile? 0.85 : 0.4;
    let scaleH = isMobile? 0.9 : 0.45;
    let containerStyle = isMobile? {marginTop: "-15vw"} : {marginTop: "-8.5vw"};

    const resizeHandler = () => {
        setWidth(scaleW * window.innerWidth);
        setHeight(scaleH * window.innerWidth);
    };

    window.addEventListener("resize", resizeHandler);

    useEffect(() => {
        resizeHandler();
    }, []);
    
    return(
        <div className="container" style={containerStyle}>
            <div
                id="document"
                style={{ position: "relative",transition: "0s" }}
            >
                <img
                    style={{ position: "absolute", left: 0,width: width, height: height }}
                    id="raw"
                    src={charkhesh}
                    alt={''}
                />
                <page 
                    ref={charkh}
                    style={charkhInview? {height: height,width: width,animationPlayState: "running"}
                            : {height: height,width: width,animationPlayState: "paused"}}>
                    <div className="document line-view" 
                        style={{animationPlayState: "inherit"}}
                    >
                        <TextGroup
                            delay={"0s"}
                            fontSize={`${0.05291005291005291 * width}px`}
                            text="دل بریدم تا نبینم دوست با من دشمن است"
                            left={`${0.16534391534391535 * width}px`}
                            top={`${0.24553571428571427 * height}px`}
                            width={`${0.625 * width}px`}
                            height={`${0.04811507936507937 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            delay={"3s"}
                            fontSize={`${0.05291005291005291 * width}px`}
                            text="دل بریدن گاه تنها راه عاشق ماندن است"
                            left={`${0.21164021164021163 * width}px`}
                            top={`${0.2976190476190476 * height}px`}
                            width={`${0.5853174603174603 * width}px`}
                            height={`${0.043162698412698416 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            delay={"6s"}
                            fontSize={`${0.05291005291005291 * width}px`}
                            text="خود به چاه انداختم خود را مگر باور کنی"
                            left={`${0.21164021164021163 * width}px`}
                            top={`${0.3794642857142857 * height}px`}
                            width={`${0.5753968253968254 * width}px`}
                            height={`${0.047619047619047616 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            delay={"9s"}
                            fontSize={`${0.05291005291005291 * width}px`}
                            text="آنچه باقیمانده از یوسف همین پیراهن است"
                            left={`${0.17195767195767195 * width}px`}
                            top={`${0.4365079365079365 * height}px`}
                            width={`${0.6183862433862434 * width}px`}
                            height={`${0.04712301587301587 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            delay={"12s"}
                            fontSize={`${0.05341005291005291 * width}px`}
                            text="گریه‌ها کردم ز شوق آن شب که سوزاندی مرا"
                            left={`${0.13227513227513227 * width}px`}
                            top={`${0.5158730158730159 * height}px`}
                            width={`${0.6613756613756614 * width}px`}
                            height={`${0.04712301587301587 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            delay={"15s"}
                            fontSize={`${0.05291005291005291 * width}px`}
                            text="سرنوشت شمع جانسوز است اما روشن است"
                            left={`${0.16534391534391535 * width}px`}
                            top={`${0.5729166666666666 * height}px`}
                            width={`${0.6216931216931217 * width}px`}
                            height={`${0.04712301587301587 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            delay={"18s"}
                            fontSize={`${0.05291005291005291 * width}px`}
                            text="من غمم! جای مرا با شادمانی پر مکن"
                            left={`${0.2447089947089947 * width}px`}
                            top={`${0.6498015873015873 * height}px`}
                            width={`${0.5443121693121693 * width}px`}
                            height={`${0.04861111111111111 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            delay={"21s"}
                            fontSize={`${0.05291005291005291 * width}px`}
                            text="هرکجا چشمی بگردانی نشانی از من است"
                            left={`${0.1984126984126984 * width}px`}
                            top={`${0.7043650793650794 * height}px`}
                            width={`${0.6018518518518519 * width}px`}
                            height={`${0.04712301587301587 * height}px`}
                            linetype="line"
                        />
                    </div>
                </page>
            </div>
        </div>

    );
};

export default Charkhesh;
