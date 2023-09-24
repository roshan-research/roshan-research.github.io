import { motion } from "framer-motion";
import Butterfly from "../icons/butterfly";
import { main_animation } from "@/components/animations/main";
import { FC } from "react";

type ArticleMainProps = {
  windowWidth: number | null;
};

const ArticleMain: FC<ArticleMainProps> = ({ windowWidth }) => {
  return (
    <motion.div
      variants={main_animation}
      initial='hidden'
      animate='visible'
      className='mx-auto mt-[25vh] flex max-w-[1200px] items-center justify-between custombp2:mt-[15vh] custombp2:flex-col-reverse'
    >
      <div className='flex flex-col items-start whitespace-nowrap'>
        <span className='text-[64px] font-normal text-[#A76CF3] custombp2:text-[30px]'>
          کشف
        </span>
        <span className='text-[28px] font-normal text-[#FAFAFA] custombp2:text-[20px]'>
          آموزش ماشین؛ به همین راحتی!
        </span>
      </div>
      <Butterfly
        width={windowWidth! < 641 ? "100%" : 386}
        height={windowWidth! < 641 ? "100%" : 385}
      />
    </motion.div>
  );
};

export default ArticleMain;
