import { FC } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { IconProps } from "@/shared/types";
import {
  text_animation,
  text_bg_animation,
} from "@/components/animations/main";

type FacilityProps = {
  Icon: FC<IconProps>;
  width: number;
  height: number;
  title: string;
  text: string;
  left?: boolean;
};

const Facility: FC<FacilityProps> = ({
  Icon,
  width,
  height,
  title,
  text,
  left,
}) => {
  return (
    <div className='relative'>
      <div
        className={clsx(
          "absolute top-10 sm:top-7",
          left ? "left-[60px] sm:left-0" : "right-[15px] sm:right-0"
        )}
      >
        <Icon width={width} height={height} />
      </div>
      <div
        className={clsx(
          "flex flex-col gap-[10px]",
          left
            ? "ml-[145px] mt-[120px] sm:ml-0"
            : "mr-[205px] mt-[190px] sm:mr-0 sm:mt-[120px]"
        )}
      >
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
        <span className='max-w-[390px] text-[1vw] font-light text-[#FAFAFA] sm:text-xs'>
          {text}
        </span>
      </div>
    </div>
  );
};

export default Facility;