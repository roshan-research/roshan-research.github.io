import { FC } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Pic from "@/assets/images/conclusion/pic.png";
import { conlusion_animation } from "@/components/animations/main";

type FaceRecognizeProps = {
  activeTab: number;
};

const FaceRecognize: FC<FaceRecognizeProps> = ({ activeTab }) => {
  return (
    <motion.div
      variants={conlusion_animation}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.5 }}
      className={clsx(
        "h-[470px] w-[770px]",
        activeTab === 2 ? "block" : "hidden"
      )}
    >
      <img src={Pic} alt='' className='h-full w-full' />
    </motion.div>
  );
};

export default FaceRecognize;
