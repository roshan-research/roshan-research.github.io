import { FC } from "react";
import Facility from "./ui/Facility";
import LockIcon from "../icons/lock-icon";
import ConvertIcon from "../icons/converted-icon";
import TriConvert from "../icons/triConvert-icon";
import CubicIcon from "../icons/langmodel-icon";

type FacilitiesProps = {
  windowWidth: number | null;
};

const Facilities: FC<FacilitiesProps> = ({ windowWidth }) => {
  return (
    <div className='mt-[320px] flex flex-col items-center gap-[204px] sm:gap-[0px]'>
      <span className='text-[42px] -mt-20 font-[700] text-[#FFFFFF] sm:text-[30px]'>
        مزیت‌های فنی فهم
      </span>
      <div className='-mt-4 sm:mt-8 sm:-mr-8 flex items-start gap-[100px] lg:gap-[100px] custombp:flex-col custombp:gap-[100px]'>
        
        <div className='-mt-[96px] flex flex-col items-start gap-[154px] custombp:gap-[10px]'>
          <Facility
            Icon={LockIcon}
            width={windowWidth! < 641 ? 90 : 120}
            height={239}
            left
            title="امنیت و محرمانگی اطلاعات"
            text='فهم به دلیل نصب بر روی زیرساخت های سازمان امکان استفاده آفلاین را فراهم میکند'
          />
          <Facility
            Icon={TriConvert}
            width={windowWidth! < 641 ? 90 : 148}
            height={240}
            title="یکپارچه‌سازی با سامانه های داخلی"
            text='فهم امکان اتصال به سامانه‌های داخلی سازمان از طریق رابط برنامه‌نویسی کاربردی (API) را فراهم می‌کند'
          />
        </div>
        <div className='flex flex-col items-start gap-[238px] sm:-mt-24 mt-24 custombp:gap-[10px]'>
          <Facility
            Icon={ConvertIcon}
            width={windowWidth! < 641 ? 90 : 148}
            height={200}
            title="یکپارچگی با سامانه‌های OCR و ASR"
            text='فهم برپایه نویسه خوان فارسی الفبا و سامانه تبدیل گفتار به متن حرف بنا شده است'
          />
          <Facility
            Icon={CubicIcon}
            width={windowWidth! < 641 ? 90 : 148}
            height={243}
            title='استفاده از مدل های زبانی آموزش دیده'
            text='فهم بر پایه مدل زبانی آموزش‌دیده‌ای بنا شده است که دقت و سرعت پردازش را افزایش می‌دهد'
          />
          
        </div>
      </div>
    </div>
  );
};

export default Facilities;
