"use client";

import { useRef, useState } from "react";
import { variants } from "@/animations/variant";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { IconContext } from 'react-icons'
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { useWindowSize } from 'react-use';
import Image from "next/image";
import clsx from "clsx";
import "swiper/css";

import MainContent from "./ui/MainContent";
// import roshanOffice from "@/assets/images/roshan-office.png";
// import roshanOffice2 from "@/assets/images/roshan-office-2.png";
// import roshanOffice3 from "@/assets/images/roshan-office-3.png";
import Customers from "@/components/customers";
import Footer from "@/components/layout/Footer";

const AboutUs = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const { width } = useWindowSize();

  const toTopHandler = () => {
    scroll.scrollToTop({ duration: 5000, smooth: true });
  };

  const rightSlideHandler = () => {
    swiperRef.current?.swiper.slideNext();
  }

  const leftSlideHandler = () => {
    swiperRef.current?.swiper.slidePrev();
  }

  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate='visible'
      className='flex flex-col w-full justify-center items-center'
    >
      <MainContent />
      <div className='relative w-full px-[80px] bp768:px-[30px] flex items-center justify-center bp360:mt-10 select-none'>
        <Swiper
          direction={"horizontal"}
          navigation
          className='w-full h-full'
          ref={swiperRef}
          speed={1000}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        >
          <SwiperSlide className="px-[10px]">
            <Image
              src='static/media/roshan-office.webp'
              // src={roshanOffice}
              alt='شرکت روشن'
              className='max-w-[1520px] w-full rounded-[40px] mx-auto bp480:rounded-[20px]'
              draggable={false}
            />
          </SwiperSlide>
          <SwiperSlide className="px-[10px]">
            <Image
              src='static/media/roshan-office-2.webp'
              // src={roshanOffice2}
              alt='شرکت روشن'
              className='max-w-[1520px] w-full rounded-[40px] mx-auto bp480:rounded-[20px]'
              draggable={false}
            />
          </SwiperSlide>
          <SwiperSlide className="px-[10px]">
            <Image
              src='static/media/roshan-office-3.webp'
              // src={roshanOffice3}
              alt='شرکت روشن'
              className='max-w-[1520px] w-full rounded-[40px] mx-auto bp480:rounded-[20px]'
              draggable={false}
            />
          </SwiperSlide>
        </Swiper>
        <div className="absolute w-full max-w-[1520px] mx-auto text-white z-50 flex items-center justify-between px-4 bp768:px-10">
          <IconContext.Provider value={{color: "white", size: width < 481 ? '36px' : '56px'}}>
            <FaAngleLeft className={clsx('cursor-pointer',currentSlide === 0 && 'opacity-50')} onClick={leftSlideHandler}/>
          </IconContext.Provider>
          <IconContext.Provider value={{color: "white", size: width < 481 ? '36px' : '56px'}}>
            <FaAngleRight className={clsx('cursor-pointer',currentSlide === 2 && 'opacity-50')} onClick={rightSlideHandler} />
          </IconContext.Provider>
        </div>
      </div>
      <span className='text-[60px] text-white font-bold mt-[400px] mb-[90px] bp1280:mt-[200px] bp768:mt-[100px] bp700:text-[40px] bp480:text-[30px]'>
        کسب اعتماد بهتــرین‌ها
      </span>
      <Customers />
      <Footer toTopHandler={toTopHandler} />
    </motion.div>
  );
};

export default AboutUs;
