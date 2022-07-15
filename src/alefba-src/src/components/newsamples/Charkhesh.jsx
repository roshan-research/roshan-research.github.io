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
                    <div className="document line-view" >
                        <TextGroup
                            animationDelay={0}
                            fontSize={80}
                            text={"دل بریدم تا نبینم دوست با من دشمن است"}
                            left={250}
                            top={495}
                            width={945}
                            translationX={1110}
                            height={97}
                            lineType={"line"}
                        />
                        <TextGroup
                            animationDelay={0.5}
                            fontSize={80}
                            text={"دل بریدن گاه تنها راه عاشق ماندن است"}
                            left={320}
                            top={600}
                            width={885}
                            translationX={1070}
                            height={85}
                            lineType={"line"}
                        />
                        <TextGroup
                            animationDelay={1}
                            fontSize={80}
                            text={"خود به چاه انداختم خود را مگر باور کنی"}
                            left={320}
                            top={765}
                            width={870}
                            translationX={1120}
                            height={96}
                            lineType={"line"}
                        />
                        <TextGroup
                            animationDelay={1.5}
                            fontSize={80}
                            text={"آنچه باقیمانده از یوسف همین پیراهن است"}
                            left={260}
                            top={880}
                            width={935}
                            translationX={1120}
                            height={95}
                            lineType={"line"}
                        />
                        <TextGroup
                            animationDelay={2}
                            fontSize={80}
                            text={"گریه‌ها کردم ز شوق آن شب که سوزاندی مرا"}
                            left={200}
                            top={1040}
                            width={1000}
                            translationX={1180}
                            height={95}
                            lineType={"line"}
                        />
                        <TextGroup
                            animationDelay={2.5}
                            fontSize={80}
                            text={"سرنوشت شمع جانسوز است اما روشن است"}
                            left={250}
                            top={1155}
                            width={940}
                            translationX={1170}
                            height={95}
                            lineType={"line"}
                        />
                        <TextGroup
                            animationDelay={3}
                            fontSize={80}
                            text={"من غمم! جای مرا با شادمانی پر مکن"}
                            left={370}
                            top={1310}
                            width={823}
                            translationX={1070}
                            height={98}
                            lineType={"line"}
                        />
                        <TextGroup
                            animationDelay={3.5}
                            fontSize={80}
                            text={"هرکجا چشمی بگردانی نشانی از من است"}
                            left={300}
                            top={1420}
                            width={910}
                            translationX={1200}
                            height={95}
                            lineType={"line"}
                        />
                    </div>
                </page>
            </div>
        </div>

    );
};

export default Charkhesh;
