import rooznameh from "../../assets/images/samples/roznameh.jpg";

const RoozNameh = () => {
    return(
        <div className="container" style={{zIndex: '1000', marginTop: '-60vh', marginLeft: '30vw'}}>
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html:
                        '\n\t.container {\n\t\tmax-width: 1170px;\n\t}\n\t#document {\n\t\tmargin: 50px 0;\n\t\ttransform-origin: top left;\n\t\t-moz-transform-origin: top left;\n\t}\n\t#document img {\n\t\tz-index: -1;\n\t\tborder: 2px solid #ddd;\n\t\tmargin-top: -2px;\n\t\tmargin-left: -2px;\n\t}\n\n\t.document.line-view .line, .document.paragraph-view p, .document.paragraph-view table {\n\t\tfont-family: IRMitra;\n\t    /*background: rgba(255, 98, 0, 0.9);*/\n\t    background: rgba(255, 98, 0, 0.95);\n\t    color: black;\n\t    border-radius: 3px;\n\t    color: #333;\n\t    line-height: 1;\n\t    /* box-shadow: 0px 2px 2px #777; */\n\t    /* text-shadow: 0px 1px 1px #999; */\n\t    /* border: 1px solid #e45701; */\n    }\n    .document.line-view .line_bold, .document.paragraph-view p, .document.paragraph-view table {\n\t\tfont-family: IRMitra;\n\t    /*background: rgba(255, 98, 0, 0.9);*/\n\t    background: rgba(255, 98, 0, 0.95);\n\t    color: black;\n\t    border-radius: 3px;\n\t    color: #333;\n\t    line-height: 1;\n\t    /* box-shadow: 0px 2px 2px #777; */\n\t    /* text-shadow: 0px 1px 1px #999; */\n\t    /* border: 1px solid #e45701; */\n    }\n\t.document .words {\n\t\twhite-space: nowrap;\n\t}\n\t.document.line-view .line {\n\t\tdisplay: table;\n\t\tposition: absolute;\n\t\ttext-align: center;\n\t}\n\t.document.line-view .line_bold {\n\t\tdisplay: table;\n\t\tposition: absolute;\n\t\ttext-align: center;\n\t\tfont-weight: bold\n\t}\n\t.document.line-view .words {\n\t\tdisplay: table-cell;\n\t\tvertical-align: middle;\n\t}\n\t.document.line-view p, .document.line-view table {\n\t\theight: initial !important;\n\t\twidth: initial !important;\n\t}\n\n\t.document.paragraph-view p, .document.paragraph-view table {\n\t\tposition: absolute;\n\t\tpadding: 5px 30px;\n\t\tdisplay: table;\n\t}\n\t.document.paragraph-view .lines {\n\t\tdisplay: table-cell;\n\t\tvertical-align: middle;\n\t}\n\t.document.paragraph-view .line {\n\t\tdisplay: block;\n\t\tline-height: 1.3;\n\t\theight: initial !important;\n\t\twidth: initial !important;\n\t}\n\t.document.paragraph-view .words {\n\t\tfont-size: inherit !important;\n\t}\n\n\t.document div.image {\n\t\tposition: absolute;\n\t\t/*border: 10px solid #33bbff;*/\n\t\tborder-radius: 5px;\n\t\t/*box-shadow: 0px 2px 5px #777;*/\n\t\tmargin-top: 0;\n\t\tbackground: rgba(255, 98, 0, 0.0);\n\t}\n\n\t.document .image div.image-wrapper{\n\t\theight: 100%;\n\t\tmax-width: 128px;\n\t\tmargin: auto;\n\t\tbackground: url("/static/images/picture1600.png") no-repeat center center;\n\t\tbackground-size: contain;\n\t}\n\n\t.document.paragraph-view table th, .document.paragraph-view table td {\n\t\tborder: 6px dashed #fff;\n\t}\n'
                }}
            />
            <div
                id="document"
                style={{ position: "relative", transform: "scale(0.35)" }}
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
            <span
                dir="auto"
                className="line_bold"
                width={2120}
                height={214}
                style={{
                    left: 68,
                    top: 20,
                    width: 2119,
                    height: 213,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 169 }}>
                دور تازه مذاکرات در مسکو و بروکسل
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={549}
                  height={53}
                  style={{
                      left: 1645,
                      top: 214,
                      width: 548,
                      height: 52,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 26 }}>
                هیأت ایرانی را نمایندگانی از شورای عالی امنیت ملی، وزارت
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={550}
                  height={60}
                  style={{
                      left: 1645,
                      top: 273,
                      width: 549,
                      height: 59,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 27 }}>
                همزمان با مذاکرات مسکو، دور جدید گفت وگوهای هسته‌ای
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={550}
                  height={53}
                  style={{
                      left: 1644,
                      top: 339,
                      width: 549,
                      height: 52,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 25 }}>
                وعیدی: موقعیت مناسبی برای دو طرف (اروپا و ایران) در مسیر
              </span>
            </span>
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
          <span className="lines">
            <span
                dir="auto"
                className="line"
                width={377}
                height={44}
                style={{
                    left: 1819,
                    top: 252,
                    width: 376,
                    height: 43,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 25 }}>
                خارجه و سازمان انرژی اتمی تشکیل می‌دهد
              </span>
            </span>
          </span>
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
            <span
                dir="auto"
                className="line_bold"
                width={506}
                height={50}
                style={{
                    left: 1689,
                    top: 311,
                    width: 505,
                    height: 49,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 23 }}>
                ایران و اروپا با حضور متکی و وعیدی در بروکسل آغاز می‌شود
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={270}
                  height={38}
                  style={{
                      left: 1925,
                      top: 379,
                      width: 269,
                      height: 37,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 26 }}>
                مذاکره و تفاهم فراهم شده است
              </span>
            </span>
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
            <span
                dir="auto"
                className="line"
                width={497}
                height={46}
                style={{
                    left: 1120,
                    top: 218,
                    width: 496,
                    height: 45,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 25 }}>
                قصد داریم از اقداماتی که مسیر تعامل و گفت‌وگو را تخریب
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={497}
                  height={53}
                  style={{
                      left: 1120,
                      top: 276,
                      width: 496,
                      height: 52,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 30 }}>
                سید علی حسینی تاش، معاون لاریجانی ریاست تیم
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={150}
                  height={48}
                  style={{
                      left: 1468,
                      top: 347,
                      width: 149,
                      height: 47,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 30 }}>
                همراهی می‌کند
              </span>
            </span>
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
            <span
                dir="auto"
                className="line"
                width={176}
                height={47}
                style={{
                    left: 1442,
                    top: 251,
                    width: 175,
                    height: 46,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 30 }}>
                می‌کند پرهیز کنیم
              </span>
            </span>
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
            <span
                dir="auto"
                className="line"
                width={497}
                height={53}
                style={{
                    left: 1121,
                    top: 308,
                    width: 496,
                    height: 52,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 24 }}>
                مذاکره را برعهده دارد و جعفری معاون دیگر لاریجانی او را
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line_bold"
                  width={498}
                  height={46}
                  style={{
                      left: 1119,
                      top: 371,
                      width: 497,
                      height: 45,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 27 }}>
                حسینی تاش: مذاکرات با روسیه مشروط نیست و ما از
              </span>
            </span>
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
            <span
                dir="auto"
                className="line"
                width={315}
                height={45}
                style={{
                    left: 778,
                    top: 220,
                    width: 314,
                    height: 44,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 26 }}>
                حقوق خود عقب نشینی نخواهیم کرد
              </span>
            </span>
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
            <span
                dir="auto"
                className="line"
                width={420}
                height={53}
                style={{
                    left: 673,
                    top: 276,
                    width: 419,
                    height: 52,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 25 }}>
                برای بررسی مراحل تکمیلی بوشهر به ایران می‌آید
              </span>
            </span>
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
            <span
                dir="auto"
                className="line"
                width={497}
                height={48}
                style={{
                    left: 595,
                    top: 250,
                    width: 496,
                    height: 47,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 25 }}>
                سرگئی کرینکو، رئیس سازمان انرژی اتمی روسیه بزودی
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line_bold"
                  width={497}
                  height={50}
                  style={{
                      left: 595,
                      top: 311,
                      width: 496,
                      height: 49,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 24 }}>
                وزیر خارجه آلمان از ایران خواست پیشنهاد روسیه را بپذیرد
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={236}
                  height={38}
                  style={{
                      left: 856,
                      top: 379,
                      width: 235,
                      height: 37,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 28 }}>
                هسته‌ای به توافق می‌رسند
              </span>
            </span>
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
            <span
                dir="auto"
                className="line"
                width={497}
                height={48}
                style={{
                    left: 595,
                    top: 347,
                    width: 496,
                    height: 47,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 25 }}>
                یک دیپلمات اروپایی: ایران و اتحادیه اروپا درباره موضوع
              </span>
            </span>
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
            <span
                dir="auto"
                className="line_bold"
                width={218}
                height={56}
                style={{
                    left: 1821,
                    top: 1181,
                    width: 217,
                    height: 55,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 43 }}>
                سیلاب و طغیان
              </span>
            </span>
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
            <span
                dir="auto"
                className="line"
                width={817}
                height={47}
                style={{
                    left: 988,
                    top: 1196,
                    width: 816,
                    height: 46,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 25 }}>
                سیلاب در شهرهای شوشتر، شادگان، گتوند، بستان، اندیمشک و اهواز
                خساراتی بر جای گذاشت
              </span>
            </span>
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
            <span
                dir="auto"
                className="line"
                width={1102}
                height={55}
                style={{
                    left: 1050,
                    top: 1219,
                    width: 1101,
                    height: 54,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 29 }}>
                رودخانه‌ها در خوزستان افزایش حجم آب کارون به حدی بود که سواحل
                حاشیه رودخانه و اهواز نیز مملو از آب شد
              </span>
            </span>
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
            <span
                dir="auto"
                className="line"
                width={495}
                height={46}
                style={{
                    left: 71,
                    top: 219,
                    width: 494,
                    height: 45,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 25 }}>
                ایران و روسیه به هم اعتماد دارند و قصد فریب یکدیگر را
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={417}
                  height={51}
                  style={{
                      left: 149,
                      top: 276,
                      width: 416,
                      height: 50,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 26 }}>
                عوامل امیدوارکننده در این مذاکرات وجود دارد
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line_bold"
                  width={305}
                  height={40}
                  style={{
                      left: 262,
                      top: 348,
                      width: 304,
                      height: 39,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 25 }}>
                هسته‌ای از بن بست بررسی می‌شود
              </span>
            </span>
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
            <span
                dir="auto"
                className="line"
                width={498}
                height={44}
                style={{
                    left: 70,
                    top: 252,
                    width: 497,
                    height: 43,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 24 }}>
                ندارند و اینها زمینه خوبی برای به نتیجه رسیدن مذاکرات است
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line_bold"
                  width={496}
                  height={51}
                  style={{
                      left: 70,
                      top: 310,
                      width: 495,
                      height: 50,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 24 }}>
                وزارت خارجه روسیه: در این مذاکرات راههای خروج مسأله
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line_bold"
                  width={78}
                  height={36}
                  style={{
                      left: 73,
                      top: 381,
                      width: 77,
                      height: 35,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 26 }}>
                صفحه ۲
              </span>
            </span>
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
            <span
                dir="auto"
                className="line_bold"
                width={739}
                height={50}
                style={{
                    left: 135,
                    top: 436,
                    width: 738,
                    height: 49,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 34 }}>
                رئیس جمهوری در دیدار مسؤولان آموزش و پرورش اعلام کرد
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line_bold"
                  width={470}
                  height={96}
                  style={{
                      left: 269,
                      top: 494,
                      width: 469,
                      height: 95,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 88 }}>
                بیشترین افزایش
              </span>
            </span>
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
            <span
                dir="auto"
                className="line_bold"
                width={783}
                height={95}
                style={{
                    left: 113,
                    top: 601,
                    width: 782,
                    height: 94,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 86 }}>
                در بودجهآموزش و پرورش
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line_bold"
                  width={643}
                  height={60}
                  style={{
                      left: 183,
                      top: 709,
                      width: 642,
                      height: 59,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 38 }}>
                باید با ایجاد کانون‌هایی در مدارس دانش آموزان را
              </span>
            </span>
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
            <span
                dir="auto"
                className="line_bold"
                width={296}
                height={47}
                style={{
                    left: 356,
                    top: 756,
                    width: 295,
                    height: 46,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 37 }}>
                در اداره امور سهیم کرد
              </span>
            </span>
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
            <span
                dir="auto"
                className="line"
                width={390}
                height={49}
                style={{
                    left: 518,
                    top: 806,
                    width: 389,
                    height: 48,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 27 }}>
                گروه سیاسی: «محمود احمدی نژاد» رئیس
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={423}
                  height={57}
                  style={{
                      left: 517,
                      top: 861,
                      width: 422,
                      height: 56,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 24 }}>
                ملت بزرگ ایران حرکتی نوین را آغاز کرده است و
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={422}
                  height={48}
                  style={{
                      left: 518,
                      top: 930,
                      width: 421,
                      height: 47,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 28 }}>
                را با پیام خداخواهی و عدالتخواهی به جهانیان
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={408}
                  height={53}
                  style={{
                      left: 518,
                      top: 983,
                      width: 407,
                      height: 52,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 30 }}>
                به گزارش دفتر امور رسانه های ریاست
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={422}
                  height={53}
                  style={{
                      left: 518,
                      top: 1046,
                      width: 421,
                      height: 52,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 31 }}>
                هدف باید چند ویژگی وجود داشته باشد که
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={422}
                  height={48}
                  style={{
                      left: 518,
                      top: 1112,
                      width: 421,
                      height: 47,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 24 }}>
                خودباوری و احساس هویت، پایه حرکت انسان است
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={184}
                  height={49}
                  style={{
                      left: 756,
                      top: 1172,
                      width: 183,
                      height: 48,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 28 }}>
                را مشخص می‌کنند.
              </span>
            </span>
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
            <span
                dir="auto"
                className="line"
                width={421}
                height={57}
                style={{
                    left: 519,
                    top: 832,
                    width: 420,
                    height: 56,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 24 }}>
                جمهوری در دیدار مسؤولان آموزش و پرورش گفت:
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line_bold"
                  width={422}
                  height={51}
                  style={{
                      left: 518,
                      top: 894,
                      width: 421,
                      height: 50,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 24 }}>
                قصد دارد با ایجاد جامعه ای نمونه، الگویی اسلامی
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={101}
                  height={44}
                  style={{
                      left: 838,
                      top: 961,
                      width: 100,
                      height: 43,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 26 }}>
                عرضه کند.
              </span>
            </span>
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
            <span
                dir="auto"
                className="line"
                width={422}
                height={57}
                style={{
                    left: 518,
                    top: 1014,
                    width: 421,
                    height: 56,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 25 }}>
                جمهوری،احمدی نژاد افزود: برای دستیابی به این
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={421}
                  height={57}
                  style={{
                      left: 519,
                      top: 1074,
                      width: 420,
                      height: 56,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 25 }}>
                مهمترین آنها خودباوری و آرمانخواهی است زیرا
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={422}
                  height={51}
                  style={{
                      left: 518,
                      top: 1138,
                      width: 421,
                      height: 50,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 25 }}>
                وآرمانها نیز مانند قله هایی هستند که مسیر وجهت
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={403}
                  height={49}
                  style={{
                      left: 518,
                      top: 1203,
                      width: 402,
                      height: 48,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 25 }}>
                رئیس‌جمهوری در دیدار وزیر، معاونان، رؤسای
              </span>
            </span>
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
            <span
                dir="auto"
                className="line_bold"
                width={420}
                height={42}
                style={{
                    left: 519,
                    top: 1230,
                    width: 419,
                    height: 41,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 23 }}>
                سازمان‌های آموزش وپرورش سراسر کشور ومدیران
              </span>
            </span>
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
            <span
                dir="auto"
                className="line"
                width={422}
                height={51}
                style={{
                    left: 70,
                    top: 804,
                    width: 421,
                    height: 50,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 23 }}>
                ستادی وزارت آموزش و پرورش، جنس و ذات انقلاب
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={421}
                  height={53}
                  style={{
                      left: 70,
                      top: 864,
                      width: 420,
                      height: 52,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 24 }}>
                و مسؤولیت های بزرگی دارد که برای تحقق آنها باید
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={385}
                  height={52}
                  style={{
                      left: 70,
                      top: 926,
                      width: 384,
                      height: 51,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 24 }}>
                احمدی نژاد، آموزش وپرورش راکانون بی بدیل
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={424}
                  height={53}
                  style={{
                      left: 69,
                      top: 983,
                      width: 423,
                      height: 52,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 24 }}>
                گفت: باید با تربیت نوجوانان و جوانان مؤمن، شجاع،
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={423}
                  height={50}
                  style={{
                      left: 70,
                      top: 1047,
                      width: 422,
                      height: 49,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 25 }}>
                آینده آماده کرد، چرا که این ظرفیت بخوبی در نسل
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={420}
                  height={51}
                  style={{
                      left: 71,
                      top: 1109,
                      width: 419,
                      height: 50,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 25 }}>
                ایجاد رابطه عاطفی میان معلمان و دانش آموزان را
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={422}
                  height={51}
                  style={{
                      left: 70,
                      top: 1167,
                      width: 421,
                      height: 50,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 24 }}>
                درمدارس به دانش آموزان اجازه اظهارنظر داد وآنان
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line_bold"
                  width={145}
                  height={33}
                  style={{
                      left: 71,
                      top: 1235,
                      width: 144,
                      height: 32,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 25 }}>
                بقیه در صفحه ۳
              </span>
            </span>
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
            <span
                dir="auto"
                className="line"
                width={421}
                height={53}
                style={{
                    left: 70,
                    top: 833,
                    width: 420,
                    height: 52,
                    textAlign: "auto"
                }}
            >
              <span className="words" style={{ fontSize: 25 }}>
                اسلامی را فرهنگی دانست وگفت: انقلاب ما اهداف
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={410}
                  height={53}
                  style={{
                      left: 81,
                      top: 894,
                      width: 409,
                      height: 52,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 24 }}>
                به آموزش و پرورش به عنوان مرکز ثقل نگریست.
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={423}
                  height={53}
                  style={{
                      left: 69,
                      top: 954,
                      width: 422,
                      height: 52,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 24 }}>
                تربیت نیروی انسانی برای اداره کشور معرفی کرد و
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={423}
                  height={57}
                  style={{
                      left: 70,
                      top: 1014,
                      width: 422,
                      height: 56,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 23 }}>
                آرمانخواه و خلاق آنان را برای اداره کشور در سالهای
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={422}
                  height={53}
                  style={{
                      left: 70,
                      top: 1075,
                      width: 421,
                      height: 52,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 25 }}>
                نوجوان وجوان ایرانی وجود دارد. رئیس جمهوری
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line"
                  width={422}
                  height={48}
                  style={{
                      left: 70,
                      top: 1141,
                      width: 421,
                      height: 47,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 26 }}>
                بسیارمهم دانست و گفت: باید با ایجاد کانون هایی
              </span>
            </span>{" "}
              <span
                  dir="auto"
                  className="line_bold"
                  width={223}
                  height={39}
                  style={{
                      left: 267,
                      top: 1204,
                      width: 222,
                      height: 38,
                      textAlign: "auto"
                  }}
              >
              <span className="words" style={{ fontSize: 24 }}>
                را در اداره امور سهیم کرد.
              </span>
            </span>
          </span>
                        </p>
                    </div>
                </page>
            </div>
        </div>

    );
};

export default RoozNameh;
