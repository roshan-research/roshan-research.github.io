import {Route, Switch} from 'react-router-dom';
import React, {Component, lazy, Suspense} from 'react';
import ProgressIndicator from "./components/progress-indicator";
import {Fullpage,Slide} from 'fullpage-react';
import './App.scss';
import {isMobile, isOpera, isSafari} from "react-device-detect";
import ReactTouchEvents from "react-touch-events";
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
        style: {
            height : '100vh',
            transition : '1.5s',
        },
        handleSwipe: () => {}
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
            document.addEventListener("keydown", this.toggleFooter);
            if(isSafari || isOpera){
                this.setState({
                    handleSwipe: (direction) => {
                        if (direction === "top") {
                            isFooterOpen = true;
                            this.setState({
                                style: {
                                    height: '140vh',
                                    transition: '1.5s',
                                }
                            })
                        } else if (direction === "bottom" && isFooterOpen) {
                            isFooterOpen = false;
                            this.setState({
                                style: {
                                    height: '100vh',
                                    transition: '1.5s',
                                }
                            })
                        }
                    }
                })
                document.addEventListener("wheel", (event) => {
                    const delta = Math.sign(event.deltaY);
                    if (delta === 1) {
                        this.setState({
                            style: {
                                height : '140vh',
                                transition : '1.5s',
                            }
                        })
                        isFooterOpen = true;
                    } else if (delta === -1 && isFooterOpen) {
                        isFooterOpen = false;
                        this.setState({
                            style: {
                                height : '100vh',
                                transition : '1.5s',
                            }
                        })
                    }
                });
            }
        } else {
            document.removeEventListener("keydown",this.toggleFooter);
            if(isSafari || isOpera){
                this.setState({
                    handleSwipe: () => {
                    },
                })
                document.removeEventListener("wheel", (event) => {
                    const delta = Math.sign(event.deltaY);
                    if (delta === 1) {
                        this.setState({
                            style: {
                                height : '140vh',
                                transition : '1.5s',
                            }
                        })
                        isFooterOpen = true;
                    } else if (delta === -1 && isFooterOpen) {
                        isFooterOpen = false;
                        this.setState({
                            style: {
                                height : '100vh',
                                transition : '1.5s',
                            }
                        })
                    }
                });
            }
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

        const generalStyle = isOpera || isSafari ? this.state.style : {};
        const shrink = () => {
            this.setState({
                style: {
                    height : '100vh',
                    transition : '1.5s',
                }
            })
        };

        return (
            <div id={'main'}>
                <Suspense fallback={<ProgressIndicator/>}>
                    <Switch>
                        <Route path={'/'} exact>
                            {isSafari || isOpera? (
                                <ReactTouchEvents onSwipe={this.state.handleSwipe} swipeTolerance={80}>
                                    <div style={generalStyle}>
                                        <Fullpage
                                            {...fullPageOptions}
                                            onSlideChangeStart={this.onSlideChangeStart}
                                        />
                                        <Footer beforehanadFunction={shrink}/>
                                    </div>
                                </ReactTouchEvents>
                            ) : (
                                <div style={generalStyle}>
                                    <Fullpage
                                        {...fullPageOptions}
                                        onSlideChangeStart={this.onSlideChangeStart}
                                    />
                                    <Footer beforehanadFunction={shrink}/>
                                </div>
                            )}

                        </Route>
                    </Switch>
                </Suspense>
            </div>
        )
    }
}

export default RoshanWebsite;
