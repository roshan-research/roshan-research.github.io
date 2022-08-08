import downloadIcon from '../assets/images/samples/download-icon.svg';
import '../stylesheets/catalog.scss';
import catalogCover from '../assets/images/catalog-cover.svg';
import {useState} from "react";
import blackDLicon from '../assets/images/samples/black_dl_icon.svg';

const Catalog = () => {

    const[isHovered,setIsHovered] = useState(false);

    return (
        <div id={'catalog'}>
            <div id={'catalog-right'}>
                <p id={'catalog-description'}>
                    برای آشنایی بیشتر با امکانات حرف،
                    <br/>
                    کاتالوگ حرف را دریافت فرمایید
                </p>
                <a
                    href={'https://www.roshan-ai.ir/harf-catalog.pdf/'}
                    className={'catalog-link'}
                    target={"_blank"}
                    rel="noreferrer"
                >
                    <div id={'catalog-button'}
                         onMouseEnter={() => setIsHovered(true)}
                         onMouseLeave={() => setIsHovered(false)}
                    >
                        <img src={isHovered? blackDLicon : downloadIcon} alt={''}/>
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
