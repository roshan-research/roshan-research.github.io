import {Route, Switch} from 'react-router-dom';
import React, {Component, lazy, Suspense} from 'react';
import ProgressIndicator from "./components/progress-indicator";
import {Fullpage,Slide} from 'fullpage-react';
import './App.scss';
import {isOpera, isSafari} from "react-device-detect";
import Footer from "./components/slides/footer/footer";
const { changeFullpageSlide} = Fullpage;

const goToCustomers = changeFullpageSlide.bind(null, 5);

const Header = lazy(() => import("./components/header/header"));
const Kashf = lazy(() => import("./components/slides/kashf/kashf"));
const Alefba = lazy(() => import("./components/slides/alefba/alefba"));
const Harf = lazy(() => import("./components/slides/harf/harf"));
const Hazm = lazy(() => import("./components/slides/hazm/hazm"));
const Customers = lazy(() => import("./components/slides/customers/customers"));

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
    }

    toggleFooter(event){
        if(event.keyCode === 38 && isFooterOpen){
            isFooterOpen = false;
            setTimeout(() => {
                goToCustomers()
            },1000);
        } else if(event.keyCode === 40){
            scrollToFooter()
            isFooterOpen = true;
        }
    }

    onSlideChangeStart = (name,props,state,newState) => {
        const shouldAdd = newState.activeSlide === 5;
        if(shouldAdd) {
            document.addEventListener("keydown", this.toggleFooter)
        } else {
            document.removeEventListener("keydown",this.toggleFooter)
        }
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

        fullPageOptions.slides = isSafari || isOpera ? [
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
        ]:[
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
                                    {!isSafari && !isOpera ?(<Footer/>): (<div/>)}
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
