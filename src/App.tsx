import Logo from "@/assets/images/logo.png";
import Menu from "@/assets/images/menu.png";
import ArticleMain from "@/components/article-main/ArticleMain";
import ArticleFeatures from "./components/article-features/ArticleFeatures";
import KashfUsage from "./components/kashf-usage/KashfUsage";
import Facilities from "./components/facilities/Facilities";
import Conclusion from "./components/conclusion/Conclusion";

function App() {
  return (
    <div className='px-[128px] font-iranyekan'>
      <header className='mt-[153px] flex items-center justify-between'>
        <div className='flex items-center gap-[14px]'>
          <img src={Logo} alt='' className='w-[43px]' />
          <span className='text-xl font-normal text-[#FAFAFA]'>کشف</span>
        </div>
        <img src={Menu} alt='' className='w-[40px] cursor-pointer' />
      </header>
      <ArticleMain />
      <ArticleFeatures />
      <KashfUsage />
      <Facilities />
      <Conclusion />
    </div>
  );
}

export default App;
