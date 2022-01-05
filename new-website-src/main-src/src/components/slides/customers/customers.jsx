import CustomersWeb from "./CustomersWeb";
import '../../../stylesheets/slides/customers.scss'
import {isMobile, isOpera, isSafari, isTablet} from "react-device-detect";
import React, {Component} from "react";
import CustomersMobile from "./customers-mobile";
import {flowerAnimation} from "../../../animations/kashf-image";
import {motion} from 'framer-motion';
import ReactTouchEvents from "react-touch-events";
import {findDOMNode} from "react-dom";
import {Fullpage} from 'fullpage-react';
const { changeFullpageSlide} = Fullpage;
const goToCustomers = changeFullpageSlide.bind(null, 5);

let isFooterOpen = false;

function shouldRender(scrollQuantity){
    return scrollQuantity === 5;
}

const scrollToFooter = () => {
    const height = window.innerHeight;
    const totalHeight = 5 * height + height;
    window.scrollTo({
        top: totalHeight,
        behavior: 'smooth',
    })
}

const handleSwipe = (direction) => {
    if (direction === "top") {
        isFooterOpen = true;
        scrollToFooter();
    } else if (direction === "bottom" && isFooterOpen) {
        isFooterOpen = false;
        setTimeout(() => {
            goToCustomers()
        },2000);
    }
}

const returnBasedOneDevice = (props) => {
    if(isTablet){
        return(
            <div id={'web-all'}>
                <CustomersWeb id={'web'} status={shouldRender(props.scrollQuantity)}/>
            </div>
        )
    } else if(isMobile){
        return(
            <motion.div
                variants={flowerAnimation}
                initial={"hidden"}
                animate={"visible"}
            >
                <CustomersMobile id={isSafari ? 'mobile-safari' : 'mobile'}/>
            </motion.div>
        )
    } else {
        return(
            <div id={'web-all'}>
                <CustomersWeb id={'web'} status={shouldRender(props.scrollQuantity)}/>
            </div>
        )
    }
};

class Customers extends Component {

    componentDidMount() {
        findDOMNode(this).addEventListener("wheel", (event) => {
            const delta = Math.sign(event.deltaY);
            if (delta === 1) {
                scrollToFooter();
                isFooterOpen = true;
            } else if (delta === -1 && isFooterOpen) {
                isFooterOpen = false;
                setTimeout(() => {
                    goToCustomers()
                },1000);
            }
        });
    }

    render() {
        return isSafari || isOpera ? (
            <article>
                <div id={'customers'}>
                    {returnBasedOneDevice(this.props)}
                </div>
            </article>
        ):(
            <ReactTouchEvents onSwipe={handleSwipe} swipeTolerance={80}>
                <article>
                    <div id={'customers'}>
                        {returnBasedOneDevice(this.props)}
                    </div>
                </article>
            </ReactTouchEvents>
        )
    }
}

export default Customers;
