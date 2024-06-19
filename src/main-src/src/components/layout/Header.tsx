"use client";

import { useState } from "react";

import LogoIcon from "../icons/LogoIcon";
import MenuIcon from "../icons/MenuIcon";
import Menu from "./Menu";
import Link from "next/link";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className='absolute w-full top-10 px-[80px] h-fit z-10 bp768:px-[30px] bp768:top-[30px] bp768:pl-[20px]'>
      <div className='flex w-full items-center justify-between' dir='ltr'>
        <MenuIcon
          width={70}
          height={70}
          className='cursor-pointer'
          onClick={() => setOpenMenu(true)}
        />
        <Link href='/'>
          <LogoIcon width={88} height={31} />
        </Link>
      </div>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  );
};

export default Header;
