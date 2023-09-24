import { isMobile, isSafari, isTablet } from 'react-device-detect';
import FooterWeb from './FooterWeb';
import FooterMobile from './footer-mobile';
import { Fullpage } from 'fullpage-react';
const { changeFullpageSlide } = Fullpage;

const goToTop = changeFullpageSlide.bind(null, 0);

const returnBasedOneDevice = () => {
    if (isMobile || isTablet) {
        return (
            <div id={'footer-mobile'}>
                <a
                    role="button"
                    style={{ color: 'transparent' }}
                    href={'#!'}
                    onClick={goToTop}
                >
                    <div id={'to-top-mobile'}>&uarr;</div>
                </a>
                <div
                    style={{
                        height: '3vh',
                    }}
                />
                <FooterMobile />
            </div>
        );
    } else {
        return (
            <div>
                <FooterWeb />
            </div>
        );
    }
};

export default function Footer() {
    return <footer>{returnBasedOneDevice()}</footer>;
}
