import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import MenuIcon from "@/assets/images/menu.png";
import ArticleMain from "@/components/article-main/ArticleMain";
import ArticleFeatures from "./components/article-features/ArticleFeatures";
import KashfUsage from "./components/kashf-usage/KashfUsage";
import Facilities from "./components/facilities/Facilities";
import Conclusion from "./components/conclusion/Conclusion";
import Footer from "./components/footer/Footer";
import { main_animation } from "./components/animations/main";
import { Logo } from "./components/svg";
import Menu from "./components/menu/Menu";

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
      <div className='px-[128px] font-iranyekan lg:px-[40px]'>
        <motion.header
          variants={main_animation}
          initial='hidden'
          animate='visible'
          className='mt-[4vh] flex items-center justify-between'
        >
          <div className='flex items-center gap-[14px]'>
            <Logo width={43} height={44} />{" "}
            <span className='text-xl font-normal text-[#FAFAFA]'>کشف</span>
          </div>
          <motion.img
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setIsMenuOpen(true)}
            src={MenuIcon}
            alt=''
            className='w-[40px] cursor-pointer'
            ref={menuOpenRef}
          />
        </motion.header>
        <main>
          <Menu
            setIsMenuOpen={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
            menuOpenRef={menuOpenRef}
          />
          <ArticleMain windowWidth={windowWidth} />
          <ArticleFeatures windowWidth={windowWidth} />
          <KashfUsage windowWidth={windowWidth} />
          <Facilities windowWidth={windowWidth} />
          <Conclusion windowWidth={windowWidth} />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
