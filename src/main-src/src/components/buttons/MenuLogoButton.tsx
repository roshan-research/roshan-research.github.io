"use client";

import Link from "next/link";
import React, { JSXElementConstructor, ReactElement, useState } from "react";

type MenuLogoButtonProps = {
  logo: {
    icon: ReactElement<
      { color: string; colors: string[] },
      string | JSXElementConstructor<any>
    >;
    color: string;
    colors: string[];
    text: string;
    href: string;
  };
};

const MenuLogoButton: React.FC<MenuLogoButtonProps> = ({ logo }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <Link href={logo.href}>
      <div
        className='w-fit h-fit flex flex-col items-center justify-center gap-4 select-none cursor-pointer bp768:w-[100px] bp768:h-[100px] bp768:gap-0'
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        <div className='w-fit h-fit bp768:scale-50'>
          {React.cloneElement(logo.icon, {
            color: hovered ? logo.color : "#ffffff",
            colors: hovered ? logo.colors : ["#fff", "#fff", "#fff", "#fff"],
          })}
        </div>
        <span className='text-[32px] font-bold text-white bp768:text-[20px] bp480:-mt-10'>
          {logo.text}
        </span>
      </div>
    </Link>
  );
};

export default MenuLogoButton;
