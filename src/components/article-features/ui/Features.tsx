import { FC } from "react";
import { motion } from "framer-motion";
import { IconProps } from "@/shared/types";
import { features_animation } from "@/components/animations/main";

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
      <Icon width={width} height={height} />
      <div className='-mt-10 flex flex-col items-start gap-[5px] pr-[58px]'>
        <span className='text-[28px] font-[700]'>{title}</span>
        <span className='max-w-[450px] text-[20px] font-light'>{text}</span>
      </div>
    </motion.div>
  );
};
