import React, {lazy} from 'react';
import {Component} from 'react';
import './header.scss';
import Navbar from "./navigation-bar/navbar";
import {ReactComponent as HomeButton} from '../../assets/images/home-mobile.svg'
import JoinUsButton from "./navigation-bar/links-group/join-us-button/join-us-button";
import ContactUsButton from "./navigation-bar/links-group/contact-us-button/contact-us-button";
import mapImage from "../../assets/images/Map.svg";

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
                    <img src={mapImage} id={'map-image'} alt={''}/>
                    <a
                        id={'navigation-button'}
                        href={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.444780447029!2d51.40833849878181!3d35.712030047322486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0126f6c0ef45%3A0x216fffac2aafad45!2z2LHZiNi02YY!5e0!3m2!1sen!2s!4v1642061108262!5m2!1sen!2s"}>
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
