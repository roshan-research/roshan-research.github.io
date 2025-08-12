import { FC } from "react";
import { motion } from "framer-motion";
import { usage_animation } from "@/components/animations/main";
import clsx from "clsx";

type UsageProps = {
  image: string;
  width: number;
  lineWidth: number;
  left: boolean;
  title: string;
  text: string;
};

const Usage: FC<UsageProps> = ({
  image,
  width,
  title,
  text,
  left,
}) => {
  return (
    <motion.div
      variants={usage_animation}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
      className={clsx(
        "flex items-center gap-64 sm:flex-col sm:justify-items-start  sm:-mr-42",
        left ? "flex-row" : "flex-row-reverse"
      )}
    >
      <div className='am:w-fit relative sm:mx-auto px-24'>
        <img
          src={image}
          width={width}
          draggable={false}
        />
      </div>
      <div className="flex flex-col px-16">
        <span className='text-[40px] max-w-[290px] font-normal sm:-mt-32 text-[#88C4FF] sm:w-full sm:text-right pb-5 custombp:text-[20px] font-iranyekan-bold'>
          {title}
        </span>
        <span className='text-[18px] font-normal custombp2:text-base max-w-[290px] sm:w-full sm:text-right text-justify custombp:text-[14px]'>
          {text}
        </span>
      </div>
    </motion.div>
  );
};

export default Usage;
