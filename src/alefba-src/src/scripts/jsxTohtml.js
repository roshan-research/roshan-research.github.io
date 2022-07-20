/*
this script is in charge of making the jsx ready to be parsed via DOM parsers
 */

let jsxString = "<TextGroup\n" +
    "                            fontSize={43}\n" +
    "                            text={\"۶۳\"}\n" +
    "                            left={920}\n" +
    "                            top={190}\n" +
    "                            width={50}\n" +
    "                            height={45}\n" +
    "                        />\n" +
    "                        <TextGroup\n" +
    "                            fontSize={56}\n" +
    "                            text={\"اشباع‌مدت ۵ دقیقه جوشانده د رد اخل یک بوته چینی وزن شده صاف‌کنید\\n\" +\n" +
    "                            \"                و باقیمانده را\"}\n" +
    "                            left={245}\n" +
    "                            top={285}\n" +
    "                            width={1350}\n" +
    "                            height={60}\n" +
    "                        />\n" +
    "                        <TextGroup\n" +
    "                            fontSize={54}\n" +
    "                            text={\"با ۱۰ میلی لیترآب‌گرپشوئید ومایع شستشو را به صاف شده اضافه کنید\\n\" +\n" +
    "                            \"                و به مایع صاف شده\"}\n" +
    "                            left={250}\n" +
    "                            top={390}\n" +
    "                            width={1350}\n" +
    "                            height={62}\n" +
    "                        />\n" +
    "                        <TextGroup\n" +
    "                            fontSize={53}\n" +
    "                            text={\"و شستشویك میلی لیتر اسید سولفوریك R افزوده تاحد خشکی تبخیر و تا\\n\" +\n" +
    "                            \"                وزن ثابت تکلیس\"}\n" +
    "                            left={250}\n" +
    "                            top={490}\n" +
    "                            width={1350}\n" +
    "                            height={53}\n" +
    "                        />\n" +
    "                        <TextGroup\n" +
    "                            fontSize={59}\n" +
    "                            text={\"کنید وزن باقیمانده نباید بیش‌از ۳۵ میلی‌گرم باشد (% ۳/۵ )\"}\n" +
    "                            left={647}\n" +
    "                            top={588}\n" +
    "                            width={950}\n" +
    "                            height={61}\n" +
    "                        />\n" +
    "                        <TextGroup\n" +
    "                            fontSize={53}\n" +
    "                            text={\"مواد محلول دراتانل : ۲ گرم آنرا با ۴۰ میلی ‌لیتراتانل ۹۵% R\\n\" +\n" +
    "                            \"                زیریك کندانسور رفلو\"}\n" +
    "                            left={255}\n" +
    "                            top={690}\n" +
    "                            width={1230}\n" +
    "                            height={62}\n" +
    "                        />\n" +
    "                        <TextGroup\n" +
    "                            fontSize={56}\n" +
    "                            text={\"مدت پنج دقیقه بجوشانید وصاف کنید، ۲۰ میلی لیتر ازصاف شده را روی\\n\" +\n" +
    "                            \"                حمام آبجوش\"}\n" +
    "                            left={265}\n" +
    "                            top={789}\n" +
    "                            width={1330}\n" +
    "                            height={60}\n" +
    "                        />\n" +
    "                        <TextGroup\n" +
    "                            fontSize={55}\n" +
    "                            text={\"تاحد خشکی تبخیر ود رحرارت ۱۰۰ درجه مدت یکساعت بخشکانید و\\n\" +\n" +
    "                            \"                وزن‌باقیماند، بیش‌از\"}\n" +
    "                            left={245}\n" +
    "                            top={890}\n" +
    "                            width={1350}\n" +
    "                            height={55}\n" +
    "                        />\n" +
    "                        <TextGroup\n" +
    "                            fontSize={53}\n" +
    "                            text={\" ۲ میلی‌گرم نیست ( ۰/۲۶).\"}\n" +
    "                            left={1180}\n" +
    "                            top={992}\n" +
    "                            width={410}\n" +
    "                            height={63}\n" +
    "                        />";

let htmlparsableJSX = jsxString
    .replaceAll("TextGroup","div")
    .replaceAll("{","\"")
    .replaceAll("}","\"")
    .replaceAll("\"\"","\"")
    .replaceAll("fontSize","font-size")
    .replaceAll("className","class")


console.log(htmlparsableJSX);
