"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import LogoIcon from "../icons/LogoIcon";
import MenuIcon from "../icons/MenuIcon";
import Menu from "./Menu";
import Link from "next/link";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const body = document.body;
    const scrollWrap = document.getElementsByClassName(
      "smooth-scroll-wraper-2"
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

    if (pathname !== "/join-us" && pathname !== "/contact-us") {
      smoothScroll();
    }
  }, [pathname]);

  return (
    <>
      <div className='smooth-scroll-wraper-2 fixed left-0 w-full px-[80px] top-10 h-fit z-10 bp768:px-[30px] bp768:top-[30px] bp768:pl-[20px]'>
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
      </div>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
};

export default Header;
