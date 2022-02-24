import React, {Component, lazy, Suspense} from 'react';
import {Fullpage,Slide} from 'fullpage-react';
import './App.scss';
import {isOpera, isSafari} from "react-device-detect";
import ReactTouchEvents from "react-touch-events";
import {loadingAnimation} from "./animations/main-page";
import {motion} from 'framer-motion'
import ProgressIndicator from "./components/ProgressIndicator";

const Footer = lazy(() => import('./components/slides/footer/footer'));
const Header = lazy(() => import('./components/header/Header'));
const Kashf = lazy(() => import('./components/slides/kashf/Kashf'));
const Alefba = lazy(() => import('./components/slides/alefba/Alefba'));
const Harf = lazy(() => import('./components/slides/harf/Harf'));
const Hazm = lazy(() => import('./components/slides/hazm/hazm'));
const Customers = lazy(() => import('./components/slides/clients/Clients'));

const { changeFullpageSlide} = Fullpage;
const goToCustomers = changeFullpageSlide.bind(null, 5);

let isFooterOpen = false;

const scrollToFooter = () => {
    const height = window.innerHeight;
    const totalHeight = 5 * height + height;
    window.scrollTo({
        top: totalHeight,
        behavior: 'smooth',
    })
}

class RoshanWebsite extends Component {
    constructor(props) {
        super(props);
        this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
    }
    state = {
        fake:false,
        scrollsQuantity: 0,
        id: 'hide',
        handleSwipe: () => {}
    }

    toggleFooter(event){
        if(event.keyCode === 38 && isFooterOpen){
            isFooterOpen = false;
            setTimeout(() => {
                goToCustomers();
            },1000);
        } else if(event.keyCode === 40){
            scrollToFooter();
            isFooterOpen = true;
        }
    }

    onSlideChangeStart = (name,props,state,newState) => {
        const shouldAdd = newState.activeSlide === 5;
        if(shouldAdd) {
            document.addEventListener("keydown", this.toggleFooter);
        } else {
            document.removeEventListener("keydown",this.toggleFooter);
        }
        this.setState({
            fake: !this.state.fake,
            scrollsQuantity: this.state.scrollsQuantity + 1,
        });
    };

    componentDidMount() {
        this.setState({
            id: 'show'
        })
    }

    shouldHaveFooter(shouldHave) {
        if (shouldHave) {
            return(
                <Footer/>
            )
        } else {
            return(
                <>
                </>
            )
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
                <Header type={'main'} key={this.state.fake} scrollQuantity={this.state.scrollsQuantity}/>
            </Slide>,
            <Slide>
                <Kashf key={this.state.fake} scrollQuantity={this.state.scrollsQuantity}/>
            </Slide>,
            <Slide>
                <Alefba key={this.state.fake} scrollQuantity={this.state.scrollsQuantity}/>
            </Slide>,
            <Slide>
                <Harf key={this.state.fake} scrollQuantity={this.state.scrollsQuantity}/>
            </Slide>,
            <Slide>
                <Hazm key={this.state.fake} scrollQuantity={this.state.scrollsQuantity}/>
            </Slide>,
            <Slide>
                <Customers key={this.state.fake} scrollQuantity={this.state.scrollsQuantity}/>
            </Slide>,
        ];

        return (
            <Suspense fallback={<ProgressIndicator/>}>
                <motion.div
                    id={'main'}
                    style={!isSafari && !isOpera ? {} : {height: '100vh'}}
                    initial={loadingAnimation.initial}
                    animate={loadingAnimation.animate}
                    transition={loadingAnimation.transition}
                    className={this.state.id}
                >
                    <div>
                        <Fullpage
                            {...fullPageOptions}
                            onSlideChangeStart={this.onSlideChangeStart}
                        />
                        {this.shouldHaveFooter(!isSafari && !isOpera)}
                    </div>
                </motion.div>
            </Suspense>
        )
    }
}

export default RoshanWebsite;
