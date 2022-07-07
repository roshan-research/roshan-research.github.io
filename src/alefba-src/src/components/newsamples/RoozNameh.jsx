import rooznameh from "../../assets/images/samples/roznameh.jpg";
import style, {getScale} from "./style";
import TextGroup from "./TextGroup";
import {useEffect, useState} from "react";

const RoozNameh = () => {

    const[scaleCoefficient,setScaleCoefficient] = useState({});

    useEffect(() => {
        setScaleCoefficient(getScale(window.innerWidth,2226));
    }, [])


    window.onresize = () => {
        setScaleCoefficient(getScale(window.innerWidth,2226));
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
                style={{
                    position: "relative",
                    transform: `scaleY(${scaleCoefficient.scaleY}) scaleX(${scaleCoefficient.scaleX})`,
                    transition: "0s"
                }}
            >
                <img
                    style={{ position: "absolute", left: 0, width: 2226, height: 1296 }}
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
                            <TextGroup
                                animationDelay={0}
                                fontSize={169}
                                text={"دور تازه مذاکرات در مسکو و بروکسل"}
                                left={50}
                                top={10}
                                width={2150}
                                translationX={2150}
                                height={190}
                            />
                            <TextGroup
                                animationDelay={0.5}
                                fontSize={26}
                                text={(<>
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
                                </>)}
                                left={1645}
                                top={214}
                                width={548}
                                translationX={548}
                                height={205}
                                textAlign={"right"}
                                lineHeight={"0.55em"}
                                lineType={"line"}
                            />
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
                            <TextGroup
                                animationDelay={1}
                                fontSize={25}
                                text={(<>
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
                                </>)}
                                left={1120}
                                top={218}
                                width={496}
                                translationX={496}
                                height={200}
                                textAlign={"right"}
                                lineHeight={"1em"}
                                lineType={"line"}
                            />
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
                            <TextGroup
                                animationDelay={1.5}
                                fontSize={26}
                                text={(<>
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
                                </>)}
                                left={600}
                                top={220}
                                width={500}
                                translationX={500}
                                height={200}
                                textAlign={"right"}
                                lineHeight={"1.2em"}
                                lineType={"line"}
                            />
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
                            <TextGroup
                                animationDelay={6.5}
                                fontSize={43}
                                text={"سیلاب و طغیان"}
                                left={1821}
                                top={1181}
                                width={217}
                                translationX={217}
                                height={55}
                                textAlign={"auto"}
                                lineType={"line_bold"}
                            />
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
                            <TextGroup
                                animationDelay={6.5}
                                fontSize={25}
                                text={"سیلاب در شهرهای شوشتر، شادگان، گتوند، بستان، اندیمشک و اهواز\n" +
                                "                خساراتی بر جای گذاشت"}
                                left={988}
                                top={1196}
                                width={816}
                                translationX={816}
                                height={46}
                                textAlign={"auto"}
                                lineType={"line"}
                            />
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
                            <TextGroup
                                animationDelay={7}
                                fontSize={29}
                                text={"رودخانه‌ها در خوزستان افزایش حجم آب کارون به حدی بود که سواحل\n" +
                                "                حاشیه رودخانه و اهواز نیز مملو از آب شد"}
                                left={1050}
                                top={1235}
                                width={1101}
                                translationX={1101}
                                height={54}
                                textAlign={"auto"}
                                lineType={"line"}
                            />
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
                            <TextGroup
                                animationDelay={2}
                                fontSize={25}
                                text={(<>
                                    ایران و روسیه به هم اعتماد دارند و قصد فریب یکدیگر را
                                    <br/>
                                    ندارند و اینها زمینه خوبی برای به نتیجه رسیدن مذاکرات است
                                    <br/>
                                    عوامل امیدوارکننده در این مذاکرات وجود دارد
                                    <br/>
                                    وزارت خارجه روسیه: در این مذاکرات راههای خروج مسأله
                                    <br/>
                                    هسته‌ای از بن بست بررسی می‌شود
                                </>)}
                                left={71}
                                top={219}
                                width={494}
                                translationX={494}
                                height={165}
                                textAlign={"right"}
                                lineHeight={"1.25em"}
                                lineType={"line"}
                            />
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
                            <TextGroup
                                animationDelay={2.5}
                                fontSize={26}
                                text={"صفحه ۲"}
                                left={73}
                                top={381}
                                width={77}
                                translationX={77}
                                height={35}
                                textAlign={"auto"}
                                lineType={"line_bold"}
                            />
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
                            <TextGroup
                                animationDelay={3}
                                fontSize={34}
                                text={"رئیس جمهوری در دیدار مسؤولان آموزش و پرورش اعلام کرد"}
                                left={135}
                                top={436}
                                width={738}
                                translationX={738}
                                height={49}
                                textAlign={"auto"}
                                lineType={"line_bold"}
                            />
                            <TextGroup
                                animationDelay={3.5}
                                fontSize={88}
                                text={(<>
                                    بیشترین افزایش
                                    <br/>
                                    در بودجه آموزش و پرورش
                                </>)}
                                left={100}
                                top={494}
                                width={810}
                                translationX={810}
                                height={210}
                                textAlign={"center"}
                                lineType={"line_bold"}
                                lineHeight={"2.3em"}
                            />
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
                            <TextGroup
                                animationDelay={4}
                                fontSize={38}
                                text={(<>
                                    باید با ایجاد کانون‌هایی در مدارس دانش آموزان را
                                    <br/>
                                    در اداره امور سهیم کرد
                                </>)}
                                left={183}
                                top={709}
                                width={642}
                                translationX={642}
                                height={90}
                                textAlign={"center"}
                                lineType={"line_bold"}
                                lineHeight={"0.8em"}
                            />
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
                            <TextGroup
                                animationDelay={4.5}
                                fontSize={27}
                                text={(<>
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
                                </>)}
                                left={500}
                                top={806}
                                width={460}
                                translationX={460}
                                height={200}
                                textAlign={"right"}
                                lineType={"line"}
                                lineHeight={"1.1em"}
                            />
                            <TextGroup
                                animationDelay={5}
                                fontSize={27}
                                text={(<>
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
                                </>)}
                                left={500}
                                top={997}
                                width={460}
                                translationX={460}
                                height={280}
                                textAlign={"right"}
                                lineType={"line"}
                                lineHeight={"0.95em"}
                            />
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
                            <TextGroup
                                animationDelay={5.5}
                                fontSize={27}
                                text={(<>
                                    ستادی وزارت آموزش و پرورش، جنس و ذات انقلاب
                                    <br/>
                                    اسلامی را فرهنگی دانست وگفت: انقلاب ما اهداف
                                    <br/>
                                    و مسؤولیت های بزرگی دارد که برای تحقق آنها باید
                                    <br/>
                                    به آموزش و پرورش به عنوان مرکز ثقل نگریست.
                                </>)}
                                left={20}
                                top={804}
                                width={470}
                                translationX={470}
                                height={130}
                                textAlign={"right"}
                                lineType={"line"}
                                lineHeight={"1.1em"}
                            />
                            <TextGroup
                                animationDelay={6}
                                fontSize={27}
                                text={(<>
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
                                </>)}
                                left={20}
                                top={938}
                                width={470}
                                translationX={470}
                                height={305}
                                textAlign={"right"}
                                lineType={"line"}
                                lineHeight={"1.05em"}
                            />
                            <TextGroup
                                animationDelay={7.5}
                                fontSize={25}
                                text={"بقیه در صفحه ۳"}
                                left={71}
                                top={1245}
                                width={144}
                                translationX={144}
                                height={32}
                                textAlign={"auto"}
                                lineType={"line_bold"}
                            />
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
                        </p>
                    </div>
                </page>
            </div>
        </div>

    );
};

export default RoozNameh;
