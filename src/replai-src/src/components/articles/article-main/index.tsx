import { Dispatch } from "react";
import { motion } from "framer-motion";
import { main_animation } from "@/animations";
import LandingPage from "@/components/svg/landing-page";

type ArticleMainProps = {
  setOpenContactUsModal: Dispatch<boolean>;
};

const ArticleMain: React.FC<ArticleMainProps> = ({ setOpenContactUsModal }) => {
  return (
    <motion.div
      className="bp1024:px-[30px] bp768:gap-[100px] bp640:flex-col-reverse bp640:items-center bp640:gap-[50px] bp640:pt-[50px] flex items-center justify-center gap-[295px] pt-[144px]"
      variants={main_animation}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col items-start">
        <span className="bp480:text[25px] text-[32px] font-bold text-[#4E69FE]">
          ریپلای
        </span>
        <span className="mt-[6px] w-[247px] text-[18px] font-light">
          چت‌بات مبتنی بر هوش مصنوعی برای ارتقا تجربه کاربران شما
        </span>
        <button
          className="mt-[42px] h-[50px] w-[220px] cursor-pointer rounded-[10px] bg-[#4E69FE]"
          onClick={() => setOpenContactUsModal(true)}
        >
          درخواست دمو
        </button>
      </div>
      <LandingPage />
    </motion.div>
  );
};

export default ArticleMain;
