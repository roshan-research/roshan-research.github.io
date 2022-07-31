import React from "react";
import WaveSurfer from "wavesurfer.js";
import {useEffect,useRef,useState} from "react";
import music from "./temp.mp3"
import "../../stylesheets/player.scss";
import {segments} from "./segments.js"

let currentText = "";
let tempCurrentTime;

const convertHHMMSStoSeconds = (hhmmss) => {
    let parsedHHMMSS = hhmmss.split(":");
    let seconds = (parsedHHMMSS[0] * 3600) + (parsedHHMMSS[1] * 60) + (parsedHHMMSS[2] * 1);
    return seconds;
};

const changeText = (currentTime) => {
    for (let i = 0; i < segments[0].length; i++) {
        let start = convertHHMMSStoSeconds(segments[0][i].start);
        let end = convertHHMMSStoSeconds(segments[0][i].end);
        if(currentTime >= start && currentTime <= end) {
            currentText = segments[0][i].text;
        }
    }
};

const Player = () => {
    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);
    const [isActive,setIsActive] = useState(false);
    const [progress,setProgress] = useState(0);

    useEffect(() => {
        console.log(segments)
        wavesurfer.current = WaveSurfer.create({
            container: waveformRef.current,
            barGap: 1,
            waveColor: ["#8f8f8f","#8f8f8f","#8f8f8f","#d7d7d7"],
            barHeight: 0.4,
            barRadius: 1,
            barWidth: 4,
            responsive: true,
            cursorColor: "transparent",
            progressColor: ["#24806f","#24806f","#34bda3","#3bee95"]
        });
        wavesurfer.current.load(music);
        wavesurfer.current.on('ready', () => {
            wavesurfer.current.play();
        });

        window.setInterval(() => {
            tempCurrentTime = wavesurfer.current.getCurrentTime();
            changeText(tempCurrentTime)
            setProgress(tempCurrentTime);
        },1000)
    },[])

    const buttonAction = () => {
        if (isActive) {
            wavesurfer.current.pause();
        } else {
            wavesurfer.current.play();
        }
        setIsActive(!isActive);
    };

    return (
        <div className={'sample-container'}>
            <div id={"harf-text-container"}>
                {currentText}
            </div>
            <div id={"player-container"}>
                <div className={`botón ${isActive? "active": ""}`} onClick={buttonAction}>
                    <div className="fondo" x="0" y="0" width="200" height="200"></div>
                    <div className="icono" width="200" height="200">
                        <div className="parte izquierda" x="0" y="0" width="200" height="200" fill="#fff"></div>
                        <div className="parte derecha" x="0" y="0" width="200" height="200" fill="#fff"></div>
                    </div>
                    <div className="puntero"></div>
                </div>
                <div id={"timer-progress"}>
                    <div id={"timer"}>
                        {new Date(progress * 1000).toISOString().slice(14, 19)}
                    </div>
                    <div ref={waveformRef} id={"player-bar"}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player;
