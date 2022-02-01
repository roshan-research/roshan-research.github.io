import '../../stylesheets/roshan-icon.scss'
import Logo from "../../assets/images/روشن.svg";
import React from "react";

function RoshanLogo() {
    return (
        <div className='roshan-icon' title={'خانه'} style={{marginTop: '4px'}}>
            <a href={'https://www.roshan-ai.ir/'}>
                <img className={'icon'} src={Logo} alt={'روشن'}/>
            </a>
        </div>
    )
}

export default RoshanLogo;
