"use client";

import { motion, useInView } from "framer-motion";
import { Dispatch, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { variants } from "@/animations/variant";
import earhWallpaper from "../../assets/images/wallpaper.e4312dfe1d9f19418f65.png";
import clsx from "clsx";

type HomePart1Props = {
  setActiveIndex: Dispatch<number>;
};

const HomePart1: React.FC<HomePart1Props> = ({ setActiveIndex }) => {
  const ref = useRef(null);
  const lottieRef = useRef(null);
  const inView = useInView(ref);
  const [showAnimation, setShowAnimation] = useState<boolean>(false);

  useEffect(() => {
    if (inView) {
      setActiveIndex(0);
    }
  }, [inView]);

  // useEffect(() => {
  //   const timeOut = setTimeout(() => {
  //     setShowAnimation(false);
  //   }, 5800);

  //   return () => clearTimeout(timeOut);
  // }, []);

  return (
    <div className='w-full h-[100vh] flex items-center justify-center bg-gradient-to-t from-[#000000] to-[#202020]'>
      {showAnimation && (
        <div className='absolute'>
          {/* <lottie-player
            id='firstLottie'
            ref={lottieRef}
            autoPlay
            src='https://lottie.host/20c9fc73-c936-4bf5-85ee-7e02118911d0/Zpg2yYw1cD.json'
          ></lottie-player> */}
        </div>
      )}
      <div
        className={clsx(
          "w-full h-full relative flex transition-all duration-500 items-center justify-center opacity-0",
          showAnimation ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
      >
        <Image
          // src='static/media/wallpaper.e4312dfe1d9f19418f65.png'
          src={earhWallpaper}
          alt='سایت روشن - هوش مصنوعی'
          className='w-full h-full'
          priority={true}
          draggable={false}
        />
        <span
          className='absolute text-[1.9vw] -translate-y-[80px] text-[#E5E5E5] whitespace-nowrap font-normal bp960:text-[80px] bp800:text-[60px] bp480:text-[8vw]'
          ref={ref}
        >
          انسان به توان ماشیـن
        </span>
      </div>
    </div>
  );
};

export default HomePart1;
