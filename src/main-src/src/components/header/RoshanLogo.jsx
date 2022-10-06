import '../../stylesheets/roshan-icon.scss'
import Logo from "../../assets/images/روشن.svg";
import React from "react";

function RoshanLogo() {
    return (
        <div className='roshan-icon' title={'صفحهٔ اصلی'} style={{marginTop: '0.3vw'}}>
            <a href={'https://www.roshan-ai.ir/'}>
                <img className={'icon'} src={Logo} alt={'روشن | شرکت دانش‌بنیان راهکار پردازش ژرف '}/>
            </a>
        </div>
    )
}

export default RoshanLogo;
