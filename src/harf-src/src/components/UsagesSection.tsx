import '../stylesheets/usages-section.scss';
import BusinessImage from '../assets/images/usages/businesses.png';
import OrganizationsImage from '../assets/images/usages/organizations.png';
import LibrariesImage from '../assets/images/usages/libraries.png';
import Archive from '../assets/images/usages/archive.png';
import { useInView } from 'react-intersection-observer';
import {isMobile} from 'react-device-detect';

const UsagesSection = () => {

    const observerOptions = {
        delay: 1000
    };

    const beforeFade = isMobile? {opacity: 1}: {opacity: 0};

    const afterFade = {
        opacity: 1
    };

    const [businessesRef,businessesInView] = useInView(observerOptions);
    const [organizationsRef,organizationsInView] = useInView(observerOptions);
    const [librariesRef,librariesInView] = useInView(observerOptions);
    const [archiveRef,archiveInView] = useInView(observerOptions);

    return(
        <div>
            <p id={'usages-title'}>
                کاربردهای حرف
            </p>
            <div id={'space-4'}/>
            <div id={'usages-section'}>
                <div id={'space-1'}/>
                <div id={'in-businesses'} ref={businessesRef} style={businessesInView? afterFade : beforeFade}>
                    <img src={BusinessImage} id={'business-image'} alt={''}/>
                    <p className={'orange-text-usages'}>
                        تایپ گفتاری
                    </p>
                    <p className={'white-text-usages'}>
                        تایپ کردن متن با استفاده از دکمه‌های فراوان صفحه کلید، سخت است. در دنیای جدید با خواندن متن آن را دیجیتال می‌کنیم.
                    </p>
                </div>
                <div>
                    <div id={'space-2'}/>
                    <div id={'in-organizations'} ref={organizationsRef}  style={organizationsInView? afterFade : beforeFade}>
                        <img src={OrganizationsImage} id={'organization-image'} alt={''}/>
                        <p className={'orange-text-usages'}>
                            تعامل گفتاری
                        </p>
                        <p className={'white-text-usages'}>
                            ابزارهای هوشمند در شکل‌ها و اندازه‌های مختلف وارد زندگی ما می‌شوند. ارتباط کلامی با این ابزارها، راحت‌ترین راه تعامل است.
                        </p>
                    </div>
                </div>
                <div>
                    <div id={'space-3'}/>
                    <div id={'in-libraries'} ref={librariesRef}  style={librariesInView? afterFade : beforeFade}>
                        <img src={LibrariesImage} id={'library-image'} alt={''}/>
                        <p className={'orange-text-usages'}>
                            پیاده‌سازی جلسات
                        </p>
                        <p className={'white-text-usages'}>
                            صحبت‌هایی که در جلسه‌های حضوری یا مجازی، رد و بدل می‌شوند، مهم هستند و برای رجوع به آنها لازم است متن هر جلسه را داشته باشیم.
                        </p>
                    </div>
                </div>
                <div id={'space-5'}/>
                <div id={'in-archives'} ref={archiveRef} style={archiveInView? afterFade : beforeFade}>
                    <img src={Archive} id={'business-image'} alt={''}/>
                    <p className={'orange-text-usages'}>
                        جستجو در آرشیو
                    </p>
                    <p className={'white-text-usages'}>
                        داده‌های ویدئویی با سرعت بسیار بالا در حال زیاد شدن هستند. پیاده‌سازی متن ویدئوها می‌تواند پیدا کردن یک محتوای خاص را آسان کند.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UsagesSection;
