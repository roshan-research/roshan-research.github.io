import { motion } from "framer-motion";
import Butterfly from "../icons/butterfly";
import { main_animation } from "@/components/animations/main";

const ArticleMain = () => {
  return (
    <motion.div
      variants={main_animation}
      initial='hidden'
      animate='visible'
      className='flex items-center justify-center gap-[440px] sm:hidden'
    >
      <div className='mt-[170px] flex flex-col items-start'>
        <span className='text-[64px] font-normal text-[#A76CF3]'>کشف</span>
        <span className='text-[28px] font-normal text-[#FAFAFA]'>
          آموزش ماشین؛ به همین راحتی!
        </span>
      </div>
      <Butterfly width={592} height={888} />
    </motion.div>
  );
};

export default ArticleMain;
