import Lottie from "lottie-react";
import progressIndicator from "../assets/lotties/progress-indicator.json";
import './progress-indicator.css'

function ProgressIndicator(){
    return(
        <div className={'wrapper'}>
            <div id={'progress-indicator'}>
                <Lottie animationData={progressIndicator}/>
            </div>
        </div>
    )
}

export default ProgressIndicator;
