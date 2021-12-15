import Lottie from "lottie-react";
import progressIndicator from "../assets/lotties/progress-indicator.json";
import './progress-indicator.css'
import {isMobile} from "react-device-detect";

function ProgressIndicator(){
    return(
        <div className={'wrapper'}>
            <div id={isMobile ? 'progress-indicator' : ''}>
                <Lottie id={isMobile ? '' : 'progress-indicator'} animationData={progressIndicator}/>
            </div>
        </div>
    )
}

export default ProgressIndicator;
