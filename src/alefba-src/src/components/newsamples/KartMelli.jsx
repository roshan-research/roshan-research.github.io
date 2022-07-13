import kart from "../../assets/images/samples/kart.png";
import "../../stylesheets/fish.scss";
import TextGroup from "./TextGroup";
import style, {getScale} from "./style";
import {useEffect, useState} from "react";

const KartMelli = () => {

    const[scaleCoefficient,setScaleCoefficient] = useState({});

    useEffect(() => {
        setScaleCoefficient(getScale(window.innerWidth,2500));
    }, [])


    window.onresize = () => {
        setScaleCoefficient(getScale(window.innerWidth,2500));
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
                style={{ position: "relative",transform:
                        `scaleY(${scaleCoefficient.scaleY}) scaleX(${scaleCoefficient.scaleX})`,
                    transition: "0s"
                }}
            >
                <img
                    style={{ position: "absolute", left: 0 , width: 2500, height: "1576.4750093949642px"}}
                    id="raw"
                    src={kart}
                    alt={''}
                />
                <page style={{ width: 2500, height: "1576.4750093949642px" }}>
                    <div className="document line-view">
                        <div
                            className="image"
                            style={{ left: "-2px", top: "-2px", width: 2500, height: "1576.4750093949642px" }}
                        >
                            <div className="image-wrapper" />
                        </div>
                        <TextGroup
                            animationDelay={0}
                            fontSize={57}
                            text={"جمهوری اسلامی ایران"}
                            left={2026}
                            top={235}
                            width={371}
                            translationX={371}
                            height={85}
                        />
                        <TextGroup
                            animationDelay={0.5}
                            fontSize={210}
                            text={"کارت ملی"}
                            left={920}
                            top={66}
                            width={630}
                            translationX={630}
                            height={224}
                        />
                        <TextGroup
                            animationDelay={1}
                            fontSize={140}
                            text={"شماره ملی، ۰۰۴۰۳۱۶۲۸۵"}
                            left={1369}
                            top={409}
                            width={1035}
                            translationX={1035}
                            height={135}
                        />
                        <TextGroup
                            animationDelay={2}
                            fontSize={130}
                            text={"حمید رضا"}
                            left={1592}
                            top={550}
                            width={375}
                            translationX={375}
                            height={128}
                        />
                        <TextGroup
                            animationDelay={3}
                            fontSize={140}
                            text={"نکویی"}
                            left={1721}
                            top={700}
                            width={270}
                            translationX={270}
                            height={140}
                        />
                        <TextGroup
                            animationDelay={1.5}
                            fontSize={100}
                            text={"نام :"}
                            left={1980}
                            top={591}
                            width={141}
                            translationX={141}
                            height={86}
                        />
                        <TextGroup
                            animationDelay={2.5}
                            fontSize={88}
                            text={"نام خانوادگی :"}
                            left={2004}
                            top={743}
                            width={340}
                            translationX={340}
                            height={103}
                        />
                        <TextGroup
                            animationDelay={3.5}
                            fontSize={80}
                            text={"تاریخ تولد :"}
                            left={2019}
                            top={901}
                            width={263}
                            translationX={263}
                            height={94}
                        />
                        <TextGroup
                            animationDelay={4.5}
                            fontSize={100}
                            text={"نام پدر :"}
                            left={2008}
                            top={1057}
                            width={219}
                            translationX={219}
                            height={95}
                        />
                        <TextGroup
                            animationDelay={5.5}
                            fontSize={86}
                            text={"پایان اعتبار :"}
                            left={2015}
                            top={1207}
                            width={291}
                            translationX={291}
                            height={95}
                        />
                        <TextGroup
                            animationDelay={4}
                            fontSize={140}
                            text={"۱۳۶۷/۰۲/۲۶"}
                            left={1391}
                            top={858}
                            width={568}
                            translationX={568}
                            height={132}
                        />
                        <TextGroup
                            animationDelay={5}
                            fontSize={130}
                            text={"محمد"}
                            left={1737}
                            top={1029}
                            width={212}
                            translationX={212}
                            height={112}
                        />
                        <TextGroup
                            animationDelay={6}
                            fontSize={140}
                            text={"۱۴۰۳/۰۸/۱۲"}
                            left={1400}
                            top={1195}
                            width={578}
                            translationX={578}
                            height={112}
                        />
                    </div>
                </page>
            </div>
        </div>
    );
};

export default KartMelli;
