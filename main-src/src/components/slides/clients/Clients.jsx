import ClientsDesktop from "./ClientsDesktop";
import '../../../stylesheets/slides/clients/clients.scss'
import React, {Component} from "react";
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

class Clients extends Component {

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
        return <ReactTouchEvents onSwipe={handleSwipe} swipeTolerance={80}>
            <article>
                <div id={'customers'}>
                    <div id={'web-all'}>
                        <ClientsDesktop id={'web'} status={shouldRender(this.props.scrollQuantity)}/>
                    </div>
                </div>
            </article>
        </ReactTouchEvents>
    }
}

export default Clients;
