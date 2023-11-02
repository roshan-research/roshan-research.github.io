import { FC } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import RecoPart1 from "./RecoPart1";
import RecoPart2 from "./RecoPart2";
import RecoPart3 from "./RecoPart3";
import { conlusion_animation } from "@/components/animations/main";

type RecognizeTextProps = {
  activeTab: number;
};

const RecognizeText: FC<RecognizeTextProps> = ({ activeTab }) => {
  return (
    <>
      <motion.div
        variants={conlusion_animation}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        className={clsx(
          "items-center gap-[48px] custombp5:hidden",
          activeTab === 1 ? "flex custombp5:flex-col" : "hidden",
        )}>
        <div>
          <RecoPart1 />
        </div>
        <div className='flex flex-col items-start gap-[120px]'>
          <div className='mr-[70px]'>
            <RecoPart2 />
          </div>
          <div>
            <RecoPart3 />
          </div>
        </div>
      </motion.div>
      {/* responsive */}
      <motion.div className='no-scrollbar hidden max-w-[430px] items-start gap-7 overflow-x-scroll custombp5:flex custombp5:flex-col'>
        <div className='justify-cstart flex items-start gap-8 pt-[70px] sm:px-[40px]'>
          <RecoPart1 />
          <RecoPart2 />
          <RecoPart3 />
        </div>
      </motion.div>
      <span className='mt-10 hidden text-xl text-[#FAFAFA] sm:block sm:text-base'>
        تشخیص مفهوم متن
      </span>
    </>
  );
};

export default RecognizeText;
