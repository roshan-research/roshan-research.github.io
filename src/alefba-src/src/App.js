import './App.scss';
import MainSection from "./components/MainSection";
import AbilitiesSection from "./components/AbilitiesSection";
import UsagesSection from "./components/UsagesSection";
import TechnicalUtils from "./components/TechnicalUtils";
import SampleSection from "./components/SampleSection";
import Footer from "./components/Footer";

function App() {
  return (
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
        <Footer/>
    </div>
  );
}

export default App;