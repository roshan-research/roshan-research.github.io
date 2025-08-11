import { FC } from "react";
import { motion } from "framer-motion";
import { IconProps } from "@/shared/types";
import { features_animation, text_animation, text_bg_animation } from "@/components/animations/main";

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
    <motion.div
      variants={features_animation}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="p-10 mr-7 mb-12">
        <Icon width={width} height={height} />
      </div>
      <div className='-mt-24 flex flex-col items-start gap-[5px] pr-[58px]'>
        <motion.div
          variants={text_bg_animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="relative mt-[23px] overflow-visible whitespace-nowrap bg-[#88C4FF] text-[18px] font-[700]"
        >
          <span className='text-[24px] font-semibold custombp:text-[20px] text-black'>
            {title}
          </span>
          <motion.span
            variants={text_animation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="absolute right-0 top-0 overflow-hidden"
          >
          </motion.span>
        </motion.div>
        <span className='max-w-[250px] text-[18px] font-normal custombp2:text-base max-w-[275px] text-justify '>
          {text}
        </span>
      </div>
    </motion.div>
  );
};
