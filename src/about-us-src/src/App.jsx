import './App.scss';
import { Carousel } from 'react-responsive-carousel';
import pic1 from './assets/images/pic1.svg';
import pic2 from './assets/images/pic2.svg';
import pic3 from './assets/images/pic3.svg';
import logo from './assets/images/logo.svg';
import { Squeeze as Hamburger } from 'hamburger-react';
import Footer from "./components/Footer";
import { slide as Menu } from 'react-burger-menu'
import {useState} from "react";
import {isMobile} from "react-device-detect";

function App() {

    const [isOpen, setOpen] = useState(true);

    let height = (window.innerWidth / (isMobile? 15: 70));

  return (
      <div id={'all-container'}>
          <Menu
              menuClassName={ "menu" }
              burgerButtonClassName={ "my-button" }
              pageWrapId={ "about-us" }
              itemListClassName={ "items" }
              outerContainerId={ "all-container" }
              onStateChange={() => {
                  setOpen(!isOpen)
              }}
              customBurgerIcon={
                  <Hamburger
                  toggled={isOpen}
                  color="white"
                  toggle={setOpen}
                  size={height}
                  direction="right"
                  duration={0.6}/>
              }
          >
              <a href={'https://www.roshan-ai.ir/'}
                 className={'hamburger-menu-button'}
              >
                  روشن
              </a>
              <a href={'https://www.roshan-ai.ir/contact-us'}
                 className={'hamburger-menu-button'}
              >
                  تماس با ما
              </a>
              <a href={'https://www.roshan-ai.ir/join-us'}
                 className={'hamburger-menu-button'}
              >
                  همکاری با ما
              </a>
              <a href={'https://www.roshan-ai.ir/about-us'}
                 className={'hamburger-menu-button'}
              >
                  درباره با ما
              </a>
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
