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
                <Helmet>
                    <meta
                        name="description"
                        content="روشن، ارايه کننده فناوری های مبتنی بر هوش مصنوعی به منظور پردازش تصویر و متن، تشخیص محتوا، ocr فارسی، یادگیری عمیق و … می باشد"
                    />
                    <meta
                        name="keywords"
                        content={`${keywords.header[0]}, ${keywords.header[1]}, ${keywords.header[2]}, ${keywords.header[3]}, ${keywords.header[4]}`}
                    />
                </Helmet>
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
