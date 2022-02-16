import '../../stylesheets/hamburger.scss';
import { Cross as Hamburger } from 'hamburger-react';
import {useState} from "react";

function HamburgerMenu() {
    const onHamburgerMenuToggle = () => {};
    const [isOpen, setOpen] = useState(false);
    let height = (window.innerWidth / 70);
    return (
        <>
            <div id={'hamburger-button'}>
                <Hamburger
                    toggled={isOpen}
                    color="white"
                    toggle={setOpen}
                    size={height}
                    onToggle={onHamburgerMenuToggle}
                    direction="right"
                    duration={0.6}
                />
            </div>
            <div id={'hamburger-menu'} className={isOpen ? 'opened' : 'closed'}>

            </div>
        </>
    )
}

export default HamburgerMenu;
