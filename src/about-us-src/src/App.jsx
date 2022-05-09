import './App.scss';
import { Carousel } from 'react-responsive-carousel';
import pic1 from './assets/images/pic1.png';
import pic2 from './assets/images/pic2.png';
import pic3 from './assets/images/pic3.png';
import logo from './assets/images/logo.svg';

function App() {
  return (
    <div id={"about-us"}>
        <img src={logo} id={'logo'} alt={''}/>
        <div id={'texts'}>
            <p id={'description'}>
                به نام خداوند جان و خرد
                <br/>
                <br/>
                روﺷــﻦ از ﺳﺎل ۱۳۹۰ ﺑﺎ ﻫﻤﺖ ﺟﻤﻌﯽ از داﻧﺸﺠﻮﯾﺎن داﻧﺸﮕﺎه ﻋﻠﻢ و ﺻﻨﻌﺖ اﯾﺮان ﺷﺮوع ﺑﻪ ﮐﺎر ﻧﻤﻮده اﺳﺖ. اﯾﻦ ﮔﺮوه ﻫﺪف ﺧﻮد را ﺗﻠﺎش در راﺳﺘﺎی ﺗﺤﻘﻖ ﺗﻤﺪن ﻧﻮﯾﻦ اﺳﻠﺎﻣﯽ ﻣﯽ‌داﻧﺪ و در ﻗﺎﻟﺐ ﺷﺮﮐﺖ داﻧﺶ‌ﺑﻨﯿﺎن راﻫﮑﺎر ﭘﺮدازش ژرف ﺑﺮای ﭘﺎﺳﺦ ﺑﻪ ﻧﯿﺎزﻫﺎی ﮐﺸﻮر، ﻣﺤﺼﻮﻟﺎت ﻧﺮم‌اﻓﺰاری اراﺋﻪ می کند.
                <br/>
                <br/>
                محصولات روشن در زمینه ی هوش مصنوعی و یادگیری ماشین، شامل پردازش تصویر، صوت و متن می باشد و مشتریان آن در حوزه های گوناگون خصوصی، دولتی و با زمینه های کاری گوناگون می باشند.
            </p>
            <p id={'title'}>
                مجموعـه ای از استــــعدادهای جــوان و خــلاق
            </p>
        </div>
        <div>
            <Carousel
                id={'pics'}
                autoPlay={true}
                emulateTouch={true}
                infiniteLoop={true}
                width={'100%'}
            >
                <div>
                    <img src={pic1} alt={''}/>
                </div>
                <div>
                    <img src={pic2} alt={''}/>
                </div>
                <div>
                    <img src={pic3} alt={''}/>
                </div>
            </Carousel>
        </div>
    </div>
  );
}

export default App;
