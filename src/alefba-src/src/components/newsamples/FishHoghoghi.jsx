import fish from "../../assets/images/samples/fish.jpg";
import "../../stylesheets/fish.scss";
import {motion} from 'framer-motion';
import {BackgroundAnimation, TypingAnimation} from "../../animations/typingAnimation";

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
                  style={{ position: "absolute", left: 0 }}
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
          <span className="lines">
            <motion.span
                dir="auto"
                className="line_bold"
                width={202}
                height={50}
                variants={BackgroundAnimation(0)}
                initial={"hidden"}
                animate={"visible"}
                style={{
                    transformOrigin: "right",
                    left: 151,
                    top: 15,
                    width: 201,
                    height: 49,
                    textAlign: "auto"
                }}
            >
              <motion.span
                  variants={TypingAnimation(0.5)}
                  initial={"hidden"}
                  animate={"visible"}
                  className="words"
                  style={{ fontSize: 38,transformOrigin: "right", }}
              >
                دستمزد مستقیم
              </motion.span>
            </motion.span>
          </span>
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
          <span className="lines">
            <motion.span
                dir="auto"
                variants={BackgroundAnimation(5)}
                initial={"hidden"}
                animate={"visible"}
                className="line_bold"
                width={215}
                height={46}
                style={{
                    left: 964,
                    top: 280,
                    width: 214,
                    height: 45,
                    textAlign: "auto",
                    transformOrigin: "right"
                }}
            >
              <motion.span
                  variants={TypingAnimation(5.5)}
                  initial={"hidden"}
                  animate={"visible"}
                  className="words"
                  style={{ fontSize: 41 ,transformOrigin: "right"}}
              >
                حقوق و دستمزد
              </motion.span>
            </motion.span>
          </span>
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
          <span className="lines">
            <motion.span
                dir="auto"
                className="line_bold"
                width={593}
                variants={BackgroundAnimation(8)}
                initial={"hidden"}
                animate={"visible"}
                height={54}
                style={{
                    transformOrigin: "right",
                    left: 586,
                    top: 344,
                    width: 592,
                    height: 53,
                    textAlign: "auto"
                }}
            >
              <motion.span
                  className="words"
                  style={{ fontSize: 39,transformOrigin: "right" }}
                  variants={TypingAnimation(8.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                اضافه کاري - نوبتکاري - شبکاري وحق کشیك
              </motion.span>
            </motion.span>{" "}
              <motion.span
                  dir="auto"
                  className="line_bold"
                  width={472}
                  height={46}
                  variants={BackgroundAnimation(11)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 708,
                      top: 410,
                      transformOrigin: "right",
                      width: 471,
                      height: 45,
                      textAlign: "auto"
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 41,transformOrigin: "right"  }}
                  variants={TypingAnimation(11.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                حق اولاد و سایر هزینه های کارکنان
              </motion.span>
            </motion.span>
          </span>
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
          <span className="lines">
            <motion.span
                dir="auto"
                className="line_bold"
                width={550}
                height={47}
                variants={BackgroundAnimation(14)}
                initial={"hidden"}
                animate={"visible"}
                style={{
                    left: 630,
                    top: 472,
                    width: 549,
                    height: 46,
                    textAlign: "auto"
                }}
            >
              <motion.span
                  className="words"
                  style={{ fontSize: 40 }}
                  variants={TypingAnimation(14.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                بن - حق مسکن - خوارباروناهاری کارکنان
              </motion.span>
            </motion.span>{" "}
              <motion.span
                  dir="auto"
                  className="line_bold"
                  width={181}
                  height={47}
                  variants={BackgroundAnimation(17)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 996,
                      top: 531,
                      width: 180,
                      height: 46,
                      textAlign: "auto"
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 38 }}
                  variants={TypingAnimation(17.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                عیدي وپاداش
              </motion.span>
            </motion.span>
          </span>
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
          <span className="lines">
            <motion.span
                dir="auto"
                className="line_bold"
                width={288}
                height={52}
                variants={BackgroundAnimation(20)}
                initial={"hidden"}
                animate={"visible"}
                style={{
                    left: 893,
                    top: 588,
                    width: 287,
                    height: 51,
                    textAlign: "auto"
                }}
            >
              <motion.span
                  className="words"
                  style={{ fontSize: 40 }}
                  variants={TypingAnimation(20.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                حق بیمه سهم کارفرما
              </motion.span>
            </motion.span>
          </span>
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
          <span className="lines">
            <motion.span
                dir="auto"
                className="line_bold"
                width={414}
                height={50}
                variants={BackgroundAnimation(23)}
                initial={"hidden"}
                animate={"visible"}
                style={{
                    left: 767,
                    top: 647,
                    width: 413,
                    height: 49,
                    textAlign: "auto"
                }}
            >
              <motion.span
                  className="words"
                  style={{ fontSize: 40 }}
                  variants={TypingAnimation(23.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                باز خرید و ذخیره سنوات خدمت
              </motion.span>
            </motion.span>{" "}
              <motion.span
                  dir="auto"
                  className="line_bold"
                  width={383}
                  height={49}
                  variants={BackgroundAnimation(26)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 798,
                      top: 710,
                      width: 382,
                      height: 48,
                      textAlign: "auto"
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 39 }}
                  variants={TypingAnimation(26.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                بیمه حوادث - هزینه بهداشتی
              </motion.span>
            </motion.span>{" "}
              <motion.span
                  dir="auto"
                  className="line_bold"
                  width={294}
                  height={52}
                  variants={BackgroundAnimation(29)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 876,
                      top: 767,
                      width: 293,
                      height: 51,
                      textAlign: "auto"
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 39 }}
                  variants={TypingAnimation(29.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                پس انداز سهم کارفرما
              </motion.span>
            </motion.span>
          </span>
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
          <span className="lines">
            <motion.span
                dir="auto"
                className="line"
                width={163}
                height={45}
                variants={BackgroundAnimation(1)}
                initial={"hidden"}
                animate={"visible"}
                style={{
                    left: 308,
                    top: 159,
                    width: 162,
                    height: 44,
                    textAlign: "auto"
                }}
            >
              <motion.span
                  className="words"
                  variants={TypingAnimation(1.5)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{ fontSize: 43,}}
              >
                سال ۱۳۹۰
              </motion.span>
            </motion.span>{" "}
              <motion.span
                  dir="auto"
                  className="line_bold"
                  width={132}
                  height={45}
                  variants={BackgroundAnimation(3)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 318,
                      top: 215,
                      width: 131,
                      height: 44,
                      textAlign: "auto"
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 43 }}
                  variants={TypingAnimation(3.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                هزار ریال
              </motion.span>
            </motion.span>
          </span>
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
          <span className="lines">
            <motion.span
                dir="auto"
                className="line_bold"
                width={184}
                height={46}
                variants={BackgroundAnimation(6)}
                initial={"hidden"}
                animate={"visible"}
                style={{
                    left: 319,
                    top: 282,
                    width: 183,
                    height: 45,
                    textAlign: "auto"
                }}
            >
              <motion.span
                  className="words"
                  style={{ fontSize: 43 }}
                  variants={TypingAnimation(6.5)}
                  initial={"hidden"}
                  animate={"visible"}

              >
                ۳۰,۶۷۲,۵۴۵
              </motion.span>
            </motion.span>{" "}
              <motion.span
                  dir="auto"
                  className="line_bold"
                  width={164}
                  height={44}
                  variants={BackgroundAnimation(9)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 339,
                      top: 351,
                      width: 163,
                      height: 43,
                      textAlign: "auto"
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 42 }}
                  variants={TypingAnimation(9.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                ۵,۸۲۲,۸۵۸
              </motion.span>
            </motion.span>{" "}
              <motion.span
                  dir="auto"
                  className="line_bold"
                  width={164}
                  height={46}
                  variants={BackgroundAnimation(12)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 339,
                      top: 411,
                      width: 163,
                      height: 45,
                      textAlign: "auto"
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 42 }}
                  variants={TypingAnimation(12.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                ۳,۵۶۴,۳۳۸
              </motion.span>
            </motion.span>{" "}
              <motion.span
                  dir="auto"
                  className="line_bold"
                  width={159}
                  height={46}
                  variants={BackgroundAnimation(15)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 342,
                      top: 472,
                      width: 158,
                      height: 45,
                      textAlign: "auto"
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 42 }}
                  variants={TypingAnimation(15.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                ۲,۳۲۹,۶۲۹
              </motion.span>
            </motion.span>{" "}
              <motion.span
                  dir="auto"
                  className="line_bold"
                  width={164}
                  height={46}
                  variants={BackgroundAnimation(18)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 340,
                      top: 533,
                      width: 163,
                      height: 45,
                      textAlign: "auto"
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 42 }}
                  variants={TypingAnimation(18.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                ۷,۵۹۷,۴۸۷
              </motion.span>
            </motion.span>{" "}
              <motion.span
                  dir="auto"
                  className="line_bold"
                  width={178}
                  height={47}
                  variants={BackgroundAnimation(21)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 325,
                      top: 593,
                      width: 177,
                      height: 46,
                      textAlign: "auto"
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 43 }}
                  variants={TypingAnimation(21.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                ۱۲,۳۰۵,۶۷۸
              </motion.span>
            </motion.span>{" "}
              <motion.span
                  dir="auto"
                  className="line_bold"
                  width={163}
                  height={48}
                  variants={BackgroundAnimation(24)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 340,
                      top: 652,
                      width: 162,
                      height: 47,
                      textAlign: "auto"
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 42 }}
                  variants={TypingAnimation(24.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                ۵,۹۷۳,۷۷۸
              </motion.span>
            </motion.span>{" "}
              <motion.span
                  dir="auto"
                  className="line_bold"
                  width={127}
                  height={45}
                  variants={BackgroundAnimation(27)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 371,
                      top: 712,
                      width: 126,
                      height: 44,
                      textAlign: "auto"
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 42 }}
                  variants={TypingAnimation(27.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                ۲۴۷,۳۲۰
              </motion.span>
            </motion.span>
          </span>
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
          <span className="lines">
            <motion.span
                dir="auto"
                className="line_bold"
                width={158}
                height={46}
                variants={BackgroundAnimation(30)}
                initial={"hidden"}
                animate={"visible"}
                style={{
                    left: 345,
                    top: 773,
                    width: 157,
                    height: 45,
                    textAlign: "auto"
                }}
            >
              <motion.span
                  className="words"
                  style={{ fontSize: 42 }}
                  variants={TypingAnimation(30.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                ۱,۳۵۸,۷۷۷
              </motion.span>
            </motion.span>
          </span>
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
          <span className="lines">
            <motion.span
                dir="auto"
                className="line_bold"
                width={86}
                height={44}
                variants={BackgroundAnimation(2)}
                initial={"hidden"}
                animate={"visible"}
                style={{
                    left: 58,
                    top: 160,
                    width: 85,
                    height: 43,
                    textAlign: "auto"
                }}
            >
              <motion.span
                  variants={TypingAnimation(2.5)}
                  initial={"hidden"}
                  animate={"visible"}
                  className="words"
                  style={{ fontSize: 42 }}
              >
                سال ۱۳۸۹
              </motion.span>
            </motion.span>
          </span>
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
          <span className="lines">
            <motion.span
                dir="auto"
                className="line_bold"
                width={134}
                height={45}
                variants={BackgroundAnimation(4)}
                initial={"hidden"}
                animate={"visible"}
                style={{
                    left: 68,
                    top: 215,
                    width: 133,
                    height: 44,
                    textAlign: "auto"
                }}
            >
              <motion.span
                  className="words"
                  style={{ fontSize: 43 }}
                  variants={TypingAnimation(4.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                هزار ریال
              </motion.span>
            </motion.span>
          </span>
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
          <span className="lines">
            <motion.span
                dir="auto"
                className="line_bold"
                width={181}
                height={46}
                variants={BackgroundAnimation(7)}
                initial={"hidden"}
                animate={"visible"}
                style={{
                    left: 71,
                    top: 282,
                    width: 180,
                    height: 45,
                    textAlign: "auto"
                }}
            >
              <motion.span
                  className="words"
                  style={{ fontSize: 42 }}
                  variants={TypingAnimation(7.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                ۲۶,۳۲۵,۸۳۳
              </motion.span>
            </motion.span>{" "}
              <motion.span
                  dir="auto"
                  className="line_bold"
                  width={164}
                  height={47}
                  variants={BackgroundAnimation(10)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 87,
                      top: 349,
                      width: 163,
                      height: 46,
                      textAlign: "auto"
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 44 }}
                  variants={TypingAnimation(10.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                ۴,۸۲۱,۸۹۶
              </motion.span>
            </motion.span>{" "}
              <motion.span
                  dir="auto"
                  className="line_bold"
                  width={160}
                  height={47}
                  variants={BackgroundAnimation(13)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 88,
                      top: 410,
                      width: 159,
                      height: 46,
                      textAlign: "auto"
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 43 }}
                  variants={TypingAnimation(13.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                ۳,۶۶۷,۴۳۱
              </motion.span>
            </motion.span>{" "}
              <motion.span
                  dir="auto"
                  className="line_bold"
                  width={163}
                  height={47}
                  variants={BackgroundAnimation(16)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 89,
                      top: 472,
                      width: 162,
                      height: 46,
                      textAlign: "auto"
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 45 }}
                  variants={TypingAnimation(16.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                ۲,۰۳۷,۱۲۷
              </motion.span>
            </motion.span>{" "}
              <motion.span
                  dir="auto"
                  className="line_bold"
                  width={164}
                  height={47}
                  variants={BackgroundAnimation(19)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 88,
                      top: 533,
                      width: 163,
                      height: 46,
                      textAlign: "auto"
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 44 }}
                  variants={TypingAnimation(19.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                ۸,۲۰۴,۹۷۷
              </motion.span>
            </motion.span>{" "}
              <motion.span
                  dir="auto"
                  className="line_bold"
                  width={157}
                  height={47}
                  variants={BackgroundAnimation(22)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 90,
                      top: 592,
                      width: 156,
                      height: 46,
                      textAlign: "auto"
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 43 }}
                  variants={TypingAnimation(22.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                ۹,۳۷۰,۶۲۰
              </motion.span>
            </motion.span>{" "}
              <motion.span
                  dir="auto"
                  className="line_bold"
                  width={164}
                  height={44}
                  variants={BackgroundAnimation(25)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 89,
                      top: 653,
                      width: 163,
                      height: 43,
                      textAlign: "auto"
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 42 }}
                  variants={TypingAnimation(25.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                ۶,۳۴۹,۵۶۸
              </motion.span>
            </motion.span>{" "}
              <motion.span
                  dir="auto"
                  className="line_bold"
                  width={135}
                  height={46}
                  variants={BackgroundAnimation(28)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 118,
                      top: 713,
                      width: 134,
                      height: 45,
                      textAlign: "auto"
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 44 }}
                  variants={TypingAnimation(28.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                ۲۱۷,۱۵۳
              </motion.span>
            </motion.span>
          </span>
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
          <span className="lines">
            <motion.span
                dir="auto"
                className="line_bold"
                width={156}
                height={46}
                variants={BackgroundAnimation(31)}
                initial={"hidden"}
                animate={"visible"}
                style={{
                    left: 92,
                    top: 773,
                    width: 155,
                    height: 45,
                    textAlign: "auto"
                }}
            >
              <motion.span
                  className="words"
                  style={{ fontSize: 44 }}
                  variants={TypingAnimation(31.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                ۱,۵۴۰,۲۹۱
              </motion.span>
            </motion.span>
          </span>
                      </p>
                  </div>
              </page>
          </div>
      </div>
  )
};

export default FishHoghoghi;
