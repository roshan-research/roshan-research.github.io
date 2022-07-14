import style, {getScale} from "./style";
import bikeifyat from "../../assets/images/samples/bikeifyat.jpg";
import TextGroup from "./TextGroup";
import {useEffect, useState} from "react";

const BiKeifyat = () => {

    const[scaleCoefficient,setScaleCoefficient] = useState({});

    useEffect(() => {
        setScaleCoefficient(getScale(window.innerWidth,2298));
    }, [])


    window.onresize = () => {
        setScaleCoefficient(getScale(window.innerWidth,2298));
    };

    return(
        <div className="container">
            <div
                id="document"
                style={{ position: "relative", transform:
                        `scaleY(${scaleCoefficient.scaleY}) scaleX(${scaleCoefficient.scaleX})`,transition: "0s" }}
            >
                <img
                    style={{ position: "absolute", left: 0,width: 2298, height: 1414 }}
                    id="raw"
                    src={bikeifyat}
                    alt={''}
                />
                <page style={{ width: 2298, height: 1414 }}>
                    <div className="document line-view" style={{}}>
                        <TextGroup
                            animationDelay={0}
                            fontSize={87}
                            text={"- یعطي أمثلة عن مرکبات کیمیائیة شائعة الاستعمال في محیطه."}
                            left={620}
                            top={275}
                            width={1530}
                            translationX={1670}
                            height={90}
                            lineType={"line"}
                        />
                        <TextGroup
                            animationDelay={0.5}
                            fontSize={95}
                            text={"- یتعرف الی بعض الکواشف (محلول قشر الفجل، محلول الملفوف\n" +
                            "                البنفسجي،"}
                            left={170}
                            top={390}
                            width={1985}
                            translationX={2050}
                            height={90}
                            lineType={"line"}
                        />
                        <TextGroup
                            animationDelay={1}
                            fontSize={87}
                            text={"محلول عباد الشمس)، ویستدل علي أنها تغیر ألوانها حسب الوسط\n" +
                            "                الکیمیائي."}
                            left={290}
                            top={505}
                            width={1800}
                            translationX={2000}
                            height={88}
                            lineType={"line"}
                        />
                        <TextGroup
                            animationDelay={1.5}
                            fontSize={90}
                            text={"- یمیز بین المواد الحمضیة والمواد القلویة (القاعدیة) باستخدام\n" +
                            "                أحد الکواشف."}
                            left={260}
                            top={620}
                            width={1900}
                            translationX={1905}
                            height={90}
                            lineType={"line"}
                        />
                        <TextGroup
                            animationDelay={2}
                            fontSize={87}
                            text={"یعطي أمثلة عن بعض الأملاح الشائعة."}
                            left={1170}
                            top={745}
                            width={950}
                            translationX={1050}
                            height={92}
                            lineType={"line"}
                        />
                        <TextGroup
                            animationDelay={2.5}
                            fontSize={95}
                            text={"- یعطي أمثلة عن التفاعل الکیمیائي: الاحتراق، تکون الصدأ، تفاعل\n" +
                            "                الحمض مع"}
                            left={120}
                            top={854}
                            width={2040}
                            translationX={2100}
                            height={90}
                            lineType={"line"}
                        />
                        <TextGroup
                            animationDelay={3}
                            fontSize={87}
                            text={"مواد کلسیة ومع بعض الفلزات."}
                            left={1350}
                            top={970}
                            width={750}
                            translationX={750}
                            height={80}
                            lineType={"line"}
                        />
                        <TextGroup
                            animationDelay={3.5}
                            fontSize={87}
                            text={"- یستدل علي حدوث تفاعل کیمیائي من ملاحظة انتاج مادة أو مواد\n" +
                            "                جدیدة."}
                            left={340}
                            top={1090}
                            width={1830}
                            translationX={1900}
                            height={86}
                            lineType={"line"}
                        />
                    </div>
                </page>
            </div>
        </div>

    );
};

export default BiKeifyat;
