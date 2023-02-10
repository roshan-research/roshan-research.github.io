import './menu-links.scss';

const MenuLinks = () => {
    return (
        <div id={'menu-contents'}>
            <div id={'menu-links'}>
                <a href={'https://www.roshan-ai.ir/'} className={'menu-link'}>
                    صفحهٔ اصلی
                </a>
                <a
                    href={'https://www.roshan-ai.ir/about-us'}
                    className={'menu-link'}
                >
                    دربارهٔ ما
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
            <p id={'company-name'}>راهکار پردازش ژرف</p>
        </div>
    );
};

export default MenuLinks;
