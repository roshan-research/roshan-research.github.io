// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { ReactComponent as Dot } from '../assets/images/samples/dot.svg';
import { ReactComponent as Polygon } from '../assets/images/samples/polygon.svg';
import '../stylesheets/sample-section.scss';

import React, { Component } from 'react';
import FishHoghoghiSafari from './newsamples/FishHoghoghiSafari';
import FishHoghoghi from './newsamples/FishHoghoghi';
import KartMelli from './newsamples/KartMelli';
import RoozNameh from './newsamples/RoozNameh';
import Charkhesh from './newsamples/Charkhesh';
import Tahrir from './newsamples/Tahrir';
import BiKeifyat from './newsamples/BiKeifyat';
import KartMelliSafari from './newsamples/KartMelliSafari';
import RoozNamehSafari from './newsamples/RoozNamehSafari';
import CharkheshSafari from './newsamples/CharkheshSafari';
import TahrirSafari from './newsamples/TahrirSafari';
import BiKeifyatSafari from './newsamples/BiKeifyatSafari';
import { isMobile, isSafari } from 'react-device-detect';

enum Sample {
    KartMelli,
    Fish,
    Charkhesh,
    RoozNameh,
    Tahrir,
    BiKeifyat,
}

class SampleSection extends Component {
    state = {
        chosenSample: Sample.KartMelli,
        kartMelliKey: 'kartMelli',
        fishKey: 'fish',
        charkheshKey: 'charkhesh',
        rooznamehKey: 'rooznameh',
        tahrirKey: 'tahrir',
        bikeifyatKey: 'biKeifyat',
    };

    constructor(props: any) {
        super(props);
        this.kartMelli = React.createRef();
        this.fish = React.createRef();
        this.charkhesh = React.createRef();
        this.rooznameh = React.createRef();
        this.tahrir = React.createRef();
        this.bikeifyat = React.createRef();

        // window.setInterval(() => {
        //     let randomNumber:number = Math.floor((Math.random() * 6) + 1);
        //     switch(randomNumber) {
        //         case 1:
        //             this.setState({
        //                 chosenSample: Sample.KartMelli,
        //             })
        //             break;
        //         case 2:
        //             this.setState({
        //                 chosenSample: Sample.Fish,
        //             })
        //             break;
        //         case 3:
        //             this.setState({
        //                 chosenSample: Sample.Charkhesh,
        //             })
        //             break;
        //         case 4:
        //             this.setState({
        //                 chosenSample: Sample.RoozNameh,
        //             })
        //             break;
        //         case 5:
        //             this.setState({
        //                 chosenSample: Sample.Tahrir,
        //             })
        //             break;
        //         case 6:
        //             this.setState({
        //                 chosenSample: Sample.BiKeifyat,
        //             })
        //             break;
        //     }

        // },25000);
    }

