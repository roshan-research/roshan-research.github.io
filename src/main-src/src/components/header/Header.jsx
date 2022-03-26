import React from 'react';
import {Component} from 'react';
import '../../stylesheets/header.scss'
import '../../stylesheets/header-button.scss'
import Navbar from "./Navbar.jsx";
import MainPage from "./MainPage";
import JoinUsButton from "./JoinUsButton";
import ContactUsButton from "./ContactUsButton";
import HamburgerMenu from "./HamburgerMenu";

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
                    <div>
                        <a href={'https://www.roshan-ai.ir/'} className={'header-button'}>
                            صفحه اصلی
                        </a>
                    </div>
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
                <HamburgerMenu isInitiallyOpen={true}/>
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
