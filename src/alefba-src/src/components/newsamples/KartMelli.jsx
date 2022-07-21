import kart from "../../assets/images/samples/kart.png";
import "../../stylesheets/fish.scss";
import TextGroup from "./TextGroup";
import {useEffect, useState} from "react";
import {isMobile} from "react-device-detect";

const KartMelli = () => {
    const[width,setWidth] = useState();
    const[height,setHeight] = useState();

    let scaleW = isMobile? 0.85 : 0.4;
    let scaleH = isMobile? 0.58 : 0.27;

    useEffect(() => {
        setWidth(scaleW * window.innerWidth);
        setHeight(scaleH * window.innerWidth);
    }, []);


    window.onresize = () => {
        setWidth(scaleW * window.innerWidth);
        setHeight(scaleH * window.innerWidth);
    };

    return(
        <div className="container">
            <div
                id="document"
                style={{ position: "relative",
                    transition: "0s"
                }}
            >
                <img
                    style={{ position: "absolute", left: 0 , width: width, height: height}}
                    id="raw"
                    src={kart}
                    alt={''}
                />
                <page style={{ width: width, height: height }}>
                    <div className="document line-view">
                        <TextGroup
                            fontSize={`${0.0228 * width}px`}
                            text="جمهوری اسلامی ایران"
                            left={`${0.8104 * width}px`}
                            top={`${0.14901712111604312 * height}px`}
                            width={`${0.1484 * width}px`}
                            height={`${0.053899809765377296 * height}px`}
                        />
                        <TextGroup
                            fontSize={`${0.084 * width}px`}
                            text="کارت ملی"
                            left={`${0.368 * width}px`}
                            top={`${0.04185161699429296 * height}px`}
                            width={`${0.252 * width}px`}
                            height={`${0.14204185161699429 * height}px`}
                        />
                        <TextGroup
                            fontSize={`${0.056 * width}px`}
                            text="شماره ملی، ۰۰۴۰۳۱۶۲۸۵"
                            left={`${0.5476 * width}px`}
                            top={`${0.2593532022828155 * height}px`}
                            width={`${0.414 * width}px`}
                            height={`${0.08560558021559923 * height}px`}
                        />
                        <TextGroup
                            fontSize={`${0.052 * width}px`}
                            text="حمید رضا"
                            left={`${0.6368 * width}px`}
                            top={`${0.34876347495244137 * height}px`}
                            width={`${0.15 * width}px`}
                            height={`${0.08116677235256817 * height}px`}
                        />
                        <TextGroup
                            fontSize={`${0.056 * width}px`}
                            text="نکویی"
                            left={`${0.6884 * width}px`}
                            top={`${0.4438807863031072 * height}px`}
                            width={`${0.108 * width}px`}
                            height={`${0.08877615726062144 * height}px`}
                        />
                        <TextGroup
                            fontSize={`${0.04 * width}px`}
                            text="نام :"
                            left={`${0.792 * width}px`}
                            top={`${0.37476220672162336 * height}px`}
                            width={`${0.0564 * width}px`}
                            height={`${0.054533925174381735 * height}px`}
                        />
                        <TextGroup
                            fontSize={`${0.0352 * width}px`}
                            text="نام خانوادگی :"
                            left={`${0.8016 * width}px`}
                            top={`${0.47114774889029803 * height}px`}
                            width={`${0.136 * width}px`}
                            height={`${0.0653138871274572 * height}px`}
                        />
                        <TextGroup
                            fontSize={`${0.032 * width}px`}
                            text="تاریخ تولد :"
                            left={`${0.8076 * width}px`}
                            top={`${0.5713379835129994 * height}px`}
                            width={`${0.1052 * width}px`}
                            height={`${0.05960684844641725 * height}px`}
                        />
                        <TextGroup
                            fontSize={`${0.04 * width}px`}
                            text="نام پدر :"
                            left={`${0.8032 * width}px`}
                            top={`${0.6702599873176919 * height}px`}
                            width={`${0.0876 * width}px`}
                            height={`${0.060240963855421686 * height}px`}
                        />
                        <TextGroup
                            fontSize={`${0.0344 * width}px`}
                            text="پایان اعتبار :"
                            left={`${0.806 * width}px`}
                            top={`${0.7653772986683577 * height}px`}
                            width={`${0.1164 * width}px`}
                            height={`${0.060240963855421686 * height}px`}
                        />
                        <TextGroup
                            fontSize={`${0.056 * width}px`}
                            text="۱۳۶۷/۰۲/۲۶"
                            left={`${0.5564 * width}px`}
                            top={`${0.5440710209258085 * height}px`}
                            width={`${0.2272 * width}px`}
                            height={`${0.08370323398858592 * height}px`}
                        />
                        <TextGroup
                            fontSize={`${0.052 * width}px`}
                            text="محمد"
                            left={`${0.6948 * width}px`}
                            top={`${0.6525047558655676 * height}px`}
                            width={`${0.0848 * width}px`}
                            height={`${0.07102092580849714 * height}px`}
                        />
                        <TextGroup
                            fontSize={`${0.056 * width}px`}
                            text="۱۴۰۳/۰۸/۱۲"
                            left={`${0.56 * width}px`}
                            top={`${0.7577679137603044 * height}px`}
                            width={`${0.2312 * width}px`}
                            height={`${0.07102092580849714 * height}px`}
                        />
                    </div>
                </page>
            </div>
        </div>
    );
};

export default KartMelli;
