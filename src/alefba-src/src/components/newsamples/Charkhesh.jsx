import charkhesh from "../../assets/images/samples/charkhesh.jpg";
import style, {getScale} from "./style";
import TextGroup from "./TextGroup";
import {useEffect, useState} from "react";

const Charkhesh = () => {

    const[scaleCoefficient,setScaleCoefficient] = useState({});

    useEffect(() => {
        setScaleCoefficient(getScale(window.innerWidth,1512));
    }, [])


    window.onresize = () => {
        setScaleCoefficient(getScale(window.innerWidth,1512));
    };

    return(
        <div className="container" >
            <div
                id="document"
                style={{ position: "relative", transform:
                    `scaleY(${scaleCoefficient.scaleY}) scaleX(${scaleCoefficient.scaleX})`,transition: "0s" }}
            >
                <img
                    style={{ position: "absolute", left: 0,width: 1512, height: 2016 }}
                    id="raw"
                    src={charkhesh}
                    alt={''}
                />
                <page style={{ width: 1512, height: 2016 }}>
                    <div className="document line-view" style={{}}>
                        <div
                            className="image"
                            style={{ left: 273, top: "-2px", width: 1240, height: 2022 }}
                        >
                            <div className="image-wrapper" />
                        </div>
                        <div
                            className="image"
                            style={{ left: 1247, top: 1744, width: 31, height: 19 }}
                        >
                            <div className="image-wrapper" />
                        </div>
                        <div
                            className="image"
                            style={{ left: 644, top: 251, width: 26, height: 19 }}
                        >
                            <div className="image-wrapper" />
                        </div>
                        <div
                            className="image"
                            style={{ left: 642, top: 289, width: 36, height: 106 }}
                        >
                            <div className="image-wrapper" />
                        </div>
                        <div
                            className="image"
                            style={{ left: 526, top: 19, width: 16, height: 17 }}
                        >
                            <div className="image-wrapper" />
                        </div>
                        <div
                            className="image"
                            style={{ left: 394, top: 269, width: 26, height: 31 }}
                        >
                            <div className="image-wrapper" />
                        </div>
                        <div
                            className="image"
                            style={{ left: 400, top: 315, width: 20, height: 63 }}
                        >
                            <div className="image-wrapper" />
                        </div>
                        <div
                            className="image"
                            style={{ left: 330, top: 167, width: 42, height: 71 }}
                        >
                            <div className="image-wrapper" />
                        </div>
                        <div
                            className="image"
                            style={{ left: 342, top: 258, width: 29, height: 141 }}
                        >
                            <div className="image-wrapper" />
                        </div>
                        <div
                            className="image"
                            style={{ left: 308, top: 176, width: 25, height: 19 }}
                        >
                            <div className="image-wrapper" />
                        </div>
                        <div
                            className="image"
                            style={{ left: 307, top: 196, width: 17, height: 22 }}
                        >
                            <div className="image-wrapper" />
                        </div>
                        <p
                            style={{
                                left: 223,
                                top: 448,
                                width: 975,
                                height: 947,
                                fontSize: "44pt"
                            }}
                            dir="auto"
                        >
                            <TextGroup
                                animationDelay={0}
                                fontSize={83}
                                text={"دل بریدم تا نبینم دوست با من دشمن است"}
                                left={205}
                                top={500}
                                width={1110}
                                translationX={1110}
                                height={97}
                                lineType={"line"}
                            />
                            <TextGroup
                                animationDelay={0.5}
                                fontSize={83}
                                text={"دل بریدن گاه تنها راه عاشق ماندن است"}
                                left={250}
                                top={605}
                                width={1070}
                                translationX={1070}
                                height={85}
                                lineType={"line"}
                            />
                            <TextGroup
                                animationDelay={1}
                                fontSize={85}
                                text={"خود به چاه انداختم خود را مگر باور کنی"}
                                left={205}
                                top={750}
                                width={1120}
                                translationX={1120}
                                height={96}
                                lineType={"line"}
                            />
                            <TextGroup
                                animationDelay={1.5}
                                fontSize={84}
                                text={"آنچه باقیمانده از یوسف همین پیراهن است"}
                                left={205}
                                top={870}
                                width={1120}
                                translationX={1120}
                                height={95}
                                lineType={"line"}
                            />
                            <TextGroup
                                animationDelay={2}
                                fontSize={81}
                                text={"گریه‌ها کردم ز شوق آن شب که سوزاندی مرا"}
                                left={150}
                                top={1040}
                                width={1180}
                                translationX={1180}
                                height={95}
                                lineType={"line"}
                            />
                            <TextGroup
                                animationDelay={2.5}
                                fontSize={83}
                                text={"سرنوشت شمع جانسوز است اما روشن است"}
                                left={160}
                                top={1160}
                                width={1170}
                                translationX={1170}
                                height={95}
                                lineType={"line"}
                            />
                            <TextGroup
                                animationDelay={3}
                                fontSize={83}
                                text={"هرکسی از عشق با خود یادگاری می‌برد"}
                                left={270}
                                top={1310}
                                width={1070}
                                translationX={1070}
                                height={94}
                                lineType={"line"}
                            />
                        </p>
                        <div
                            className="image"
                            style={{ left: 842, top: 702, width: 109, height: 23 }}
                        >
                            <div className="image-wrapper" />
                        </div>
                        <p
                            style={{
                                left: 204,
                                top: 1407,
                                width: 990,
                                height: 120,
                                fontSize: "58pt"
                            }}
                            dir="auto"
                        >
                            <TextGroup
                                animationDelay={3.5}
                                fontSize={82}
                                text={"آنچه من بردم تنی بی‌روح و روحی بی‌تن است"}
                                left={140}
                                top={1420}
                                width={1200}
                                translationX={1200}
                                height={120}
                                lineType={"line"}
                            />
                        </p>
                        <div
                            className="image"
                            style={{ left: 848, top: 1606, width: 26, height: 48 }}
                        >
                            <div className="image-wrapper" />
                        </div>
                        <div
                            className="image"
                            style={{ left: 549, top: 1744, width: 19, height: 39 }}
                        >
                            <div className="image-wrapper" />
                        </div>
                        <div
                            className="image"
                            style={{ left: 502, top: 1702, width: 28, height: 23 }}
                        >
                            <div className="image-wrapper" />
                        </div>
                        <div
                            className="image"
                            style={{ left: 339, top: 1956, width: 23, height: 29 }}
                        >
                            <div className="image-wrapper" />
                        </div>
                    </div>
                </page>
            </div>
        </div>

    );
};

export default Charkhesh;
