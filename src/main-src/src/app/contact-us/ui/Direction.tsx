"use client";

import { useState } from "react";
import clsx from "clsx";

import LeftArrow from "@/components/icons/LeftArrow";
import Link from "next/link";

const Direction = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <Link href='https://goo.gl/maps/ms3rUPvSMtsscEXr9'>
      <div
        className={clsx(
          "absolute left-[130px] cursor-pointer transition-all duration-200 bottom-[108px] gap-3 select-none border-[1px] border-[#F8BC45] rounded-[8px] w-[172px] h-10 flex items-center justify-center bp768:left-[30px] bp768:bottom-[40px]",
          hovered ? "bg-[#F8BC45]" : "bg-black"
        )}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        <LeftArrow width={16} height={12} color={hovered ? "black" : "white"} />
        <span
          className={clsx(
            "text-base font-light transition-all duration-200",
            hovered ? "text-black" : "text-white"
          )}
        >
          مسیریابی
        </span>
      </div>
    </Link>
  );
};

export default Direction;
