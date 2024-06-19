"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";

import { variants } from "@/animations/variant";
import { Dispatch, useEffect, useRef } from "react";
import Earth from "static/media/wallpaper.e4312dfe1d9f19418f65.png";

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
    <motion.div
      variants={variants}
      initial='hidden'
      animate='visible'
      className='relative w-full h-[100vh] flex items-center justify-center bg-gradient-to-t from-[#000000] to-[#202020]'
    >
      {/* <div className='w-[660px] h-[660px] bp960:w-[560px] bp960:mt-[100px] bp800:w-[400px] bp800:mt-[260px] bp480:w-[80vw] bp480:mt-0 bp480:h-fit'>
          <EarthIcon />
        </div> */}
      <Image
        src={Earth}
        alt='سایت روشن - هوش مصنوعی'
        className='w-full h-full'
      />
      <span
        className='absolute text-[1.9vw] -translate-y-[80px] text-[#E5E5E5] whitespace-nowrap font-normal bp960:text-[80px] bp800:text-[60px] bp480:text-[10vw]'
        ref={ref}
      >
        انسان به توان ماشیـن
      </span>
    </motion.div>
  );
};

export default HomePart1;
