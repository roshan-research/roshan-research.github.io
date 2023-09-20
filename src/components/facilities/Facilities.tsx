import { FC } from "react";
import BrainIcon from "../icons/brain-icon";
import connectionIcon from "../icons/connection-icon";
import CpuIcon from "../icons/cpu-icon";
import DevelopmentIcon from "../icons/development-icon";
import ProcessIcon from "../icons/process-icon";
import VectorIcon from "../icons/vector-icon";
import Facility from "./ui/Facility";

type FacilitiesProps = {
  windowWidth: number | null;
};

const Facilities: FC<FacilitiesProps> = ({ windowWidth }) => {
  return (
    <div className='mt-[320px] flex flex-col items-center gap-[204px] sm:gap-[0px]'>
      <span className='text-[42px] font-[700] text-[#A76CF3] sm:text-[30px]'>
        امکانات فنی کشف
      </span>
      <div className='flex items-start gap-[200px] lg:gap-[100px] custombp:flex-col custombp:gap-[100px]'>
        <div className='flex flex-col items-start gap-[238px] custombp:gap-[10px]'>
          <Facility
            Icon={ProcessIcon}
            width={windowWidth! < 641 ? 150 : 241}
            height={260}
            title='پردازش زبان طبیعی'
            text='کشف جمله های زبان فارسی را می شناسد. یعنی حجم بسیار زیادی از متون را قبلا دیده است تا بتواند ارتباط معنایی بین واژه ها را بهتر کشف کند.'
          />
          <Facility
            Icon={VectorIcon}
            width={windowWidth! < 641 ? 150 : 243}
            height={243}
            title='دقیق و سریع'
            text='کشف به صورت مداوم دقت را اندازه می گیرد و به کاربر نمایش می دهد تا جمع آوری داده های مهم تسریع شود. کشف میتواند در هر ثانیه 10 هزار واژه را با سخت افزار مناسب (کارت گرافیک) تحلیل کند.'
          />
          <Facility
            Icon={DevelopmentIcon}
            width={windowWidth! < 641 ? 150 : 257}
            height={257}
            title='واسط برنامه نویس کامل'
            text='سامانه کشف برای استفاده دیگر ابزار ها آماده است. یعنی فراهم می کند و JSON واسط مناسبی در قالب تقاضاهای می تواند به آسانی با سامانه دیگر هماهنگ شود'
          />
        </div>
        <div className='-mt-[80px] flex flex-col items-start gap-[304px] custombp:gap-[10px]'>
          <Facility
            Icon={BrainIcon}
            width={windowWidth! < 641 ? 150 : 239}
            height={239}
            left
            title='فناوری یادگیری عمیق'
            text='زیربنای کشف، استفاده از فناوری یادگیری عمیق برای تحلیل نوشته و تصویر است. استفاده از یادگیری عمیق است که باعث میشود کشف، بتواند تشابه معنایی را در تصویر و نوشته ها پیدا کند'
          />
          <Facility
            Icon={CpuIcon}
            width={windowWidth! < 641 ? 150 : 221}
            height={221}
            left
            title='پشتیبانی از پردازنده گرافیکی'
            text='فناوری یادگیری عمیق، حجم پردازش قابل توجهی نیاز دارد. پردازنده گرافیکی که برای موازی سازی محاسبات طراحی شده است، به کشف امکان میدهد تا تصاویر را چند برابر سریع تر ازحالتی که تنها به پردازنده معمولی دسترسی دارد، تخلیل کند.'
          />
          <Facility
            Icon={connectionIcon}
            width={windowWidth! < 641 ? 150 : 303}
            height={325}
            left
            title='پردازش توزیع شده'
            text='در مواجه با انبوه تصاویر و متون، بهره بردن از پردازش توزیع شده به کشف این امکان را می دهد که از هر تعداد “ماشین” و “کارت گرافیک” فراهم شده، استفاده کند و با “مدیریت مناسب” منابع، به نیازمندی های بزرگ مقیاس پاسخ دهد'
          />
        </div>
      </div>
    </div>
  );
};

export default Facilities;
