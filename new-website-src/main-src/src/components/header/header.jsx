import React from 'react';
import {Component} from 'react';
import '../../stylesheets/header.scss'
import Navbar from "./navbar.jsx";
import MainPage from "./main-page";
import {ReactComponent as HomeButton} from '../../assets/images/home-mobile.svg'
import JoinUsButton from "./join-us-button";
import ContactUsButton from "./contact-us-button";
import {Helmet} from "react-helmet";
import keywords from "../../keywords";

class Header extends Component {
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
            return (
                <MainPage
                    scrollQuantity={this.props.scrollQuantity}
                    shouldRerender={this.state.timesRendered === 0}
                />
            );
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

export default Header;
