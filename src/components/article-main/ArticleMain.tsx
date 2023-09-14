import Butterfly from "../icons/butterfly";

const ArticleMain = () => {
  return (
    <div className='flex items-center justify-center gap-[440px]'>
      <div className='mt-[170px] flex flex-col items-start'>
        <span className='text-[64px] font-normal text-[#A76CF3]'>کشف</span>
        <span className='text-[28px] font-normal text-[#FAFAFA]'>
          آموزش ماشین؛ به همین راحتی!
        </span>
      </div>
      <Butterfly width={592} height={888} />
    </div>
  );
};

export default ArticleMain;
