"use client";

import { useState } from "react";
import BackArrowIcon from "../icons/BackArrowIcon";
import Link from "next/link";

type RedirectButtonProps = {
  color: string;
  link: string;
};

const RedirectButton: React.FC<RedirectButtonProps> = ({ color, link }) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <Link href={link}>
      <button
        className='bg-transparent outline-none border-[1px] rounded-full w-[46px] h-[24px] flex items-center justify-center z-50 cursor-pointer mt-8'
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        style={{ borderColor: color, background: hovered ? color : "" }}
      >
        <BackArrowIcon
          width={16}
          height={12}
          color={hovered ? "#000000" : color}
          className='cursor-pointer'
        />
      </button>
    </Link>
  );
};

export default RedirectButton;
