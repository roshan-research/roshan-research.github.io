import React, {lazy} from 'react';
import {Component} from 'react';
import './header.scss';
import Navbar from "./navigation-bar/navbar";
import {ReactComponent as HomeButton} from '../../assets/images/home-mobile.svg'
import JoinUsButton from "./navigation-bar/links-group/join-us-button/join-us-button";
import ContactUsButton from "./navigation-bar/links-group/contact-us-button/contact-us-button";
import mapImage from "../../assets/images/Map.svg";
import { slide as Menu } from 'react-burger-menu';
import isMobile from 'react-device-detect'
import closeIcon from '../../assets/images/close-icon.svg';
import burgerIcon from '../../assets/images/menu-icon.svg';
import MenuLinks from "../MenuLinks";

const ContactUsPage = lazy(() => import("./contact-us-page/ContactusPage"));

export default class Header extends Component {
    state = {
        isOpen:false,
        timesRendered: 0,
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
            timesRendered: this.state.timesRendered + 1
        })
    };

    reactToToggles = () => {
        if (this.state.isOpen) {
            return (
                <div id={'compact-menu'}>
                    <a href={'https://www.roshan-ai.ir/'} id={'mobile-menu-link'}>
                        روشن
                    </a>
                    <a href={'https://www.roshan-ai.ir/about-us'} id={'mobile-menu-link'}>
                        درباره ما
                    </a>
                    <a href={'https://www.roshan-ai.ir/about-us'} id={'mobile-menu-link'}>
                        تماس با ما
                    </a>
                    <a href={'https://www.roshan-ai.ir/about-us'} id={'mobile-menu-link'}>
                        همکاری با ما
                    </a>
                </div>
            )
        } else {
            return(
                <ContactUsPage shouldRerender={this.state.timesRendered === 0}/>
            )
        }
    }

    render() {
        return(
            <div id={'all'}>
                <Menu
                    menuClassName={ "menu" }
                    itemListElement="div"
                    burgerButtonClassName={ "my-button" }
                    pageWrapId={ "header-wrapper" }
                    itemListClassName={ "menu-items" }
                    crossButtonClassName={ "my-cross" }
                    outerContainerId={ "all" }
                    customBurgerIcon={
                        <img src={burgerIcon} alt={''}/>
                    }
                    customCrossIcon={
                        <div>
                            <img src={closeIcon} alt={''}/>
                        </div>
                    }
                >
                    <MenuLinks/>
                </Menu>
                <div className="header-wrapper" id={'header-wrapper'}>
                    <Navbar
                        toggle={this.toggle}
                        isOpen={this.state.isOpen}
                    />
                    <img src={mapImage} className={this.state.isOpen ? 'hidden-image': ''} id={'map-image'} alt={''}/>
                    <a
                        id={'navigation-button'}
                        href={isMobile? "geo:35.7113,51.4105;u=35" : "https://goo.gl/maps/ms3rUPvSMtsscEXr9"}
                    >
                        مسیریابی
                        &nbsp;
                        &#10095;
                    </a>
                    {this.reactToToggles()}
                </div>
            </div>
        )
    }
}
