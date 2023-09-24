import { FC } from "react";
import ChartIcon from "../icons/chart-icon";
import EducationIcon from "../icons/education-icon";
import EnginGlassIcon from "../icons/engin-glass-icon";
import QuestionIcon from "../icons/question-icon";
import { Features } from "./ui/Features";

type ArticleFeaturesProps = {
  windowWidth: number | null;
};

const ArticleFeatures: FC<ArticleFeaturesProps> = ({ windowWidth }) => {
  return (
    <div className='mt-[500px] flex flex-col items-center gap-[128px] text-[#FAFAFA] sm:mt-[300px] custombp2:gap-[80px]'>
      <span className='text-[42px] font-[700] text-[#A76CF3]'>ویژگی ها</span>
      <div className='flex items-start gap-[109px] custombp2:flex-col custombp2:gap-[100px]'>
        <div className='flex flex-col items-start gap-[292px] custombp2:gap-[100px]'>
          <Features
            Icon={EducationIcon}
            width={windowWidth! < 641 ? 80 : 110}
            height={windowWidth! < 641 ? 80 : 110}
            title={"یادگیری آسان"}
            text={
              "کشف با دیدن مثال‌هایی از یک مفهوم تازه در متن، تصویر و ویدئو، آن را می‌شناسد و می‌تواند نمونه‌های دیگر آن مفهوم را پیدا کند. بعد، کاربر درست یا غلط بودن این تشخیص‌ها را گزارش می‌کند تا کشف موضوع را بهتر یاد بگیرد"
            }
          />
          <Features
            Icon={ChartIcon}
            width={windowWidth! < 641 ? 67 : 97}
            height={windowWidth! < 641 ? 80 : 110}
            title={"تحلیل داده‌های عظیم"}
            text={
              "کشف با دیدن مثال‌هایی از یک مفهوم تازه در متن، تصویر و ویدئو، آن را می‌شناسد و می‌تواند نمونه‌های دیگر آن مفهوم را پیدا کند. بعد، کاربر درست یا غلط بودن این تشخیص‌ها را گزارش می‌کند تا کشف موضوع را بهتر یاد بگیرد"
            }
          />
        </div>
        <div className='flex flex-col items-start gap-[292px] pt-[315px] custombp2:gap-[100px] custombp2:pt-0'>
          <Features
            Icon={QuestionIcon}
            width={windowWidth! < 641 ? 52 : 62}
            height={windowWidth! < 641 ? 87 : 97}
            title={"پرسیدن موارد دشوار"}
            text={
              "کشف با دیدن مثال‌هایی از یک مفهوم تازه در متن، تصویر و ویدئو، آن را می‌شناسد و می‌تواند نمونه‌های دیگر آن مفهوم را پیدا کند. بعد، کاربر درست یا غلط بودن این تشخیص‌ها را گزارش می‌کند تا کشف موضوع را بهتر یاد بگیرد"
            }
          />
          <Features
            Icon={EnginGlassIcon}
            width={windowWidth! < 641 ? 65 : 85}
            height={windowWidth! < 641 ? 65 : 85}
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
