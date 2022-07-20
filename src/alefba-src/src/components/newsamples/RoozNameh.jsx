import rooznameh from "../../assets/images/samples/roznameh.jpg";
import TextGroup from "./TextGroup";
import {useEffect, useState} from "react";

const RoozNameh = () => {

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
                style={{
                    position: "relative",
                    transition: "0s"
                }}
            >
                <img
                    style={{ position: "absolute", left: 0, width: width, height: height }}
                    id="raw"
                    src={rooznameh}
                    alt={''}
                />
                <page style={{ width: width, height: height }}>
                    <div className="document line-view">
                        <TextGroup
                            fontSize={`${0.09119496855345911 * width}px`}
                            text="دور تازه مذاکرات در مسکو و بروکسل"
                            height={`${0.16435185185185186 * height}px`}
                            width={`${0.9433962264150944 * width}px`}
                            left={`${0.031446540880503145 * width}px`}
                            top={`${0.011574074074074073 * height}px`}
                            linetype="line_bold"
                        />
                        <TextGroup
                            fontSize={`${0.014824797843665768 * width}px`}
                            text="هیأت ایرانی را نمایندگانی از شورای عالی امنیت ملی، وزارت"
                            height={`${0.02700617283950617 * height}px`}
                            width={`${0.24618149146451032 * width}px`}
                            left={`${0.7322551662174304 * width}px`}
                            top={`${0.18981481481481483 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.013926325247079964 * width}px`}
                            text="خارجه و سازمان انرژی اتمی تشکیل می‌دهد"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.16891284815813118 * width}px`}
                            left={`${0.8086253369272237 * width}px`}
                            top={`${0.21604938271604937 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.013926325247079964 * width}px`}
                            text="همزمان با مذاکرات مسکو، دور جدید گفت وگوهای هسته‌ای"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.24258760107816713 * width}px`}
                            left={`${0.7345013477088949 * width}px`}
                            top={`${0.23919753086419754 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.01302785265049416 * width}px`}
                            text="ایران و اروپا با حضور متکی و وعیدی در بروکسل آغاز می‌شود"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.22461814914645103 * width}px`}
                            left={`${0.7524707996406109 * width}px`}
                            top={`${0.2623456790123457 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.014375561545372867 * width}px`}
                            text="وعیدی: موقعیت مناسبی برای دو طرف (اروپا و ایران) در مسیر"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.24483378256963162 * width}px`}
                            left={`${0.7322551662174304 * width}px`}
                            top={`${0.2854938271604938 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.013926325247079964 * width}px`}
                            text="مذاکره و تفاهم فراهم شده است"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.12578616352201258 * width}px`}
                            left={`${0.8513027852650494 * width}px`}
                            top={`${0.30864197530864196 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.013926325247079964 * width}px`}
                            text="قصد داریم از اقداماتی که مسیر تعامل و گفت‌وگو را تخریب"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.22461814914645103 * width}px`}
                            left={`${0.4941599281221923 * width}px`}
                            top={`${0.19058641975308643 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.014375561545372867 * width}px`}
                            text="می‌کند پرهیز کنیم"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.07637017070979335 * width}px`}
                            left={`${0.6424079065588499 * width}px`}
                            top={`${0.21219135802469136 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.015723270440251572 * width}px`}
                            text="سید علی حسینی تاش، معاون لاریجانی ریاست تیم"
                            height={`${0.02700617283950617 * height}px`}
                            width={`${0.22461814914645103 * width}px`}
                            left={`${0.4941599281221923 * width}px`}
                            top={`${0.2353395061728395 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.013926325247079964 * width}px`}
                            text="مذاکره را برعهده دارد و جعفری معاون دیگر لاریجانی او را"
                            height={`${0.02700617283950617 * height}px`}
                            width={`${0.22461814914645103 * width}px`}
                            left={`${0.4941599281221923 * width}px`}
                            top={`${0.25848765432098764 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.013926325247079964 * width}px`}
                            text="همراهی می‌کند"
                            height={`${0.02700617283950617 * height}px`}
                            width={`${0.0673854447439353 * width}px`}
                            left={`${0.651392632524708 * width}px`}
                            top={`${0.2854938271604938 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.014824797843665768 * width}px`}
                            text="حسینی تاش: مذاکرات با روسیه مشروط نیست و ما از"
                            height={`${0.02700617283950617 * height}px`}
                            width={`${0.22461814914645103 * width}px`}
                            left={`${0.4941599281221923 * width}px`}
                            top={`${0.30864197530864196 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.013926325247079964 * width}px`}
                            text="حقوق خود عقب نشینی نخواهیم کرد"
                            height={`${0.02700617283950617 * height}px`}
                            width={`${0.14150943396226415 * width}px`}
                            left={`${0.3414195867026056 * width}px`}
                            top={`${0.18904320987654322 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.014375561545372867 * width}px`}
                            text="سرگئی کرینکو، رئیس سازمان انرژی اتمی روسیه بزودی"
                            height={`${0.02700617283950617 * height}px`}
                            width={`${0.2223719676549865 * width}px`}
                            left={`${0.2605570530098832 * width}px`}
                            top={`${0.21219135802469136 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.013926325247079964 * width}px`}
                            text="برای بررسی مراحل تکمیلی بوشهر به ایران می‌آید"
                            height={`${0.02700617283950617 * height}px`}
                            width={`${0.19092542677448338 * width}px`}
                            left={`${0.2920035938903863 * width}px`}
                            top={`${0.23919753086419754 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.013926325247079964 * width}px`}
                            text="وزیر خارجه آلمان از ایران خواست پیشنهاد روسیه را بپذیرد"
                            height={`${0.02700617283950617 * height}px`}
                            width={`${0.2223719676549865 * width}px`}
                            left={`${0.2605570530098832 * width}px`}
                            top={`${0.2623456790123457 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.014375561545372867 * width}px`}
                            text="یک دیپلمات اروپایی: ایران و اتحادیه اروپا درباره موضوع"
                            height={`${0.02700617283950617 * height}px`}
                            width={`${0.2223719676549865 * width}px`}
                            left={`${0.2605570530098832 * width}px`}
                            top={`${0.2854938271604938 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.014375561545372867 * width}px`}
                            text="هسته‌ای به توافق می‌رسند"
                            height={`${0.02700617283950617 * height}px`}
                            width={`${0.1078167115902965 * width}px`}
                            left={`${0.3751123090745732 * width}px`}
                            top={`${0.30864197530864196 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.02021563342318059 * width}px`}
                            text="سیلاب و طغیان"
                            height={`${0.034722222222222224 * height}px`}
                            width={`${0.08984725965858041 * width}px`}
                            left={`${0.8176100628930818 * width}px`}
                            top={`${0.9066358024691358 * height}px`}
                            linetype="line_bold"
                        />
                        <TextGroup
                            fontSize={`${0.014375561545372867 * width}px`}
                            text={"سیلاب در شهرهای شوشتر، شادگان، گتوند، بستان، اندیمشک و اهواز\n" + "خساراتی بر جای گذاشت"}
                            height={`${0.02700617283950617 * height}px`}
                            width={`${0.3728661275831087 * width}px`}
                            left={`${0.431266846361186 * width}px`}
                            top={`${0.9182098765432098 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.016621743036837375 * width}px`}
                            text={"رودخانه‌ها در خوزستان افزایش حجم آب کارون به حدی بود که سواحل\n" + "حاشیه رودخانه و اهواز نیز مملو از آب شد"}
                            height={`${0.02700617283950617 * height}px`}
                            width={`${0.5166217430368374 * width}px`}
                            left={`${0.44923629829290207 * width}px`}
                            top={`${0.941358024691358 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.013926325247079964 * width}px`}
                            text="ایران و روسیه به هم اعتماد دارند و قصد فریب یکدیگر را"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.22461814914645103 * width}px`}
                            left={`${0.02021563342318059 * width}px`}
                            top={`${0.18904320987654322 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.01302785265049416 * width}px`}
                            text="ندارند و اینها زمینه خوبی برای به نتیجه رسیدن مذاکرات است"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.22461814914645103 * width}px`}
                            left={`${0.02021563342318059 * width}px`}
                            top={`${0.21373456790123457 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.014375561545372867 * width}px`}
                            text="عوامل امیدوارکننده در این مذاکرات وجود دارد"
                            height={`${0.024691358024691357 * height}px`}
                            width={`${0.18418688230008984 * width}px`}
                            left={`${0.059748427672955975 * width}px`}
                            top={`${0.23919753086419754 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.013477088948787063 * width}px`}
                            text="وزارت خارجه روسیه: در این مذاکرات راههای خروج مسأله"
                            height={`${0.024691358024691357 * height}px`}
                            width={`${0.22012578616352202 * width}px`}
                            left={`${0.023809523809523808 * width}px`}
                            top={`${0.2623456790123457 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.013477088948787063 * width}px`}
                            text="هسته‌ای از بن بست بررسی می‌شود"
                            height={`${0.024691358024691357 * height}px`}
                            width={`${0.1334231805929919 * width}px`}
                            left={`${0.11141060197663971 * width}px`}
                            top={`${0.2854938271604938 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.013477088948787063 * width}px`}
                            text="صفحه ۲"
                            height={`${0.024691358024691357 * height}px`}
                            width={`${0.03459119496855346 * width}px`}
                            left={`${0.023809523809523808 * width}px`}
                            top={`${0.30941358024691357 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.018867924528301886 * width}px`}
                            text="رئیس جمهوری در دیدار مسؤولان آموزش و پرورش اعلام کرد"
                            height={`${0.038580246913580245 * height}px`}
                            width={`${0.3279424977538185 * width}px`}
                            left={`${0.05390835579514825 * width}px`}
                            top={`${0.3472222222222222 * height}px`}
                            linetype="line_bold"
                        />
                        <TextGroup
                            fontSize={`${0.044923629829290206 * width}px`}
                            text="بیشترین افزایش"
                            height={`${0.07716049382716049 * height}px`}
                            width={`${0.20664869721473494 * width}px`}
                            left={`${0.11230907457322552 * width}px`}
                            top={`${0.38580246913580246 * height}px`}
                            linetype="line_bold"
                        />
                        <TextGroup
                            fontSize={`${0.047619047619047616 * width}px`}
                            text="در بودجه آموزش و پرورش"
                            height={`${0.07716049382716049 * height}px`}
                            width={`${0.3504043126684636 * width}px`}
                            left={`${0.04043126684636118 * width}px`}
                            top={`${0.46296296296296297 * height}px`}
                            linetype="line_bold"
                        />
                        <TextGroup
                            fontSize={`${0.021114106019766397 * width}px`}
                            text="باید با ایجاد کانون‌هایی در مدارس دانش آموزان را"
                            height={`${0.038580246913580245 * height}px`}
                            width={`${0.2920035938903863 * width}px`}
                            left={`${0.07187780772686433 * width}px`}
                            top={`${0.5516975308641975 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.021114106019766397 * width}px`}
                            text="در اداره امور سهیم کرد"
                            height={`${0.030864197530864196 * height}px`}
                            width={`${0.1347708894878706 * width}px`}
                            left={`${0.14824797843665768 * width}px`}
                            top={`${0.5902777777777778 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.014824797843665768 * width}px`}
                            text="گروه سیاسی: «محمود احمدی نژاد» رئیس"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.1752021563342318 * width}px`}
                            left={`${0.22461814914645103 * width}px`}
                            top={`${0.628858024691358 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.013477088948787063 * width}px`}
                            text="جمهوری در دیدار مسؤولان آموزش و پرورش گفت:"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.19092542677448338 * width}px`}
                            left={`${0.22461814914645103 * width}px`}
                            top={`${0.6520061728395061 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.013477088948787063 * width}px`}
                            text="ملت بزرگ ایران حرکتی نوین را آغاز کرده است و"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.18643306379155436 * width}px`}
                            left={`${0.22461814914645103 * width}px`}
                            top={`${0.6751543209876543 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.013477088948787063 * width}px`}
                            text="قصد دارد با ایجاد جامعه ای نمونه، الگویی اسلامی"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.18643306379155436 * width}px`}
                            left={`${0.22461814914645103 * width}px`}
                            top={`${0.6983024691358025 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.014824797843665768 * width}px`}
                            text="را با پیام خداخواهی و عدالتخواهی به جهانیان"
                            height={`${0.02700617283950617 * height}px`}
                            width={`${0.18643306379155436 * width}px`}
                            left={`${0.22461814914645103 * width}px`}
                            top={`${0.7214506172839507 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.014824797843665768 * width}px`}
                            text="عرضه کند."
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.044923629829290206 * width}px`}
                            left={`${0.3683737646001797 * width}px`}
                            top={`${0.7445987654320988 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.015723270440251572 * width}px`}
                            text="به گزارش دفتر امور رسانه های ریاست"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.1707097933513028 * width}px`}
                            left={`${0.22461814914645103 * width}px`}
                            top={`${0.7638888888888888 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.014375561545372867 * width}px`}
                            text="جمهوری،احمدی نژاد افزود: برای دستیابی به این"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.19092542677448338 * width}px`}
                            left={`${0.22461814914645103 * width}px`}
                            top={`${0.7870370370370371 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.015723270440251572 * width}px`}
                            text="هدف باید چند ویژگی وجود داشته باشد که"
                            height={`${0.02546296296296296 * height}px`}
                            width={`${0.19092542677448338 * width}px`}
                            left={`${0.22461814914645103 * width}px`}
                            top={`${0.8101851851851852 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.014375561545372867 * width}px`}
                            text="مهمترین آنها خودباوری و آرمانخواهی است زیرا"
                            height={`${0.02546296296296296 * height}px`}
                            width={`${0.19092542677448338 * width}px`}
                            left={`${0.22461814914645103 * width}px`}
                            top={`${0.8333333333333334 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.013477088948787063 * width}px`}
                            text="خودباوری و احساس هویت، پایه حرکت انسان است"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.19092542677448338 * width}px`}
                            left={`${0.22461814914645103 * width}px`}
                            top={`${0.8564814814814815 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.013477088948787063 * width}px`}
                            text="وآرمانها نیز مانند قله هایی هستند که مسیر وجهت"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.19092542677448338 * width}px`}
                            left={`${0.22461814914645103 * width}px`}
                            top={`${0.8780864197530864 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.013926325247079964 * width}px`}
                            text="را مشخص می‌کنند."
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.07637017070979335 * width}px`}
                            left={`${0.33917340521114103 * width}px`}
                            top={`${0.9012345679012346 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.013477088948787063 * width}px`}
                            text="رئیس‌جمهوری در دیدار وزیر، معاونان، رؤسای"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.17160826594788858 * width}px`}
                            left={`${0.22461814914645103 * width}px`}
                            top={`${0.9259259259259259 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.013477088948787063 * width}px`}
                            text="سازمان‌های آموزش وپرورش سراسر کشور ومدیران"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.18867924528301888 * width}px`}
                            left={`${0.22461814914645103 * width}px`}
                            top={`${0.9490740740740741 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.01302785265049416 * width}px`}
                            text="ستادی وزارت آموزش و پرورش، جنس و ذات انقلاب"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.18867924528301888 * width}px`}
                            left={`${0.022461814914645103 * width}px`}
                            top={`${0.628858024691358 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.01302785265049416 * width}px`}
                            text="اسلامی را فرهنگی دانست وگفت: انقلاب ما اهداف"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.18867924528301888 * width}px`}
                            left={`${0.022461814914645103 * width}px`}
                            top={`${0.6520061728395061 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.01302785265049416 * width}px`}
                            text="و مسؤولیت های بزرگی دارد که برای تحقق آنها باید"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.18867924528301888 * width}px`}
                            left={`${0.022461814914645103 * width}px`}
                            top={`${0.6751543209876543 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.01302785265049416 * width}px`}
                            text="به آموزش و پرورش به عنوان مرکز ثقل نگریست."
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.18373764600179696 * width}px`}
                            left={`${0.027852650494159928 * width}px`}
                            top={`${0.6983024691358025 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.013477088948787063 * width}px`}
                            text="احمدی نژاد، آموزش وپرورش راکانون بی بدیل"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.1707097933513028 * width}px`}
                            left={`${0.022461814914645103 * width}px`}
                            top={`${0.7214506172839507 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.01302785265049416 * width}px`}
                            text="تربیت نیروی انسانی برای اداره کشور معرفی کرد و"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.18867924528301888 * width}px`}
                            left={`${0.022461814914645103 * width}px`}
                            top={`${0.7445987654320988 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.01302785265049416 * width}px`}
                            text="گفت: باید با تربیت نوجوانان و جوانان مؤمن، شجاع،"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.18867924528301888 * width}px`}
                            left={`${0.022461814914645103 * width}px`}
                            top={`${0.7677469135802469 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.01302785265049416 * width}px`}
                            text="آرمانخواه و خلاق آنان را برای اداره کشور در سالهای"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.18867924528301888 * width}px`}
                            left={`${0.022461814914645103 * width}px`}
                            top={`${0.7908950617283951 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.01302785265049416 * width}px`}
                            text="آینده آماده کرد، چرا که این ظرفیت بخوبی در نسل"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.18867924528301888 * width}px`}
                            left={`${0.022461814914645103 * width}px`}
                            top={`${0.8140432098765432 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.01302785265049416 * width}px`}
                            text="نوجوان وجوان ایرانی وجود دارد. رئیس جمهوری"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.18867924528301888 * width}px`}
                            left={`${0.022461814914645103 * width}px`}
                            top={`${0.8371913580246914 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.01302785265049416 * width}px`}
                            text="ایجاد رابطه عاطفی میان معلمان و دانش آموزان را"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.18867924528301888 * width}px`}
                            left={`${0.022461814914645103 * width}px`}
                            top={`${0.8603395061728395 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.01302785265049416 * width}px`}
                            text="بسیارمهم دانست و گفت: باید با ایجاد کانون هایی"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.18867924528301888 * width}px`}
                            left={`${0.022461814914645103 * width}px`}
                            top={`${0.8834876543209876 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.01302785265049416 * width}px`}
                            text="درمدارس به دانش آموزان اجازه اظهارنظر داد وآنان"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.18867924528301888 * width}px`}
                            left={`${0.022461814914645103 * width}px`}
                            top={`${0.9066358024691358 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.01302785265049416 * width}px`}
                            text="را در اداره امور سهیم کرد."
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.09883198562443846 * width}px`}
                            left={`${0.11230907457322552 * width}px`}
                            top={`${0.9297839506172839 * height}px`}
                            linetype="line"
                        />
                        <TextGroup
                            fontSize={`${0.01302785265049416 * width}px`}
                            text="بقیه در صفحه ۳"
                            height={`${0.023148148148148147 * height}px`}
                            width={`${0.06289308176100629 * width}px`}
                            left={`${0.022461814914645103 * width}px`}
                            top={`${0.9452160493827161 * height}px`}
                            linetype="line"
                        />
                    </div>
                </page>
            </div>
        </div>

    );
};

export default RoozNameh;
