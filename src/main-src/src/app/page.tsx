"use client";

import { useRef, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { ReactLenis } from 'lenis/react'

import HomePart1 from "@/components/home-parts/HomePart1";
import HomePart2 from "@/components/home-parts/HomePart2";
import HomePart3 from "@/components/home-parts/HomePart3";
import HomePart4 from "@/components/home-parts/HomePart4";
import HomePart5 from "@/components/home-parts/HomePart5";
import HomePart6 from "@/components/home-parts/HomePart6";
import HomePart7 from "@/components/home-parts/HomePart7";
import Pagination from "@/components/pagination";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toTopHandler = () => {
    scroll.scrollToTop({ duration: 5000, smooth: true });
  };

  return (
    <ReactLenis root>
        <div className='relative' id='scroll-container' ref={container}>
          <HomePart1 setActiveIndex={setActiveIndex} />
          <HomePart2 setActiveIndex={setActiveIndex} />
          <HomePart3 setActiveIndex={setActiveIndex} />
          <HomePart4 setActiveIndex={setActiveIndex} />
          <HomePart5 setActiveIndex={setActiveIndex} />
          <HomePart6 setActiveIndex={setActiveIndex} />
          <HomePart7 setActiveIndex={setActiveIndex} />
          <Footer toTopHandler={toTopHandler} />
          <Pagination activeIndex={activeIndex} />
        </div>
    </ReactLenis>
  );
}
