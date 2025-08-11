"use client";

import { Link } from "react-scroll";
import clsx from "clsx";

type PaginationProps = {
  activeIndex: number;
};

const Pagination: React.FC<PaginationProps> = ({ activeIndex }) => {
  return (
    <div
      className={clsx(
        "fixed right-[100px] top-0 flex flex-col justify-center items-center w-fit h-full transition-all duration-200 bp768:right-[80px] bp480:right-[30px]",
        (activeIndex === 0 || activeIndex === 8) &&
          "opacity-0 pointer-events-none"
      )}
      style={{ zIndex: "99999" }}
    >
      <Link
        className={clsx(
          "flex items-center justify-center p-1 rounded-full border-[1px] border-transparent transition-all duration-200 cursor-pointer my-1",
          activeIndex !== 1 && "hover:border-white"
        )}
        to='pin1'
        smooth={true}
      >
        <div
          className={clsx(
            "w-[6px] rounded-full transiton-all duration-200",
            activeIndex === 1 ? "h-[24px] bg-[#88C4FF]" : "h-[6px] bg-white"
          )}
        />
      </Link>
      <Link
        className={clsx(
          "flex items-center justify-center p-1 rounded-full border-[1px] border-transparent transition-all duration-200 cursor-pointer my-1",
          activeIndex !== 1 && "hover:border-white"
        )}
        to='pin2'
        smooth={true}
      >
        <div
          className={clsx(
            "w-[6px] rounded-full transiton-all duration-200",
            activeIndex === 2 ? "h-[24px] bg-[#FF6200]" : "h-[6px] bg-white"
          )}
        />
      </Link>
      <Link
        className={clsx(
          "flex items-center justify-center p-1 rounded-full border-[1px] border-transparent transition-all duration-200 cursor-pointer my-1",
          activeIndex !== 2 && "hover:border-white"
        )}
        to='pin3'
        smooth={true}
      >
        <div
          className={clsx(
            "w-[6px] rounded-full transiton-all duration-200",
            activeIndex === 3 ? "h-[24px] bg-[#26FF7B]" : "h-[6px] bg-white"
          )}
        />
      </Link>
      {/* <Link
        className={clsx(
          "flex items-center justify-center p-1 rounded-full border-[1px] border-transparent transition-all duration-200 cursor-pointer my-1",
          activeIndex !== 3 && "hover:border-white"
        )}
        to='pin1'
        smooth={true}
      >
        <div
          className={clsx(
            "w-[6px] rounded-full transiton-all duration-200",
            activeIndex === 4 ? "h-[24px] bg-[#4E69FE]" : "h-[6px] bg-white"
          )}
        />
      </Link> */}
      {/* <Link
        className={clsx(
          "flex items-center justify-center p-1 rounded-full border-[1px] border-transparent transition-all duration-200 cursor-pointer my-1",
          activeIndex !== 4 && "hover:border-white"
        )}
        to='pin4'
        smooth={true}
      >
        <div
          className={clsx(
            "w-[6px] rounded-full transiton-all duration-200",
            activeIndex === 5 ? "h-[24px] bg-[#4E69FE]" : "h-[6px] bg-white"
          )}
        />
      </Link> */}
      <Link
        className={clsx(
          "flex items-center justify-center p-1 rounded-full border-[1px] border-transparent transition-all duration-200 cursor-pointer my-1",
          activeIndex !== 3 && "hover:border-white"
        )}
        to='pin5'
        smooth={true}
      >
        <div
          className={clsx(
            "w-[6px] rounded-full transiton-all duration-200",
            activeIndex === 4 ? "h-[24px] bg-[#FAD246]" : "h-[6px] bg-white"
          )}
        />
      </Link>
    </div>
  );
};

export default Pagination;
