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
      <div className='h-fit w-fit sm:-mr-[30px]'>
        <Icon width={width} height={height} />
      </div>
      <div className='-mt-10 flex flex-col items-start gap-[5px] pr-[58px] sm:-mt-5 sm:max-w-[250px] sm:pr-0'>
        <span className='text-[1.1vw] font-normal sm:text-base custombp:text-[20px]'>
          {title}
        </span>
        <span className='max-w-[450px] text-[1vw] font-light custombp2:text-xs'>
          {text}
        </span>
      </div>
    </motion.div>
  );
};
