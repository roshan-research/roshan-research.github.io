import './App.scss';
import MainSection from "./components/MainSection";
import AbilitiesSection from "./components/AbilitiesSection";
import UsagesSection from "./components/UsagesSection";
import TechnicalUtils from "./components/TechnicalUtils";
import SampleSection from "./components/SampleSection";
import Footer from "./components/Footer";
import Catalog from "./components/Catalog";

function App() {
  return (
    <div className={'alefba'}>
        <MainSection/>
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
  );
}

export default App;
