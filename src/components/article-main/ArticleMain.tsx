import Butterfly from '@/assets/images/article-main/butterfly.png';

const ArticleMain = () => {
  return (
    <div className="flex items-center justify-center gap-[440px]">
      <div className="flex flex-col items-start">
        <span className="text-[#A76CF3] text-[64px] font-normal">کشف</span>
        <span className="text-[#FAFAFA] text-[28px] font-normal">
          آموزش ماشین؛ به همین راحتی!
        </span>
      </div>
      <div>
        <img src={Butterfly} alt="" className="w-[592px]" draggable={false} />
      </div>
    </div>
  );
};

export default ArticleMain;
