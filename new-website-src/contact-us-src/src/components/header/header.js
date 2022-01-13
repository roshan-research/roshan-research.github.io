import React, {lazy} from 'react';
import {Component} from 'react';
import './header.scss';
import Navbar from "./navigation-bar/navbar";
import {ReactComponent as HomeButton} from '../../assets/images/home-mobile.svg'
import JoinUsButton from "./navigation-bar/links-group/join-us-button/join-us-button";
import ContactUsButton from "./navigation-bar/links-group/contact-us-button/contact-us-button";

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
                    <a href={'https://www.roshan-ai.ir/'}>
                        <HomeButton id={'home'}/>
                    </a>
                    <ContactUsButton />
                    <JoinUsButton />
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
                <div className="header-wrapper">
                    <Navbar
                        toggle={this.toggle}
                        isOpen={this.state.isOpen}
                    />
                    {this.reactToToggles()}
                </div>
            </div>
        )
    }
}
