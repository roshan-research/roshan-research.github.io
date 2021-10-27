import {Route, Switch} from 'react-router-dom';
import React, {Component, lazy, Suspense} from 'react';
import ProgressIndicator from "./components/progress-indicator";
import {Fullpage,Slide} from 'react-fullpage-slide';
import './App.scss';
import {isOpera, isSafari} from "react-device-detect";
import Footer from "./components/slides/footer/footer";

const Header = lazy(() => import("./components/header/header"));
const Kashf = lazy(() => import("./components/slides/kashf/kashf"));
const Alefba = lazy(() => import("./components/slides/alefba/alefba"));
const Harf = lazy(() => import("./components/slides/harf/harf"));
const Hazm = lazy(() => import("./components/slides/hazm/hazm"));
const Customers = lazy(() => import("./components/slides/customers/customers"));

class RoshanWebsite extends Component {
    constructor(props) {
        super(props);
        this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
    }
    state = {
        fake:false,
        scrollsQuantity: 0,
    }

    scrollToFooter = () => {
        const height = window.innerHeight;
        const totalHeight = 5 * height + height;
        window.scrollTo({
            top: totalHeight,
            behavior: 'smooth',
        })
    }

    onSlideChangeStart = (name, props, state, newState) => {
        const shouldAdd = newState.activeSlide === 5;
        shouldAdd ? document.addEventListener("keydown", this.scrollToFooter) :
            document.removeEventListener("keydown", this.scrollToFooter)

        this.setState({
            fake: !this.state.fake,
            scrollsQuantity: this.state.scrollsQuantity + 1,
        });
    };
    render() {

        const fullPageOptions = {
            scrollSensitivity: 1,
            touchSensitivity: 0.5,
            scrollSpeed: 500,
            hideScrollBars: true,
            enableArrowKeys: true,
        };

        fullPageOptions.slides = isSafari || isOpera ?
        [
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
            <Slide>
                <div id={'fullpage-footer'}>
                    <Footer/>
                </div>
            </Slide>
        ]
        :[
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
            <div id={'main'}>
                <Suspense fallback={<ProgressIndicator/>}>
                    <Switch>
                        <Route path={'/'} exact>
                            <div id={isOpera || isSafari ? 'opera-safari': 'normal'}>
                                <div>
                                    <Fullpage
                                        {...fullPageOptions}
                                        onSlideChangeStart={this.onSlideChangeStart}
                                    />
                                    if(!isSafari && !isOpera){(
                                        <Footer/>
                                    )}
                                </div>
                            </div>
                        </Route>
                    </Switch>
                </Suspense>
            </div>
        )
    }
}

export default RoshanWebsite;
