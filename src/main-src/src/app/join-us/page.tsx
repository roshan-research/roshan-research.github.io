"use client";

import { motion } from "framer-motion";
import { variants } from "@/animations/variant";
import { JoinUsLogos } from "@/data/dummy-data";

import JoinUsLogo from "./ui/JoinUsLogo";

const JoinUs = () => {
  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate='visible'
      className='w-full h-[100vh] flex items-center justify-center bp480:pb-[100px] gap-[20.469vw] text-white px-[80px] bp480:mt-[200px] bp480:gap-[60px] bp700:mt-[100px] bp768:px-[30px] bp1366:gap-[15vw] bp1280:flex-col bp1280:gap-[100px]'
      dir='rtl'
    >
      <span className='text-[32px] font-light max-w-[430px] text-right bp480:text-[25px] bp480:text-center'>
        اگر به هوش مصنوعی علاقمندید، برای حضـــور در کنار تیم جـــــوان و خلاق
        روشــن، با ما در ارتباط باشیــد
      </span>
      <div className='flex items-center justify-center gap-6 bp700:flex-wrap'>
        {JoinUsLogos.map((lo, index) => {
          return <JoinUsLogo key={index} lo={lo} />;
        })}
      </div>
    </motion.div>
  );
};

export default JoinUs;
