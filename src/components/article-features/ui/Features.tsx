import { FC } from "react";
import { motion } from "framer-motion";
import { IconProps } from "@/shared/types";
import {
  text_animation,
  text_bg_animation,
} from "@/components/animations/main";

type FeaturesProps = {
  Icon: FC<IconProps>;
  width: number;
  height: number;
  title: string;
  text: string;
};

export const Features: FC<FeaturesProps> = ({
  Icon,
  width,
  height,
  title,
  text,
}) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='h-fit w-fit'>
        <Icon width={width} height={height} />
      </div>
      <div className='flex flex-col items-start gap-[5px] sm:max-w-[76vw] sm:pr-0'>
        <motion.div
          variants={text_bg_animation}
          initial='hidden'
          whileInView='visible'
          className='relative w-fit overflow-visible bg-[#A76CF3]'
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className='w-fit whitespace-nowrap text-[1.1vw] font-normal text-[#A76CF3] sm:text-base'>
            {title}
          </span>
          <motion.span
            variants={text_animation}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            className='absolute right-0 top-0 w-fit overflow-hidden whitespace-nowrap text-[1.1vw] font-normal text-[#000] sm:text-base'
          >
            {title}
          </motion.span>
        </motion.div>
        <span className='max-w-[450px] text-[1vw] font-light text-[#FAFAFA] sm:text-xs'>
          {text}
        </span>
      </div>
    </div>
  );
};
