import DoubleTextGroup from "./links-group/links-group";
import IconTextGroup from "./roshan-icon-group/roshan-icon-group";
import './navbar.scss'
import React from 'react';
import MenuButtons from "./menu-buttons/menu-buttons";
import {isMobile} from "react-device-detect";

function Navbar(props) {
    return (
        <div>
            <div className='navbar'>
                <DoubleTextGroup />
                <IconTextGroup/>
                <MenuButtons toggle={props.toggle} isOpen={props.isOpen}/>
            </div>
        </div>
    )
}

export default Navbar;
