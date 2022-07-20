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
                            fontSize={`${0.037859007832898174 * width}px`}
                            text="- یعطي أمثلة عن مرکبات کیمیائیة شائعة الاستعمال في محیطه."
                            left={`${0.26979982593559615 * width}px`}
                            top={`${0.19448373408769448 * height}px`}
                            width={`${0.6657963446475196 * width}px`}
                            height={`${0.06364922206506365 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.04134029590948651 * width}px`}
                            text="- یتعرف الی بعض الکواشف (محلول قشر الفجل، محلول الملفوف البنفسجي،"
                            left={`${0.07397737162750218 * width}px`}
                            top={`${0.2758132956152758 * height}px`}
                            width={`${0.8637946040034813 * width}px`}
                            height={`${0.06364922206506365 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.037859007832898174 * width}px`}
                            text="محلول عباد الشمس)، ویستدل علي أنها تغیر ألوانها حسب الوسط الکیمیائي."
                            left={`${0.12619669277632725 * width}px`}
                            top={`${0.35714285714285715 * height}px`}
                            width={`${0.783289817232376 * width}px`}
                            height={`${0.06223479490806223 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.0391644908616188 * width}px`}
                            text="- یمیز بین المواد الحمضیة والمواد القلویة (القاعدیة) باستخدام أحد الکواشف."
                            left={`${0.11314186248912098 * width}px`}
                            top={`${0.43847241867043846 * height}px`}
                            width={`${0.8268059181897301 * width}px`}
                            height={`${0.06364922206506365 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.037859007832898174 * width}px`}
                            text="یعطي أمثلة عن بعض الأملاح الشائعة."
                            left={`${0.5091383812010444 * width}px`}
                            top={`${0.5268741159830269 * height}px`}
                            width={`${0.4134029590948651 * width}px`}
                            height={`${0.06506364922206506 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.04134029590948651 * width}px`}
                            text="- یعطي أمثلة عن التفاعل الکیمیائي: الاحتراق، تکون الصدأ، تفاعل الحمض مع"
                            left={`${0.05221932114882506 * width}px`}
                            top={`${0.6039603960396039 * height}px`}
                            width={`${0.8877284595300261 * width}px`}
                            height={`${0.06364922206506365 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.037859007832898174 * width}px`}
                            text="مواد کلسیة ومع بعض الفلزات."
                            left={`${0.587467362924282 * width}px`}
                            top={`${0.685997171145686 * height}px`}
                            width={`${0.3263707571801567 * width}px`}
                            height={`${0.056577086280056574 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.037859007832898174 * width}px`}
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