    onSampleClick = (sampleName: Sample) => {
        switch (sampleName) {
            case Sample.KartMelli:
                if (isMobile) {
                    this.setState({
                        kartMelliKey: Math.random(),
                    });
                }
                this.setState({
                    chosenSample: Sample.KartMelli,
                });
                break;
            case Sample.Fish:
                if (isMobile) {
                    this.setState({
                        fishKey: Math.random(),
                    });
                }
                this.setState({
                    chosenSample: Sample.Fish,
                });
                break;
            case Sample.Charkhesh:
                if (isMobile) {
                    this.setState({
                        charkheshKey: Math.random(),
                    });
                }
                this.setState({
                    chosenSample: Sample.Charkhesh,
                });
                break;
            case Sample.RoozNameh:
                if (isMobile) {
                    this.setState({
                        roozNamehKey: Math.random(),
                    });
                }
                this.setState({
                    chosenSample: Sample.RoozNameh,
                });
                break;
            case Sample.Tahrir:
                if (isMobile) {
                    this.setState({
                        tahrirKey: Math.random(),
                    });
                }
                this.setState({
                    chosenSample: Sample.Tahrir,
                });
                break;
            case Sample.BiKeifyat:
                if (isMobile) {
                    this.setState({
                        bikeifyatKey: Math.random(),
                    });
                }
                this.setState({
                    chosenSample: Sample.BiKeifyat,
                });
                break;
        }
    };
    render() {
        const whichSample = () => {
            switch (this.state.chosenSample) {
                case Sample.KartMelli:
                    return isSafari ? <KartMelliSafari /> : <KartMelli />;
                case Sample.Fish:
                    return isSafari ? <FishHoghoghiSafari /> : <FishHoghoghi />;
                case Sample.Charkhesh:
                    return isSafari ? <CharkheshSafari /> : <Charkhesh />;
                case Sample.RoozNameh:
                    return isSafari ? <RoozNamehSafari /> : <RoozNameh />;
                case Sample.Tahrir:
                    return isSafari ? <TahrirSafari /> : <Tahrir />;
                case Sample.BiKeifyat:
                    return isSafari ? <BiKeifyatSafari /> : <BiKeifyat />;
            }
        };

        return (
            <div className={'sample'}>
                <p id={'sample-title'}>نمونه‌های واقعی الفبا</p>
                <div className="sample-title-space" />
                <div id={'sample-section'}>
                    <div className={'sample-container'}>{whichSample()}</div>
                    <div id={'buttons'}>
                        <div
                            className={'button'}
                            onClick={this.onSampleClick.bind(
                                this,
                                Sample.KartMelli
                            )}
                        >
                            <div className={'sample-row'}>
                                <div
                                    className={
                                        'sample-container mobile-sample-container'
                                    }
                                    ref={this.kartMelli}
                                    key={this.state.kartMelliKey}
                                >
                                    {isSafari ? <KartMelliSafari /> : <KartMelli />}
                                </div>
                                <p
                                    className={'white-title-sample'}
                                    id={
                                        this.state.chosenSample ===
                                        Sample.KartMelli
                                            ? 'active-orange-title'
                                            : ''
                                    }
                                >
                                    مدارک شناسایی
                                </p>
                                <Dot
                                    className={
                                        this.state.chosenSample ===
                                        Sample.KartMelli
                                            ? 'no-dot'
                                            : 'dot'
                                    }
                                />
                                <Polygon
                                    className={
                                        this.state.chosenSample ===
                                        Sample.KartMelli
                                            ? 'polygon'
                                            : 'no-dot'
                                    }
                                />
                            </div>
                        </div>
                        <div
                            className={'button'}
                            onClick={this.onSampleClick.bind(this, Sample.Fish)}
                        >
                            <div className={'sample-row'}>
                                <div
                                    className={
                                        'sample-container mobile-sample-container'
                                    }
                                    ref={this.fish}
                                    key={this.state.fishKey}
                                >
                                    {isSafari ? <FishHoghoghiSafari /> : <FishHoghoghi />}
                                </div>
                                <p
                                    className={'white-title-sample'}
                                    id={
                                        this.state.chosenSample === Sample.Fish
                                            ? 'active-orange-title'
                                            : ''
                                    }
                                >
                                    جداول مالی
                                </p>
                                <Dot
                                    className={
                                        this.state.chosenSample === Sample.Fish
                                            ? 'no-dot'
                                            : 'dot'
                                    }
                                />
                                <Polygon
                                    className={
                                        this.state.chosenSample === Sample.Fish
                                            ? 'polygon'
                                            : 'no-dot'
                                    }
                                />
                            </div>
                        </div>
                        <div
                            className={'button'}
                            onClick={this.onSampleClick.bind(
                                this,
                                Sample.Charkhesh
                            )}
                        >
                            <div className={'sample-row'}>
                                <div
                                    className={
                                        'sample-container mobile-sample-container'
                                    }
                                    ref={this.charkhesh}
                                    key={this.state.charkheshKey}
                                >
                                    {isSafari ? <CharkheshSafari /> : <Charkhesh />}
                                </div>
                                <p
                                    className={'white-title-sample'}
                                    id={
                                        this.state.chosenSample ===
                                        Sample.Charkhesh
                                            ? 'active-orange-title'
                                            : ''
                                    }
                                >
                                    اسناد دارای چرخش و زاویه
                                </p>
                                <Dot
                                    className={
                                        this.state.chosenSample ===
                                        Sample.Charkhesh
                                            ? 'no-dot'
                                            : 'dot'
                                    }
                                />
                                <Polygon
                                    className={
                                        this.state.chosenSample ===
                                        Sample.Charkhesh
                                            ? 'polygon'
                                            : 'no-dot'
                                    }
                                />
                            </div>
                        </div>
                        <div
                            className={'button'}
                            onClick={this.onSampleClick.bind(
                                this,
                                Sample.RoozNameh
                            )}
                        >
                            <div className={'sample-row'}>
                                <div
                                    className={
                                        'sample-container mobile-sample-container'
                                    }
                                    ref={this.rooznameh}
                                    key={this.state.rooznamehKey}
                                >
                                    {isSafari ? <RoozNamehSafari /> : <RoozNameh />}
                                </div>
                                <p
                                    className={'white-title-sample'}
                                    id={
                                        this.state.chosenSample ===
                                        Sample.RoozNameh
                                            ? 'active-orange-title'
                                            : ''
                                    }
                                >
                                    مطبوعات
                                </p>
                                <Dot
                                    className={
                                        this.state.chosenSample ===
                                        Sample.RoozNameh
                                            ? 'no-dot'
                                            : 'dot'
                                    }
                                />
                                <Polygon
                                    className={
                                        this.state.chosenSample ===
                                        Sample.RoozNameh
                                            ? 'polygon'
                                            : 'no-dot'
                                    }
                                />
                            </div>
                        </div>
                        <div
                            className={'button'}
                            onClick={this.onSampleClick.bind(
                                this,
                                Sample.Tahrir
                            )}
                        >
                            <div className={'sample-row'}>
                                <div
                                    className={
                                        'sample-container mobile-sample-container'
                                    }
                                    ref={this.tahrir}
                                    key={this.state.tahrirKey}
                                >
                                    {isSafari ? <TahrirSafari /> : <Tahrir />}
                                </div>
                                <p
                                    className={'white-title-sample'}
                                    id={
                                        this.state.chosenSample ===
                                        Sample.Tahrir
                                            ? 'active-orange-title'
                                            : ''
                                    }
                                >
                                    اسناد ماشین تحریری
                                </p>
                                <Dot
                                    className={
                                        this.state.chosenSample ===
                                        Sample.Tahrir
                                            ? 'no-dot'
                                            : 'dot'
                                    }
                                />
                                <Polygon
                                    className={
                                        this.state.chosenSample ===
                                        Sample.Tahrir
                                            ? 'polygon'
                                            : 'no-dot'
                                    }
                                />
                            </div>
                        </div>
                        <div
                            className={'button'}
                            onClick={this.onSampleClick.bind(
                                this,
                                Sample.BiKeifyat
                            )}
                        >
                            <div className={'sample-row'}>
                                <div
                                    className={
                                        'sample-container mobile-sample-container'
                                    }
                                    ref={this.bikeifyat}
                                    key={this.state.bikeifyatKey}
                                >
                                    {isSafari ? <BiKeifyatSafari /> : <BiKeifyat />}
                                </div>
                                <p
                                    className={'white-title-sample'}
                                    id={
                                        this.state.chosenSample ===
                                        Sample.BiKeifyat
                                            ? 'active-orange-title'
                                            : ''
                                    }
                                >
                                    اسناد بی‌کیفیت
                                </p>
                                <Dot
                                    className={
                                        this.state.chosenSample ===
                                        Sample.BiKeifyat
                                            ? 'no-dot'
                                            : 'dot'
                                    }
                                />
                                <Polygon
                                    className={
                                        this.state.chosenSample ===
                                        Sample.BiKeifyat
                                            ? 'polygon'
                                            : 'no-dot'
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SampleSection;
