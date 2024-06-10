"use client";

import { motion, useInView } from "framer-motion";

import EarthIcon from "../icons/EarthIcons";
import { variants } from "@/animations/variant";
import { Dispatch, useEffect, useRef } from "react";

type HomePart1Props = {
  setActiveIndex: Dispatch<number>;
};

const HomePart1: React.FC<HomePart1Props> = ({ setActiveIndex }) => {
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      setActiveIndex(0);
    }
  }, [inView]);

  return (
    <div className='relative w-full h-[100vh] flex items-center justify-center bg-gradient-to-t from-[#000000] to-[#202020]'>
      <motion.div
        variants={variants}
        initial='hidden'
        animate='visible'
        className='w-fit h-fit flex items-center justify-center relative'
      >
        <div className='w-[660px] h-[660px] bp960:w-[560px] bp960:mt-[100px] bp800:w-[400px] bp800:mt-[260px] bp480:w-[80vw] bp480:mt-0 bp480:h-fit'>
          <EarthIcon />
        </div>
        <span
          className='absolute text-[100px] text-[#E5E5E5] whitespace-nowrap font-bold bp960:text-[80px] bp800:text-[60px] bp480:text-[10vw]'
          ref={ref}
        >
          انسان به توان ماشیـن
        </span>
      </motion.div>
    </div>
  );
};

export default HomePart1;
