import fish from "../../assets/images/samples/fish.jpg";
import "../../stylesheets/fish.scss";
import TextGroup from "./TextGroup";
import {useEffect, useState} from "react";
import "../../stylesheets/new-sample-style.scss";
import {isMobile} from "react-device-detect";

const FishHoghoghi = () => {
    const[width,setWidth] = useState();
    const[height,setHeight] = useState();

    let scaleW = isMobile? 0.85 : 0.4;
    let scaleH = isMobile? 0.58 : 0.27;

    const resizeHandler = () => {
        setWidth(scaleW * window.innerWidth);
        setHeight(scaleH * window.innerWidth);
    };

    window.addEventListener("resize", resizeHandler);

    useEffect(() => {
        resizeHandler();
    }, []);


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
                          delay={"0s"}
                          fontSize={`${0.03401898734177215 * width}px`}
                          text="دستمزد مستقیم"
                          height={`${0.05812574139976275 * height}px`}
                          width={`${0.1463607594936709 * width}px`}
                          left={`${0.15427215189873417 * width}px`}
                          top={`${0.04744958481613286 * height}px`}
                      />
                      <TextGroup
                          delay={"3s"}
                          fontSize={`${0.03560126582278481 * width}px`}
                          text="حقوق و دستمزد"
                          height={`${0.05931198102016608 * height}px`}
                          width={`${0.15427215189873417 * width}px`}
                          left={`${0.7357594936708861 * width}px`}
                          top={`${0.33807829181494664 * height}px`}
                      />
                      <TextGroup
                          delay={"6s"}
                          fontSize={`${0.03164556962025317 * width}px`}
                          text="اضافه کاري - نوبتکاري - شبکاري وحق کشیك"
                          height={`${0.06287069988137604 * height}px`}
                          width={`${0.4248417721518987 * width}px`}
                          left={`${0.46581645569620256 * width}px`}
                          top={`${0.4151838671411625 * height}px`}
                      />
                      <TextGroup
                          delay={"9s"}
                          fontSize={`${0.03322784810126582 * width}px`}
                          text="حق اولاد و سایر هزینه های کارکنان"
                          height={`${0.05338078291814947 * height}px`}
                          width={`${0.3370253164556962 * width}px`}
                          left={`${0.5498417721518988 * width}px`}
                          top={`${0.4804270462633452 * height}px`}
                      />
                      <TextGroup
                          delay={"12s"}
                          fontSize={`${0.03243670886075949 * width}px`}
                          text="بن - حق مسکن - خوارباروناهاری کارکنان"
                          height={`${0.054567022538552785 * height}px`}
                          width={`${0.3916139240506329 * width}px`}
                          left={`${0.49841772151898733 * width}px`}
                          top={`${0.5456702253855279 * height}px`}
                      />
                      <TextGroup
                          delay={"15s"}
                          fontSize={`${0.03401898734177215 * width}px`}
                          text="عیدي وپاداش"
                          height={`${0.054567022538552785 * height}px`}
                          width={`${0.1305379746835443 * width}px`}
                          left={`${0.7555379746835443 * width}px`}
                          top={`${0.6109134045077106 * height}px`}
                      />
                      <TextGroup
                          delay={"18s"}
                          fontSize={`${0.03501898734177215 * width}px`}
                          text="حق بیمه سهم کارفرما"
                          height={`${0.060498220640569395 * height}px`}
                          width={`${0.21360759493670886 * width}px`}
                          left={`${0.6764240506329114 * width}px`}
                          top={`${0.6761565836298933 * height}px`}
                      />
                      <TextGroup
                          delay={"21s"}
                          fontSize={`${0.03401898734177215 * width}px`}
                          text="باز خرید و ذخیره سنوات خدمت"
                          height={`${0.05812574139976275 * height}px`}
                          width={`${0.29557721518987344 * width}px`}
                          left={`${0.5933544303797469 * width}px`}
                          top={`${0.7390272835112692 * height}px`}
                      />
                      <TextGroup
                          delay={"24s"}
                          fontSize={`${0.03431898734177215 * width}px`}
                          text="بیمه حوادث - هزینه بهداشتی"
                          height={`${0.05693950177935943 * height}px`}
                          width={`${0.28085443037974683 * width}px`}
                          left={`${0.6091772151898734 * width}px`}
                          top={`${0.8066429418742586 * height}px`}
                      />
                      <TextGroup
                          delay={"27s"}
                          fontSize={`${0.03501898734177215 * width}px`}
                          text="پس انداز سهم کارفرما"
                          height={`${0.05338078291814947 * height}px`}
                          width={`${0.2175632911392405 * width}px`}
                          left={`${0.6724683544303798 * width}px`}
                          top={`${0.8718861209964412 * height}px`}
                      />
                      <TextGroup
                          delay={"0s"}
                          fontSize={`${0.0392746835443038 * width}px`}
                          text="سال ۱۳۹۰"
                          height={`${0.05759454329774614 * height}px`}
                          width={`${0.11867088607594936 * width}px`}
                          left={`${0.2650316455696203 * width}px`}
                          top={`${0.19572953736654805 * height}px`}
                      />
                      <TextGroup
                          delay={"0s"}
                          fontSize={`${0.0379746835443038 * width}px`}
                          text="هزار ریال"
                          height={`${0.05693950177935943 * height}px`}
                          width={`${0.09889240506329114 * width}px`}
                          left={`${0.27689873417721517 * width}px`}
                          top={`${0.2609727164887307 * height}px`}
                      />
                      <TextGroup
                          delay={"3s"}
                          fontSize={`${0.0389746835443038 * width}px`}
                          text="۳۰,۶۷۲,۵۴۵"
                          height={`${0.05338078291814947 * height}px`}
                          width={`${0.1403607594936709 * width}px`}
                          left={`${0.2657025316455696 * width}px`}
                          top={`${0.33214709371293 * height}px`}
                      />
                      <TextGroup
                          delay={"6s"}
                          fontSize={`${0.0419746835443038 * width}px`}
                          text="۵,۸۲۲,۸۵۸"
                          height={`${0.052008303677342826 * height}px`}
                          width={`${0.13449367088607594 * width}px`}
                          left={`${0.2689873417721519 * width}px`}
                          top={`${0.4092526690391459 * height}px`}
                      />
                      <TextGroup
                          delay={"9s"}
                          fontSize={`${0.0419746835443038 * width}px`}
                          text="۳,۵۶۴,۳۳۸"
                          height={`${0.05338078291814947 * height}px`}
                          width={`${0.13449367088607594 * width}px`}
                          left={`${0.2689873417721519 * width}px`}
                          top={`${0.4804270462633452 * height}px`}
                      />
                      <TextGroup
                          delay={"12s"}
                          fontSize={`${0.0419746835443038 * width}px`}
                          text="۲,۳۲۹,۶۲۹"
                          height={`${0.05338078291814947 * height}px`}
                          width={`${0.13449367088607594 * width}px`}
                          left={`${0.2689873417721519 * width}px`}
                          top={`${0.5456702253855279 * height}px`}
                      />
                      <TextGroup
                          delay={"15s"}
                          fontSize={`${0.0419746835443038 * width}px`}
                          text="۷,۵۹۷,۴۸۷"
                          height={`${0.05338078291814947 * height}px`}
                          width={`${0.13449367088607594 * width}px`}
                          left={`${0.2689873417721519 * width}px`}
                          top={`${0.6109134045077106 * height}px`}
                      />
                      <TextGroup
                          delay={"18s"}
                          fontSize={`${0.0399746835443038 * width}px`}
                          text="۱۲,۳۰۵,۶۷۸"
                          left={`${0.2650316455696203 * width}px`}
                          top={`${0.6702253855278766 * height}px`}
                          width={`${0.14240506329113925 * width}px`}
                          height={`${0.054567022538552785 * height}px`}
                      />
                      <TextGroup
                          delay={"21s"}
                          fontSize={`${0.0419746835443038 * width}px`}
                          text="۵,۹۷۳,۷۷۸"
                          left={`${0.27294303797468356 * width}px`}
                          top={`${0.7354685646500593 * height}px`}
                          width={`${0.13449367088607594 * width}px`}
                          height={`${0.05575326215895611 * height}px`}
                      />
                      <TextGroup
                          delay={"24s"}
                          fontSize={`${0.0419746835443038 * width}px`}
                          text="۲۴۷,۳۲۰"
                          left={`${0.29667721518987344 * width}px`}
                          top={`${0.8066429418742586 * height}px`}
                          width={`${0.11075949367088607 * width}px`}
                          height={`${0.05219454329774614 * height}px`}
                      />
                      <TextGroup
                          delay={"27s"}
                          fontSize={`${0.0409746835443038 * width}px`}
                          text="۱,۳۵۸,۷۷۷"
                          left={`${0.27689873417721517 * width}px`}
                          top={`${0.8718861209964412 * height}px`}
                          width={`${0.1305379746835443 * width}px`}
                          height={`${0.05338078291814947 * height}px`}
                      />
                      <TextGroup
                          delay={"0s"}
                          fontSize={`${0.0399746835443038 * width}px`}
                          text="سال ۱۳۸۹"
                          left={`${0.07911392405063292 * width}px`}
                          top={`${0.19572953736654805 * height}px`}
                          width={`${0.11867088607594936 * width}px`}
                          height={`${0.05538078291814947 * height}px`}
                      />
                      <TextGroup
                          delay={"0s"}
                          fontSize={`${0.0379746835443038 * width}px`}
                          text="هزار ریال"
                          left={`${0.09098101265822785 * width}px`}
                          top={`${0.2609727164887307 * height}px`}
                          width={`${0.10000379746835443 * width}px`}
                          height={`${0.05693950177935943 * height}px`}
                      />
                      <TextGroup
                          delay={"3s"}
                          fontSize={`${0.0379746835443038 * width}px`}
                          text="۲۶,۳۲۵,۸۳۳"
                          left={`${0.08681392405063292 * width}px`}
                          top={`${0.33214709371293 * height}px`}
                          width={`${0.1363607594936709 * width}px`}
                          height={`${0.05338078291814947 * height}px`}
                      />
                      <TextGroup
                          delay={"6s"}
                          fontSize={`${0.041765822784810125 * width}px`}
                          text="۴,۸۲۱,۸۹۶"
                          left={`${0.09098101265822785 * width}px`}
                          top={`${0.4033214709371293 * height}px`}
                          width={`${0.13449367088607594 * width}px`}
                          height={`${0.054567022538552785 * height}px`}
                      />
                      <TextGroup
                          delay={"9s"}
                          fontSize={`${0.041765822784810125 * width}px`}
                          text="۳,۶۶۷,۴۳۱"
                          left={`${0.09098101265822785 * width}px`}
                          top={`${0.4744958481613286 * height}px`}
                          width={`${0.13449367088607594 * width}px`}
                          height={`${0.054567022538552785 * height}px`}
                      />
                      <TextGroup
                          delay={"12s"}
                          fontSize={`${0.04255696202531646 * width}px`}
                          text="۲,۰۳۷,۱۲۷"
                          left={`${0.09098101265822785 * width}px`}
                          top={`${0.5397390272835113 * height}px`}
                          width={`${0.13449367088607594 * width}px`}
                          height={`${0.054567022538552785 * height}px`}
                      />
                      <TextGroup
                          delay={"15s"}
                          fontSize={`${0.041765822784810125 * width}px`}
                          text="۸,۲۰۴,۹۷۷"
                          left={`${0.09098101265822785 * width}px`}
                          top={`${0.604982206405694 * height}px`}
                          width={`${0.13449367088607594 * width}px`}
                          height={`${0.054567022538552785 * height}px`}
                      />
                      <TextGroup
                          delay={"18s"}
                          fontSize={`${0.0419746835443038 * width}px`}
                          text="۹,۳۷۰,۶۲۰"
                          left={`${0.09098101265822785 * width}px`}
                          top={`${0.6702253855278766 * height}px`}
                          width={`${0.13449367088607594 * width}px`}
                          height={`${0.054567022538552785 * height}px`}
                      />
                      <TextGroup
                          delay={"21s"}
                          fontSize={`${0.0419746835443038 * width}px`}
                          text="۶,۳۴۹,۵۶۸"
                          left={`${0.09098101265822785 * width}px`}
                          top={`${0.7354685646500593 * height}px`}
                          width={`${0.13449367088607594 * width}px`}
                          height={`${0.051008303677342826 * height}px`}
                      />
                      <TextGroup
                          delay={"24s"}
                          fontSize={`${0.04155696202531646 * width}px`}
                          text="۲۱۷,۱۵۳"
                          left={`${0.11471518987341772 * width}px`}
                          top={`${0.7947805456702254 * height}px`}
                          width={`${0.11075949367088607 * width}px`}
                          height={`${0.05338078291814947 * height}px`}
                      />
                      <TextGroup
                          delay={"27s"}
                          fontSize={`${0.04255696202531646 * width}px`}
                          text="۱,۵۴۰,۲۹۱"
                          left={`${0.09098101265822785 * width}px`}
                          top={`${0.8600237247924081 * height}px`}
                          width={`${0.13449367088607594 * width}px`}
                          height={`${0.05338078291814947 * height}px`}
                      />
                  </div>
              </page>
          </div>
      </div>
  )
};

export default FishHoghoghi;
