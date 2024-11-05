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
          <span className='text-base font-light'>به نام خداوند جان و خرد</span>
          <span className='text-[20px] font-light'>
            روﺷــﻦ از ﺳﺎل ۱۳۹۵ ﺑﺎ ﻫﻤﺖ ﺟﻤﻌﯽ از داﻧﺸﺠﻮﯾﺎن داﻧﺸﮕﺎه ﻋﻠﻢ و ﺻﻨﻌﺖ اﯾﺮان
            ﺷﺮوع ﺑﻪ ﮐﺎر ﻧﻤﻮده اﺳﺖ. اﯾﻦ ﮔﺮوه ﻫﺪف ﺧﻮد را ﺗﻠﺎش در راﺳﺘﺎی ﺗﺤﻘﻖ ﺗﻤﺪن
            ﻧﻮﯾﻦ اﺳﻠﺎﻣﯽ ﻣﯽ‌داﻧﺪ و در ﻗﺎﻟﺐ ﺷﺮﮐﺖ داﻧﺶ‌ﺑﻨﯿﺎن راﻫﮑﺎر ﭘﺮدازش ژرف،
            ﺑﺮای ﭘﺎﺳﺦ ﺑﻪ ﻧﯿﺎزﻫﺎی ﮐﺸﻮر، ﻣﺤﺼﻮﻟﺎت ﻧﺮم‌اﻓﺰاری اراﺋﻪ می کند.
          </span>
          <span className='text-[20px] font-light mt-2'>
            محصولات روشن در زمینه‌ی هوش مصنوعی و یادگیری ماشین، شامل پردازش
            تصویر، صوت و متن می باشد و مشتریان آن در حوزه های گوناگون خصوصی،
            دولتی و با زمینه های کاری گوناگون می باشند.
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
