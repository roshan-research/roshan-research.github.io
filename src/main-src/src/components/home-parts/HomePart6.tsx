"use client";

import { Dispatch, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useWindowSize } from "react-use";

import { variants } from "@/animations/variant";
import YellowCircleIcon from "../icons/YellowCircleIcon";
import RedirectButton from "../buttons/RedirectButton";
import HazmSquircle from "../icons/squircles/HazmSquircle";

type HomePart6Props = {
  setActiveIndex: Dispatch<number>;
};

const HomePart6: React.FC<HomePart6Props> = ({ setActiveIndex }) => {
  const lottieRef = useRef(null);
  const inViewRef = useRef(null);
  const inView = useInView(inViewRef);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (inView && !hasAnimated) {
      setIsInView(true);
      setHasAnimated(true);
    }

    if (inView) {
      setActiveIndex(5);
    }
  }, [inView, hasAnimated]);

  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate={isInView ? "visible" : "hidden"}
      className='flex flex-col w-fit mx-auto mt-[200px] items-center justify-center pin5'
    >
      <div className='relative flex items-center justify-center w-fit h-fit'>
        <div className='w-[799px] h-[799px] bp800:w-[100vw] bp480:h-fit'>
          <YellowCircleIcon />
        </div>
        <HazmSquircle
          width={width < 481 ? 251 : 300}
          height={width < 481 ? 250 : 300}
          className='absolute'
        />
        {isInView && (
          <div className='absolute w-[300px] h-[300px] bp480:w-[250px] bp480:h-[250px]'>
            <lottie-player
              id='firstLottie'
              ref={lottieRef}
              autoPlay
              src='/images/lottie/hazm-lottie.json'
            ></lottie-player>
          </div>
        )}
      </div>
      <span
        className='text-[70px] font-bold text-[#FAD246] -mt-[200px] bp480:mt-0 bp480:text-[40px]'
        ref={inViewRef}
      >
        هضم
      </span>
      <span className='text-[#DDDDDD] text-[24px] font-light w-[350px] text-center mt-3 z-50 bp480:text-base bp480:w-[70%]'>
        هضم، متن فارسی را تمیز و مرتب می‌کند
      </span>
      <RedirectButton color='#FAD246' link='https://www.roshan-ai.ir/hazm' />
    </motion.div>
  );
};

export default HomePart6;
