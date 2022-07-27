import React from "react";
import WaveSurfer from "wavesurfer.js";
import {useEffect,useRef,useState} from "react";
import music from "./air.mp3"
import "../../stylesheets/player.scss";

const Player = () => {
    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);
    const [isActive,setIsActive] = useState(false);

    useEffect(() => {
        wavesurfer.current = WaveSurfer.create({
            container: waveformRef.current,
            barGap: 1,
            waveColor: "gray",
            barHeight: 0.5,
            barRadius: 1,
            barWidth: 5,
            cursorColor: "transparent",
            progressColor: "#26FF7B"
        });
        wavesurfer.current.load(music);
        wavesurfer.current.on('ready', () => {
            wavesurfer.current.play();
        });
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
        <div id={"player-container"}>
            <div className={`botón ${isActive? "active": ""}`} onClick={buttonAction}>
                <div className="fondo" x="0" y="0" width="200" height="200"></div>
                <div className="icono" width="200" height="200">
                    <div className="parte izquierda" x="0" y="0" width="200" height="200" fill="#fff"></div>
                    <div className="parte derecha" x="0" y="0" width="200" height="200" fill="#fff"></div>
                </div>
                <div className="puntero"></div>
            </div>
            <div ref={waveformRef} style={{width: "33vw"}}>
            </div>
        </div>
    )
}

export default Player;
