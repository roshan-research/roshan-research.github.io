"use client";

import { Dispatch, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import { variants } from "@/animations/variant";
import PurpleCircleIcon from "../icons/PurpleCircleIcon";
import RedirectButton from "../buttons/RedirectButton";

type HomePart5Props = {
  setActiveIndex: Dispatch<number>;
};

const HomePart5: React.FC<HomePart5Props> = ({ setActiveIndex }) => {
  const lottieRef = useRef(null);
  const inViewRef = useRef(null);
  const inView = useInView(inViewRef);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setIsInView(true);
      setHasAnimated(true);
    }

    if (inView) {
      setActiveIndex(4);
    }
  }, [inView, hasAnimated]);

  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate={isInView ? "visible" : "hidden"}
      className='flex flex-col w-fit mx-auto mt-[200px] items-center justify-center pin4'
    >
      <div className='relative flex items-center justify-center w-fit h-fit'>
        <div className='w-[799px] h-[799px] bp800:w-[100vw] bp480:h-fit'>
          <PurpleCircleIcon />
        </div>
        {isInView && (
          <div className='absolute w-[300px] h-[300px] bp480:w-[250px] bp480:h-[250px]'>
            <lottie-player
              id='firstLottie'
              ref={lottieRef}
              autoPlay
              src='https://lottie.host/13ad097e-7f60-4614-9911-ec18b8d6451b/9C4hBcKF2H.json'
            ></lottie-player>
          </div>
        )}
      </div>
      <span
        className='text-[70px] font-bold text-[#6658CA] -mt-[200px] bp480:mt-0'
        ref={inViewRef}
      >
        کشــف
      </span>
      <span className='text-[#DDDDDD] text-[24px] font-light w-[350px] text-center mt-3'>
        کشف، مفاهیم را در میان تصاویر و متن‌ها پیدا می‌کند
      </span>
      <RedirectButton color='#6658CA' link='https://www.roshan-ai.ir/kashf/' />
    </motion.div>
  );
};

export default HomePart5;
