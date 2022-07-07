import style, {getScale} from "./style";
import tahrir from "../../assets/images/samples/tahrir.jpg";
import TextGroup from "./TextGroup";
import {useEffect, useState} from "react";

const Tahrir = () => {

    const[scaleCoefficient,setScaleCoefficient] = useState({});

    useEffect(() => {
        setScaleCoefficient(getScale(window.innerWidth,1887));
    }, [])


    window.onresize = () => {
        setScaleCoefficient(getScale(window.innerWidth,1887));
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
                style={{ position: "relative", transform:  `scaleY(${scaleCoefficient.scaleY}) scaleX(${scaleCoefficient.scaleX})`,transition: "0s" }}
            >
                <img
                    style={{ position: "absolute", left: 0,width: 1887, height: 1262 }}
                    id="raw"
                    src={tahrir}
                    alt={''}
                />
                <page style={{ width: 1887, height: 1262 }}>
                    <div className="document line-view">
                        <p
                            style={{
                                left: 906,
                                top: 201,
                                width: 51,
                                height: 44,
                                fontSize: "20pt"
                            }}
                            dir="auto"
                        >
                            <TextGroup
                                animationDelay={0}
                                fontSize={43}
                                text={"۶۳"}
                                left={910}
                                top={195}
                                width={60}
                                translationX={60}
                                height={45}
                            />
                        </p>
                        <p
                            style={{
                                left: 268,
                                top: 290,
                                width: 1292,
                                height: 348,
                                fontSize: "27pt"
                            }}
                            dir="auto"
                        >
                            <TextGroup
                                animationDelay={0.5}
                                fontSize={48}
                                text={"اشباع‌مدت ۵ دقیقه جوشانده د رد اخل یک بوته چینی وزن شده صاف‌کنید\n" +
                                "                و باقیمانده را"}
                                left={245}
                                top={285}
                                width={1350}
                                translationX={1350}
                                height={60}
                            />
                            <TextGroup
                                animationDelay={1}
                                fontSize={45}
                                text={"با ۱۰ میلی لیترآب‌گرپشوئید ومایع شستشو را به صاف شده اضافه کنید\n" +
                                "                و به مایع صاف شده"}
                                left={250}
                                top={390}
                                width={1350}
                                translationX={1350}
                                height={62}
                            />
                            <TextGroup
                                animationDelay={1.5}
                                fontSize={46}
                                text={"و شستشویك میلی لیتر اسید سولفوریك R افزوده تاحد خشکی تبخیر و تا\n" +
                                "                وزن ثابت تکلیس"}
                                left={250}
                                top={490}
                                width={1350}
                                translationX={1350}
                                height={53}
                            />
                            <TextGroup
                                animationDelay={2}
                                fontSize={48}
                                text={"کنید وزن باقیمانده نباید بیش‌از ۳۵ میلی‌گرم باشد (% ۳/۵ )"}
                                left={647}
                                top={585}
                                width={950}
                                translationX={950}
                                height={61}
                            />
                        </p>
                        <div
                            className="image"
                            style={{ left: 1641, top: 770, width: 42, height: 19 }}
                        >
                            <div className="image-wrapper" />
                        </div>
                        <div
                            className="image"
                            style={{ left: 1668, top: 1152, width: 64, height: 102 }}
                        >
                            <div className="image-wrapper" />
                        </div>
                        <p
                            style={{
                                left: 261,
                                top: 671,
                                width: 1293,
                                height: 350,
                                fontSize: "27pt"
                            }}
                            dir="auto"
                        >
                            <TextGroup
                                animationDelay={2.5}
                                fontSize={48}
                                text={"مواد محلول دراتانل : ۲ گرم آنرا با ۴۰ میلی ‌لیتراتانل ۹۵% R\n" +
                                "                زیریك کندانسور رفلو"}
                                left={255}
                                top={690}
                                width={1350}
                                translationX={1350}
                                height={62}
                            />
                            <TextGroup
                                animationDelay={3}
                                fontSize={50}
                                text={"مدت پنج دقیقه بجوشانید وصاف کنید، ۲۰ میلی لیتر ازصاف شده را روی\n" +
                                "                حمام آبجوش"}
                                left={200}
                                top={789}
                                width={1400}
                                translationX={1400}
                                height={60}
                            />
                            <TextGroup
                                animationDelay={3.5}
                                fontSize={48}
                                text={"تاحد خشکی تبخیر ود رحرارت ۱۰۰ درجه مدت یکساعت بخشکانید و\n" +
                                "                وزن‌باقیماند، بیش‌از"}
                                left={205}
                                top={890}
                                width={1400}
                                translationX={1400}
                                height={55}
                            />
                            <TextGroup
                                animationDelay={4}
                                fontSize={46}
                                text={" ۲ میلی‌گرم نیست ( ۰/۲۶)."}
                                left={1180}
                                top={992}
                                width={410}
                                translationX={410}
                                height={63}
                            />
                        </p>
                        <div
                            className="image"
                            style={{ left: 1042, top: 1057, width: 515, height: 205 }}
                        >
                            <div className="image-wrapper" />
                        </div>
                    </div>
                </page>
            </div>
        </div>

    );
};

export default Tahrir;
