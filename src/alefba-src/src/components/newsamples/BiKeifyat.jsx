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
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html: style.css
                }}
            />
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
                        <p
                            style={{
                                left: 662,
                                top: 264,
                                width: 1451,
                                height: 88,
                                fontSize: "42pt"
                            }}
                            dir="auto"
                        >
                            <TextGroup
                                animationDelay={0}
                                fontSize={84}
                                text={"- یعطي أمثلة عن مرکبات کیمیائیة شائعة الاستعمال في محیطه."}
                                left={550}
                                top={269}
                                width={1670}
                                translationX={1670}
                                height={90}
                                lineType={"line"}
                            />
                        </p>
                        <p
                            style={{
                                left: 229,
                                top: 386,
                                width: 1885,
                                height: 438,
                                fontSize: "42pt"
                            }}
                            dir="auto"
                        >
                            <TextGroup
                                animationDelay={1}
                                fontSize={85}
                                text={"- یتعرف الی بعض الکواشف (محلول قشر الفجل، محلول الملفوف\n" +
                                "                البنفسجي،"}
                                left={170}
                                top={390}
                                width={2050}
                                translationX={2050}
                                height={90}
                                lineType={"line"}
                            />
                            <TextGroup
                                animationDelay={2}
                                fontSize={83}
                                text={"محلول عباد الشمس)، ویستدل علي أنها تغیر ألوانها حسب الوسط\n" +
                                "                الکیمیائي."}
                                left={220}
                                top={505}
                                width={2000}
                                translationX={2000}
                                height={88}
                                lineType={"line"}
                            />
                            <TextGroup
                                animationDelay={3}
                                fontSize={84}
                                text={"- یمیز بین المواد الحمضیة والمواد القلویة (القاعدیة) باستخدام\n" +
                                "                أحد الکواشف."}
                                left={215}
                                top={620}
                                width={2005}
                                translationX={2005}
                                height={90}
                                lineType={"line"}
                            />
                            <TextGroup
                                animationDelay={4}
                                fontSize={86}
                                text={"یعطي أمثلة عن بعض الأملاح الشائعة."}
                                left={1170}
                                top={750}
                                width={1050}
                                translationX={1050}
                                height={92}
                                lineType={"line"}
                            />
                        </p>
                        <p
                            style={{
                                left: 222,
                                top: 854,
                                width: 1891,
                                height: 204,
                                fontSize: "40pt"
                            }}
                            dir="auto"
                        >
                            <TextGroup
                                animationDelay={5}
                                fontSize={85}
                                text={"- یعطي أمثلة عن التفاعل الکیمیائي: الاحتراق، تکون الصدأ، تفاعل\n" +
                                "                الحمض مع"}
                                left={120}
                                top={860}
                                width={2100}
                                translationX={2100}
                                height={90}
                                lineType={"line"}
                            />
                            <TextGroup
                                animationDelay={6}
                                fontSize={77}
                                text={"مواد کلسیة ومع بعض الفلزات."}
                                left={1350}
                                top={980}
                                width={750}
                                translationX={750}
                                height={80}
                                lineType={"line"}
                            />
                        </p>
                        <p
                            style={{
                                left: 437,
                                top: 1086,
                                width: 1673,
                                height: 86,
                                fontSize: "41pt"
                            }}
                            dir="auto"
                        >
                            <TextGroup
                                animationDelay={7}
                                fontSize={83}
                                text={"- یستدل علي حدوث تفاعل کیمیائي من ملاحظة انتاج مادة أو مواد\n" +
                                "                جدیدة."}
                                left={330}
                                top={1080}
                                width={1900}
                                translationX={1900}
                                height={86}
                                lineType={"line"}
                            />
                        </p>
                    </div>
                </page>
            </div>
        </div>

    );
};

export default BiKeifyat;
