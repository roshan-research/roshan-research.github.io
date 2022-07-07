import fish from "../../assets/images/samples/fish.jpg";
import "../../stylesheets/fish.scss";
import TextGroup from "./TextGroup";
import style, {getScale} from "./style";
import {useEffect, useState} from "react";


const FishHoghoghi = () => {

    const[scaleCoefficient,setScaleCoefficient] = useState({});

    useEffect(() => {
        setScaleCoefficient(getScale(window.innerWidth,1320));
    }, [])


    window.onresize = () => {
        setScaleCoefficient(getScale(window.innerWidth,1320));
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
                      `scaleY(${scaleCoefficient.scaleY}) scaleX(${scaleCoefficient.scaleX})`,transition: "0s"}}
          >
              <img
                  style={{ position: "absolute", left: 0, width: 1320, height: 843}}
                  id="raw"
                  src={fish}
                  alt={''}
              />
              <page style={{ width: 1264, height: 843 }}>
                  <div className="document line-view">
                      <TextGroup
                          animationDelay={0}
                          fontSize={38}
                          text={"دستمزد مستقیم"}
                          translationX={201}
                          height={49}
                          width={201}
                          left={200}
                          top={35}
                      />
                      <TextGroup
                          animationDelay={2.5}
                          fontSize={41}
                          text={"حقوق و دستمزد"}
                          translationX={214}
                          height={45}
                          width={214}
                          left={964}
                          top={285}
                      />
                      <TextGroup
                          animationDelay={4}
                          fontSize={39}
                          text={"اضافه کاري - نوبتکاري - شبکاري وحق کشیك"}
                          translationX={600}
                          height={53}
                          width={600}
                          left={580}
                          top={344}
                      />
                      <TextGroup
                          animationDelay={5.5}
                          fontSize={41}
                          text={"حق اولاد و سایر هزینه های کارکنان"}
                          translationX={480}
                          height={45}
                          width={480}
                          left={700}
                          top={410}
                      />
                      <TextGroup
                          animationDelay={7}
                          fontSize={40}
                          text={"بن - حق مسکن - خوارباروناهاری کارکنان"}
                          translationX={560}
                          height={46}
                          width={560}
                          left={622}
                          top={465}
                      />
                      <TextGroup
                          animationDelay={8.5}
                          fontSize={38}
                          text={"عیدي وپاداش"}
                          translationX={180}
                          height={46}
                          width={180}
                          left={1002}
                          top={520}
                      />
                      <TextGroup
                          animationDelay={10}
                          fontSize={40}
                          text={"حق بیمه سهم کارفرما"}
                          translationX={290}
                          height={51}
                          width={290}
                          left={893}
                          top={573}
                      />
                      <TextGroup
                          animationDelay={11.5}
                          fontSize={40}
                          text={"باز خرید و ذخیره سنوات خدمت"}
                          translationX={420}
                          height={49}
                          width={420}
                          left={767}
                          top={630}
                      />
                      <TextGroup
                          animationDelay={13}
                          fontSize={39}
                          text={"بیمه حوادث - هزینه بهداشتی"}
                          translationX={390}
                          height={48}
                          width={390}
                          left={798}
                          top={685}
                      />
                      <TextGroup
                          animationDelay={14.5}
                          fontSize={39}
                          text={"پس انداز سهم کارفرما"}
                          translationX={310}
                          height={51}
                          width={310}
                          left={879}
                          top={740}
                      />
                      <TextGroup
                          animationDelay={0.5}
                          fontSize={43}
                          text={"سال ۱۳۹۰"}
                          translationX={165}
                          height={44}
                          width={165}
                          left={330}
                          top={170}
                      />
                      <TextGroup
                          animationDelay={1.5}
                          fontSize={43}
                          text={"هزار ریال"}
                          translationX={131}
                          height={44}
                          width={131}
                          left={360}
                          top={220}
                      />
                      <TextGroup
                          animationDelay={3}
                          fontSize={43}
                          text={"۳۰,۶۷۲,۵۴۵"}
                          translationX={215}
                          height={45}
                          width={210}
                          left={319}
                          top={282}
                      />
                      <TextGroup
                          animationDelay={4.5}
                          fontSize={42}
                          text={"۵,۸۲۲,۸۵۸"}
                          translationX={185}
                          height={43}
                          width={180}
                          left={352}
                          top={351}
                      />
                      <TextGroup
                          animationDelay={6}
                          fontSize={42}
                          text={"۳,۵۶۴,۳۳۸"}
                          translationX={185}
                          height={45}
                          width={180}
                          left={350}
                          top={405}
                      />
                      <TextGroup
                          animationDelay={7.5}
                          fontSize={42}
                          text={"۲,۳۲۹,۶۲۹"}
                          translationX={185}
                          height={45}
                          width={185}
                          left={350}
                          top={460}
                      />
                      <TextGroup
                          animationDelay={9}
                          fontSize={42}
                          text={"۷,۵۹۷,۴۸۷"}
                          translationX={185}
                          height={45}
                          width={185}
                          left={350}
                          top={515}
                      />
                      <TextGroup
                          animationDelay={10.5}
                          fontSize={43}
                          text={"۱۲,۳۰۵,۶۷۸"}
                          left={325}
                          top={570}
                          width={210}
                          translationX={220}
                          height={46}
                      />
                      <TextGroup
                          animationDelay={12}
                          fontSize={42}
                          text={"۵,۹۷۳,۷۷۸"}
                          left={345}
                          top={625}
                          width={185}
                          translationX={185}
                          height={47}
                      />
                      <TextGroup
                          animationDelay={13.5}
                          fontSize={42}
                          text={"۲۴۷,۳۲۰"}
                          left={375}
                          top={680}
                          width={150}
                          translationX={150}
                          height={44}
                      />
                      <TextGroup
                          animationDelay={15}
                          fontSize={42}
                          text={"۱,۳۵۸,۷۷۷"}
                          left={345}
                          top={735}
                          width={185}
                          translationX={185}
                          height={45}
                      />
                      <TextGroup
                          animationDelay={1}
                          fontSize={42}
                          text={"سال ۱۳۸۹"}
                          left={100}
                          top={170}
                          width={165}
                          translationX={165}
                          height={43}
                      />
                      <TextGroup
                          animationDelay={2}
                          fontSize={43}
                          text={"هزار ریال"}
                          left={115}
                          top={225}
                          width={140}
                          translationX={140}
                          height={44}
                      />
                      <TextGroup
                          animationDelay={3.5}
                          fontSize={42}
                          text={"۲۶,۳۲۵,۸۳۳"}
                          left={100}
                          top={282}
                          width={205}
                          translationX={205}
                          height={45}
                      />
                      <TextGroup
                          animationDelay={5}
                          fontSize={44}
                          text={"۴,۸۲۱,۸۹۶"}
                          left={105}
                          top={340}
                          width={190}
                          translationX={190}
                          height={46}
                      />
                      <TextGroup
                          animationDelay={6.5}
                          fontSize={43}
                          text={"۳,۶۶۷,۴۳۱"}
                          left={100}
                          top={400}
                          width={190}
                          translationX={190}
                          height={46}
                      />
                      <TextGroup
                          animationDelay={8}
                          fontSize={45}
                          text={"۲,۰۳۷,۱۲۷"}
                          left={100}
                          top={460}
                          width={195}
                          translationX={195}
                          height={46}
                      />
                      <TextGroup
                          animationDelay={9.5}
                          fontSize={44}
                          text={"۸,۲۰۴,۹۷۷"}
                          left={100}
                          top={517}
                          width={190}
                          translationX={190}
                          height={46}
                      />
                      <TextGroup
                          animationDelay={11}
                          fontSize={43}
                          text={"۹,۳۷۰,۶۲۰"}
                          left={100}
                          top={570}
                          width={190}
                          translationX={190}
                          height={46}
                      />
                      <TextGroup
                          animationDelay={12.5}
                          fontSize={42}
                          text={"۶,۳۴۹,۵۶۸"}
                          left={102}
                          top={625}
                          width={190}
                          translationX={190}
                          height={43}
                      />
                      <TextGroup
                          animationDelay={14}
                          fontSize={44}
                          text={"۲۱۷,۱۵۳"}
                          left={135}
                          top={675}
                          width={160}
                          translationX={170}
                          height={45}
                      />
                      <TextGroup
                          animationDelay={15.5}
                          fontSize={44}
                          text={"۱,۵۴۰,۲۹۱"}
                          left={100}
                          top={730}
                          width={195}
                          translationX={195}
                          height={45}
                      />
                  </div>
              </page>
          </div>
      </div>
  )
};

export default FishHoghoghi;
