import Usage from "./ui/Usage";

const KashfUsage = () => {
  return (
    <div className='mt-[320px] flex flex-col items-center gap-[43px] text-[#FAFAFA]'>
      <span className='text-[42px] font-[700] text-[#A76CF3]'>
        کاربرد های کشف
      </span>
      <div className='mt-[43px] flex items-start gap-[247px]'>
        <div className='flex flex-col items-start gap-[219px]'>
          <Usage
            line={LeftLine}
            image={Pic1}
            size={265}
            lineSize={60}
            left={true}
            title={"تحلیل نظرات"}
            text={
              "کاربران در سایت ها و نرم افزار های همراه مختلف، در مورد همه چیز نظر می دهند. سوال ها و پاسخ ها نامحدود هستند؛ سرزمین های تازه ای که باید کشف شوند."
            }
          />
          <Usage
            line={LeftLine}
            image={Pic3}
            size={306}
            lineSize={65}
            left={true}
            title={"نمایه سازی محتوا"}
            text={
              "آرشیو های داده از قبیل انبوه کتاب ها، مقالات، تصاویر و ویدیو های ذخیره سازی شده هم نیازمند جست و جو هستند. کشف این مفاهیم را یاد میگیرد و متون یا تصاویر آنها را پیدا میکند"
            }
          />
        </div>
        <div className='mt-[290px] flex flex-col items-start gap-[219px]'>
          <Usage
            line={LeftLine}
            image={Pic2}
            size={361}
            lineSize={70}
            left={false}
            title={"تحلیل شبکه های اجتماعی"}
            text={
              "شبکه های اجتماعی منبع بی پایان تولید محتوی هستند. تصاویر و نوشته ها در این شبکه ها می آیند و می روند. در حالی که پاسخ های بسیار مهمی در این پیام ها نهفته است."
            }
          />
          <Usage
            line={LeftLine}
            image={Pic4}
            size={222}
            lineSize={65}
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
