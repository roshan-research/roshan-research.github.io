import { applicationsDummyData } from "@/data";
import ArticleApplicationItem from "./article-application-item/ArticleApplicationItem";

const ArticleApplication = () => {
  return (
    <div className="mt-[200px] flex flex-col items-center">
      <span className="text-[24px] font-[700] text-[#4E69FE]">
        کاربردهای ریپلای
      </span>
      <div className="bp768:flex-col bp768:gap-x-0 bp768:gap-[65px] bp480:px-[30px] mt-[80px] flex max-w-[800px] flex-wrap justify-center gap-x-[220px]">
        {applicationsDummyData.map((item, index) => {
          return (
            <ArticleApplicationItem
              key={index}
              title={item.title}
              subTitle={item.subTitle}
              image={item.image}
              size={item.size}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ArticleApplication;
