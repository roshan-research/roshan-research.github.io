/*
this script is in charge of making the jsx ready to be parsed via DOM parsers
 */

let jsxString = "<div className=\"document line-view\">\n" +
    "                      <TextGroup\n" +
    "                          fontSize={43}\n" +
    "                          text={\"دستمزد مستقیم\"}\n" +
    "                          height={49}\n" +
    "                          width={185}\n" +
    "                          left={195}\n" +
    "                          top={40}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={45}\n" +
    "                          text={\"حقوق و دستمزد\"}\n" +
    "                          height={50}\n" +
    "                          width={195}\n" +
    "                          left={930}\n" +
    "                          top={285}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={40}\n" +
    "                          text={\"اضافه کاري - نوبتکاري - شبکاري وحق کشیك\"}\n" +
    "                          height={53}\n" +
    "                          width={537}\n" +
    "                          left={585}\n" +
    "                          top={350}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={42}\n" +
    "                          text={\"حق اولاد و سایر هزینه های کارکنان\"}\n" +
    "                          height={45}\n" +
    "                          width={426}\n" +
    "                          left={695}\n" +
    "                          top={405}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={41}\n" +
    "                          text={\"بن - حق مسکن - خوارباروناهاری کارکنان\"}\n" +
    "                          height={46}\n" +
    "                          width={495}\n" +
    "                          left={630}\n" +
    "                          top={460}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={43}\n" +
    "                          text={\"عیدي وپاداش\"}\n" +
    "                          height={46}\n" +
    "                          width={165}\n" +
    "                          left={955}\n" +
    "                          top={515}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={43}\n" +
    "                          text={\"حق بیمه سهم کارفرما\"}\n" +
    "                          height={51}\n" +
    "                          width={270}\n" +
    "                          left={855}\n" +
    "                          top={570}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={43}\n" +
    "                          text={\"باز خرید و ذخیره سنوات خدمت\"}\n" +
    "                          height={49}\n" +
    "                          width={375}\n" +
    "                          left={750}\n" +
    "                          top={623}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={43}\n" +
    "                          text={\"بیمه حوادث - هزینه بهداشتی\"}\n" +
    "                          height={48}\n" +
    "                          width={355}\n" +
    "                          left={770}\n" +
    "                          top={680}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={43}\n" +
    "                          text={\"پس انداز سهم کارفرما\"}\n" +
    "                          height={45}\n" +
    "                          width={275}\n" +
    "                          left={850}\n" +
    "                          top={735}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={48}\n" +
    "                          text={\"سال ۱۳۹۰\"}\n" +
    "                          height={44}\n" +
    "                          width={150}\n" +
    "                          left={335}\n" +
    "                          top={165}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={48}\n" +
    "                          text={\"هزار ریال\"}\n" +
    "                          height={48}\n" +
    "                          width={125}\n" +
    "                          left={350}\n" +
    "                          top={220}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={48}\n" +
    "                          text={\"۳۰,۶۷۲,۵۴۵\"}\n" +
    "                          height={45}\n" +
    "                          width={185}\n" +
    "                          left={327}\n" +
    "                          top={280}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={48}\n" +
    "                          text={\"۵,۸۲۲,۸۵۸\"}\n" +
    "                          height={43}\n" +
    "                          width={170}\n" +
    "                          left={340}\n" +
    "                          top={345}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={48}\n" +
    "                          text={\"۳,۵۶۴,۳۳۸\"}\n" +
    "                          height={45}\n" +
    "                          width={170}\n" +
    "                          left={340}\n" +
    "                          top={405}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={48}\n" +
    "                          text={\"۲,۳۲۹,۶۲۹\"}\n" +
    "                          height={45}\n" +
    "                          width={170}\n" +
    "                          left={340}\n" +
    "                          top={460}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={48}\n" +
    "                          text={\"۷,۵۹۷,۴۸۷\"}\n" +
    "                          height={45}\n" +
    "                          width={170}\n" +
    "                          left={340}\n" +
    "                          top={515}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={48}\n" +
    "                          text={\"۱۲,۳۰۵,۶۷۸\"}\n" +
    "                          left={335}\n" +
    "                          top={565}\n" +
    "                          width={180}\n" +
    "                          height={46}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={48}\n" +
    "                          text={\"۵,۹۷۳,۷۷۸\"}\n" +
    "                          left={345}\n" +
    "                          top={620}\n" +
    "                          width={170}\n" +
    "                          height={47}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={48}\n" +
    "                          text={\"۲۴۷,۳۲۰\"}\n" +
    "                          left={375}\n" +
    "                          top={680}\n" +
    "                          width={140}\n" +
    "                          height={44}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={48}\n" +
    "                          text={\"۱,۳۵۸,۷۷۷\"}\n" +
    "                          left={350}\n" +
    "                          top={735}\n" +
    "                          width={165}\n" +
    "                          height={45}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={48}\n" +
    "                          text={\"سال ۱۳۸۹\"}\n" +
    "                          left={100}\n" +
    "                          top={165}\n" +
    "                          width={150}\n" +
    "                          height={45}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={48}\n" +
    "                          text={\"هزار ریال\"}\n" +
    "                          left={115}\n" +
    "                          top={220}\n" +
    "                          width={135}\n" +
    "                          height={48}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={48}\n" +
    "                          text={\"۲۶,۳۲۵,۸۳۳\"}\n" +
    "                          left={100}\n" +
    "                          top={280}\n" +
    "                          width={185}\n" +
    "                          height={45}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={49}\n" +
    "                          text={\"۴,۸۲۱,۸۹۶\"}\n" +
    "                          left={115}\n" +
    "                          top={340}\n" +
    "                          width={170}\n" +
    "                          height={46}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={49}\n" +
    "                          text={\"۳,۶۶۷,۴۳۱\"}\n" +
    "                          left={115}\n" +
    "                          top={400}\n" +
    "                          width={170}\n" +
    "                          height={46}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={50}\n" +
    "                          text={\"۲,۰۳۷,۱۲۷\"}\n" +
    "                          left={115}\n" +
    "                          top={455}\n" +
    "                          width={170}\n" +
    "                          height={46}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={49}\n" +
    "                          text={\"۸,۲۰۴,۹۷۷\"}\n" +
    "                          left={115}\n" +
    "                          top={510}\n" +
    "                          width={170}\n" +
    "                          height={46}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={48}\n" +
    "                          text={\"۹,۳۷۰,۶۲۰\"}\n" +
    "                          left={115}\n" +
    "                          top={565}\n" +
    "                          width={170}\n" +
    "                          height={46}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={48}\n" +
    "                          text={\"۶,۳۴۹,۵۶۸\"}\n" +
    "                          left={115}\n" +
    "                          top={620}\n" +
    "                          width={170}\n" +
    "                          height={43}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={50}\n" +
    "                          text={\"۲۱۷,۱۵۳\"}\n" +
    "                          left={145}\n" +
    "                          top={670}\n" +
    "                          width={140}\n" +
    "                          height={45}\n" +
    "                      />\n" +
    "                      <TextGroup\n" +
    "                          fontSize={50}\n" +
    "                          text={\"۱,۵۴۰,۲۹۱\"}\n" +
    "                          left={115}\n" +
    "                          top={725}\n" +
    "                          width={170}\n" +
    "                          height={45}\n" +
    "                      />\n" +
    "                  </div>"

let htmlparsableJSX = jsxString
    .replaceAll("TextGroup","div")
    .replaceAll("{","\"")
    .replaceAll("}","\"")
    .replaceAll("\"\"","\"")
    .replaceAll("fontSize","font-size")
    .replaceAll("className","class")


console.log(htmlparsableJSX);
