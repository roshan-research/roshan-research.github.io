import CustomersWeb from "../../jsx-svgs/web/customers";
import './customers.scss'
import {isMobile, isOpera, isSafari} from "react-device-detect";
import React, {Component} from "react";
import {findDOMNode} from "react-dom";
import CustomersMobile from "./customers-mobile";
import {flowerAnimation} from "../../../animations/kashf-image";
import {motion} from 'framer-motion';
import ReactTouchEvents from "react-touch-events";
import Footer from "../footer/footer";

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
    if(isMobile){
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
                <Footer/>
            </div>
        )
    }
};

class Customers extends Component {

    componentDidMount() {
        const height = window.innerHeight;
        findDOMNode(this).addEventListener("wheel", (event) => {
            const delta = Math.sign(event.deltaY);
            console.log(delta);
            if (delta === 1) {
                const totalHeight = 5 * height + height;
                window.scrollTo({
                    top: totalHeight,
                    behavior: 'smooth',
                })
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
