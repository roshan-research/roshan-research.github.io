/*
this script is in charge of making the jsx ready to be parsed via DOM parsers
 */

let jsxString = "<TextGroup\n" +
    "                            fontSize={87}\n" +
    "                            text={\"- یعطي أمثلة عن مرکبات کیمیائیة شائعة الاستعمال في محیطه.\"}\n" +
    "                            left={620}\n" +
    "                            top={275}\n" +
    "                            width={1530}\n" +
    "                            height={90}\n" +
    "                            lineType={\"line\"}\n" +
    "                        />\n" +
    "                        <TextGroup\n" +
    "                            fontSize={95}\n" +
    "                            text={\"- یتعرف الی بعض الکواشف (محلول قشر الفجل، محلول الملفوف البنفسجي،\"}\n" +
    "                            left={170}\n" +
    "                            top={390}\n" +
    "                            width={1985}\n" +
    "                            height={90}\n" +
    "                            lineType={\"line\"}\n" +
    "                        />\n" +
    "                        <TextGroup\n" +
    "                            fontSize={87}\n" +
    "                            text={\"محلول عباد الشمس)، ویستدل علي أنها تغیر ألوانها حسب الوسط الکیمیائي.\"}\n" +
    "                            left={290}\n" +
    "                            top={505}\n" +
    "                            width={1800}\n" +
    "                            height={88}\n" +
    "                            lineType={\"line\"}\n" +
    "                        />\n" +
    "                        <TextGroup\n" +
    "                            fontSize={90}\n" +
    "                            text={\"- یمیز بین المواد الحمضیة والمواد القلویة (القاعدیة) باستخدام أحد الکواشف.\"}\n" +
    "                            left={260}\n" +
    "                            top={620}\n" +
    "                            width={1900}\n" +
    "                            height={90}\n" +
    "                            lineType={\"line\"}\n" +
    "                        />\n" +
    "                        <TextGroup\n" +
    "                            fontSize={87}\n" +
    "                            text={\"یعطي أمثلة عن بعض الأملاح الشائعة.\"}\n" +
    "                            left={1170}\n" +
    "                            top={745}\n" +
    "                            width={950}\n" +
    "                            height={92}\n" +
    "                            lineType={\"line\"}\n" +
    "                        />\n" +
    "                        <TextGroup\n" +
    "                            fontSize={95}\n" +
    "                            text={\"- یعطي أمثلة عن التفاعل الکیمیائي: الاحتراق، تکون الصدأ، تفاعل الحمض مع\"}\n" +
    "                            left={120}\n" +
    "                            top={854}\n" +
    "                            width={2040}\n" +
    "                            height={90}\n" +
    "                            lineType={\"line\"}\n" +
    "                        />\n" +
    "                        <TextGroup\n" +
    "                            fontSize={87}\n" +
    "                            text={\"مواد کلسیة ومع بعض الفلزات.\"}\n" +
    "                            left={1350}\n" +
    "                            top={970}\n" +
    "                            width={750}\n" +
    "                            height={80}\n" +
    "                            lineType={\"line\"}\n" +
    "                        />\n" +
    "                        <TextGroup\n" +
    "                            fontSize={87}\n" +
    "                            text={\"- یستدل علي حدوث تفاعل کیمیائي من ملاحظة انتاج مادة أو مواد جدیدة.\"}\n" +
    "                            left={340}\n" +
    "                            top={1090}\n" +
    "                            width={1830}\n" +
    "                            height={86}\n" +
    "                            lineType={\"line\"}\n" +
    "                        />"

let htmlparsableJSX = jsxString
    .replaceAll("TextGroup","div")
    .replaceAll("{","\"")
    .replaceAll("}","\"")
    .replaceAll("\"\"","\"")
    .replaceAll("fontSize","font-size")
    .replaceAll("className","class")


console.log(htmlparsableJSX);
