import { motion } from "framer-motion";
import { capabilitiesDummyData } from "@/data";
import ArticleCapabilityItem from "./article-capability-item/ArticleCapabilityItem";
import { main_animation } from "@/animations";

const ArticleCapabilities = () => {
  return (
    <div className="mt-[220px] flex flex-col items-center text-[24px] font-[700] text-[#4E69FE]">
      <motion.span
        variants={main_animation}
        initial="hidden"
        animate="visible"
        className=""
      >
        قابلیت‌های ریپلای
      </motion.span>
      <div className="bp768:px-[30px] mt-[80px] flex max-w-[1000px] flex-wrap justify-center gap-x-[125px]">
        {capabilitiesDummyData.map((item, index) => {
          return (
            <ArticleCapabilityItem
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

export default ArticleCapabilities;
