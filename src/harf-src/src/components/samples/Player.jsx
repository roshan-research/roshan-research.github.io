import React from "react";
import WaveSurfer from "wavesurfer.js";
import {useEffect,useRef} from "react";
import music from "../razor.mp3"

const Player = () => {

    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);

    useEffect(() => {

        wavesurfer.current = WaveSurfer.create({
            container: waveformRef.current,
        });

        wavesurfer.current.setWaveColor("white");
        wavesurfer.current.setCursorColor("white");
        wavesurfer.current.setProgressColor("white");
        wavesurfer.current.load(music);
        wavesurfer.current.on('ready', function () {
            wavesurfer.current.play();
        });
    },[])

    return (
        <div ref={waveformRef} style={{width: "50vw"}}>
        </div>
    )
}

export default Player;
