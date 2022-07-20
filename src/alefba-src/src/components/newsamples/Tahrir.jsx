import tahrir from "../../assets/images/samples/tahrir.jpg";
import TextGroup from "./TextGroup";
import {useEffect, useState} from "react";

const Tahrir = () => {

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
                    src={tahrir}
                    alt={''}
                />
                <page style={{ width: width, height: height }}>
                    <div className="document line-view">
                        <TextGroup
                            fontSize={43}
                            text={"۶۳"}
                            left={920}
                            top={190}
                            width={50}
                            height={45}
                        />
                        <TextGroup
                            animationDelay={0.5}
                            fontSize={56}
                            text={"اشباع‌مدت ۵ دقیقه جوشانده د رد اخل یک بوته چینی وزن شده صاف‌کنید\nو باقیمانده را"}
                            left={245}
                            top={285}
                            width={1350}
                            translationX={1350}
                            height={60}
                        />
                        <TextGroup
                            fontSize={54}
                            text={"با ۱۰ میلی لیترآب‌گرپشوئید ومایع شستشو را به صاف شده اضافه کنید\nو به مایع صاف شده"}
                            left={250}
                            top={390}
                            width={1350}
                            height={62}
                        />
                        <TextGroup
                            fontSize={53}
                            text={"و شستشویك میلی لیتر اسید سولفوریك R افزوده تاحد خشکی تبخیر و تا\nوزن ثابت تکلیس"}
                            left={250}
                            top={490}
                            width={1350}
                            height={53}
                        />
                        <TextGroup
                            fontSize={59}
                            text={"کنید وزن باقیمانده نباید بیش‌از ۳۵ میلی‌گرم باشد (% ۳/۵ )"}
                            left={647}
                            top={588}
                            width={950}
                            height={61}
                        />
                        <TextGroup
                            fontSize={53}
                            text={"مواد محلول دراتانل : ۲ گرم آنرا با ۴۰ میلی ‌لیتراتانل ۹۵% R\nزیریك کندانسور رفلو"}
                            left={255}
                            top={690}
                            width={1230}
                            height={62}
                        />
                        <TextGroup
                            fontSize={56}
                            text={"مدت پنج دقیقه بجوشانید وصاف کنید، ۲۰ میلی لیتر ازصاف شده را روی\nحمام آبجوش"}
                            left={265}
                            top={789}
                            width={1330}
                            height={60}
                        />
                        <TextGroup
                            fontSize={55}
                            text={"تاحد خشکی تبخیر ود رحرارت ۱۰۰ درجه مدت یکساعت بخشکانید و\nوزن‌باقیماند، بیش‌از"}
                            left={245}
                            top={890}
                            width={1350}
                            height={55}
                        />
                        <TextGroup
                            fontSize={53}
                            text={"۲ میلی‌گرم نیست ( ۰/۲۶)."}
                            left={1180}
                            top={992}
                            width={410}
                            height={63}
                        />
                    </div>
                </page>
            </div>
        </div>

    );
};

export default Tahrir;
