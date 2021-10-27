import Lottie from "lottie-react";
import progressIndicator from "../assets/lotties/progress-indicator.json";
import './progress-indicator.css'
import Div100vh from 'react-div-100vh'

function ProgressIndicator(){
    return(
        <Div100vh>
            <div className={'wrapper'}>
                <Lottie animationData={progressIndicator} id={'progress-indicator'}/>
            </div>
        </Div100vh>
    )
}

export default ProgressIndicator;