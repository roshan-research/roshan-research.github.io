import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { text_animation, text_bg_animation } from "@/animations";

type ArticleFacilitiesItemProps = {
  title: string;
  subTitle: string;
  icon: React.ReactElement;
  index: number;
};

const ArticleFacilitiesItem: React.FC<ArticleFacilitiesItemProps> = ({
  title,
  subTitle,
  icon,
  index,
}) => {
  return (
    <div
      className={clsx(
        "flex w-full max-w-[275px] flex-col items-start",
        (index === 1 || index === 3) && "bp768:mt-0 mt-[122px]",
        index === 2 && "bp768:mt-0 -mt-[70px]",
      )}
    >
      {/* icon */}
      <div
        className={clsx(
          "bp768:mb-10 bp768:w-full bp768:flex bp768:items-center bp768:justify-center -mb-[65px]",
          (index === 0 || index === 2) && "bp768:mr-0 -mr-[115px]",
          index === 1 && "bp768:mr-0 mr-[200px]",
          index === 3 && "bp768:mr-0 bp768:mb-0 -mb-[55px] mr-[170px]",
        )}
      >
        {icon}
      </div>
      {/* title */}
      <motion.span
        variants={text_bg_animation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="relative whitespace-nowrap bg-[#4E69FE] text-right text-[18px] font-[700]"
      >
        <span className="text-[#4E69FE]">{title}</span>
        <motion.span
          variants={text_animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="absolute right-0 top-0 overflow-hidden text-black"
        >
          {title}
        </motion.span>
      </motion.span>
      {/* sub title */}
      <div className="mt-5 w-full text-right text-sm font-light text-white">
        <div className="bp768:max-w-[300px] max-w-[250px]">{subTitle}</div>
      </div>
    </div>
  );
};

export default ArticleFacilitiesItem;
