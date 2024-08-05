"use client";

import { Dispatch, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import { variants } from "@/animations/variant";
import GreenCircleIcon from "../icons/GreenCircleIcon";
import RedirectButton from "../buttons/RedirectButton";
import HarfSquircle from "../icons/squircles/HarfSquircle";

type HomePart4Props = {
  setActiveIndex: Dispatch<number>;
};

const HomePart4: React.FC<HomePart4Props> = ({ setActiveIndex }) => {
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
      setActiveIndex(3);
    }
  }, [inView, hasAnimated]);

  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate={isInView ? "visible" : "hidden"}
      className='flex flex-col w-fit mx-auto mt-[200px] items-center justify-center pin3'
    >
      <div className='relative flex items-center justify-center w-fit h-fit'>
        <div className='w-[799px] h-[799px] bp800:w-[100vw] bp480:h-fit'>
          <GreenCircleIcon />
        </div>
        <HarfSquircle
          width={251}
          height={250}
          className='absolute hidden bp480:block'
        />
        <HarfSquircle
          width={300}
          height={300}
          className='absolute bp480:hidden'
        />
        {isInView && (
          <div className='absolute w-[300px] h-[300px] bp480:w-[250px] bp480:h-[250px]'>
            <lottie-player
              id='firstLottie'
              ref={lottieRef}
              autoPlay
              src='https://lottie.host/1695068e-25f8-4e57-bb40-d11e6cf8cd69/eWbA2QK6vy.json'
            ></lottie-player>
          </div>
        )}
      </div>
      <span
        className='text-[70px] font-bold text-[#26FF7B] -mt-[200px] bp480:mt-0 bp480:text-[40px]'
        ref={inViewRef}
      >
        حرف
      </span>
      <span className='text-[#DDDDDD] text-[24px] font-light w-[350px] text-center mt-3 bp480:text-base bp480:w-[70%]'>
        حرف، گفتار را به متن قابل جستجو و ویرایش تبدیل می‌کند
      </span>
      <RedirectButton color='#26FF7B' link='https://www.roshan-ai.ir/harf/' />
    </motion.div>
  );
};

export default HomePart4;
