import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import MenuIcon from "./menu.png";
import ArticleMain from "@/components/article-main/ArticleMain";
import ArticleFeatures from "./components/article-features/ArticleFeatures";
import FahmUsage from "./components/fahm-usage/fahmUsage";
import Facilities from "./components/facilities/Facilities";
import Footer from "./components/footer/Footer";
import { main_animation } from "./components/animations/main";
// import { Logo } from "./components/svg";
import Menu from "./components/menu/Menu";
import HeaderLogo from "../src/components/icons/HeaderLogo"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuOpenRef = useRef<HTMLImageElement>(null);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("load", updateWindowWidth);
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("load", updateWindowWidth);
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return (
    <>
      <div className=' font-iranyekan px-8 sm:pr-12'>
        <motion.header
          variants={main_animation}
          initial='hidden'
          animate='visible'
          className='mt-[4vh] flex items-center justify-between'
        >
          <div className='flex sm:-mr-8 items-center gap-[14px]'>
            <HeaderLogo width={30} height={30} />
            <span className=' font-bold text-2xl text-[#FAFAFA]'>فهم</span>
          </div>
          <motion.img
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setIsMenuOpen(true)}
            src={MenuIcon}
            alt=''
            className='w-[40px] cursor-pointer sm:-ml-8'
            ref={menuOpenRef}
          />
        </motion.header>
        <main className="sm:text-center">
          <Menu
            setIsMenuOpen={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
            menuOpenRef={menuOpenRef}
          />
          <ArticleMain />
          <ArticleFeatures windowWidth={windowWidth} />
          <FahmUsage windowWidth={windowWidth} />
          <Facilities windowWidth={windowWidth} />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
