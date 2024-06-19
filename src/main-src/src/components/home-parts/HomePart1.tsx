"use client";

import { motion, useInView } from "framer-motion";
import { Dispatch, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { variants } from "@/animations/variant";
// import earhWallpaper from "../../assets/images/wallpaper.e4312dfe1d9f19418f65.png";

type HomePart1Props = {
  setActiveIndex: Dispatch<number>;
};

const HomePart1: React.FC<HomePart1Props> = ({ setActiveIndex }) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [loadImage, setLoadImage] = useState<boolean>(false);

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
      <Image
        src='static/media/wallpaper.e4312dfe1d9f19418f65.png'
        // src={earhWallpaper}
        alt='سایت روشن - هوش مصنوعی'
        className='w-full h-full'
        onLoad={() => setLoadImage(true)}
      />
      <span
        className='absolute text-[1.9vw] -translate-y-[80px] text-[#E5E5E5] whitespace-nowrap font-normal bp960:text-[80px] bp800:text-[60px] bp480:text-[10vw]'
        ref={ref}
      >
        انسان به توان ماشیـن
      </span>
      {!loadImage && (
        <div className='fixed w-full h-full bg-black top-0 left-0 z-[99999]'></div>
      )}
    </motion.div>
  );
};

export default HomePart1;
