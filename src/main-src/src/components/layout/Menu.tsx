"use client";

import { Dispatch, useRef, useState } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import clsx from "clsx";
import "swiper/css";

import CloseIcon from "../icons/CloseIcon";
import BottomArrow from "../icons/BottomArrow";
import MenuLogoButton from "../buttons/MenuLogoButton";
import LogoIcon from "../icons/LogoIcon";
import { menuLogos } from "@/data/dummy-data";

type MenuProps = {
  openMenu: boolean;
  setOpenMenu: Dispatch<boolean>;
};

const Menu: React.FC<MenuProps> = ({ openMenu, setOpenMenu }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const swiperRef = useRef<SwiperRef>(null);

  const changeSlideHandler = () => {
    if (swiperRef.current) {
      if (currentSlide === 0) {
        swiperRef.current.swiper.slideNext();
      }

      if (currentSlide === 1) {
        swiperRef.current.swiper.slidePrev();
      }
    }
  };

  return (
    <div
      className={clsx(
        "fixed top-0 z-50 left-0 bg-black w-full h-full flex items-center justify-center transition-all select-none",
        openMenu
          ? "opacity-100 duration-200"
          : "opacity-0 duration-300 pointer-events-none"
      )}
    >
      <CloseIcon
        width={70}
        height={70}
        className='cursor-pointer absolute top-10 z-50 left-[80px] bp768:left-[30px]'
        onClick={() => setOpenMenu(false)}
      />
      <Link href='/' className='absolute top-[60px] z-10 right-[80px]'>
        <LogoIcon width={88} height={31} />
      </Link>
      <Swiper
        direction={"vertical"}
        modules={[Navigation]}
        navigation
        className='w-full h-full'
        ref={swiperRef}
        speed={2000}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
      >
        <SwiperSlide>
          <div className='w-full h-full flex flex-col items-center justify-center gap-8 text-white text-[80px] font-[725] bp480:text-[40px]'>
            <Link
              href='/about-us'
              onClick={() => setOpenMenu(false)}
              className='hover:text-[#F8BC45] transition-colors duration-200'
            >
              دربــــــــــــاره ما
            </Link>
            <Link
              href='/contact-us'
              onClick={() => setOpenMenu(false)}
              className='hover:text-[#F8BC45] transition-colors duration-200'
            >
              تمــــــاس با ما
            </Link>
            <Link
              href='/join-us'
              onClick={() => setOpenMenu(false)}
              className='hover:text-[#F8BC45] transition-colors duration-200'
            >
              همکاری با ما
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='w-full h-full flex items-center justify-center gap-[80px] text-white text-[80px] font-normal bp1366:flex-wrap bp1366:gap-[40px] bp1366:py-[120px] bp700:py-[220px] bp480:px-[30px] bp480:py-[180px]'
            dir='rtl'
          >
            {menuLogos.map((logo, index) => {
              return <MenuLogoButton key={index} logo={logo} />;
            })}
          </div>
        </SwiperSlide>
      </Swiper>
      <div
        className='select-none flex items-center z-50 justify-center text-white text-base font-normal gap-[10px] absolute bottom-[56px] left-[56px] cursor-pointer'
        onClick={changeSlideHandler}
      >
        <BottomArrow
          width={12}
          height={8}
          className={clsx(
            "transition-all duration-200",
            currentSlide === 1 ? "rotate-180" : "rotate-0"
          )}
        />
        <span>{currentSlide === 0 ? "محصولات" : "بازگشت"}</span>
      </div>
    </div>
  );
};

export default Menu;
