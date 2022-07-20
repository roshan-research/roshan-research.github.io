let html = "<div font-size=\"`${0.02278749337572867 * width}px`\" text=\"۶۳\" left=\"`${0.48754636989931105 * width}px`\" top=\"`${0.15055467511885895 * height}px`\" width=\"`${0.026497085320614733 * width}px`\" height=\"`${0.03565768621236133 * height}px`\"></div>\n" +
    "<div animationdelay=\"0.5\" font-size=\"`${0.0296767355590885 * width}px`\" text=\"اشباع‌مدت ۵ دقیقه جوشانده د رد اخل یک بوته چینی وزن شده صاف‌کنید\\nو باقیمانده را\" left=\"`${0.12983571807101218 * width}px`\" top=\"`${0.22583201267828842 * height}px`\" width=\"`${0.7154213036565977 * width}px`\" translationx=\"1350\" height=\"`${0.04754358161648178 * height}px`\"></div>\n" +
    "<div font-size=\"`${0.028616852146263912 * width}px`\" text=\"با ۱۰ میلی لیترآب‌گرپشوئید ومایع شستشو را به صاف شده اضافه کنید\\nو به مایع صاف شده\" left=\"`${0.13248542660307366 * width}px`\" top=\"`${0.3090332805071315 * height}px`\" width=\"`${0.7154213036565977 * width}px`\" height=\"`${0.0491283676703645 * height}px`\"></div>\n" +
    "<div font-size=\"`${0.028086910439851617 * width}px`\" text=\"و شستشویك میلی لیتر اسید سولفوریك R افزوده تاحد خشکی تبخیر و تا\\nوزن ثابت تکلیس\" left=\"`${0.13248542660307366 * width}px`\" top=\"`${0.38827258320126784 * height}px`\" width=\"`${0.7154213036565977 * width}px`\" height=\"`${0.041996830427892234 * height}px`\"></div>\n" +
    "<div font-size=\"`${0.03126656067832538 * width}px`\" text=\"کنید وزن باقیمانده نباید بیش‌از ۳۵ میلی‌گرم باشد (% ۳/۵ )\" left=\"`${0.34287228404875464 * width}px`\" top=\"`${0.4659270998415214 * height}px`\" width=\"`${0.5034446210916799 * width}px`\" height=\"`${0.04833597464342314 * height}px`\"></div>\n" +
    "<div font-size=\"`${0.028086910439851617 * width}px`\" text=\"مواد محلول دراتانل : ۲ گرم آنرا با ۴۰ میلی ‌لیتراتانل ۹۵% R\\nزیریك کندانسور رفلو\" left=\"`${0.13513513513513514 * width}px`\" top=\"`${0.5467511885895404 * height}px`\" width=\"`${0.6518282988871225 * width}px`\" height=\"`${0.0491283676703645 * height}px`\"></div>\n" +
    "<div font-size=\"`${0.0296767355590885 * width}px`\" text=\"مدت پنج دقیقه بجوشانید وصاف کنید، ۲۰ میلی لیتر ازصاف شده را روی\\nحمام آبجوش\" left=\"`${0.14043455219925807 * width}px`\" top=\"`${0.6251980982567353 * height}px`\" width=\"`${0.7048224695283519 * width}px`\" height=\"`${0.04754358161648178 * height}px`\"></div>\n" +
    "<div font-size=\"`${0.029146793852676205 * width}px`\" text=\"تاحد خشکی تبخیر ود رحرارت ۱۰۰ درجه مدت یکساعت بخشکانید و\\nوزن‌باقیماند، بیش‌از\" left=\"`${0.12983571807101218 * width}px`\" top=\"`${0.705229793977813 * height}px`\" width=\"`${0.7154213036565977 * width}px`\" height=\"`${0.043581616481774964 * height}px`\"></div>\n" +
    "<div font-size=\"`${0.028086910439851617 * width}px`\" text=\"۲ میلی‌گرم نیست ( ۰/۲۶).\" left=\"`${0.6253312135665077 * width}px`\" top=\"`${0.786053882725832 * height}px`\" width=\"`${0.2172760996290408 * width}px`\" height=\"`${0.04992076069730586 * height}px`\"></div>\n"

let newHtml = html
    .replaceAll("div ","div \n")
    .replaceAll("\"`","{`")
    .replaceAll("`\"","`}\n")
    .replaceAll("div","TextGroup")
    .replaceAll("font-size","fontSize")
    .replaceAll("class","className")
    .replaceAll("</TextGroup>","")
    .replaceAll(">","/>")
    .replaceAll("\" ","\"\n")
    .replaceAll("\"/","\"\n/")

console.log(newHtml)
