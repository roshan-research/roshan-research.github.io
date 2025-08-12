"use client";

import { useRef, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { ReactLenis } from "lenis/react";

import HomePart1 from "@/components/home-parts/HomePart1";
import HomePart2 from "@/components/home-parts/HomePart2";
import HomePart3 from "@/components/home-parts/HomePart3";
import HomePart4 from "@/components/home-parts/HomePart4";
import HomePart6 from "@/components/home-parts/HomePart6";
import HomePart7 from "@/components/home-parts/HomePart7";
import Pagination from "@/components/pagination";
import Footer from "@/components/layout/Footer";
import Customers from "@/components/customers";
import HomePart8 from "@/components/home-parts/HomePart8";

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toTopHandler = () => {
    scroll.scrollToTop({ duration: 2000, smooth: true });
  };

  return (
    <ReactLenis root>
      <div className='relative' id='scroll-container' ref={container}>
        <HomePart1 setActiveIndex={setActiveIndex} />
        <HomePart8 setActiveIndex={setActiveIndex} /> {/* fahm */}
        <HomePart3 setActiveIndex={setActiveIndex} /> {/* alefba */}
        <HomePart4 setActiveIndex={setActiveIndex} /> {/* harf */}
        <HomePart6 setActiveIndex={setActiveIndex} /> {/* hazm */}
        <HomePart7 setActiveIndex={setActiveIndex}>
          <Customers />
        </HomePart7>
        <Footer toTopHandler={toTopHandler} />
        <Pagination activeIndex={activeIndex} />
      </div>
    </ReactLenis>
  );
}
