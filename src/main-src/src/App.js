import React, { Component, lazy, Suspense } from 'react';
import { Fullpage, Slide } from 'fullpage-react';
import './App.scss';
import { isOpera, isSafari } from 'react-device-detect';
import { loadingAnimation } from './animations/main-page';
import { slide as Menu } from 'react-burger-menu';
import { motion } from 'framer-motion';
import ProgressIndicator from './components/ProgressIndicator';
import MenuLinks from './components/MenuLinks';
import burgerIcon from './assets/images/menu-icon.svg';
import closeIcon from './assets/images/close-icon.svg';
import ToTopButton from './components/slides/footer/ToTopButton';

const Footer = lazy(() => import('./components/slides/footer/footer'));
const Header = lazy(() => import('./components/header/Header'));
const Kashf = lazy(() => import('./components/slides/kashf/Kashf'));
const Alefba = lazy(() => import('./components/slides/alefba/Alefba'));
const Harf = lazy(() => import('./components/slides/harf/Harf'));
const Hazm = lazy(() => import('./components/slides/hazm/hazm'));
const Customers = lazy(() => import('./components/slides/clients/Clients'));

const { changeFullpageSlide } = Fullpage;
const goToCustomers = changeFullpageSlide.bind(null, 5);

let isFooterOpen = false;

const scrollToFooter = () => {
    const height = window.innerHeight;
    const totalHeight = 5 * height + height;
    window.scrollTo({
        top: totalHeight,
        behavior: 'smooth',
    });
};

class RoshanWebsite extends Component {
    constructor(props) {
        super(props);
        this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
    }
    state = {
        fake: false,
        scrollsQuantity: 0,
        showToTopButton: false,
        showFooter: false,
        id: 'hide',
        handleSwipe: () => {},
        isMenuOpen : false
    };

    handleMenuState(){
        this.setState({isMenuOpen:!this.state.isMenuOpen})
    }

    toggleFooter(event) {
        if (event.keyCode === 38 && isFooterOpen) {
            isFooterOpen = false;
            setTimeout(() => {
                goToCustomers();
            }, 1000);
        } else if (event.keyCode === 40) {
            scrollToFooter();
            isFooterOpen = true;
        }
    }

    onSlideChangeStart = (name, props, state, newState) => {
        const shouldAdd = newState.activeSlide === 5;
        // if (shouldAdd) {
        //     document.addEventListener('keydown', this.toggleFooter);
        // } else {
        //     document.removeEventListener('keydown', this.toggleFooter);
        // }
        this.setState({
            fake: !this.state.fake,
            scrollsQuantity: this.state.scrollsQuantity + 1,
            showToTopButton: newState.activeSlide !== 0,
            showFooter: shouldAdd,
        });
    };

    componentDidMount() {
        this.setState({
            id: 'show',
        });
    }

    shouldHaveFooter(shouldHave) {
        if (shouldHave) {
            return <Footer />;
        } else {
            return <></>;
        }
    }

    render() {
        const fullPageOptions = {
            scrollSensitivity: 1,
            touchSensitivity: 0.5,
            scrollSpeed: 500,
            hideScrollBars: true,
            enableArrowKeys: true,
        };

        fullPageOptions.slides = [
            <Slide>
                <Header
                    type={'main'}
                    key={this.state.fake}
                    scrollQuantity={this.state.scrollsQuantity}
                />
            </Slide>,
            <Slide>
                <Kashf
                    key={this.state.fake}
                    scrollQuantity={this.state.scrollsQuantity}
                />
            </Slide>,
            <Slide>
                <Alefba
                    key={this.state.fake}
                    scrollQuantity={this.state.scrollsQuantity}
                />
            </Slide>,
            <Slide>
                <Harf
                    key={this.state.fake}
                    scrollQuantity={this.state.scrollsQuantity}
                />
            </Slide>,
            <Slide>
                <Hazm
                    key={this.state.fake}
                    scrollQuantity={this.state.scrollsQuantity}
                />
            </Slide>,
            <Slide>
                <Customers
                    key={this.state.fake}
                    scrollQuantity={this.state.scrollsQuantity}
                />
            </Slide>,
            <Slide style={{height:window.innerHeight/4+50}}>
                <Footer/>
            </Slide>
        ];

        return (
            <Suspense fallback={<ProgressIndicator />}>
                <motion.div
                    id={'main'}
                    className={`${this.state.id} ${
                        isSafari || isOpera
                            ? this.state.showFooter
                                ? 'with-footer'
                                : 'without-footer'
                            : ''
                    }`}
                    initial={loadingAnimation.initial}
                    animate={loadingAnimation.animate}
                    transition={loadingAnimation.transition}
                >
                    <div id={'all-page'}>
                        <button className='menu-btn-new' onClick={()=>this.handleMenuState()}>
                        {
                            this.state.isMenuOpen ?
                            <img src={closeIcon} alt={''} /> :
                            <img src={burgerIcon} alt={''} />
                        }
                        </button>
                        <Menu
                            onClose={()=>this.handleMenuState()}
                            isOpen = {this.state.isMenuOpen}
                            menuClassName={'menu'}
                            itemListElement="div"
                            burgerButtonClassName={'my-button'}
                            pageWrapId={'all-page'}
                            itemListClassName={'menu-items'}
                            crossButtonClassName={'my-cross'}
                            outerContainerId={'main'}
                            // customBurgerIcon={<img src={burgerIcon} alt={''} />}
                            // customCrossIcon={
                            //     <div>
                            //         <img src={closeIcon} alt={''} />
                            //     </div>
                            // }
                            customBurgerIcon = {false}
                            customCrossIcon = {false}
                        >
                            <MenuLinks />
                        </Menu>
                        {this.state.showToTopButton && <ToTopButton />}
                        <Fullpage
                            {...fullPageOptions}
                            onSlideChangeStart={this.onSlideChangeStart}
                        />
                        {/* {this.shouldHaveFooter(this.state.showFooter)} */}
                    </div>
                </motion.div>
            </Suspense>
        );
    }
}

export default RoshanWebsite;

