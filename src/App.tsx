import Logo from '@/assets/images/logo.png';
import Menu from '@/assets/images/menu.png';
import ArticleMain from '@/components/article-main/ArticleMain';
import ArticleFeatures from './components/article-features/ArticleFeatures';

function App() {
  return (
    <div className="font-iranyekan px-[128px]">
      <header className="mt-[153px] flex items-center justify-between">
        <div className="flex gap-[14px] items-center">
          <img src={Logo} alt="" className="w-[43px]" />
          <span className="text-[#FAFAFA] text-xl font-normal">کشف</span>
        </div>
        <img src={Menu} alt="" className="w-[40px] cursor-pointer" />
      </header>
      <ArticleMain />
      <ArticleFeatures />
    </div>
  );
}

export default App;
