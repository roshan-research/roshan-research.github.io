import fish from "../../assets/images/samples/fish.jpg";
import "../../stylesheets/fish.scss";
import TextGroup from "./TextGroup";
import {useEffect, useState} from "react";
import "../../stylesheets/new-sample-style.scss";

const FishHoghoghi = () => {
    let tempHeight;
    const[width,setWidth] = useState();
    const[height,setHeight] = useState();

    useEffect(() => {
        tempHeight = 0.5 * window.innerHeight;
        setWidth(tempHeight * 1.5);
        setHeight(tempHeight);
    }, []);


    window.onresize = () => {
        tempHeight = 0.5 * window.innerHeight;
        setWidth(tempHeight * 1.5);
        setHeight(tempHeight);
    };

  return(
      <div className="container">
          <div
              id="document"
              style={{ position: "relative",transition: "0s"}}
          >
              <img
                  style={{ position: "absolute", left: 0, width: width, height: height}}
                  id="raw"
                  src={fish}
                  alt={''}
              />
              <page style={{ width: width, height: height }}>
                  <div className="document line-view">
                      <TextGroup
                          fontSize={43}
                          text={"دستمزد مستقیم"}
                          height={49}
                          width={185}
                          left={195}
                          top={40}
                      />
                      <TextGroup
                          fontSize={45}
                          text={"حقوق و دستمزد"}
                          height={50}
                          width={195}
                          left={930}
                          top={285}
                      />
                      <TextGroup
                          fontSize={40}
                          text={"اضافه کاري - نوبتکاري - شبکاري وحق کشیك"}
                          height={53}
                          width={537}
                          left={585}
                          top={350}
                      />
                      <TextGroup
                          fontSize={42}
                          text={"حق اولاد و سایر هزینه های کارکنان"}
                          height={45}
                          width={426}
                          left={695}
                          top={405}
                      />
                      <TextGroup
                          fontSize={41}
                          text={"بن - حق مسکن - خوارباروناهاری کارکنان"}
                          height={46}
                          width={495}
                          left={630}
                          top={460}
                      />
                      <TextGroup
                          fontSize={43}
                          text={"عیدي وپاداش"}
                          height={46}
                          width={165}
                          left={955}
                          top={515}
                      />
                      <TextGroup
                          fontSize={43}
                          text={"حق بیمه سهم کارفرما"}
                          height={51}
                          width={270}
                          left={855}
                          top={570}
                      />
                      <TextGroup
                          fontSize={43}
                          text={"باز خرید و ذخیره سنوات خدمت"}
                          height={49}
                          width={375}
                          left={750}
                          top={623}
                      />
                      <TextGroup
                          fontSize={43}
                          text={"بیمه حوادث - هزینه بهداشتی"}
                          height={48}
                          width={355}
                          left={770}
                          top={680}
                      />
                      <TextGroup
                          fontSize={43}
                          text={"پس انداز سهم کارفرما"}
                          height={45}
                          width={275}
                          left={850}
                          top={735}
                      />
                      <TextGroup
                          fontSize={48}
                          text={"سال ۱۳۹۰"}
                          height={44}
                          width={150}
                          left={335}
                          top={165}
                      />
                      <TextGroup
                          fontSize={48}
                          text={"هزار ریال"}
                          height={48}
                          width={125}
                          left={350}
                          top={220}
                      />
                      <TextGroup
                          fontSize={48}
                          text={"۳۰,۶۷۲,۵۴۵"}
                          height={45}
                          width={185}
                          left={327}
                          top={280}
                      />
                      <TextGroup
                          fontSize={48}
                          text={"۵,۸۲۲,۸۵۸"}
                          height={43}
                          width={170}
                          left={340}
                          top={345}
                      />
                      <TextGroup
                          fontSize={48}
                          text={"۳,۵۶۴,۳۳۸"}
                          height={45}
                          width={170}
                          left={340}
                          top={405}
                      />
                      <TextGroup
                          fontSize={48}
                          text={"۲,۳۲۹,۶۲۹"}
                          height={45}
                          width={170}
                          left={340}
                          top={460}
                      />
                      <TextGroup
                          fontSize={48}
                          text={"۷,۵۹۷,۴۸۷"}
                          height={45}
                          width={170}
                          left={340}
                          top={515}
                      />
                      <TextGroup
                          fontSize={48}
                          text={"۱۲,۳۰۵,۶۷۸"}
                          left={335}
                          top={565}
                          width={180}
                          height={46}
                      />
                      <TextGroup
                          fontSize={48}
                          text={"۵,۹۷۳,۷۷۸"}
                          left={345}
                          top={620}
                          width={170}
                          height={47}
                      />
                      <TextGroup
                          fontSize={48}
                          text={"۲۴۷,۳۲۰"}
                          left={375}
                          top={680}
                          width={140}
                          height={44}
                      />
                      <TextGroup
                          fontSize={48}
                          text={"۱,۳۵۸,۷۷۷"}
                          left={350}
                          top={735}
                          width={165}
                          height={45}
                      />
                      <TextGroup
                          fontSize={48}
                          text={"سال ۱۳۸۹"}
                          left={100}
                          top={165}
                          width={150}
                          height={45}
                      />
                      <TextGroup
                          fontSize={48}
                          text={"هزار ریال"}
                          left={115}
                          top={220}
                          width={135}
                          height={48}
                      />
                      <TextGroup
                          fontSize={48}
                          text={"۲۶,۳۲۵,۸۳۳"}
                          left={100}
                          top={280}
                          width={185}
                          height={45}
                      />
                      <TextGroup
                          fontSize={49}
                          text={"۴,۸۲۱,۸۹۶"}
                          left={115}
                          top={340}
                          width={170}
                          height={46}
                      />
                      <TextGroup
                          fontSize={49}
                          text={"۳,۶۶۷,۴۳۱"}
                          left={115}
                          top={400}
                          width={170}
                          height={46}
                      />
                      <TextGroup
                          fontSize={50}
                          text={"۲,۰۳۷,۱۲۷"}
                          left={115}
                          top={455}
                          width={170}
                          height={46}
                      />
                      <TextGroup
                          fontSize={49}
                          text={"۸,۲۰۴,۹۷۷"}
                          left={115}
                          top={510}
                          width={170}
                          height={46}
                      />
                      <TextGroup
                          fontSize={48}
                          text={"۹,۳۷۰,۶۲۰"}
                          left={115}
                          top={565}
                          width={170}
                          height={46}
                      />
                      <TextGroup
                          fontSize={48}
                          text={"۶,۳۴۹,۵۶۸"}
                          left={115}
                          top={620}
                          width={170}
                          height={43}
                      />
                      <TextGroup
                          fontSize={50}
                          text={"۲۱۷,۱۵۳"}
                          left={145}
                          top={670}
                          width={140}
                          height={45}
                      />
                      <TextGroup
                          fontSize={50}
                          text={"۱,۵۴۰,۲۹۱"}
                          left={115}
                          top={725}
                          width={170}
                          height={45}
                      />
                  </div>
              </page>
          </div>
      </div>
  )
};

export default FishHoghoghi;
