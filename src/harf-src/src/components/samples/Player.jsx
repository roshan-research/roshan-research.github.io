import React from "react";
import WaveSurfer from "wavesurfer.js";
import {useEffect,useRef,useState} from "react";
import "../../stylesheets/player.scss";

let tempCurrentTime;

const Player = ({music,segments}) => {
    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);
    const [isActive,setIsActive] = useState(false);
    const [progress,setProgress] = useState(0);
    const [currentText,setCurrentText] = useState("");

    const convertHHMMSStoSeconds = (hhmmss) => {
        let parsedHHMMSS = hhmmss.split(":");
        let seconds = (parsedHHMMSS[0] * 3600) + (parsedHHMMSS[1] * 60) + (parsedHHMMSS[2] * 1);
        return seconds;
    };

    const changeText = (currentTime) => {
        for (let i = 0; i < segments.length; i++) {
            let start = convertHHMMSStoSeconds(segments[i].start);
            let end = convertHHMMSStoSeconds(segments[i].end);
            if(currentTime >= start && currentTime <= end) {
                setCurrentText(segments[i].text);
            }
        }
    };

    useEffect(() => {
        setIsActive(false);
        wavesurfer.current = WaveSurfer.create({
            container: waveformRef.current,
            barGap: 1,
            waveColor: ["#8f8f8f","#8f8f8f","#8f8f8f","#d7d7d7"],
            barHeight: 1,
            barRadius: 1,
            barWidth: 4,
            responsive: true,
            cursorColor: "transparent",
            progressColor: ["#24806f","#24806f","#34bda3","#3bee95"]
        });
        wavesurfer.current.load(music);

        window.setInterval(() => {
            tempCurrentTime = wavesurfer.current.getCurrentTime();
            changeText(tempCurrentTime)
            setProgress(tempCurrentTime);
        },1000);
        return () => {
            wavesurfer.current.empty();
        };

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
