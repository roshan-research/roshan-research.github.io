
import './roshan-icon.scss'
import {ReactComponent as Logo} from "../../../../../assets/images/roshan-logosvg.svg";
import React from "react";

function RoshanIcon() {
    return (
        <div className='roshan-icon' title={'خانه'}>
            <a href={'https://www.roshan-ai.ir/'}>
                <Logo className={'icon'}/>
            </a>
        </div>
    )
}

export default RoshanIcon;
