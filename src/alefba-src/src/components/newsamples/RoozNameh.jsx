import rooznameh from "../../assets/images/samples/roznameh.jpg";
import TextGroup from "./TextGroup";
import {useEffect, useState} from "react";

const RoozNameh = () => {

    let tempHeight;
    const[width,setWidth] = useState();
    const[height,setHeight] = useState();

    useEffect(() => {
        tempHeight = 0.5 * window.innerHeight;
        setWidth(tempHeight * 1.72);
        setHeight(tempHeight);
    }, []);


    window.onresize = () => {
        tempHeight = 0.5 * window.innerHeight;
        setWidth(tempHeight * 1.72);
        setHeight(tempHeight);
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
                            fontSize={203}
                            text={"دور تازه مذاکرات در مسکو و بروکسل"}
                            height={213}
                            width={2100}
                            left={70}
                            top={15}
                            lineType={"line_bold"}
                        />
                        <TextGroup
                            fontSize={33}
                            text={"هیأت ایرانی را نمایندگانی از شورای عالی امنیت ملی، وزارت"}
                            height={35}
                            width={548}
                            left={1630}
                            top={246}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={31}
                            text={"خارجه و سازمان انرژی اتمی تشکیل می‌دهد"}
                            height={30}
                            width={376}
                            left={1800}
                            top={280}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={31}
                            text={"همزمان با مذاکرات مسکو، دور جدید گفت وگوهای هسته‌ای"}
                            height={30}
                            width={540}
                            left={1635}
                            top={310}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={29}
                            text={"ایران و اروپا با حضور متکی و وعیدی در بروکسل آغاز می‌شود"}
                            height={30}
                            width={500}
                            left={1675}
                            top={340}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={32}
                            text={"وعیدی: موقعیت مناسبی برای دو طرف (اروپا و ایران) در مسیر"}
                            height={30}
                            width={545}
                            left={1630}
                            top={370}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={31}
                            text={"مذاکره و تفاهم فراهم شده است"}
                            height={30}
                            width={280}
                            left={1895}
                            top={400}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={31}
                            text={"قصد داریم از اقداماتی که مسیر تعامل و گفت‌وگو را تخریب"}
                            height={30}
                            width={500}
                            left={1100}
                            top={247}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={32}
                            text={"می‌کند پرهیز کنیم"}
                            height={30}
                            width={170}
                            left={1430}
                            top={275}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={35}
                            text={"سید علی حسینی تاش، معاون لاریجانی ریاست تیم"}
                            height={35}
                            width={500}
                            left={1100}
                            top={305}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={31}
                            text={"مذاکره را برعهده دارد و جعفری معاون دیگر لاریجانی او را"}
                            height={35}
                            width={500}
                            left={1100}
                            top={335}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={31}
                            text={"همراهی می‌کند"}
                            height={35}
                            width={150}
                            left={1450}
                            top={370}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={33}
                            text={"حسینی تاش: مذاکرات با روسیه مشروط نیست و ما از"}
                            height={35}
                            width={500}
                            left={1100}
                            top={400}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={31}
                            text={"حقوق خود عقب نشینی نخواهیم کرد"}
                            height={35}
                            width={315}
                            left={760}
                            top={245}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={32}
                            text={"سرگئی کرینکو، رئیس سازمان انرژی اتمی روسیه بزودی"}
                            height={35}
                            width={495}
                            left={580}
                            top={275}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={31}
                            text={"برای بررسی مراحل تکمیلی بوشهر به ایران می‌آید"}
                            height={35}
                            width={425}
                            left={650}
                            top={310}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={31}
                            text={"وزیر خارجه آلمان از ایران خواست پیشنهاد روسیه را بپذیرد"}
                            height={35}
                            width={495}
                            left={580}
                            top={340}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={32}
                            text={"یک دیپلمات اروپایی: ایران و اتحادیه اروپا درباره موضوع"}
                            height={35}
                            width={495}
                            left={580}
                            top={370}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={32}
                            text={"هسته‌ای به توافق می‌رسند"}
                            height={35}
                            width={240}
                            left={835}
                            top={400}
                            lineType={"line"}
                        />
                        {/*PS*/}
                        <TextGroup
                            fontSize={45}
                            text={"سیلاب و طغیان"}
                            height={45}
                            width={200}
                            left={1820}
                            top={1175}
                            lineType={"line_bold"}
                        />
                        <TextGroup
                            fontSize={32}
                            text={"سیلاب در شهرهای شوشتر، شادگان، گتوند، بستان، اندیمشک و اهواز\n" +
                            "              خساراتی بر جای گذاشت"}
                            height={35}
                            width={830}
                            left={960}
                            top={1190}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={37}
                            text={"رودخانه‌ها در خوزستان افزایش حجم آب کارون به حدی بود که سواحل\n" +
                            "              حاشیه رودخانه و اهواز نیز مملو از آب شد"}
                            height={35}
                            width={1150}
                            left={1000}
                            top={1220}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={31}
                            text={"ایران و روسیه به هم اعتماد دارند و قصد فریب یکدیگر را"}
                            height={30}
                            width={500}
                            left={45}
                            top={245}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={29}
                            text={"ندارند و اینها زمینه خوبی برای به نتیجه رسیدن مذاکرات است"}
                            height={30}
                            width={500}
                            left={45}
                            top={277}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={32}
                            text={"عوامل امیدوارکننده در این مذاکرات وجود دارد"}
                            height={32}
                            width={410}
                            left={133}
                            top={310}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={30}
                            text={"وزارت خارجه روسیه: در این مذاکرات راههای خروج مسأله"}
                            height={32}
                            width={490}
                            left={53}
                            top={340}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={30}
                            text={"هسته‌ای از بن بست بررسی می‌شود"}
                            height={32}
                            width={297}
                            left={248}
                            top={370}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={30}
                            text={" صفحه ۲"}
                            height={32}
                            width={77}
                            left={53}
                            top={401}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={42}
                            text={" رئیس جمهوری در دیدار مسؤولان آموزش و پرورش اعلام کرد"}
                            height={50}
                            width={730}
                            left={120}
                            top={450}
                            lineType={"line_bold"}
                        />
                        <TextGroup
                            fontSize={100}
                            text={" بیشترین افزایش"}
                            height={100}
                            width={460}
                            left={250}
                            top={500}
                            lineType={"line_bold"}
                        />
                        <TextGroup
                            fontSize={106}
                            text={"در بودجه آموزش و پرورش"}
                            height={100}
                            width={780}
                            left={90}
                            top={600}
                            lineType={"line_bold"}
                        />
                        <TextGroup
                            fontSize={47}
                            text={"باید با ایجاد کانون‌هایی در مدارس دانش آموزان را"}
                            height={50}
                            width={650}
                            left={160}
                            top={715}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={47}
                            text={"در اداره امور سهیم کرد"}
                            height={40}
                            width={300}
                            left={330}
                            top={765}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={33}
                            text={"گروه سیاسی: «محمود احمدی نژاد» رئیس"}
                            height={30}
                            width={390}
                            left={500}
                            top={815}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={30}
                            text={"جمهوری در دیدار مسؤولان آموزش و پرورش گفت:"}
                            height={30}
                            width={425}
                            left={500}
                            top={845}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={30}
                            text={"ملت بزرگ ایران حرکتی نوین را آغاز کرده است و"}
                            height={30}
                            width={415}
                            left={500}
                            top={875}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={30}
                            text={"قصد دارد با ایجاد جامعه ای نمونه، الگویی اسلامی"}
                            height={30}
                            width={415}
                            left={500}
                            top={905}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={33}
                            text={"را با پیام خداخواهی و عدالتخواهی به جهانیان"}
                            height={35}
                            width={415}
                            left={500}
                            top={935}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={33}
                            text={"عرضه کند."}
                            height={30}
                            width={100}
                            left={820}
                            top={965}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={35}
                            text={"به گزارش دفتر امور رسانه های ریاست"}
                            height={30}
                            width={380}
                            left={500}
                            top={990}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={32}
                            text={"جمهوری،احمدی نژاد افزود: برای دستیابی به این"}
                            height={30}
                            width={425}
                            left={500}
                            top={1020}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={35}
                            text={"هدف باید چند ویژگی وجود داشته باشد که"}
                            height={33}
                            width={425}
                            left={500}
                            top={1050}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={32}
                            text={"مهمترین آنها خودباوری و آرمانخواهی است زیرا"}
                            height={33}
                            width={425}
                            left={500}
                            top={1080}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={30}
                            text={"خودباوری و احساس هویت، پایه حرکت انسان است"}
                            height={30}
                            width={425}
                            left={500}
                            top={1110}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={30}
                            text={"وآرمانها نیز مانند قله هایی هستند که مسیر وجهت"}
                            height={30}
                            width={425}
                            left={500}
                            top={1138}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={31}
                            text={"را مشخص می‌کنند."}
                            height={30}
                            width={170}
                            left={755}
                            top={1168}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={30}
                            text={"رئیس‌جمهوری در دیدار وزیر، معاونان، رؤسای"}
                            height={30}
                            width={382}
                            left={500}
                            top={1200}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={30}
                            text={"سازمان‌های آموزش وپرورش سراسر کشور ومدیران"}
                            height={30}
                            width={420}
                            left={500}
                            top={1230}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={29}
                            text={"ستادی وزارت آموزش و پرورش، جنس و ذات انقلاب"}
                            height={30}
                            width={420}
                            left={50}
                            top={815}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={29}
                            text={"اسلامی را فرهنگی دانست وگفت: انقلاب ما اهداف"}
                            height={30}
                            width={420}
                            left={50}
                            top={845}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={29}
                            text={"و مسؤولیت های بزرگی دارد که برای تحقق آنها باید"}
                            height={30}
                            width={420}
                            left={50}
                            top={875}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={29}
                            text={"به آموزش و پرورش به عنوان مرکز ثقل نگریست."}
                            height={30}
                            width={409}
                            left={62}
                            top={905}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={30}
                            text={"احمدی نژاد، آموزش وپرورش راکانون بی بدیل"}
                            height={30}
                            width={380}
                            left={50}
                            top={935}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={29}
                            text={"تربیت نیروی انسانی برای اداره کشور معرفی کرد و"}
                            height={30}
                            width={420}
                            left={50}
                            top={965}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={29}
                            text={"گفت: باید با تربیت نوجوانان و جوانان مؤمن، شجاع،"}
                            height={30}
                            width={420}
                            left={50}
                            top={995}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={29}
                            text={"آرمانخواه و خلاق آنان را برای اداره کشور در سالهای"}
                            height={30}
                            width={420}
                            left={50}
                            top={1025}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={29}
                            text={"آینده آماده کرد، چرا که این ظرفیت بخوبی در نسل"}
                            height={30}
                            width={420}
                            left={50}
                            top={1055}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={29}
                            text={" نوجوان وجوان ایرانی وجود دارد. رئیس جمهوری"}
                            height={30}
                            width={420}
                            left={50}
                            top={1085}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={29}
                            text={" ایجاد رابطه عاطفی میان معلمان و دانش آموزان را"}
                            height={30}
                            width={420}
                            left={50}
                            top={1115}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={29}
                            text={" بسیارمهم دانست و گفت: باید با ایجاد کانون هایی"}
                            height={30}
                            width={420}
                            left={50}
                            top={1145}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={29}
                            text={" درمدارس به دانش آموزان اجازه اظهارنظر داد وآنان"}
                            height={30}
                            width={420}
                            left={50}
                            top={1175}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={29}
                            text={"را در اداره امور سهیم کرد."}
                            height={30}
                            width={220}
                            left={250}
                            top={1205}
                            lineType={"line"}
                        />
                        <TextGroup
                            fontSize={29}
                            text={"بقیه در صفحه ۳"}
                            height={30}
                            width={140}
                            left={50}
                            top={1225}
                            lineType={"line"}
                        />
                    </div>
                </page>
            </div>
        </div>

    );
};

export default RoozNameh;
