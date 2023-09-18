import { IconProps } from "@/shared/types";
import { FC } from "react";
import { motion } from "framer-motion";
import Window from "@/assets/images/article-main/window.png";
import {
  main_svg_path_6,
  window_animation,
} from "@/components/animations/main";
import { ButterflyAnimateSvg, ButterflySvg } from "@/components/svg";

const Butterfly: FC<IconProps> = ({ width, height }) => {
  return (
    <div className='relative h-fit w-fit'>
      <motion.div
        variants={window_animation}
        initial='hidden'
        animate='visible'
        className='absolute left-[98px] top-[400px]'
      >
        <img src={Window} alt='' width={405} height={257} />
      </motion.div>
      <ButterflyAnimateSvg width={144} height={83} />
      <div className='absolute left-[375px] top-[317px] w-fit text-[20px] font-[500] text-[#FAFAFA]'>
        <motion.span
          variants={main_svg_path_6}
          initial='hidden'
          animate='visible'
          className='flex justify-end overflow-hidden'
        >
          پروانه
        </motion.span>
      </div>
      <ButterflySvg width={width} height={height} />
    </div>
  );
};

export default Butterfly;
