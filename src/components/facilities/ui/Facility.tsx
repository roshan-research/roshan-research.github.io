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
      <div className={clsx("absolute top-0", left ? "left-0" : "right-0")}>
        <Icon width={width} height={height} />
      </div>
      <div
        className={clsx(
          "flex flex-col gap-[10px]",
          left
            ? "ml-[145px] mt-[120px] sm:ml-[8vw]"
            : "mr-[205px] mt-[190px] sm:mr-[8vw] sm:mt-[120px]"
        )}
      >
        <motion.div
          variants={text_bg_animation}
          initial='hidden'
          whileInView='visible'
          className='relative w-fit overflow-visible bg-[#A76CF3]'
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className='w-fit whitespace-nowrap text-[24px] font-normal text-[#A76CF3]'>
            {title}
          </span>
          <motion.span
            variants={text_animation}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            className='absolute right-0 top-0 w-fit overflow-hidden whitespace-nowrap text-[24px] font-normal text-[#000]'
          >
            {title}
          </motion.span>
        </motion.div>
        <span className='max-w-[390px] text-[18px] font-light text-[#FAFAFA]'>
          {text}
        </span>
      </div>
    </div>
  );
};

export default Facility;
