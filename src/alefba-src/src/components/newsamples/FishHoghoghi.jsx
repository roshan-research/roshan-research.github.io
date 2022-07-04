import fish from "../../assets/images/samples/fish.jpg";
import "../../stylesheets/fish.scss";
import {motion} from 'framer-motion';
import {BackgroundAnimation, TypingAnimation} from "../../animations/typingAnimation";
import TextGroup from "./TextGroup";

const FishHoghoghi = () => {
  return(
      <div className="container sample-image">
          <style
              type="text/css"
              dangerouslySetInnerHTML={{
                  __html:
                      '\n            .container {\n            max-width: 1170px;\n            }\n            #document {\n            margin: 50px 0;\n            transform-origin: top left;\n            -moz-transform-origin: top left;\n            }\n            #document img {\n            z-index: -1;\n            border: 2px solid #ddd;\n            margin-top: -2px;\n            margin-left: -2px;\n            }\n            .document.line-view .line, .document.paragraph-view p, .document.paragraph-view table {\n            font-family: IRMitra;\n            /*background: rgba(207, 252, 210, 0.9);*/\n            background: rgba(255, 98, 0, 0.90);\n            color: black;\n            border-radius: 3px;\n            color: #333;\n            line-height: 1;\n            /* box-shadow: 0px 2px 2px #777; */\n            /* text-shadow: 0px 1px 1px #999; */\n            /* border: 1px solid #e45701; */\n            }\n            .document.line-view .line_bold, .document.paragraph-view p, .document.paragraph-view table {\n            font-family: IRMitra;\n            /*background: rgba(255, 98, 0, 0.9);*/\n            background: rgba(255, 98, 0, 0.95);\n            color: black;\n            border-radius: 3px;\n            color: #333;\n            line-height: 1;\n            /* box-shadow: 0px 2px 2px #777; */\n            /* text-shadow: 0px 1px 1px #999; */\n            /* border: 1px solid #e45701; */\n            }\n            .document .words {\n            white-space: nowrap;\n            }\n            .document.line-view .line {\n            display: table;\n            position: absolute;\n            text-align: center;\n            }\n            .document.line-view .line_bold {\n            display: table;\n            position: absolute;\n            text-align: center;\n            font-weight: bold\n            }\n            .document.line-view .words {\n            display: table-cell;\n            vertical-align: middle;\n            }\n            .document.line-view p, .document.line-view table {\n            height: initial !important;\n            width: initial !important;\n            }\n            .document.paragraph-view p, .document.paragraph-view table {\n            position: absolute;\n            padding: 5px 30px;\n            display: table;\n            }\n            .document.paragraph-view .lines {\n            display: table-cell;\n            vertical-align: middle;\n            }\n            .document.paragraph-view .line {\n            display: block;\n            line-height: 1.3;\n            height: initial !important;\n            width: initial !important;\n            }\n            .document.paragraph-view .words {\n            font-size: inherit !important;\n            }\n            .document div.image {\n            position: absolute;\n            /*border: 10px solid #33bbff;*/\n            border-radius: 5px;\n            /*box-shadow: 0px 2px 5px #777;*/\n            margin-top: 0;\n            background: rgba(255, 98, 0, 0.95);\n            }\n            .document .image div.image-wrapper{\n            height: 100%;\n            max-width: 128px;\n            margin: auto;\n            background: url("/static/images/picture1600.png") no-repeat center center;\n            background-size: contain;\n            }\n            .document.paragraph-view table th, .document.paragraph-view table td {\n            border: 6px dashed #fff;\n            }\n         '
              }}
          />
          <div
              id="document"
              style={{ position: "relative", transform: "scale(0.4)" }}
          >
              <img
                  style={{ position: "absolute", left: 0, width: 1320, height: 843}}
                  id="raw"
                  src={fish}
                  alt={''}
              />
              <page style={{ width: 1264, height: 843 }}>
                  <div className="document line-view">
                      <p
                          style={{
                              left: 151,
                              top: 15,
                              width: 201,
                              height: 49,
                              fontSize: "22pt"
                          }}
                          dir="auto"
                      >
                          <TextGroup
                              animationDelay={0}
                              fontSize={38}
                              text={"دستمزد مستقیم"}
                              translationX={201}
                              height={49}
                              width={201}
                              left={151}
                              top={15}
                          />
                      </p>
                      <p
                          style={{
                              left: 964,
                              top: 280,
                              width: 214,
                              height: 45,
                              fontSize: "20pt"
                          }}
                          dir="auto"
                      >
                          <TextGroup
                              animationDelay={5}
                              fontSize={41}
                              text={"حقوق و دستمزد"}
                              translationX={214}
                              height={45}
                              width={214}
                              left={964}
                              top={285}
                          />
                      </p>
                      <p
                          style={{
                              left: 586,
                              top: 344,
                              width: 593,
                              height: 111,
                              fontSize: "22pt"
                          }}
                          dir="auto"
                      >
                          <TextGroup
                              animationDelay={8}
                              fontSize={39}
                              text={"اضافه کاري - نوبتکاري - شبکاري وحق کشیك"}
                              translationX={600}
                              height={53}
                              width={600}
                              left={580}
                              top={344}
                          />
                          <TextGroup
                              animationDelay={11}
                              fontSize={41}
                              text={"حق اولاد و سایر هزینه های کارکنان"}
                              translationX={480}
                              height={45}
                              width={480}
                              left={700}
                              top={415}
                          />
                      </p>
                      <p
                          style={{
                              left: 630,
                              top: 472,
                              width: 549,
                              height: 105,
                              fontSize: "21pt"
                          }}
                          dir="auto"
                      >
                          <TextGroup
                              animationDelay={14}
                              fontSize={40}
                              text={"بن - حق مسکن - خوارباروناهاری کارکنان"}
                              translationX={560}
                              height={46}
                              width={560}
                              left={622}
                              top={472}
                          />
                          <TextGroup
                              animationDelay={17}
                              fontSize={38}
                              text={"عیدي وپاداش"}
                              translationX={180}
                              height={46}
                              width={180}
                              left={1002}
                              top={531}
                          />
                      </p>
                      <p
                          style={{
                              left: 893,
                              top: 588,
                              width: 287,
                              height: 51,
                              fontSize: "24pt"
                          }}
                          dir="auto"
                      >
                          <TextGroup
                              animationDelay={20}
                              fontSize={40}
                              text={"حق بیمه سهم کارفرما"}
                              translationX={290}
                              height={51}
                              width={290}
                              left={893}
                              top={588}
                          />
                      </p>
                      <p
                          style={{
                              left: 767,
                              top: 647,
                              width: 413,
                              height: 171,
                              fontSize: "23pt"
                          }}
                          dir="auto"
                      >
                          <TextGroup
                              animationDelay={23}
                              fontSize={40}
                              text={"باز خرید و ذخیره سنوات خدمت"}
                              translationX={420}
                              height={49}
                              width={420}
                              left={767}
                              top={647}
                          />
                          <TextGroup
                              animationDelay={26}
                              fontSize={39}
                              text={"بیمه حوادث - هزینه بهداشتی"}
                              translationX={390}
                              height={48}
                              width={390}
                              left={798}
                              top={710}
                          />
                          <TextGroup
                              animationDelay={29}
                              fontSize={39}
                              text={"پس انداز سهم کارفرما"}
                              translationX={310}
                              height={51}
                              width={310}
                              left={879}
                              top={775}
                          />
                      </p>
                      <p
                          style={{
                              left: 308,
                              top: 159,
                              width: 162,
                              height: 100,
                              fontSize: "20pt"
                          }}
                          dir="auto"
                      >
                          <TextGroup
                              animationDelay={1}
                              fontSize={43}
                              text={"سال ۱۳۹۰"}
                              translationX={165}
                              height={44}
                              width={165}
                              left={308}
                              top={159}
                          />
                          <TextGroup
                              animationDelay={3}
                              fontSize={43}
                              text={"هزار ریال"}
                              translationX={131}
                              height={44}
                              width={131}
                              left={318}
                              top={215}
                          />
                      </p>
                      <p
                          style={{
                              left: 319,
                              top: 282,
                              width: 184,
                              height: 474,
                              fontSize: "20pt"
                          }}
                          dir="auto"
                      >
                          <TextGroup
                              animationDelay={6}
                              fontSize={43}
                              text={"۳۰,۶۷۲,۵۴۵"}
                              translationX={215}
                              height={45}
                              width={210}
                              left={319}
                              top={282}
                          />
                          <TextGroup
                              animationDelay={9}
                              fontSize={42}
                              text={"۵,۸۲۲,۸۵۸"}
                              translationX={185}
                              height={43}
                              width={180}
                              left={339}
                              top={351}
                          />
                          <TextGroup
                              animationDelay={12}
                              fontSize={42}
                              text={"۳,۵۶۴,۳۳۸"}
                              translationX={185}
                              height={45}
                              width={180}
                              left={339}
                              top={411}
                          />
                          <TextGroup
                              animationDelay={15}
                              fontSize={42}
                              text={"۲,۳۲۹,۶۲۹"}
                              translationX={185}
                              height={45}
                              width={185}
                              left={342}
                              top={472}
                          />
                          <TextGroup
                              animationDelay={18}
                              fontSize={42}
                              text={"۷,۵۹۷,۴۸۷"}
                              translationX={185}
                              height={45}
                              width={185}
                              left={340}
                              top={530}
                          />
                          <TextGroup
                              animationDelay={21}
                              fontSize={43}
                              text={"۱۲,۳۰۵,۶۷۸"}
                              left={325}
                              top={593}
                              width={220}
                              translationX={220}
                              height={46}
                          />
                          <TextGroup
                              animationDelay={24}
                              fontSize={42}
                              text={"۵,۹۷۳,۷۷۸"}
                              left={340}
                              top={652}
                              width={185}
                              translationX={185}
                              height={47}
                          />
                          <TextGroup
                              animationDelay={27}
                              fontSize={42}
                              text={"۲۴۷,۳۲۰"}
                              left={371}
                              top={712}
                              width={150}
                              translationX={150}
                              height={44}
                          />
                      </p>
                      <p
                          style={{
                              left: 345,
                              top: 773,
                              width: 157,
                              height: 45,
                              fontSize: "20pt"
                          }}
                          dir="auto"
                      >
                          <TextGroup
                              animationDelay={30}
                              fontSize={42}
                              text={"۱,۳۵۸,۷۷۷"}
                              left={345}
                              top={773}
                              width={185}
                              translationX={185}
                              height={45}
                          />
                      </p>
                      <p
                          style={{
                              left: 150,
                              top: 159,
                              width: 60,
                              height: 44,
                              fontSize: "20pt"
                          }}
                          dir="auto"
                      >
                      </p>
                      <p
                          style={{
                              left: 58,
                              top: 160,
                              width: 85,
                              height: 43,
                              fontSize: "20pt"
                          }}
                          dir="auto"
                      >
                          <TextGroup
                              animationDelay={2}
                              fontSize={42}
                              text={"سال ۱۳۸۹"}
                              left={58}
                              top={160}
                              width={165}
                              translationX={165}
                              height={43}
                          />
                      </p>
                      <p
                          style={{
                              left: 68,
                              top: 215,
                              width: 133,
                              height: 44,
                              fontSize: "20pt"
                          }}
                          dir="auto"
                      >
                          <TextGroup
                              animationDelay={4}
                              fontSize={43}
                              text={"هزار ریال"}
                              left={68}
                              top={215}
                              width={140}
                              translationX={140}
                              height={44}
                          />
                      </p>
                      <p
                          style={{
                              left: 71,
                              top: 282,
                              width: 181,
                              height: 476,
                              fontSize: "21pt"
                          }}
                          dir="auto"
                      >
                          <TextGroup
                              animationDelay={7}
                              fontSize={42}
                              text={"۲۶,۳۲۵,۸۳۳"}
                              left={71}
                              top={282}
                              width={205}
                              translationX={205}
                              height={45}
                          />
                          <TextGroup
                              animationDelay={10}
                              fontSize={44}
                              text={"۴,۸۲۱,۸۹۶"}
                              left={87}
                              top={349}
                              width={190}
                              translationX={190}
                              height={46}
                          />
                          <TextGroup
                              animationDelay={13}
                              fontSize={43}
                              text={"۳,۶۶۷,۴۳۱"}
                              left={88}
                              top={410}
                              width={190}
                              translationX={190}
                              height={46}
                          />
                          <TextGroup
                              animationDelay={16}
                              fontSize={45}
                              text={"۲,۰۳۷,۱۲۷"}
                              left={89}
                              top={472}
                              width={195}
                              translationX={195}
                              height={46}
                          />
                          <TextGroup
                              animationDelay={19}
                              fontSize={44}
                              text={"۸,۲۰۴,۹۷۷"}
                              left={88}
                              top={533}
                              width={190}
                              translationX={190}
                              height={46}
                          />
                          <TextGroup
                              animationDelay={22}
                              fontSize={43}
                              text={"۹,۳۷۰,۶۲۰"}
                              left={90}
                              top={592}
                              width={190}
                              translationX={190}
                              height={46}
                          />
                          <TextGroup
                              animationDelay={25}
                              fontSize={42}
                              text={"۶,۳۴۹,۵۶۸"}
                              left={89}
                              top={653}
                              width={190}
                              translationX={190}
                              height={43}
                          />
                          <TextGroup
                              animationDelay={28}
                              fontSize={44}
                              text={"۲۱۷,۱۵۳"}
                              left={118}
                              top={713}
                              width={170}
                              translationX={170}
                              height={45}
                          />
                      </p>
                      <p
                          style={{
                              left: 92,
                              top: 773,
                              width: 155,
                              height: 45,
                              fontSize: "20pt"
                          }}
                          dir="auto"
                      >
                          <TextGroup
                              animationDelay={31}
                              fontSize={44}
                              text={"۱,۵۴۰,۲۹۱"}
                              left={92}
                              top={773}
                              width={195}
                              translationX={195}
                              height={45}
                          />
                      </p>
                  </div>
              </page>
          </div>
      </div>
  )
};

export default FishHoghoghi;
