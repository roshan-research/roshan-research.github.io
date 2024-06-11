import { facilitiesDummyData } from "@/data";
import ArticleFacilitiesItem from "./article-facilities-item/ArticleFacilitiesItem";

type ArticleFacilitiesProps = {};

const ArticleFacilities: React.FC<ArticleFacilitiesProps> = () => {
  return (
    <div className="mt-[200px] flex flex-col items-center text-[24px] font-[700] text-[#4E69FE]">
      <span className="">امکانات فنی ریپلای</span>
      <div className="bp960:gap-x-[50px] bp768:flex-col bp768:items-center bp768:gap-[100px] mt-[80px] flex max-w-[800px] flex-wrap justify-center gap-x-[134px]">
        {facilitiesDummyData.map((item, index) => {
          return (
            <ArticleFacilitiesItem
              key={index}
              title={item.title}
              subTitle={item.subTitle}
              icon={item.icon}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ArticleFacilities;
