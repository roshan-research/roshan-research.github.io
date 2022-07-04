import rooznameh from "../../assets/images/samples/roznameh.jpg";
import {motion} from 'framer-motion';
import {BackgroundAnimation, TypingAnimation} from "../../animations/typingAnimation";

const RoozNameh = () => {
    return(
        <div className="container"
             style={{
                 zIndex: '1000',
                 marginTop: '-60vh',
                 marginLeft: '30vw',
             }}
        >
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html:
                        '\n\t.container {\n\t\tmax-width: 1170px;\n\t}\n\t#document {\n\t\tmargin: 50px 0;\n\t\ttransform-origin: top left;\n\t\t-moz-transform-origin: top left;\n\t}\n\t#document img {\n\t\tz-index: -1;\n\t\tborder: 2px solid #ddd;\n\t\tmargin-top: -2px;\n\t\tmargin-left: -2px;\n\t}\n\n\t.document.line-view .line, .document.paragraph-view p, .document.paragraph-view table {\n\t\tfont-family: IRMitra;\n\t    /*background: rgba(255, 98, 0, 0.9);*/\n\t    background: rgba(255, 98, 0, 0.95);\n\t    color: black;\n\t    border-radius: 3px;\n\t    color: #333;\n\t    line-height: 1;\n\t    /* box-shadow: 0px 2px 2px #777; */\n\t    /* text-shadow: 0px 1px 1px #999; */\n\t    /* border: 1px solid #e45701; */\n    }\n    .document.line-view .line_bold, .document.paragraph-view p, .document.paragraph-view table {\n\t\tfont-family: IRMitra;\n\t    /*background: rgba(255, 98, 0, 0.9);*/\n\t    background: rgba(255, 98, 0, 0.95);\n\t    color: black;\n\t    border-radius: 3px;\n\t    color: #333;\n\t    line-height: 1;\n\t    /* box-shadow: 0px 2px 2px #777; */\n\t    /* text-shadow: 0px 1px 1px #999; */\n\t    /* border: 1px solid #e45701; */\n    }\n\t.document .words {\n\t\twhite-space: nowrap;\n\t}\n\t.document.line-view .line {\n\t\tdisplay: table;\n\t\tposition: absolute;\n\t\ttext-align: center;\n\t}\n\t.document.line-view .line_bold {\n\t\tdisplay: table;\n\t\tposition: absolute;\n\t\ttext-align: center;\n\t\tfont-weight: bold\n\t}\n\t.document.line-view .words {\n\t\tdisplay: table-cell;\n\t\tvertical-align: middle;\n\t}\n\t.document.line-view p, .document.line-view table {\n\t\theight: initial !important;\n\t\twidth: initial !important;\n\t}\n\n\t.document.paragraph-view p, .document.paragraph-view table {\n\t\tposition: absolute;\n\t\tpadding: 5px 30px;\n\t\tdisplay: table;\n\t}\n\t.document.paragraph-view .lines {\n\t\tdisplay: table-cell;\n\t\tvertical-align: middle;\n\t}\n\t.document.paragraph-view .line {\n\t\tdisplay: block;\n\t\tline-height: 1.3;\n\t\theight: initial !important;\n\t\twidth: initial !important;\n\t}\n\t.document.paragraph-view .words {\n\t\tfont-size: inherit !important;\n\t}\n\n\t.document div.image {\n\t\tposition: absolute;\n\t\t/*border: 10px solid #33bbff;*/\n\t\tborder-radius: 5px;\n\t\t/*box-shadow: 0px 2px 5px #777;*/\n\t\tmargin-top: 0;\n\t\tbackground: rgba(255, 98, 0, 0.0);\n\t}\n\n\t.document .image div.image-wrapper{\n\t\theight: 100%;\n\t\tmax-width: 128px;\n\t\tmargin: auto;\n\t\tbackground: url("/static/images/picture1600.png") no-repeat center center;\n\t\tbackground-size: contain;\n\t}\n\n\t.document.paragraph-view table th, .document.paragraph-view table td {\n\t\tborder: 6px dashed #fff;\n\t}\n'
                }}
            />
            <div
                id="document"
                style={{
                    position: "relative",
                    transform: "scale(0.35)",
                }}
            >
                <img
                    style={{ position: "absolute", left: 0 }}
                    id="raw"
                    src={rooznameh}
                    alt={''}
                />
                <page style={{ width: 2226, height: 1296 }}>
                    <div className="document line-view" style={{}}>
                        <p
                            style={{
                                left: 68,
                                top: 20,
                                width: 2126,
                                height: 371,
                                fontSize: "45pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
            <motion.span
                variants={BackgroundAnimation(0)}
                initial={"hidden"}
                animate={"visible"}
                dir="auto"
                className="line_bold"
                width={2120}
                height={214}
                style={{
                    left: 50,
                    top: 10,
                    width: 2150,
                    height: 190,
                    textAlign: "auto"
                }}
            >
              <motion.span
                  className="words"
                  style={{ fontSize: 169 }}
                  variants={TypingAnimation(0.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                دور تازه مذاکرات در مسکو و بروکسل
              </motion.span>
            </motion.span>{" "}
              <motion.span
                  dir="auto"
                  className="line"
                  width={549}
                  height={53}
                  variants={BackgroundAnimation(1)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 1645,
                      top: 214,
                      width: 548,
                      height: 205,
                      textAlign: "right",
                      lineHeight: '0.55em'
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 26 }}
                  variants={TypingAnimation(1.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                هیأت ایرانی را نمایندگانی از شورای عالی امنیت ملی، وزارت
                  <br/>
                خارجه و سازمان انرژی اتمی تشکیل می‌دهد
                  <br/>
                همزمان با مذاکرات مسکو، دور جدید گفت وگوهای هسته‌ای
                  <br/>
                  ایران و اروپا با حضور متکی و وعیدی در بروکسل آغاز می‌شود
                  <br/>
                  وعیدی: موقعیت مناسبی برای دو طرف (اروپا و ایران) در مسیر
                  <br/>
                  مذاکره و تفاهم فراهم شده است
              </motion.span>
            </motion.span>{" "}
          </span>
                        </p>
                        <p
                            style={{
                                left: 1819,
                                top: 252,
                                width: 376,
                                height: 43,
                                fontSize: "20pt"
                            }}
                            dir="auto"
                        >
                        </p>
                        <p
                            style={{
                                left: 1689,
                                top: 311,
                                width: 505,
                                height: 105,
                                fontSize: "20pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
          </span>
                        </p>
                        <p
                            style={{
                                left: 1120,
                                top: 218,
                                width: 497,
                                height: 176,
                                fontSize: "22pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
            <motion.span
                dir="auto"
                className="line"
                width={497}
                height={46}
                variants={BackgroundAnimation(2)}
                initial={"hidden"}
                animate={"visible"}
                style={{
                    left: 1120,
                    top: 218,
                    width: 496,
                    height: 200,
                    textAlign: "right",
                    lineHeight: "1em",
                    zIndex: '100'
                }}
            >
              <motion.span
                  className="words"
                  style={{ fontSize: 25 }}
                  variants={TypingAnimation(2.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                قصد داریم از اقداماتی که مسیر تعامل و گفت‌وگو را تخریب
                  <br/>
                  می‌کند پرهیز کنیم
                  <br/>
                  سید علی حسینی تاش، معاون لاریجانی ریاست تیم
                  <br/>
                  مذاکره را برعهده دارد و جعفری معاون دیگر لاریجانی او را
                  <br/>
                  همراهی می‌کند
                  <br/>
                  حسینی تاش: مذاکرات با روسیه مشروط نیست و ما از
              </motion.span>
            </motion.span>{" "}
          </span>
                        </p>
                        <p
                            style={{
                                left: 1442,
                                top: 251,
                                width: 175,
                                height: 46,
                                fontSize: "21pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">

          </span>
                        </p>
                        <p
                            style={{
                                left: 1119,
                                top: 308,
                                width: 498,
                                height: 108,
                                fontSize: "22pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
          </span>
                        </p>
                        <p
                            style={{
                                left: 778,
                                top: 220,
                                width: 314,
                                height: 44,
                                fontSize: "20pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
            <motion.span
                dir="auto"
                className="line"
                width={315}
                height={45}
                variants={BackgroundAnimation(3)}
                initial={"hidden"}
                animate={"visible"}
                style={{
                    left: 600,
                    top: 220,
                    width: 500,
                    height: 200,
                    textAlign: "right",
                    lineHeight: "1.2em"
                }}
            >
              <motion.span
                  className="words"
                  style={{ fontSize: 26 }}
                  variants={TypingAnimation(3.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                حقوق خود عقب نشینی نخواهیم کرد
                  <br/>
                  سرگئی کرینکو، رئیس سازمان انرژی اتمی روسیه بزودی
                  <br/>
                  برای بررسی مراحل تکمیلی بوشهر به ایران می‌آید
                  <br/>
                  وزیر خارجه آلمان از ایران خواست پیشنهاد روسیه را بپذیرد
                  <br/>
                  یک دیپلمات اروپایی: ایران و اتحادیه اروپا درباره موضوع
                  <br/>
                  هسته‌ای به توافق می‌رسند
              </motion.span>
            </motion.span>
          </span>
                        </p>
                        <p
                            style={{
                                left: 673,
                                top: 276,
                                width: 419,
                                height: 52,
                                fontSize: "24pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
          </span>
                        </p>
                        <p
                            style={{
                                left: 595,
                                top: 250,
                                width: 496,
                                height: 166,
                                fontSize: "20pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
          </span>
                        </p>
                        <p
                            style={{
                                left: 595,
                                top: 347,
                                width: 496,
                                height: 47,
                                fontSize: "22pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
          </span>
                        </p>
                        <div
                            className="image"
                            style={{ left: 971, top: 437, width: 1222, height: 746 }}
                        >
                            <div className="image-wrapper" />
                        </div>
                        <p
                            style={{
                                left: 1821,
                                top: 1181,
                                width: 217,
                                height: 55,
                                fontSize: "26pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
            <motion.span
                dir="auto"
                className="line_bold"
                width={218}
                height={56}
                variants={BackgroundAnimation(13)}
                initial={"hidden"}
                animate={"visible"}
                style={{
                    left: 1821,
                    top: 1181,
                    width: 217,
                    height: 55,
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
                سیلاب و طغیان
              </motion.span>
            </motion.span>
          </span>
                        </p>
                        <p
                            style={{
                                left: 988,
                                top: 1196,
                                width: 816,
                                height: 46,
                                fontSize: "21pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
            <motion.span
                dir="auto"
                className="line"
                width={817}
                height={47}
                variants={BackgroundAnimation(13)}
                initial={"hidden"}
                animate={"visible"}
                style={{
                    left: 988,
                    top: 1196,
                    width: 816,
                    height: 46,
                    textAlign: "auto"
                }}
            >
              <motion.span
                  className="words"
                  style={{ fontSize: 25 }}
                  variants={TypingAnimation(13.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                سیلاب در شهرهای شوشتر، شادگان، گتوند، بستان، اندیمشک و اهواز
                خساراتی بر جای گذاشت
              </motion.span>
            </motion.span>
          </span>
                        </p>
                        <p
                            style={{
                                left: 1050,
                                top: 1219,
                                width: 1101,
                                height: 54,
                                fontSize: "25pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
            <motion.span
                dir="auto"
                className="line"
                width={1102}
                height={55}
                variants={BackgroundAnimation(14)}
                initial={"hidden"}
                animate={"visible"}
                style={{
                    left: 1050,
                    top: 1235,
                    width: 1101,
                    height: 54,
                    textAlign: "auto"
                }}
            >
              <motion.span
                  className="words"
                  style={{ fontSize: 29 }}
                  variants={TypingAnimation(14.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                رودخانه‌ها در خوزستان افزایش حجم آب کارون به حدی بود که سواحل
                حاشیه رودخانه و اهواز نیز مملو از آب شد
              </motion.span>
            </motion.span>
          </span>
                        </p>
                        <p
                            style={{
                                left: 71,
                                top: 219,
                                width: 495,
                                height: 168,
                                fontSize: "20pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
            <motion.span
                dir="auto"
                className="line"
                width={495}
                height={46}
                variants={BackgroundAnimation(4)}
                initial={"hidden"}
                animate={"visible"}
                style={{
                    left: 71,
                    top: 219,
                    width: 494,
                    height: 140,
                    textAlign: "right",
                    lineHeight: "1.2em"
                }}
            >
              <motion.span
                  className="words"
                  style={{ fontSize: 25 }}
                  variants={TypingAnimation(4.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                ایران و روسیه به هم اعتماد دارند و قصد فریب یکدیگر را
                  <br/>
                  ندارند و اینها زمینه خوبی برای به نتیجه رسیدن مذاکرات است
                  <br/>
                  عوامل امیدوارکننده در این مذاکرات وجود دارد
                  <br/>
                  وزارت خارجه روسیه: در این مذاکرات راههای خروج مسأله
                  <br/>
                  هسته‌ای از بن بست بررسی می‌شود
              </motion.span>
            </motion.span>{" "}
          </span>
                        </p>
                        <p
                            style={{
                                left: 70,
                                top: 252,
                                width: 497,
                                height: 164,
                                fontSize: "19pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
              <motion.span
                  dir="auto"
                  className="line_bold"
                  width={78}
                  height={36}
                  variants={BackgroundAnimation(5)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 73,
                      top: 381,
                      width: 77,
                      height: 35,
                      textAlign: "auto"
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 26 }}
                  variants={TypingAnimation(5.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                صفحه ۲
              </motion.span>
            </motion.span>
          </span>
                        </p>
                        <p
                            style={{
                                left: 135,
                                top: 436,
                                width: 738,
                                height: 153,
                                fontSize: "34pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
            <motion.span
                dir="auto"
                className="line_bold"
                width={739}
                height={50}
                variants={BackgroundAnimation(6)}
                initial={"hidden"}
                animate={"visible"}
                style={{
                    left: 135,
                    top: 436,
                    width: 738,
                    height: 49,
                    textAlign: "auto"
                }}
            >
              <motion.span
                  className="words"
                  style={{ fontSize: 34 }}
                  variants={TypingAnimation(6.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                رئیس جمهوری در دیدار مسؤولان آموزش و پرورش اعلام کرد
              </motion.span>
            </motion.span>{" "}
              <motion.span
                  dir="auto"
                  className="line_bold"
                  width={470}
                  height={96}
                  variants={BackgroundAnimation(7)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 100,
                      top: 494,
                      width: 469,
                      height: 130,
                      textAlign: "center",
                      lineHeight: '2.3em'
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 88 }}
                  variants={TypingAnimation(7.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                بیشترین افزایش
                  <br/>
                در بودجه آموزش و پرورش
              </motion.span>
            </motion.span>
          </span>
                        </p>
                        <p
                            style={{
                                left: 113,
                                top: 601,
                                width: 782,
                                height: 167,
                                fontSize: "36pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
              <motion.span
                  dir="auto"
                  className="line_bold"
                  width={643}
                  height={60}
                  variants={BackgroundAnimation(8)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 183,
                      top: 709,
                      width: 642,
                      height: 90,
                      textAlign: "center",
                      lineHeight: "0.8em"
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 38 }}
                  variants={TypingAnimation(8.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                باید با ایجاد کانون‌هایی در مدارس دانش آموزان را
                  <br/>
                در اداره امور سهیم کرد
              </motion.span>
            </motion.span>
          </span>
                        </p>
                        <p
                            style={{
                                left: 356,
                                top: 756,
                                width: 295,
                                height: 46,
                                fontSize: "21pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
          </span>
                        </p>
                        <p
                            style={{
                                left: 517,
                                top: 806,
                                width: 422,
                                height: 414,
                                fontSize: "23pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
            <motion.span
                dir="auto"
                className="line"
                width={390}
                height={49}
                variants={BackgroundAnimation(9)}
                initial={"hidden"}
                animate={"visible"}
                style={{
                    left: 500,
                    top: 806,
                    width: 370,
                    height: 48,
                    textAlign: "right",
                    lineHeight: "1.12em"
                }}
            >
              <motion.span
                  className="words"
                  style={{ fontSize: 27 }}
                  variants={TypingAnimation(9.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                گروه سیاسی: «محمود احمدی نژاد» رئیس
                  <br/>
                  جمهوری در دیدار مسؤولان آموزش و پرورش گفت:
                  <br/>
                  ملت بزرگ ایران حرکتی نوین را آغاز کرده است و
                  <br/>
                  قصد دارد با ایجاد جامعه ای نمونه، الگویی اسلامی
                  <br/>
                  را با پیام خداخواهی و عدالتخواهی به جهانیان
                  <br/>
                  عرضه کند.
              </motion.span>
            </motion.span>{" "}
              <motion.span
                  dir="auto"
                  className="line"
                  width={408}
                  height={53}
                  variants={BackgroundAnimation(10)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 500,
                      top: 1010,
                      width: 370,
                      height: 50,
                      textAlign: "right",
                      lineHeight: "1.0em"
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 27 }}
                  variants={TypingAnimation(10.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                به گزارش دفتر امور رسانه های ریاست
                  <br/>
                  جمهوری،احمدی نژاد افزود: برای دستیابی به این
                  <br/>
                  هدف باید چند ویژگی وجود داشته باشد که
                  <br/>
                  مهمترین آنها خودباوری و آرمانخواهی است زیرا
                  <br/>
                  خودباوری و احساس هویت، پایه حرکت انسان است
                  <br/>
                  وآرمانها نیز مانند قله هایی هستند که مسیر وجهت
                  <br/>
                  را مشخص می‌کنند.
                  <br/>
                  رئیس‌جمهوری در دیدار وزیر، معاونان، رؤسای
                  <br/>
                  سازمان‌های آموزش وپرورش سراسر کشور ومدیران
              </motion.span>
            </motion.span>{" "}
          </span>
                        </p>
                        <p
                            style={{
                                left: 518,
                                top: 832,
                                width: 421,
                                height: 172,
                                fontSize: "23pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
          </span>
                        </p>
                        <p
                            style={{
                                left: 518,
                                top: 1014,
                                width: 421,
                                height: 237,
                                fontSize: "24pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
          </span>
                        </p>
                        <p
                            style={{
                                left: 519,
                                top: 1230,
                                width: 419,
                                height: 41,
                                fontSize: "18pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
          </span>
                        </p>
                        <p
                            style={{
                                left: 69,
                                top: 804,
                                width: 423,
                                height: 463,
                                fontSize: "22pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
            <motion.span
                dir="auto"
                className="line"
                width={422}
                height={51}
                variants={BackgroundAnimation(11)}
                initial={"hidden"}
                animate={"visible"}
                style={{
                    left: 20,
                    top: 804,
                    width: 421,
                    height: 50,
                    textAlign: "right",
                    lineHeight: "1.2em"
                }}
            >
              <motion.span
                  className="words"
                  style={{ fontSize: 27 }}
                  variants={TypingAnimation(11.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                ستادی وزارت آموزش و پرورش، جنس و ذات انقلاب
                  <br/>
                  اسلامی را فرهنگی دانست وگفت: انقلاب ما اهداف
                  <br/>
                  و مسؤولیت های بزرگی دارد که برای تحقق آنها باید
                  <br/>
                  به آموزش و پرورش به عنوان مرکز ثقل نگریست.
              </motion.span>
            </motion.span>{" "}
              <motion.span
                  dir="auto"
                  className="line"
                  width={385}
                  height={52}
                  variants={BackgroundAnimation(12)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 20,
                      top: 945,
                      width: 384,
                      height: 51,
                      textAlign: "right",
                      lineHeight: "1.1em"
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 27 }}
                  variants={TypingAnimation(12.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                  احمدی نژاد، آموزش وپرورش راکانون بی بدیل
                  <br/>
                  تربیت نیروی انسانی برای اداره کشور معرفی کرد و
                  <br/>
                  گفت: باید با تربیت نوجوانان و جوانان مؤمن، شجاع،
                  <br/>
                  آرمانخواه و خلاق آنان را برای اداره کشور در سالهای
                  <br/>
                  آینده آماده کرد، چرا که این ظرفیت بخوبی در نسل
                  <br/>
                  نوجوان وجوان ایرانی وجود دارد. رئیس جمهوری
                  <br/>
                  ایجاد رابطه عاطفی میان معلمان و دانش آموزان را
                  <br/>
                  بسیارمهم دانست و گفت: باید با ایجاد کانون هایی
                  <br/>
                  درمدارس به دانش آموزان اجازه اظهارنظر داد وآنان
                  <br/>
                  را در اداره امور سهیم کرد.
              </motion.span>
            </motion.span>{" "}
              <motion.span
                  dir="auto"
                  className="line_bold"
                  width={145}
                  height={33}
                  variants={BackgroundAnimation(15)}
                  initial={"hidden"}
                  animate={"visible"}
                  style={{
                      left: 71,
                      top: 1265,
                      width: 144,
                      height: 32,
                      textAlign: "auto"
                  }}
              >
              <motion.span
                  className="words"
                  style={{ fontSize: 25 }}
                  variants={TypingAnimation(15.5)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                بقیه در صفحه ۳
              </motion.span>
            </motion.span>
          </span>
                        </p>
                        <p
                            style={{
                                left: 69,
                                top: 833,
                                width: 423,
                                height: 409,
                                fontSize: "23pt"
                            }}
                            dir="auto"
                        >
          <span className="lines">
          </span>
                        </p>
                    </div>
                </page>
            </div>
        </div>

    );
};

export default RoozNameh;
