import './App.scss';
import MainSection from "./components/MainSection";
import AbilitiesSection from "./components/AbilitiesSection";
import UsagesSection from "./components/UsagesSection";
import TechnicalUtils from "./components/TechnicalUtils";
import SampleSection from "./components/SampleSection.jsx";
import Footer from "./components/Footer";
import Catalog from "./components/Catalog";
import { slide as Menu } from 'react-burger-menu'
import closeIcon from './assets/images/close-icon.svg';
import burgerIcon from './assets/images/menu-icon.svg';
import MenuLinks from "./components/MenuLinks";

function App() {
  return (
      <div id={'all-other'}>
          <Menu
              menuClassName={ "menu" }
              itemListElement="div"
              burgerButtonClassName={ "my-button" }
              pageWrapId={ "alefba" }
              itemListClassName={ "menu-items" }
              crossButtonClassName={ "my-cross" }
              outerContainerId={ "all-other" }
              customBurgerIcon={
                  <img src={burgerIcon} alt={''}/>
              }
              customCrossIcon={
                  <div>
                      <img src={closeIcon} alt={''}/>
                  </div>
              }
          >
              <MenuLinks/>
          </Menu>
          <div className={'alefba'}>
              <MainSection/>
              <div id={'main-abilities-space'}/>
              <AbilitiesSection/>
              <div id={'abilities-usage-space'}/>
              <UsagesSection/>
              <div id={'usage-utils-space'}/>
              <TechnicalUtils/>
              <div id={'utils-sample-space'}/>
              <SampleSection/>
              <div id={'sample-footer-space'}/>
              <Catalog/>
              <div id={'catalog-footer-space'}/>
              <Footer/>
          </div>
      </div>
  );
}

export default App;
