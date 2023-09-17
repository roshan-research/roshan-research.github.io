import { FC } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import BabyFeet from "@/assets/images/conclusion/baby-feet.png";
import Watermelon from "@/assets/images/conclusion/watermelon.png";
import Boat from "@/assets/images/conclusion/boat.png";
import { conlusion_animation } from "@/components/animations/main";

type ImageRecognizeProps = {
  activeTab: number;
};

const ImageRecognize: FC<ImageRecognizeProps> = ({ activeTab }) => {
  return (
    <motion.div
      variants={conlusion_animation}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.5 }}
      className={clsx(
        "items-start gap-10",
        activeTab === 3 ? "flex" : "hidden"
      )}
    >
      <div>
        <img src={BabyFeet} alt='' className='w-[330px]' />
      </div>
      <div className='mt-[170px]'>
        <img src={Watermelon} alt='' className='w-[330px]' />
      </div>
      <div className='mt-[80px]'>
        <img src={Boat} alt='' className='w-[330px]' />
      </div>
    </motion.div>
  );
};

export default ImageRecognize;
