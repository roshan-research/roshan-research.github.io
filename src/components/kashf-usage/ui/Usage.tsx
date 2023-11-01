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
      className='flex flex-col items-start gap-5 sm:max-w-[192px] sm:gap-2'
    >
      <div className='am:w-fit relative'>
        <img
          width={lineWidth}
          src={line}
          className={clsx(
            "absolute -top-5 sm:-top-2",
            left ? "-left-4 sm:-left-2" : "-right-4 rotate-90 sm:-right-2"
          )}
          draggable={false}
          alt='kashf usage'
        />
        <img
          src={image}
          width={width}
          className='rounded-[20px]'
          draggable={false}
          alt='kashf usage'
        />
      </div>
      <span className='text-[1.1vw] font-normal text-[#A76CF3] sm:w-full sm:text-base'>
        {title}
      </span>
      <span className='max-w-[480px] text-[1vw] font-light sm:w-full sm:text-xs'>
        {text}
      </span>
    </motion.div>
  );
};

export default Usage;
