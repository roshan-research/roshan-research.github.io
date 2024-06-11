import { useRef, useState } from "react";
import ArticleApplication from "@/components/articles/article-application";
import ArticleCapabilities from "@/components/articles/article-capabilities";
import ArticleFacilities from "@/components/articles/article-facilities";
import ArticleMain from "@/components/articles/article-main";
import ArticleSample from "@/components/articles/article-samples";
import ArticleSummary from "@/components/articles/article-summary";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Menu from "@/components/menu";
import ContactUsModal from "@/components/modals/contact-us";

const Home = () => {
  const [openContactUsModal, setOpenContactUsModal] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuOpenRef = useRef<HTMLImageElement>(null);

  return (
    <div>
      {/* contact us modal */}
      <ContactUsModal
        openContactUsModal={openContactUsModal}
        setOpenContactUsModal={setOpenContactUsModal}
      />
      {/* menu left sidebar */}
      <Menu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        menuOpenRef={menuOpenRef}
      />
      <Header menuOpenRef={menuOpenRef} setIsMenuOpen={setIsMenuOpen} />
      <ArticleMain setOpenContactUsModal={setOpenContactUsModal} />
      <ArticleCapabilities />
      <ArticleApplication />
      <ArticleFacilities />
      <ArticleSample />
      <ArticleSummary setOpenContactUsModal={setOpenContactUsModal} />
      <Footer />
    </div>
  );
};

export default Home;
