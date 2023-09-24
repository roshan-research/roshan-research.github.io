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
          "items-center gap-[135px] custombp5:hidden",
          activeTab === 1 ? "flex custombp5:flex-col" : "hidden"
        )}
      >
        <div>
          <RecoPart1 />
        </div>
        <div className='flex flex-col items-start gap-[145px]'>
          <div className='mr-[70px]'>
            <RecoPart2 />
          </div>
          <div>
            <RecoPart3 />
          </div>
        </div>
      </motion.div>
      {/* responsive */}
      <motion.div className='hidden items-center gap-[135px] custombp5:flex custombp5:flex-col'>
        <span className='hidden text-xl text-[#FAFAFA] custombp5:block'>
          تشخیص مفهوم متن
        </span>
        <div>
          <RecoPart1 />
        </div>
        <div className='flex flex-col items-start gap-[145px]'>
          <div>
            <RecoPart2 />
          </div>
          <div>
            <RecoPart3 />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default RecognizeText;
