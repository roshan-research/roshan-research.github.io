import React from "react";
import WaveSurfer from "wavesurfer.js";
import {useEffect,useRef,useState} from "react";
import music from "./air.mp3"
import "../../stylesheets/player.scss";

const Player = () => {
    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);
    const [isActive,setIsActive] = useState(false);
    const [progress,setProgress] = useState(0);

    useEffect(() => {
        wavesurfer.current = WaveSurfer.create({
            container: waveformRef.current,
            barGap: 1,
            waveColor: ["#8f8f8f","#8f8f8f","#8f8f8f","#d7d7d7"],
            barHeight: 0.7,
            barRadius: 1,
            barWidth: 4,
            cursorColor: "transparent",
            progressColor: ["#24806f","#24806f","#34bda3","#3bee95"]
        });
        wavesurfer.current.load(music);
        wavesurfer.current.on('ready', () => {
            wavesurfer.current.play();
        });

        window.setInterval(() => {
            setProgress(wavesurfer.current.getCurrentTime())
        },1000)
    },[])

    const buttonAction = () => {
        if (isActive) {
            wavesurfer.current.pause();
        } else {
            wavesurfer.current.play();
        }
        console.log(wavesurfer.current.getCurrentTime());
        setIsActive(!isActive);
    };

    return (
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
                <div ref={waveformRef} style={{width: "33vw"}}>
                </div>
            </div>
        </div>
    )
}

export default Player;
