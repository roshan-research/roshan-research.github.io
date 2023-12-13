import { motion } from "framer-motion";
// import Butterfly from "../icons/butterfly";
import { main_animation } from "@/components/animations/main";
import { MainPageImage } from "../svg";

const ArticleMain = () => {
  return (
    <motion.div
      variants={main_animation}
      initial='hidden'
      animate='visible'
      className='mx-auto mt-[25vh] flex max-w-[1200px] items-center justify-center gap-[292px] sm:gap-[100px] custombp2:mt-[15vh] custombp2:flex-col'
    >
      <div className='flex flex-col items-start whitespace-nowrap sm:items-center'>
        <span className='text-[2vw] font-normal text-[#A76CF3] sm:text-[32px] custombp2:text-[30px]'>
          کشف
        </span>
        <span className='text-[1.4vw] font-light text-[#FAFAFA] custombp2:text-base'>
          آموزش ماشین؛ به همین راحتی!
        </span>
      </div>
      {/* <Butterfly width={551} height={551} /> */}
      <MainPageImage width={317} height={239} />
    </motion.div>
  );
};

export default ArticleMain;
