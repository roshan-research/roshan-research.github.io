import '../stylesheets/usages-section.scss';
import BusinessImage from '../assets/images/usages/businesses.png';
import OrganizationsImage from '../assets/images/usages/organizations.png';
import LibrariesImage from '../assets/images/usages/libraries.png';
import Archive from '../assets/images/usages/archive.png';
import { useInView } from 'react-intersection-observer';
import { isMobile } from 'react-device-detect';

const UsagesSection = () => {
    const observerOptions = {
        delay: 1000,
        triggerOnce: true,
    };

    const beforeFade = isMobile ? { opacity: 1 } : { opacity: 0 };

    const afterFade = {
        opacity: 1,
    };

    const [businessesRef, businessesInView] = useInView(observerOptions);
    const [organizationsRef, organizationsInView] = useInView(observerOptions);
    const [librariesRef, librariesInView] = useInView(observerOptions);
    const [archiveRef, archiveInView] = useInView(observerOptions);

    return (
        <div>
            <p id={'usages-title'}>گوشه‌ای از کاربردهای حرف</p>
            <div id={'usages-section'}>
                <div id={'space-1'} />
                <div
                    id={'in-businesses'}
                    ref={businessesRef}
                    style={businessesInView ? afterFade : beforeFade}
                >
                    <img src={BusinessImage} id={'business-image'} alt={''} />
                    <p className={'orange-text-usages'}>تایپ گفتاری</p>
                    <p className={'white-text-usages'}>
                        تایپ، کاری خسته‌کننده است. با تبدیل گفتار به نوشتار،
                        نوشته‌ها با همان سرعتی که بر زبان جاری می‌شوند نوشته
                        می‌شوند.
                    </p>
                </div>
                <div>
                    <div id={'space-2'} />
                    <div
                        id={'in-organizations'}
                        ref={organizationsRef}
                        style={organizationsInView ? afterFade : beforeFade}
                    >
                        <img
                            src={OrganizationsImage}
                            id={'organization-image'}
                            alt={''}
                        />
                        <p className={'orange-text-usages'}>تعامل گفتاری</p>
                        <p className={'white-text-usages'}>
                            ابزارهای هوشمند جزو لاینفک زندگی امروز هستند؛ پس چه
                            بهتر که با ابزار کلام با آن‌ها تعامل کنیم.
                        </p>
                    </div>
                </div>
                <div>
                    <div id={'space-3'} />
                    <div
                        id={'in-libraries'}
                        ref={librariesRef}
                        style={librariesInView ? afterFade : beforeFade}
                    >
                        <img
                            src={LibrariesImage}
                            id={'library-image'}
                            alt={''}
                        />
                        <p className={'orange-text-usages'}>تهیهٔ متن جلسات</p>
                        <p className={'white-text-usages'}>
                            با داشتن متن صحبت‌های ردوبدل شده در جلسات می‌توان
                            به‌آسانی موضوعی را در آرشیو جستجو و به آن رجوع کرد.
                        </p>
                    </div>
                </div>
                <div id={'space-5'} />
                <div
                    id={'in-archives'}
                    ref={archiveRef}
                    style={archiveInView ? afterFade : beforeFade}
                >
                    <img src={Archive} id={'business-image'} alt={''} />
                    <p className={'orange-text-usages'}>جستجو در آرشیو</p>
                    <p className={'white-text-usages'}>
                        با استخراج متن فایل‌های صوتی و ویدیویی می‌توان به‌آسانی
                        آن قسمتی از صدا یا ویدیو را که دربارهٔ موضوعی مشخص صحبت
                        می‌کند یافت.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UsagesSection;
