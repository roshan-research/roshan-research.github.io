import bikeifyat from "../../assets/images/samples/bikeifyat.jpg";
import TextGroup from "./TextGroup";
import {useEffect, useState} from "react";

const BiKeifyat = () => {
    let tempWidth;
    const[width,setWidth] = useState();
    const[height,setHeight] = useState();

    useEffect(() => {
        tempWidth = 0.3 * window.innerWidth;
        setWidth(tempWidth);
        setHeight(tempWidth * 0.66);
    }, []);


    window.onresize = () => {
        tempWidth = 0.3 * window.innerWidth;
        setWidth(tempWidth);
        setHeight(tempWidth * 0.66);
    };

    return(
        <div className="container">
            <div
                id="document"
                style={{ position: "relative",transition: "0s" }}
            >
                <img
                    style={{ position: "absolute", left: 0,width: width, height: height }}
                    id="raw"
                    src={bikeifyat}
                    alt={''}
                />
                <page style={{ width: width, height: height }}>
                    <div className="document line-view">
                        <TextGroup
                            fontSize={87}
                            text={"- یعطي أمثلة عن مرکبات کیمیائیة شائعة الاستعمال في محیطه."}
                            left={620}
                            top={275}
                            width={1530}
                            height={90}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={95}
                            text={"- یتعرف الی بعض الکواشف (محلول قشر الفجل، محلول الملفوف البنفسجي،"}
                            left={170}
                            top={390}
                            width={1985}
                            height={90}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={87}
                            text={"محلول عباد الشمس)، ویستدل علي أنها تغیر ألوانها حسب الوسط الکیمیائي."}
                            left={290}
                            top={505}
                            width={1800}
                            height={88}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={90}
                            text={"- یمیز بین المواد الحمضیة والمواد القلویة (القاعدیة) باستخدام أحد الکواشف."}
                            left={260}
                            top={620}
                            width={1900}
                            height={90}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={87}
                            text={"یعطي أمثلة عن بعض الأملاح الشائعة."}
                            left={1170}
                            top={745}
                            width={950}
                            height={92}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={95}
                            text={"- یعطي أمثلة عن التفاعل الکیمیائي: الاحتراق، تکون الصدأ، تفاعل الحمض مع"}
                            left={120}
                            top={854}
                            width={2040}
                            height={90}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={87}
                            text={"مواد کلسیة ومع بعض الفلزات."}
                            left={1350}
                            top={970}
                            width={750}
                            height={80}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={87}
                            text={"- یستدل علي حدوث تفاعل کیمیائي من ملاحظة انتاج مادة أو مواد جدیدة."}
                            left={340}
                            top={1090}
                            width={1830}
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
