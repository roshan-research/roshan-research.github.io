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
    return (
        <div id={'clients'}>
            <p id={'clients-motto'}>کسب اعتماد بهتــــــرین‌ها</p>
            <div id={'clients-pics'}>
                <div id={'clients-row1'}>
                    <div className={'client-pic'} id={'filimo-div'}>
                        <img id={'filimo'} src={filimo} alt={''} />
                    </div>
                    <div className={'client-pic'} id={'aparat-div'}>
                        <img id={'aparat'} src={aparat} alt={''} />
                    </div>
                    <div className={'client-pic'} id={'naft-div'}>
                        <img id={'naft'} src={naft} alt={''} />
                    </div>
                    <div className={'client-pic'} id={'mokhaberat-div'}>
                        <img id={'mokhaberat'} src={mokhaberat} alt={''} />
                    </div>
                    <div className={'client-pic'} id={'ketabkhone-div'}>
                        <img id={'ketabkhone'} src={ketabkhone} alt={''} />
                    </div>
                </div>
                <div id={'united-columns'}>
                    <div id={'clients-row2'}>
                        <div className={'client-pic'} id={'tamasha-div'}>
                            <img id={'tamasha'} src={tamasha} alt={''} />
                        </div>
                        <div className={'client-pic'} id={'varzesh3-div'}>
                            <img id={'varzesh3'} src={varzesh3} alt={''} />
                        </div>
                        <div className={'client-pic'} id={'jahad-div'}>
                            <img id={'jahad'} src={jahad} alt={''} />
                        </div>
                    </div>
                    <div id={'clients-row3'}>
                        <div className={'client-pic'} id={'farabi-div'}>
                            <img id={'farabi'} src={farabi} alt={''} />
                        </div>
                        <div className={'client-pic'} id={'parsian-div'}>
                            <img id={'parsian'} src={parsian} alt={''} />
                        </div>
                        <div className={'client-pic'} id={'astan-div'}>
                            <img id={'astan'} src={astan} alt={''} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;
