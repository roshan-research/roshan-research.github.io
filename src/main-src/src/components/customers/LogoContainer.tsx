"use client";

import React, { JSXElementConstructor, ReactElement, useState } from "react";

type LogoContainerProps = {
  cu: {
    icon: ReactElement<
      { color: string; colors: string[] },
      string | JSXElementConstructor<any>
    >;
    color: string;
    colors: string[];
  };
};

const LogoContainer: React.FC<LogoContainerProps> = ({ cu }) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      className='w-[240px] h-[240px] border-[1px] border-[#303030] flex items-center justify-center bp700:w-[140px] bp700:h-[140px]'
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <div className='w-fit h-fit bp700:scale-50'>
        {React.cloneElement(cu.icon, {
          color: hovered ? cu.color : "#ffffff",
          colors: hovered
            ? cu.colors
            : [
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
              ],
        })}
      </div>
    </div>
  );
};

export default LogoContainer;
