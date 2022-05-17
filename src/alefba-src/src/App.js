import './App.scss';
import MainSection from "./components/MainSection";
import AbilitiesSection from "./components/AbilitiesSection";
import UsagesSection from "./components/UsagesSection";
import TechnicalUtils from "./components/TechnicalUtils";
import SampleSection from "./components/SampleSection";
import Footer from "./components/Footer";
import {WaveformVisualizer, WaveformVisualizerTheme} from 'react-audio-visualizers';

function App() {
  return (
    <div className={'alefba'}>
          <div style={{width: '100vw',height: '100vh'}}>
                <WaveformVisualizer
                    audio="https://www.mboxdrive.com/val1.mp3"
                    theme={WaveformVisualizerTheme.squaredBars}
                    colors={['#009688', '#26a69a']}
                    iconsColor="#26a69a"
                    backgroundColor="black"
                    showMainActionIcon
                    showLoaderIcon
                    highFrequency={8000}
                />
          </div>
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
