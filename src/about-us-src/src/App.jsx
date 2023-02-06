import './App.scss';
import pic3 from './assets/images/pic1.jpg';
import pic2 from './assets/images/pic2.jpg';
import pic1 from './assets/images/pic3.jpg';
import logo from './assets/images/logo.svg';
import Footer from './components/Footer';
import { slide as Menu } from 'react-burger-menu';
import closeIcon from './assets/images/close-icon.svg';
import burgerIcon from './assets/images/menu-icon.svg';
import MenuLinks from './components/MenuLinks';
import { useState } from 'react';
import Clients from './components/Clients';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div id={'all-container'}>
            <Menu
                menuClassName={'menu'}
                itemListElement="div"
                burgerButtonClassName={'my-button'}
                pageWrapId={'about-us'}
                itemListClassName={'menu-items'}
                crossButtonClassName={'my-cross'}
                outerContainerId={'all-container'}
                customBurgerIcon={<img src={burgerIcon} alt={''} />}
                customCrossIcon={
                    <div>
                        <img src={closeIcon} alt={''} />
                    </div>
                }
            >
                <MenuLinks />
            </Menu>
            <img
                src={mobileMenuOpen ? closeIcon : burgerIcon}
                alt={''}
                id={'mobile-menu-button'}
                onClick={() => {
                    setMobileMenuOpen(!mobileMenuOpen);
                }}
            />
            <div
                id={'mobile-menu'}
                style={mobileMenuOpen ? {} : { display: 'none' }}
            >
                <div id={'menu-links'}>
                    <a
                        href={'https://www.roshan-ai.ir/'}
                        className={'menu-link'}
                    >
                        روشن
                    </a>
                    <a
                        href={'https://www.roshan-ai.ir/about-us'}
                        className={'menu-link'}
                    >
                        دربارهٔ روشن
                    </a>
                    <a
                        href={'https://www.roshan-ai.ir/contact-us'}
                        className={'menu-link'}
                    >
                        تماس با ما
                    </a>
                    <a
                        href={'https://www.roshan-ai.ir/join-us'}
                        className={'menu-link'}
                    >
                        همکاری با ما
                    </a>
                </div>
            </div>
            <div id={'about-us'} style={{ zIndex: '10000' }}>
                <a href={'https://www.roshan-ai.ir/'}>
                    <img src={logo} id={'logo'} alt={''} />
                </a>
                <div id={'texts'}>
                    <p id={'description'}>
                        شرکت دانش‌بنیان «راهکار پردازش ژرف» در سال ۱۳۹۵ با تمرکز
                        بر موضوع هوش مصنوعی و با همت گروهی از پژوهشگران و
                        متخصصان جوان، فعالیت خود را آغاز کرد. این شرکت در
                        سال‌های بعد با نام تجاری «روشن» دایرهٔ فعالیت‌های خود را
                        گسترش داد و توانست اعتماد بسیاری از کسب‌وکارها و
                        سازمان‌ها را به دست آورد. باعث افتخار است که مجموعه‌هایی
                        نام‌آور و خوش‌نام، محصولات این شرکت را انتخاب کرده‌اند و
                        امید است با روی آوردن هرچه بیشتر کسب‌وکارها به فناوری
                        هوش مصنوعی، دامنهٔ خدمت‌رسانی «روشن» بیش از پیش گسترش
                        یابد.
                    </p>
                    <p id={'title'}>جمعی از استــــعدادهای جــوان و خــلاق</p>
                </div>
                <div style={{ marginTop: '5vw' }}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation={true}
                        pagination={{ clickable: true }}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <img className="swiper-img" src={pic3} alt={''} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="swiper-img" src={pic2} alt={''} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="swiper-img" src={pic1} alt={''} />
                        </SwiperSlide>
                    </Swiper>
                    <Clients />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;
