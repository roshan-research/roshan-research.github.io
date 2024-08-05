"use client";

import { Dispatch, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import { variants } from "@/animations/variant";
import BlueCircleIcon from "../icons/BlueCircleIcon";
import RedirectButton from "../buttons/RedirectButton";
import ReplaiSquircle from "../icons/squircles/ReplaiSquircle";

type HomePart2Props = {
  setActiveIndex: Dispatch<number>;
};

const HomePart2: React.FC<HomePart2Props> = ({ setActiveIndex }) => {
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
        <ReplaiSquircle
          width={251}
          height={250}
          className='absolute hidden bp480:block'
        />
        <ReplaiSquircle
          width={301}
          height={300}
          className='absolute bp480:hidden'
        />
        {isInView && (
          <div className='absolute w-[300px] h-[300px] bp480:w-[250px] bp480:h-[250px]'>
            <lottie-player
              id='firstLottie'
              ref={lottieRef}
              autoPlay
              src='https://lottie.host/12c52fca-064d-43ad-9e4c-3895f3f6dacb/2ygxaERbLU.json'
            ></lottie-player>
          </div>
        )}
      </div>
      <span
        className='text-[70px] font-bold text-[#4E69FE] -mt-[200px] bp480:mt-0 bp480:text-[40px]'
        ref={inViewRef}
      >
        ریپلای
      </span>
      <span className='text-[#DDDDDD] text-[24px] font-light w-[350px] text-center mt-3 bp480:text-base bp480:w-[70%]'>
        ریپلای، با هوش مصنوعی به سوالات کاربران پاسخ می‌دهد
      </span>
      <RedirectButton color='#4E69FE' link='https://www.roshan-ai.ir/replai/' />
    </motion.div>
  );
};

export default HomePart2;
