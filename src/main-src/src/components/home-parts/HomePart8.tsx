"use client";

import { Dispatch, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import { variants } from "@/animations/variant";
import BlueCircleIcon from "../icons/BlueCircleIcon";
import RedirectButton from "../buttons/RedirectButton";
import FahmSquircle from "../icons/squircles/FahmSquircle";

type HomePart8Props = {
  setActiveIndex: Dispatch<number>;
};

const HomePart8: React.FC<HomePart8Props> = ({ setActiveIndex }) => {
  const lottieRef = useRef(null);
  const inViewRef = useRef(null);
  const inView = useInView(inViewRef);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setIsInView(true);
      setHasAnimated(true);
    }

    if (inView) {
      setActiveIndex(1);
    }
  }, [inView, hasAnimated]);

  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate={isInView ? "visible" : "hidden"}
      className='flex flex-col w-fit mx-auto mt-[300px] items-center justify-center pin1 bp480:mt-[100px]'
    >
      <div className='flex items-center justify-center'>
        <div className='w-[799px] h-[799px] bp800:w-[100vw] bp480:h-fit'>
          <BlueCircleIcon />
        </div>
        <FahmSquircle className='absolute w-[300px] h-[300px] bp480:w-[250px] bp480:h-[250px]' />
        {isInView && (
          <div className='absolute w-[300px] h-[300px] bp480:w-[250px] bp480:h-[250px]'>
            <lottie-player
              id='firstLottie'
              ref={lottieRef}
              autoPlay
              src='/images/lottie/Fahm_Motion_all_88C4FF.json'
            ></lottie-player>
          </div>
        )}
      </div>
      <span
        className='text-[70px] font-bold text-[#88C4FF] -mt-[200px] bp480:mt-0 bp480:text-[40px]'
        ref={inViewRef}
      >
        فهم
      </span>
      <span className='text-[#DDDDDD] text-[24px] font-light w-[400px] text-center mt-3 bp480:text-base bp480:w-[70%]'>
        فهم، با بهره‌گیری از مدل‌های زبانی اسناد را پردازش و با آنها گفتگو می‌کند
      </span>
      <RedirectButton color='#88C4FF' link='https://www.roshan-ai.ir/fahm/' />
    </motion.div>
  );
};

export default HomePart8;
