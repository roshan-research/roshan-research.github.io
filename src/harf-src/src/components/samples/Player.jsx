import React from "react";
import WaveSurfer from "wavesurfer.js";
import {useEffect,useRef,useState} from "react";
import "../../stylesheets/player.scss";
import { isMobile } from "react-device-detect";

let tempCurrentTime;

const Player = ({music,segments,title}) => {
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
            waveColor: ["#AAAAAA","#AAAAAA","#AAAAAA","#E6E6E6","#E6E6E6"],
            barHeight: isMobile? 0.8 : 2,
            barRadius: 1,
            barWidth: 2,
            responsive: true,
            cursorColor: "transparent",
            progressColor: ["#00DA55","#00DA55","#00DA55","#C0EED2","#C0EED2"]
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
            <div id={"player-container"}>
                <div className={`botón ${isActive? "active": ""}`} onClick={buttonAction}>
                    <div className="fondo" x="0" y="0" width="200" height="200"></div>
                    <div className="icono" width="200" height="200">
                        <div className="parte izquierda" x="0" y="0" width="200" height="200" fill="#fff"></div>
                        <div className="parte derecha" x="0" y="0" width="200" height="200" fill="#fff"></div>
                    </div>
                    <div className="puntero"></div>
                </div>
                <p id={"audio-title"}>
                    {title}
                </p>
            </div>
            <div id={"harf-text-container"} dangerouslySetInnerHTML={{__html: 
                `<div style="display:table-cell;vertical-align:middle;">${currentText}</div>`}}
            >
            </div>
            <div id={"timer-progress"}>
                <div className={"timer"} id={"time-elapsed"}>
                    {new Date(progress * 1000).toISOString().slice(14, 19)}
                </div>
                <div className={"timer"} id={"time-left"}>
                    {new Date((60 - progress) * 1000).toISOString().slice(14, 19)}
                </div>
                <div ref={waveformRef} id={"player-bar"}>
                </div>
            </div>
        </div>
    )
}

export default Player;