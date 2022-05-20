import './clients.scss';

import filimo from '../assets/images/clients/filimo.svg';
import aparat from '../assets/images/clients/aparat.svg';
import naft from '../assets/images/clients/naft.svg';
import mokhaberat from '../assets/images/clients/mokhaberat.svg';
import ketabkhone from '../assets/images/clients/ketabkhone.svg';

import tamasha from '../assets/images/clients/tamasha.svg';
import jahad from '../assets/images/clients/jahad.svg';
import varzesh3 from '../assets/images/clients/varzesh3.svg';

import farabi from '../assets/images/clients/farabi.svg';
import parsian from '../assets/images/clients/parsian.svg';
import astan from '../assets/images/clients/astan.svg';

const Clients = () => {
    return(
        <div id={'clients'}>
            <p id={'clients-motto'}>
                کسب اعتماد بهتــــــرین ها
            </p>
            <div id={'clients-pics'}>
                <div id={'clients-row1'}>
                    <img className={'client-pic'} src={filimo} alt={''}/>
                    <img className={'client-pic'} src={aparat} alt={''}/>
                    <img className={'client-pic'} src={naft} alt={''}/>
                    <img className={'client-pic'} src={mokhaberat} alt={''}/>
                    <img className={'client-pic'} src={ketabkhone} alt={''}/>
                </div>
                <div id={'united-columns'}>
                    <div id={'clients-row2'}>
                        <img className={'client-pic'} src={tamasha} alt={''}/>
                        <img className={'client-pic'} src={varzesh3} alt={''}/>
                        <img className={'client-pic'} src={jahad} alt={''}/>
                    </div>
                    <div id={'clients-row3'}>
                        <img className={'client-pic'} src={farabi} alt={''}/>
                        <img className={'client-pic'} src={parsian} alt={''}/>
                        <img className={'client-pic'} src={astan} alt={''}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients;
