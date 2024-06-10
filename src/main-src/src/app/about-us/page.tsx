"use client";

import Image from "next/image";
import { variants } from "@/animations/variant";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

import MainContent from "./ui/MainContent";
import roshanOffice from "@/assets/images/roshan-office.png";
import Customers from "@/components/customers";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";

const AboutUs = () => {
  const toTopHandler = () => {
    scroll.scrollToTop({ duration: 5000, smooth: true });
  };

  useEffect(() => {
    const body = document.body;
    const scrollWrap = document.getElementsByClassName(
      "smooth-scroll-wraper-3"
    )[0] as HTMLDivElement;
    const height = scrollWrap.getBoundingClientRect().height - 1;
    const speed = 0.04;

    var offset = 0;

    body.style.height = Math.floor(height) + "px";

    function smoothScroll() {
      offset += (window.scrollY - offset) * speed;

      var scroll = "translateY(-" + offset + "px) translateZ(0)";
      scrollWrap.style.transform = scroll;

      requestAnimationFrame(smoothScroll);
    }

    smoothScroll();
  }, []);

  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate='visible'
      className='smooth-scroll-wraper-3 fixed top-0 left-0 flex flex-col w-full justify-center items-center'
    >
      <MainContent />
      <div className='w-full relative px-[80px] bp768:px-[30px] flex items-center justify-center bp360:mt-10'>
        <Image
          src={roshanOffice}
          alt='شرکت روشن'
          className='max-w-[1520px] w-full rounded-[40px] bp480:rounded-[20px]'
        />
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
