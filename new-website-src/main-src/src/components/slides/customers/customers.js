import CustomersWeb from "../../jsx-svgs/web/customers";
import './customers.scss'
import {isMobile, isOpera, isSafari, isTablet} from "react-device-detect";
import React, {Component} from "react";
import CustomersMobile from "./customers-mobile";
import {flowerAnimation} from "../../../animations/kashf-image";
import {motion} from 'framer-motion';
import ReactTouchEvents from "react-touch-events";
import {findDOMNode} from "react-dom";
import {ReactComponent as BackToTop} from "../../../assets/images/back-to-top-web.svg";
import {ReactComponent as BackToTopHover} from "../../../assets/images/back-to-top-web-hover.svg";
import scrollToTop from "../scroll-to-top";

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
    switch (direction) {
        case "top": scrollToFooter(); break;
        case "bottom": console.log('bottom');
    }
}

const returnBasedOneDevice = (props) => {
    if(isTablet){
        return(
            <div id={'web-all'}>
                <CustomersWeb id={'web'} status={shouldRender(props.scrollQuantity)}/>
                <BackToTop/>
                <BackToTopHover/>
            </div>
        )
    } else if(isMobile){
        return(
            <motion.div
                variants={flowerAnimation}
                initial={"hidden"}
                animate={"visible"}
            >
                <CustomersMobile id={'mobile'}/>
            </motion.div>
        )
    } else {
        return(
            <div id={'web-all'}>
                <CustomersWeb id={'web'} status={shouldRender(props.scrollQuantity)}/>
                <button
                    id={'to-top-normal'}
                    onClick={scrollToTop}
                >
                    <div>
                        <BackToTop/>
                    </div>
                </button>
                <button
                    id={'to-top-hovered'}
                    onClick={scrollToTop}
                >
                    <div>
                        <BackToTopHover/>
                    </div>
                </button>
            </div>
        )
    }
};

class Customers extends Component {
    componentDidMount() {
        const height = window.innerHeight;
        findDOMNode(this).addEventListener("wheel", (event) => {
            const delta = Math.sign(event.deltaY);
            if (delta === 1) {
                scrollToFooter();
            } else if (delta === -1) {
                const totalHeight = 5 * height;
                window.scrollTo({
                    top: totalHeight,
                    behavior: 'smooth',
                })
            }
        });

    }

    render() {
        return isSafari || isOpera ? (
            <div>
                <div id={'customers'}>
                    {returnBasedOneDevice(this.props)}
                </div>
            </div>
        ):(
            <ReactTouchEvents onSwipe={handleSwipe}>
                <div>
                    <div id={'customers'}>
                        {returnBasedOneDevice(this.props)}
                    </div>
                </div>
            </ReactTouchEvents>
        )
    }
}

export default Customers;
