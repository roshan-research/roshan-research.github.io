import '../../stylesheets/hamburger.scss';
import { Squeeze as Hamburger } from 'hamburger-react';
import {useState} from "react";
import {motion} from "framer-motion";
import {Fullpage} from 'fullpage-react';
import {flowerAnimation} from "../../animations/kashf-image";
const { changeFullpageSlide} = Fullpage;

const goToClients = changeFullpageSlide.bind(null, 5);

function HamburgerMenuSlides(props) {

    let initialState = window.sessionStorage.getItem('isOpen') === 'true';

    const [isOpen, setOpen] = useState(initialState);

    const onHamburgerMenuToggle = () => {
        window.sessionStorage.setItem('isOpen',!isOpen);
    };

    let height = (window.innerWidth / 70);
    return (
        <>
            <motion.div
                id={'hamburger-button-slides'}
                variants={flowerAnimation}
                initial={"hidden"}
                animate={"visible"}
            >
                <Hamburger
                    toggled={isOpen}
                    color="white"
                    toggle={setOpen}
                    size={height}
                    onToggle={onHamburgerMenuToggle}
                    direction="right"
                    duration={0.6}
                />
            </motion.div>
            <div id={'hamburger-menu-slides'} className={isOpen ? 'opened-slides' : 'closed-slides'}>
                <div id={'hamburger-links'}>
                    <a href={'https://www.roshan-ai.ir/'}
                       className={initialState? 'hamburger-menu-button roshan-in': 'hamburger-menu-button'}
                       style={{fontSize: '1.3vw',marginLeft: '25px'}}
                    >
                        روشن
                    </a>
                    <button onClick={goToClients}
                            className={initialState? 'hamburger-menu-button roshan-in': 'hamburger-menu-button'}
                            id={'clients-button'}
                            title={'بخش مشتریان ما'}
                    >
                        مشتریان
                    </button>
                    <a href={'https://www.roshan-ai.ir/contact-us'}
                       className={initialState? 'hamburger-menu-button roshan-in': 'hamburger-menu-button'}
                    >
                        تماس با ما
                    </a>
                    <a href={'https://www.roshan-ai.ir/join-us'}
                       className={initialState? 'hamburger-menu-button roshan-in': 'hamburger-menu-button'}
                    >
                        همکاری با ما
                    </a>
                    <a href={'https://www.roshan-ai.ir/about-us'}
                       className={initialState? 'hamburger-menu-button about-in': 'hamburger-menu-button'}
                    >
                        درباره با ما
                    </a>
                </div>
                <div id={'hamburger-footer'}>
                    <p
                        id={'company'}
                        style={{fontSize: '0.8vw'}}
                        className={initialState? 'comp-temp visible-company' : 'comp-temp hidden-company'}
                    >
                        شرکت دانش بنیان «راهکار پردازش ژرف»
                    </p>
                </div>
            </div>
        </>
    )
}

export default HamburgerMenuSlides;
