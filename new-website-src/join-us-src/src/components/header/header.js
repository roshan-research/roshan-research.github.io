import React, {lazy} from 'react';
import {Component} from 'react';
import './header.scss'
import Navbar from "./navigation-bar/navbar";
import {ReactComponent as HomeButton} from '../../assets/images/home-mobile.svg'
import JoinUsButton from "./navigation-bar/links-group/join-us-button/join-us-button";
import ContactUsButton from "./navigation-bar/links-group/contact-us-button/contact-us-button";

const JoinusPage = lazy(() => import("./join-us-page/joinus-page"));

class Header extends Component {
    state = {
        isOpen:false,
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
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
                <JoinusPage scrollQuantity={this.props.scrollQuantity}/>
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

export default Header;
