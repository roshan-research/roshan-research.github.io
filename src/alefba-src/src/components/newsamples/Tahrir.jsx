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
                        <TextGroup
                            animationDelay={0}
                            fontSize={43}
                            text={"۶۳"}
                            left={920}
                            top={190}
                            width={50}
                            translationX={60}
                            height={45}
                        />
                        <TextGroup
                            animationDelay={0.5}
                            fontSize={56}
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
                            fontSize={54}
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
                            fontSize={53}
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
                            fontSize={59}
                            text={"کنید وزن باقیمانده نباید بیش‌از ۳۵ میلی‌گرم باشد (% ۳/۵ )"}
                            left={647}
                            top={588}
                            width={950}
                            translationX={950}
                            height={61}
                        />
                        <TextGroup
                            animationDelay={2.5}
                            fontSize={53}
                            text={"مواد محلول دراتانل : ۲ گرم آنرا با ۴۰ میلی ‌لیتراتانل ۹۵% R\n" +
                            "                زیریك کندانسور رفلو"}
                            left={255}
                            top={690}
                            width={1230}
                            translationX={1350}
                            height={62}
                        />
                        <TextGroup
                            animationDelay={3}
                            fontSize={56}
                            text={"مدت پنج دقیقه بجوشانید وصاف کنید، ۲۰ میلی لیتر ازصاف شده را روی\n" +
                            "                حمام آبجوش"}
                            left={265}
                            top={789}
                            width={1330}
                            translationX={1400}
                            height={60}
                        />
                        <TextGroup
                            animationDelay={3.5}
                            fontSize={55}
                            text={"تاحد خشکی تبخیر ود رحرارت ۱۰۰ درجه مدت یکساعت بخشکانید و\n" +
                            "                وزن‌باقیماند، بیش‌از"}
                            left={245}
                            top={890}
                            width={1350}
                            translationX={1400}
                            height={55}
                        />
                        <TextGroup
                            animationDelay={4}
                            fontSize={53}
                            text={" ۲ میلی‌گرم نیست ( ۰/۲۶)."}
                            left={1180}
                            top={992}
                            width={410}
                            translationX={410}
                            height={63}
                        />
                    </div>
                </page>
            </div>
        </div>

    );
};

export default Tahrir;
