import EducationIcon from '@/assets/images/article-features/education-icon.png';
import QuestionIcon from '@/assets/images/article-features/question-icon.png';
import ChartIcon from '@/assets/images/article-features/chart-icon.png';
import EngineGlass from '@/assets/images/article-features/engine-glass.png';

const ArticleFeatures = () => {
  return (
    <div className="flex flex-col items-center gap-[128px] text-[#FAFAFA] mt-[235px]">
      <span className="text-[#A76CF3] text-[42px] font-[700]">ویژگی ها</span>
      <div className="flex items-start gap-[109px]">
        <div className="flex flex-col gap-[292px] items-start">
          <div>
            <img src={EducationIcon} alt="" className="w-[110px]" />
            <div className="flex flex-col items-start gap-[5px] pr-[58px] -mt-10">
              <span className="text-[28px] font-[700]">یادگیری آسان</span>
              <span className="text-[20px] font-light max-w-[450px]">
                کشف با دیدن مثال‌هایی از یک مفهوم تازه در متن، تصویر و ویدئو، آن
                را می‌شناسد و می‌تواند نمونه‌های دیگر آن مفهوم را پیدا کند. بعد،
                کاربر درست یا غلط بودن این تشخیص‌ها را گزارش می‌کند تا کشف موضوع
                را بهتر یاد بگیرد
              </span>
            </div>
          </div>
          <div>
            <img src={ChartIcon} alt="" className="w-[97px]" />
            <div className="flex flex-col items-start gap-[5px] pr-[58px] -mt-10">
              <span className="text-[28px] font-[700]">
                تحلیل داده‌های عظیم
              </span>
              <span className="text-[20px] font-light max-w-[450px]">
                در هر مرحله از فرایند آموزش، کشف همیشه آماده خدمت‌رسانی برای
                تحلیل داده‌های عظیم است. کشف می‌تواند به صورت توزیع‌شده و با
                استفاده از توان محاسباتی سرورهای ابری، داده‌های بزرگ را تحلیل
                کند
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[292px] items-start pt-[315px]">
          <div>
            <img src={QuestionIcon} alt="" className="w-[62px]" />
            <div className="flex flex-col items-start gap-[5px] pr-[58px] -mt-10">
              <span className="text-[28px] font-[700]">پرسیدن موارد دشوار</span>
              <span className="text-[20px] font-light max-w-[450px]">
                تشخیص بعضی از نمونه‌های یک مفهوم برای کشف بسیار آسان است و
                پرسیدن آنها سود زیادی ندارد. کشف، نمونه‌هایی را که در مورد آنها
                بیشتر تردید دارد، از کاربر می‌پرسد و با این روش، داده‌های مهم‌تر
                را جمع‌آوری می‌کند
              </span>
            </div>
          </div>
          <div>
            <img src={EngineGlass} alt="" className="w-[85px]" />
            <div className="flex flex-col items-start gap-[5px] pr-[58px] -mt-10">
              <span className="text-[28px] font-[700]">ارزیابی دقیق</span>
              <span className="text-[20px] font-light max-w-[450px]">
                هر چیزی را که بخواهیم بهتر کنیم، اول باید خوب آن را بسنجیم. کشف،
                یادگیری داده‌ها را با انتخاب بهترین مدل و تنظیم پارامترهای آن
                شروع می‌کند و در پایان، ارزیابی دقیقی از عملکرد خود برای هر کدام
                از مفاهیم ارائه می‌کند
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleFeatures;
