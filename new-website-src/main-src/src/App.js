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

    state = {
        fake:false,
        scrollsQuantity: 0,
    }

    render() {

        const fullPageOptions = {
            scrollSensitivity: 1,
            touchSensitivity: 0.5,
            scrollSpeed: 500,
            hideScrollBars: true,
            enableArrowKeys: false,
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
            </Slide>
        ];


        const onSlideChangeStart = () => {
            this.setState({
                fake: !this.state.fake,
                scrollsQuantity: this.state.scrollsQuantity + 1,
            });
        };

        const browserChooser = (fullPageOptions,onSlideChangeStart) => {
            if(isOpera || isSafari) {
                return(
                    <div id={'temporary-safari'}>
                        <Header type={'main'} key={this.state.fake} scrollQuantity={this.state.scrollsQuantity}/>
                        <Kashf key={this.state.fake} scrollQuantity={this.state.scrollsQuantity}/>
                        <Alefba key={this.state.fake} scrollQuantity={this.state.scrollsQuantity}/>
                        <Harf key={this.state.fake} scrollQuantity={this.state.scrollsQuantity}/>
                        <Hazm key={this.state.fake} scrollQuantity={this.state.scrollsQuantity}/>
                        <div style={{height:'10vh',}}/>
                        <Customers key={this.state.fake} scrollQuantity={this.state.scrollsQuantity}/>
                        <div style={{height:'10vh',}}/>
                        <Footer/>
                    </div>
                )
            } else {
                return(
                    <div>
                        <Fullpage
                            {...fullPageOptions}
                            onSlideChangeStart={onSlideChangeStart}/>
                        <Footer/>
                    </div>
                )
            }
        };

        return (
            <div>
                <Suspense fallback={<ProgressIndicator/>}>
                    <Switch>
                        <Route path={'/'} exact>
                            {browserChooser(fullPageOptions,onSlideChangeStart)}
                        </Route>
                        <Route path={'/contact-us'}>
                            <Header type={'contact-us'}/>
                        </Route>
                        <Route path={'/join-us'}>
                            <Header type={'join-us'}/>
                        </Route>
                    </Switch>
                </Suspense>
            </div>
        )
    }
}

export default RoshanWebsite;
