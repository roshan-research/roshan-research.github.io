const MainContent = () => {
  return (
    <div
      className='w-full h-[100vh] flex items-center justify-center text-white px-[80px] bp768:px-[30px]'
      dir='rtl'
    >
      <div className='flex items-center justify-center gap-[445px] bp1366:gap-[300px] bp1280:gap-[20vw] bp960:flex-col bp960:gap-[60px] bp960:mt-[100px] bp360:mt-[200px]'>
        <span className='text-[#E5E5E5] font-bold text-[60px] max-w-[375px] bp960:max-w-[500px] bp960:text-center bp480:text-[40px] bp360:text-[30px]'>
          مجموعــــه‌ای از استــــعدادهای جــوان و خــــلاق
        </span>
        <div className='flex flex-col justify-start gap-[10px] max-w-[700px]'>
          <span className='text-[20px] font-light text-justify'>
            شرکت دانش‌بنیان راهکار پردازش ژرف (روشن) از سال ۱۳۹۵ فعالیت خود را با هدف توسعه و به‌کارگیری عملی هوش مصنوعی در حل مسائل واقعی آغاز کرده است. این شرکت با پشتوانه دانش تخصصی و تجربه اجرایی، تمرکز خود را بر طراحی راهکارهای هوشمند، مقیاس‌پذیر و متناسب با نیازهای بومی کشور قرار داده است.

            روشن با رویکردی مسئله‌محور، محصولات نرم‌افزاری خود را در حوزه‌های پردازش تصویر، پردازش صوت و پردازش متن توسعه می‌دهد و تلاش می‌کند فناوری‌های نوین هوش مصنوعی را از سطح پژوهش به مرحله اجرا و بهره‌برداری در سازمان‌ها و کسب‌وکارها برساند.
            </span>
            <span className="text-[20px] font-light text-justify">
            راهکارهای این شرکت در اختیار سازمان‌ها و مجموعه‌های دولتی و خصوصی با حوزه‌های فعالیت متنوع قرار گرفته و با هدف ارتقای بهره‌وری، بهبود کیفیت تصمیم‌گیری و هوشمندسازی فرآیندها طراحی شده‌اند. ما در روشن بر این باوریم که هوش مصنوعی تنها زمانی ارزش واقعی ایجاد می‌کند که به‌صورت کاربردی، قابل اعتماد و متناسب با نیازهای واقعی کاربران به‌کار گرفته شود.
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
