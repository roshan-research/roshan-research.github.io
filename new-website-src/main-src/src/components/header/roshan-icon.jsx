import '../../stylesheets/roshan-icon.scss'
import Logo from "../../assets/images/roshan-logosvg.svg";
import React from "react";

function RoshanIcon() {
    return (
        <div className='roshan-icon' title={'خانه'}>
            <a href={'https://www.roshan-ai.ir/'}>
                <img className={'icon'} src={Logo} alt={'روشن'}/>
            </a>
        </div>
    )
}

export default RoshanIcon;
