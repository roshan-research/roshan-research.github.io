import { FC } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { IconProps } from "@/shared/types";

type FacilityProps = {
  Icon: FC<IconProps>;
  width: number;
  height: number;
  title: string;
  text: string;
  left?: boolean;
};

const sweepBgVariants = {
  hidden: { width: 0, right: 0, left: "auto" },
  visible: {
    width: "100%",
    transition: { duration: 0.9, ease: [0, 0, 0.2, 1] },
  },
};

const textColorVariants = {
  hidden: { color: "#88C4FF" },
  visible: {
    color: "#000000",
    transition: { duration: 0.9, ease: "easeIn" },
  },
};

const Facility: FC<FacilityProps> = ({
  Icon,
  width,
  height,
  title,
  text,
}) => {
  return (
    <div className="relative px-20 sm:-mt-14">
      <div className="top-0 right-0 sm:mt-24 mb-4 sm:mx-auto">
        <Icon width={width} height={height} />
      </div>
      <div className={clsx("flex flex-col gap-[10px]")}>
        <span className="relative inline-block w-fit sm:max-w-[320px]">
          <motion.span
            variants={textColorVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="relative z-10 whitespace-nowrap sm:whitespace-pre-wrap text-[24px] custombp:text-[16px] font-normal"
          >
            {title}
          </motion.span>
          <motion.span
            variants={sweepBgVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="absolute inset-y-0 left-0 z-0 block bg-[#88C4FF]"
          />
        </span>
        <span className="max-w-[390px] text-[18px] font-normal custombp2:text-base sm:max-w-[260px] sm:text-right custombp:text-[14px] text-[#FAFAFA]">{text}</span>
      </div>
    </div>
  );
};

export default Facility;