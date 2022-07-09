import {ReactComponent as Dot} from "../assets/images/samples/dot.svg";
import {ReactComponent as Polygon} from "../assets/images/samples/polygon.svg";
import '../stylesheets/sample-section.scss';

import {Component} from "react";
import FishHoghoghi from "./newsamples/FishHoghoghi";
import KartMelli from "./newsamples/KartMelli";
import RoozNameh from "./newsamples/RoozNameh";
import Charkhesh from "./newsamples/Charkhesh";
import Tahrir from "./newsamples/Tahrir";
import BiKeifyat from "./newsamples/BiKeifyat";

enum Sample {
    KartMelli,
    Fish,
    Charkhesh,
    RoozNameh,
    Tahrir,
    BiKeifyat
}

class SampleSection extends Component {

    state = {
        chosenSample: Sample.KartMelli,
        timeOut: 12500
    }

    constructor(props: any) {
      super(props);
        window.setInterval(() => {
            let randomNumber:number = Math.floor((Math.random() * 6) + 1);
            switch(randomNumber) {
                case 1:
                    this.setState({
                        chosenSample: Sample.KartMelli,
                        timeOut: 12500
                    })
                    break;
                case 2:
                    this.setState({
                        chosenSample: Sample.Fish,
                        timeOut: 31500
                    })
                    break;
                case 3:
                    this.setState({
                        chosenSample: Sample.Charkhesh,
                        timeOut: 7500
                    })
                    break;
                case 4:
                    this.setState({
                        chosenSample: Sample.RoozNameh,
                        timeOut: 15500
                    })
                    break;
                case 5:
                    this.setState({
                        chosenSample: Sample.Tahrir,
                        timeOut: 8500
                    })
                    break;
                case 6:
                    this.setState({
                        chosenSample: Sample.BiKeifyat,
                        timeOut: 7500
                    })
                    break;
            }

        },16000);
    }

    render() {

        const onKartMelliClick = () => {
            this.setState({
                chosenSample: Sample.KartMelli,
                timeOut: 12500
            })
        }

        const onFishClick = () => {
            this.setState({
                chosenSample: Sample.Fish,
                timeOut: 31500
            })
        }

        const onCharkheshClick = () => {
            this.setState({
                chosenSample: Sample.Charkhesh,
                timeOut: 7500
            })
        }

        const onRooznamehClick = () => {
            this.setState({
                chosenSample: Sample.RoozNameh,
                timeOut: 15500
            })
        }

        const onTahrirClick = () => {
            this.setState({
                chosenSample: Sample.Tahrir,
                timeOut: 8500
            })
        }

        const onBikeifyatClick = () => {
            this.setState({
                chosenSample: Sample.BiKeifyat,
                timeOut: 7500
            })
        }

        const whichSample = () => {
            switch (this.state.chosenSample) {
                case Sample.KartMelli:
                    return <KartMelli/>;
                case Sample.Fish:
                    return <FishHoghoghi/>;
                case Sample.Charkhesh:
                    return <Charkhesh/>;
                case Sample.RoozNameh:
                    return <RoozNameh/>;
                case Sample.Tahrir:
                    return <Tahrir/>;
                case Sample.BiKeifyat:
                    return <BiKeifyat/>;
            }
        }

        return (
            <div className={'sample'}>
                <p id={'sample-title'}>
                    نمونه‌های الفبا
                </p>
                <div style={{height: '10vw'}}/>
                <div id={'sample-section'}>
                    <div className={'sample-container'}>
                        ({whichSample()})
                    </div>
                    <div id={'buttons'}>
                        <div className={'button'} onClick={onKartMelliClick}>
                            <div className={'sample-row'}>
                                <div className={'sample-container mobile-sample-container'}>
                                    <KartMelli/>
                                </div>
                                <p className={'white-title-sample'}
                                   id={this.state.chosenSample === Sample.KartMelli ? 'active-orange-title' : ''}>
                                    مدارک شناسایی
                                </p>
                                <Dot className={this.state.chosenSample === Sample.KartMelli ? 'no-dot' : 'dot'}/>
                                <Polygon className={this.state.chosenSample === Sample.KartMelli ? 'polygon' : 'no-dot'}/>
                            </div>
                        </div>
                        <div className={'button'} onClick={onFishClick}>
                            <div className={'sample-row'}>
                                <div className={'sample-container mobile-sample-container'}>
                                    <FishHoghoghi/>
                                </div>
                                <p className={'white-title-sample'}
                                   id={this.state.chosenSample === Sample.Fish ? 'active-orange-title' : ''}>
                                    جدول های مالی
                                </p>
                                <Dot className={this.state.chosenSample === Sample.Fish ? 'no-dot' : 'dot'}/>
                                <Polygon className={this.state.chosenSample === Sample.Fish ? 'polygon' : 'no-dot'}/>
                            </div>
                        </div>
                        <div className={'button'} onClick={onCharkheshClick}>
                            <div className={'sample-row'}>
                                <div className={'sample-container mobile-sample-container'}>
                                    <Charkhesh/>
                                </div>
                                <p className={'white-title-sample'}
                                   id={this.state.chosenSample === Sample.Charkhesh ? 'active-orange-title' : ''}>
                                    اسناد چرخیده
                                </p>
                                <Dot className={this.state.chosenSample === Sample.Charkhesh ? 'no-dot' : 'dot'}/>
                                <Polygon className={this.state.chosenSample === Sample.Charkhesh ? 'polygon' : 'no-dot'}/>
                            </div>
                        </div>
                        <div className={'button'} onClick={onRooznamehClick}>
                            <div className={'sample-row'}>
                                <div className={'sample-container mobile-sample-container'}>
                                    <RoozNameh/>
                                </div>
                                <p className={'white-title-sample'}
                                   id={this.state.chosenSample === Sample.RoozNameh ? 'active-orange-title' : ''}>
                                    روزنامه
                                </p>
                                <Dot className={this.state.chosenSample === Sample.RoozNameh ? 'no-dot' : 'dot'}/>
                                <Polygon className={this.state.chosenSample === Sample.RoozNameh ? 'polygon' : 'no-dot'}/>
                            </div>
                        </div>
                        <div className={'button'} onClick={onTahrirClick}>
                            <div className={'sample-row'}>
                                <div className={'sample-container mobile-sample-container'}>
                                    <Tahrir/>
                                </div>
                                <p className={'white-title-sample'}
                                   id={this.state.chosenSample === Sample.Tahrir ? 'active-orange-title' : ''}>
                                    اسناد ماشین تحریر
                                </p>
                                <Dot className={this.state.chosenSample === Sample.Tahrir ? 'no-dot' : 'dot'}/>
                                <Polygon className={this.state.chosenSample === Sample.Tahrir ? 'polygon' : 'no-dot'}/>
                            </div>
                        </div>
                        <div className={'button'} onClick={onBikeifyatClick}>
                            <div className={'sample-row'}>
                                <div className={'sample-container mobile-sample-container'}>
                                    <BiKeifyat/>
                                </div>
                                <p className={'white-title-sample'}
                                   id={this.state.chosenSample === Sample.BiKeifyat ? 'active-orange-title' : ''}>
                                    اسناد بی کیفیت
                                </p>
                                <Dot className={this.state.chosenSample === Sample.BiKeifyat ? 'no-dot' : 'dot'}/>
                                <Polygon className={this.state.chosenSample === Sample.BiKeifyat ? 'polygon' : 'no-dot'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SampleSection;
