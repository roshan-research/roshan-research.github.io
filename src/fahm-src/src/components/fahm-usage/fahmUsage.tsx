import Pic_1 from "/images/article-usage/pic-1.svg";
import Pic_2 from "/images/article-usage/pic-2.svg";
import Pic_3 from "/images/article-usage/pic-3.svg";
import Usage from "./ui/Usage";
import { FC } from "react";

type fahmUsageProps = {
  windowWidth: number | null;
};

const fahmUsage: FC<fahmUsageProps> = ({ windowWidth }) => {
  return (
    <div className='mt-[320px] sm:mt-[160px] flex flex-col items-center gap-[43px] text-[#FAFAFA]'>
      <span className='text-[42px] font-[700] -mt-20 text-[#ffffff] sm:text-[30px]'>
        کاربردهای فهم
      </span>
      <div className='mt-[43px] flex flex-col gap-[100px] sm:-mr-4'>
      <Usage
        image={Pic_1}
        width={windowWidth! < 641 ? 306 : 233}
        lineWidth={windowWidth! < 641 ? 65 : 60}
        left={true}
        title={"نرم‌افزارهای ERP و اتوماسیون ها"}
        text={
          "به عنوان دستیار هوشمند برای تحلیل و پردازش اسناد و متون"
        }
      />
      <Usage
        image={Pic_2}
        width={240}
        lineWidth={65}
        left={false}
        title={"سازمان‌ها"}
        text={
          "به عنوان ابزار مدیریت اسناد برای دسته‌بندی، خلاصه‌سازی و گفتگو هوشمند با اسناد مورد استفاده قرار می‌گیرد"
        }
      />
      <Usage
        image={Pic_3}
        width={windowWidth! < 641 ? 306 : 222}
        lineWidth={windowWidth! < 641 ? 65 : 70}
        left={true}
        title={"بخش آموزش"}
        text={
          "به عنوان دستیار مطالعه برای خلاصه‌سازی، ترجمه و ارائه نکات کلیدی از منابع آموزشی استفاده می‌شود"
        }
      />
    </div>

    </div>
  );
};

export default fahmUsage;
