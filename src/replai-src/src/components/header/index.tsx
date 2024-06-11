import { Dispatch, RefObject } from "react";
import { motion } from "framer-motion";
import { main_animation } from "@/animations";
import MenuIcon from "../icons/menu-icon";
import Logo from "@/assets/images/header/logo.png";

type HeaderProps = {
  menuOpenRef: RefObject<HTMLImageElement>;
  setIsMenuOpen: Dispatch<boolean>;
};

const Header: React.FC<HeaderProps> = ({ menuOpenRef, setIsMenuOpen }) => {
  return (
    <motion.div
      className="bp1024:px-[30px] flex items-center justify-between pl-[180px] pr-[150px] pt-[50px]"
      variants={main_animation}
      initial="hidden"
      animate="visible"
    >
      <img
        src={Logo}
        alt="replay-logo"
        width={100}
        height={30}
        draggable={false}
      />
      <div
        className="cursor-pointer"
        onClick={() => setIsMenuOpen(true)}
        ref={menuOpenRef}
      >
        <MenuIcon width={60} height={60} />
      </div>
    </motion.div>
  );
};

export default Header;
