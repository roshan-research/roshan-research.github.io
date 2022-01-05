import React from 'react';
import '../../stylesheets/menu-buttons.scss';
import MenuIcon from '../../assets/images/menu-icon.svg';
import CloseIcon from '../../assets/images/close-icon.svg';

function MenuButtons(props) {
    return (
        <div className='menu-buttons'>
            <button onClick={props.toggle}>
                <img className='icon' id={props.isOpen ? 'hidden' : ''} src={MenuIcon} alt={'منو روشن'}/>
                <img className='icon' id={props.isOpen ? '' : 'hidden'} src={CloseIcon} alt={'منو روشن'}/>
            </button>
        </div>
    )
}

export default MenuButtons;
