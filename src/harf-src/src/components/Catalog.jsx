import downloadIcon from '../assets/images/samples/download-icon.svg';
import '../stylesheets/catalog.scss';
import catalogCover from '../assets/images/catalog-cover.svg';

const Catalog = () => {
    return (
        <div id={'catalog'}>
            <div id={'catalog-right'}>
                <p id={'catalog-description'}>
                    برای آشنایی بیشتر با امکانات حرف،
                    <br/>
                    کاتالوگ حرف را دریافت فرمایید
                </p>
                <a
                    href={'https://www.roshan-ai.ir/catalog.pdf/'}
                    className={'catalog-link'}
                    target={"_blank"}
                    rel="noreferrer"
                >
                    <div id={'catalog-button'}>
                        <img src={downloadIcon} alt={''}/>
                        <p>
                            کاتالوگ حرف
                        </p>
                    </div>
                </a>
            </div>
            <div>
                <img src={catalogCover} id={'catalog-cover'} alt={''}/>
            </div>
        </div>
    )
};

export default Catalog;
