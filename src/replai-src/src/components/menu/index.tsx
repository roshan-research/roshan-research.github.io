import { Dispatch, FC, useEffect, useRef, RefObject } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import CloseIcon from "../icons/close-icon";

type MenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<boolean>;
  menuOpenRef: RefObject<HTMLImageElement>;
};

const Menu: FC<MenuProps> = ({ isMenuOpen, setIsMenuOpen, menuOpenRef }) => {
  const meneCloseRef = useRef<HTMLDivElement>(null);

  const closeMenuHandler = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const closeMenuDocument = (event: MouseEvent) => {
      if (
        meneCloseRef.current &&
        !meneCloseRef.current.contains(event.target as Node) &&
        !menuOpenRef.current?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document?.addEventListener("click", closeMenuDocument);
    return () => {
      document.removeEventListener("click", closeMenuDocument);
    };
  }, []);

  return (
    <div
      ref={meneCloseRef}
      className={clsx(
        "font-size-clamp fixed left-0 top-0 z-40 h-full w-[300px] bg-[#0a0a0a] px-10 py-8 font-light text-[#FAFAFA] transition-transform duration-500 ease-in-out",
        isMenuOpen ? "translate-x-[0]" : "-translate-x-[300px]",
      )}
    >
      <motion.div
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-fit cursor-pointer"
        onClick={closeMenuHandler}
      >
        <CloseIcon width={40} height={40} />
      </motion.div>
      <div className="mt-[80px] flex flex-col items-start gap-[50px] text-[22px] font-[600]">
        <a href="https://www.roshan-ai.ir">
          <span className="transition-colors duration-700 hover:text-[#4E69FE]">
            صفحهٔ اصلی
          </span>
        </a>
        <a href="https://www.roshan-ai.ir/about-us">
          <span className="transition-colors duration-700 hover:text-[#4E69FE]">
            دربارهٔ ما
          </span>
        </a>
        <a href="https://www.roshan-ai.ir/contact-us">
          <span className="transition-colors duration-700 hover:text-[#4E69FE]">
            تماس با ما
          </span>
        </a>
        <a href="https://www.roshan-ai.ir/join-us">
          <span className="transition-colors duration-700 hover:text-[#4E69FE]">
            همکاری با ما
          </span>
        </a>
        <span className="absolute bottom-4 right-10 text-[0.8vw]">
          راهکار پردازش ژرف
        </span>
      </div>
    </div>
  );
};

export default Menu;
