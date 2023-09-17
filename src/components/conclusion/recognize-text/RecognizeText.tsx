import clsx from "clsx";
import { FC } from "react";
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
    <motion.div
      variants={conlusion_animation}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.5 }}
      className={clsx(
        "items-center gap-[135px]",
        activeTab === 1 ? "flex" : "hidden"
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
  );
};

export default RecognizeText;
