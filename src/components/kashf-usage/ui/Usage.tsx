import { FC } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { usage_animation } from "@/components/animations/main";

type UsageProps = {
  line: string;
  image: string;
  width: number;
  lineWidth: number;
  left: boolean;
  title: string;
  text: string;
};

const Usage: FC<UsageProps> = ({
  line,
  image,
  width,
  lineWidth,
  left,
  title,
  text,
}) => {
  return (
    <motion.div
      variants={usage_animation}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
      className='flex flex-col items-start gap-5'
    >
      <div className='relative'>
        <img
          width={lineWidth}
          src={line}
          className={clsx(
            "absolute -top-5",
            left ? "-left-4" : "-right-4 rotate-90"
          )}
          draggable={false}
        />
        <img
          src={image}
          width={width}
          className='rounded-[60px]'
          draggable={false}
        />
      </div>
      <span className='text-[24px] font-normal text-[#A76CF3]'>{title}</span>
      <span className='max-w-[480px] text-[18px] font-light'>{text}</span>
    </motion.div>
  );
};

export default Usage;
