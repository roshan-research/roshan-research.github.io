"use client";

import { Dispatch, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Customers from "../customers";

type HomePart7Props = {
  setActiveIndex: Dispatch<number>;
  children: React.ReactNode;
};

const HomePart7: React.FC<HomePart7Props> = ({ setActiveIndex, children }) => {
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      setActiveIndex(6);
    }
  }, [inView]);

  return (
    <motion.div className='w-fit mx-auto h-auto mt-[200px] bg-black text-white flex items-center justify-start flex-col gap-[60px]'>
      <span
        className='text-[60px] font-bold mt-[60px] bp700:text-[30px]'
        ref={ref}
      >
        کسب اعتماد بهتــرین‌ها
      </span>
      {children}
    </motion.div>
  );
};

export default HomePart7;
