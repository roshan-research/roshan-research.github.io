import Pattern from "../assets/images/main/main-pattern.png";
import Papers from "../assets/images/main/papers.png";
import IconTitle from "./IconTitle";
import '../stylesheets/main-section.scss';
import { Cross as Hamburger } from 'hamburger-react'
import {useState} from "react";

const MainSection = () => {

    const onHamburgerMenuToggle = () => {

    };

    const [isOpen, setOpen] = useState(false);

    let height = (window.innerWidth / 20);

    const displayNoneStyle = {
        opacity: 0,
        pointerEvents: 'none'
    }

    const displayBlockStyle = {
        opacity: 1,
        pointerEvents: 'auto'
    }

    return(
        <div id={'main-wrapper'}>
            <div id={'hamburger-icon-group'}>
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
                <IconTitle/>
            </div>
            <div id={'menu-screen'} style={isOpen ? displayBlockStyle : displayNoneStyle}>
                <div id={'mobile-links-wrapper'}>
                    <a href='https://www.roshan-ai.ir/'>
                        <p className={'mobile-menu-link'}>
                            روشن
                        </p>
                    </a>
                    <a href='https://www.roshan-ai.ir/contact-us/'>
                        <p className={'mobile-menu-link'}>
                            تماس با ما
                        </p>
                    </a>
                    <a href='https://www.roshan-ai.ir/join-us/'>
                        <p className={'mobile-menu-link'}>
                            همکاری با ما
                        </p>
                    </a>
                    <a href='https://www.roshan-ai.ir/about-us/'>
                        <p className={'mobile-menu-link'}>
                            درباره ما
                        </p>
                    </a>
                </div>
            </div>
            <div
                id={'main-screen'}
                style={isOpen ? displayNoneStyle : displayBlockStyle}
            >
                <p id={'orange-text'}>
                    حرف ، تبدیل گفتار به نوشتار
                </p>
                <p id={'white-text'}>
                    حرف با استفاده از هوش مصنوعی، گفتار را به نوشته قابل ویرایش تبدیل می کند.
                </p>
                <div id={'papers'}>
                    <img src={Papers} id={'paper-image'} alt={''}/>
                </div>
                {/*<img src={Pattern} id={'pattern'} alt={''}/>*/}
            </div>
        </div>
    )
}

export default MainSection;
