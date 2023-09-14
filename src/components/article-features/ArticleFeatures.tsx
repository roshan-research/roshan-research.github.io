import ChartIcon from "../icons/chart-icon";
import EducationIcon from "../icons/education-icon";
import EnginGlassIcon from "../icons/engin-glass-icon";
import QuestionIcon from "../icons/question-icon";
import { Features } from "./ui/Features";

const ArticleFeatures = () => {
  return (
    <div className='mt-[500px] flex flex-col items-center gap-[128px] text-[#FAFAFA]'>
      <span className='text-[42px] font-[700] text-[#A76CF3]'>ویژگی ها</span>
      <div className='flex items-start gap-[109px]'>
        <div className='flex flex-col items-start gap-[292px]'>
          <Features
            Image={EducationIcon}
            width={110}
            height={110}
            title={"یادگیری آسان"}
            text={
              "کشف با دیدن مثال‌هایی از یک مفهوم تازه در متن، تصویر و ویدئو، آن را می‌شناسد و می‌تواند نمونه‌های دیگر آن مفهوم را پیدا کند. بعد، کاربر درست یا غلط بودن این تشخیص‌ها را گزارش می‌کند تا کشف موضوع را بهتر یاد بگیرد"
            }
          />
          <Features
            Image={ChartIcon}
            width={97}
            height={110}
            title={"تحلیل داده‌های عظیم"}
            text={
              "کشف با دیدن مثال‌هایی از یک مفهوم تازه در متن، تصویر و ویدئو، آن را می‌شناسد و می‌تواند نمونه‌های دیگر آن مفهوم را پیدا کند. بعد، کاربر درست یا غلط بودن این تشخیص‌ها را گزارش می‌کند تا کشف موضوع را بهتر یاد بگیرد"
            }
          />
        </div>
        <div className='flex flex-col items-start gap-[292px] pt-[315px]'>
          <Features
            Image={QuestionIcon}
            width={62}
            height={97}
            title={"پرسیدن موارد دشوار"}
            text={
              "کشف با دیدن مثال‌هایی از یک مفهوم تازه در متن، تصویر و ویدئو، آن را می‌شناسد و می‌تواند نمونه‌های دیگر آن مفهوم را پیدا کند. بعد، کاربر درست یا غلط بودن این تشخیص‌ها را گزارش می‌کند تا کشف موضوع را بهتر یاد بگیرد"
            }
          />
          <Features
            Image={EnginGlassIcon}
            width={85}
            height={85}
            title={"ارزیابی دقیق"}
            text={
              "کشف با دیدن مثال‌هایی از یک مفهوم تازه در متن، تصویر و ویدئو، آن را می‌شناسد و می‌تواند نمونه‌های دیگر آن مفهوم را پیدا کند. بعد، کاربر درست یا غلط بودن این تشخیص‌ها را گزارش می‌کند تا کشف موضوع را بهتر یاد بگیرد"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleFeatures;
