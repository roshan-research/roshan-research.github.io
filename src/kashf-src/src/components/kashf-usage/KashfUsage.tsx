import Line from "@/assets/images/article-usage/line.png";
import Pic_1 from "@/assets/images/article-usage/pic-1.png";
import Pic_2 from "@/assets/images/article-usage/pic-2.png";
import Pic_3 from "@/assets/images/article-usage/pic-3.png";
import Pic_4 from "@/assets/images/article-usage/pic-4.png";
import Usage from "./ui/Usage";
import { FC } from "react";

type KashfUsageProps = {
  windowWidth: number | null;
};

const KashfUsage: FC<KashfUsageProps> = ({ windowWidth }) => {
  return (
    <div className='mt-[320px] flex flex-col items-center gap-[43px] text-[#FAFAFA]'>
      <span className='text-[42px] font-[700] text-[#A76CF3] sm:text-[30px]'>
        کاربرد های کشف
      </span>
      <div className='mt-[43px] flex items-start gap-[247px] custombp2:flex-col custombp2:gap-[100px]'>
        <div className='flex flex-col items-start gap-[219px] custombp2:gap-[100px]'>
          <Usage
            line={Line}
            image={Pic_1}
            width={windowWidth! < 641 ? 306 : 265}
            lineWidth={windowWidth! < 641 ? 65 : 60}
            left={true}
            title={"تحلیل نظرات"}
            text={
              "کاربران در سایت ها و نرم افزار های همراه مختلف، در مورد همه چیز نظر می دهند. سوال ها و پاسخ ها نامحدود هستند؛ سرزمین های تازه ای که باید کشف شوند."
            }
          />
          <Usage
            line={Line}
            image={Pic_2}
            width={306}
            lineWidth={65}
            left={true}
            title={"نمایه سازی محتوا"}
            text={
              "آرشیو های داده از قبیل انبوه کتاب ها، مقالات، تصاویر و ویدیو های ذخیره سازی شده هم نیازمند جست و جو هستند. کشف این مفاهیم را یاد میگیرد و متون یا تصاویر آنها را پیدا میکند"
            }
          />
        </div>
        <div className='mt-[290px] flex flex-col items-start gap-[219px] custombp2:mt-0 custombp2:gap-[100px]'>
          <Usage
            line={Line}
            image={Pic_3}
            width={windowWidth! < 641 ? 306 : 360}
            lineWidth={windowWidth! < 641 ? 65 : 70}
            left={false}
            title={"تحلیل شبکه های اجتماعی"}
            text={
              "شبکه های اجتماعی منبع بی پایان تولید محتوی هستند. تصاویر و نوشته ها در این شبکه ها می آیند و می روند. در حالی که پاسخ های بسیار مهمی در این پیام ها نهفته است."
            }
          />
          <Usage
            line={Line}
            image={Pic_4}
            width={windowWidth! < 641 ? 306 : 222}
            lineWidth={windowWidth! < 641 ? 65 : 60}
            left={false}
            title={"دسته بندی اسناد"}
            text={
              "انبوه اسناد اسکن شده در سازمان هایی که میخواهند از بایگانی عظیم پرونده ها خلاص شوند، نیاز به دسته بندی دارند. کشف نوع اسناد را یاد می گیرد و به آسانی نمونه های مشابه را پیدا می کند."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default KashfUsage;
