import { FC } from "react";
import TextGenerate from "../icons/TextGen-icon";
import DataAnalyze from "../icons/DataAnalyze-icon";
import { Features } from "./ui/Features";
import DocumentTalk from "../icons/DocTalkIcon";
import Summary from "../icons/summary-icon";
import DataOutcome from "../icons/DataOutcome-icon";
import TranslateIcon from "../icons/Translate-icon";
import DocSortIcon from "../icons/DocSort-icon";
import IntelSearchIcon from "../icons/IntelSearch-icon";

type ArticleFeaturesProps = {
  windowWidth: number | null;
};

const ArticleFeatures: FC<ArticleFeaturesProps> = ({ windowWidth }) => {
  return (
    <div className='mt-[300px] flex flex-col items-center gap-[128px] text-[#FAFAFA] sm:mt-[200px] sm:-mr-10 custombp2:gap-[800px]'>
      <span className='text-center sm:mr-8 text-[42px] font-[700] text-[#FFFFF]'>امکانات فهم</span>
      <div className='sm:-mt-[700px] flex items-start gap-[300px] custombp2:flex-col custombp2:gap-[100px]'>
        <div className='flex flex-col items-start gap-[92px] custombp2:gap-[100px]'>
          <Features
            Icon={DocumentTalk}
            width={windowWidth! < 641 ? 80 : 120}
            height={windowWidth! < 641 ? 80 : 120}
            title={"گفتگو با اسناد"}
            text={
              "فهم، امکان پرسش و دریافت پاسخ از محتوای اسناد متنی و صوتی را فراهم می‌سازد"
            }
          />
          <Features
            Icon={TextGenerate}
            width={windowWidth! < 641 ? 67 : 97}
            height={windowWidth! < 641 ? 80 : 110}
            title={"تولید متن"}
            text={
              "فهم، براساس اطلاعات داده شده،  انواع نامه ها و گزارش‌ها و … را تولید کند"
            }
          />
          <Features
            Icon={TranslateIcon}
            width={windowWidth! < 641 ? 67 : 94}
            height={windowWidth! < 641 ? 80 : 94}
            title={"ترجمه"}
            text={
              "فهم، اسناد را به زبان‌های انگلیسی، عربی و فارسی ترجمه کند"
            }
          />
          <Features
            Icon={DocSortIcon}
            width={windowWidth! < 641 ? 67 : 122}
            height={windowWidth! < 641 ? 80 : 151}
            title={"دسته‌بندی اسناد"}
            text={
              "فهم، براساس محتوای متن، موضوع آن را تشخیص داده و دسته‌بندی کند"
            }
          />
        </div>
        <div className='flex flex-col items-start gap-[92px] pt-[173px] custombp2:gap-[100px] custombp2:pt-0'>
          <Features
            Icon={DataAnalyze}
            width={windowWidth! < 641 ? 52 : 105}
            height={windowWidth! < 641 ? 87 : 118}
            title={"تحلیل داده"}
            text={
              "فهم، امکان ایجاد نمودار و تحلیل آنها بر اساس داده ها را دارد"
            }
          />
          <Features
            Icon={Summary}
            width={windowWidth! < 641 ? 65 : 94}
            height={windowWidth! < 641 ? 65 : 94}
            title={"خلاصه سازی"}
            text={
              "فهم، محتوای طولانی را به نسخه‌ای کوتاه و مفید در دو قالب محتوایی و نکته وار تبدیل می‌کند"
            }
          />
          <Features
            Icon={DataOutcome}
            width={windowWidth! < 641 ? 65 : 96}
            height={windowWidth! < 641 ? 65 : 96}
            title={"استخراج اطلاعات"}
            text={
              "فهم، اطلاعات کلیدی اسناد را براساس نیاز کاربر شناسایی و آنها را استخراج می‌کند"
            }
          />
          <Features
            Icon={IntelSearchIcon}
            width={windowWidth! < 641 ? 65 : 120}
            height={windowWidth! < 641 ? 65 : 120}
            title={"جستجوی هوشمند"}
            text={
              "فهم، با درک معنای جستجو، دقیق ترین و مرتبط ترین نتایج را ارائه می‌دهد"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleFeatures;
