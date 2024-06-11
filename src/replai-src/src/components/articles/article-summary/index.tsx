import { Dispatch } from "react";
import { summary_animation } from "@/animations";
import { motion } from "framer-motion";

type ArticleSummaryProps = {
  setOpenContactUsModal: Dispatch<boolean>;
};

const ArticleSummary: React.FC<ArticleSummaryProps> = ({
  setOpenContactUsModal,
}) => {
  return (
    <motion.div
      variants={summary_animation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="bp1024:px-[30px] mt-[280px]"
    >
      <div className="bp1024:w-full mx-auto flex h-[270px] w-[940px] flex-col items-center justify-center gap-[34px] rounded-[15px] bg-[#181818]">
        <span className="bp480:text-sm bp480:px-[30px] max-w-[319px] text-center text-[18px] font-bold">
          چت‌بات ریپلای تجربه‌ی بهتری را برای شما و مشتریانتان فراهم می‌کند
        </span>
        <button
          className="bp480:w-[45.833vw] h-[50px] w-[220px] cursor-pointer rounded-[10px] bg-[#4E69FE] text-base font-bold"
          onClick={() => setOpenContactUsModal(true)}
        >
          درخواست دمو
        </button>
      </div>
    </motion.div>
  );
};

export default ArticleSummary;
