import './App.scss';
import { Carousel } from 'react-responsive-carousel';
import pic1 from './assets/images/pic1.svg';
import pic2 from './assets/images/pic2.svg';
import pic3 from './assets/images/pic3.svg';
import logo from './assets/images/logo.svg';
import Footer from "./components/Footer";
import { slide as Menu } from 'react-burger-menu'
import closeIcon from './assets/images/close-icon.svg';
import burgerIcon from './assets/images/menu-icon.svg';
import MenuLinks from "./components/MenuLinks";

function App() {

  return (
      <div id={'all-container'}>
          <Menu
              menuClassName={ "menu" }
              burgerButtonClassName={ "my-button" }
              pageWrapId={ "about-us" }
              itemListClassName={ "menu-items" }
              crossButtonClassName={ "my-cross" }
              outerContainerId={ "all-container" }
              customBurgerIcon={
                  <img src={burgerIcon} alt={''}/>
              }
              customCrossIcon={
                 <img src={closeIcon} alt={''}/>
              }
          >
              <MenuLinks/>
          </Menu>
          <div id={"about-us"} style={{zIndex: '10000'}}>
              <img src={logo} id={'logo'} alt={''}/>
              <div id={'texts'}>
                  <p id={'description'}>
                      به نام خداوند جان و خرد
                      <br/>
                      <br/>
                      روﺷــﻦ از ﺳﺎل ۱۳۹۰ ﺑﺎ ﻫﻤﺖ ﺟﻤﻌﯽ از داﻧﺸﺠﻮﯾﺎن داﻧﺸﮕﺎه ﻋﻠﻢ و ﺻﻨﻌﺖ اﯾﺮان ﺷﺮوع ﺑﻪ ﮐﺎر ﻧﻤﻮده اﺳﺖ. اﯾﻦ ﮔﺮوه ﻫﺪف ﺧﻮد را ﺗﻠﺎش در راﺳﺘﺎی ﺗﺤﻘﻖ ﺗﻤﺪن ﻧﻮﯾﻦ اﺳﻠﺎﻣﯽ ﻣﯽ‌داﻧﺪ و در ﻗﺎﻟﺐ ﺷﺮﮐﺖ داﻧﺶ‌ﺑﻨﯿﺎن راﻫﮑﺎر ﭘﺮدازش ژرف ﺑﺮای ﭘﺎﺳﺦ ﺑﻪ ﻧﯿﺎزﻫﺎی ﮐﺸﻮر، ﻣﺤﺼﻮﻟﺎت ﻧﺮم‌اﻓﺰاری اراﺋﻪ می کند.
                      <br/>
                      <br/>
                      محصولات روشن در زمینه ی هوش مصنوعی و یادگیری ماشین، شامل پردازش تصویر، صوت و متن می باشد و مشتریان آن در حوزه های گوناگون خصوصی، دولتی و با زمینه های کاری گوناگون می باشند.
                  </p>
                  <p id={'title'}>
                      مجموعـه ای از استــــعدادهای جــوان و خــلاق
                  </p>
              </div>
              <div>
                  <Carousel
                      id={'pics'}
                      autoPlay={true}
                      emulateTouch={true}
                      infiniteLoop={true}
                      width={'100%'}
                      showArrows={false}
                      showIndicators={false}
                      showStatus={false}
                  >
                      <div>
                          <img src={pic1} alt={''}/>
                      </div>
                      <div>
                          <img src={pic2} alt={''}/>
                      </div>
                      <div>
                          <img src={pic3} alt={''}/>
                      </div>
                  </Carousel>
                  <Footer/>
              </div>
          </div>
      </div>
  );
}

export default App;
