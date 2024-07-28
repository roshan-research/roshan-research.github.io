"use client";

import { Dispatch, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import { variants } from "@/animations/variant";
import OrangeCircleIcon from "../icons/OrangeCircleIcon";
import RedirectButton from "../buttons/RedirectButton";
import AlefbaSquircle from "../icons/squircles/AlefbaSquircle";

type HomePart3Props = {
  setActiveIndex: Dispatch<number>;
};

const HomePart3: React.FC<HomePart3Props> = ({ setActiveIndex }) => {
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
      setActiveIndex(2);
    }
  }, [inView, hasAnimated]);

  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate={isInView ? "visible" : "hidden"}
      className='flex flex-col w-fit mx-auto mt-[200px] items-center justify-center pin2'
    >
      <div className='relative flex items-center justify-center w-fit h-fit'>
        <div className='w-[799px] h-[799px] bp800:w-[100vw] bp480:h-fit'>
          <OrangeCircleIcon />
        </div>
        <AlefbaSquircle width={300} height={300} className='absolute' />
        {isInView && (
          <div className='absolute w-[300px] h-[300px] bp480:w-[250px] bp480:h-[250px]'>
            <lottie-player
              id='firstLottie'
              ref={lottieRef}
              autoPlay
              src='https://lottie.host/574e54e1-5261-4eab-9e85-6cc75c71e7a9/tOvIC3Hufw.json'
            ></lottie-player>
          </div>
        )}
      </div>
      <span
        className='text-[70px] font-bold text-[#FF6200] -mt-[200px] bp480:mt-0'
        ref={inViewRef}
      >
        الفبا
      </span>
      <span className='text-[#DDDDDD] text-[24px] font-light w-[350px] text-center mt-3'>
        الفبا، تصویر اسناد را به نوشته‌های قابل جستجو تبدیل می‌کند
      </span>
      <RedirectButton color='#FF6200' link='https://www.roshan-ai.ir/alefba/' />
    </motion.div>
  );
};

export default HomePart3;
