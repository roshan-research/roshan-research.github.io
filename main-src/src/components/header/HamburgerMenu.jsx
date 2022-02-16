import '../../stylesheets/hamburger.scss';
import { Cross as Hamburger } from 'hamburger-react';
import {useState} from "react";
import {Fullpage} from 'fullpage-react';
const { changeFullpageSlide} = Fullpage;

const goToClients = changeFullpageSlide.bind(null, 5);

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
                <div id={'hamburger-links'}>
                    <a href={'https://www.roshan-ai.ir/'}
                       className={'hamburger-menu-button'} style={{fontSize: '20px',marginLeft: '25px'}}>
                        روشن
                    </a>
                    <button onClick={goToClients}
                            className={'hamburger-menu-button'}
                            id={'clients-button'}
                            title={'بخش مشتریان ما'}
                    >
                        مشتریان ما
                    </button>
                    <a href={'https://www.roshan-ai.ir/contact-us'}
                       className={'hamburger-menu-button'}>
                        تماس با ما
                    </a>
                    <a href={'https://www.roshan-ai.ir/join-us'}
                       className={'hamburger-menu-button'}>
                        همکاری با ما
                    </a>
                </div>
                <div id={'hamburger-footer'}>
                    <a href={'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=salam@roshan-ai.ir'} target={"_blank"} rel="noreferrer">
                        <p id={'email'}>
                            salam@roshan-ai.ir
                        </p>
                    </a>
                    <p id={'company'}>
                        شرکت دانش بنیان «راهکار پردازش ژرف»
                    </p>
                </div>
            </div>
        </>
    )
}

export default HamburgerMenu;
