import Player from "./samples/Player";
import {ReactComponent as Dot} from "../assets/images/samples/dot.svg";
import {ReactComponent as Polygon} from "../assets/images/samples/polygon.svg";
import '../stylesheets/sample-section.scss';
import {motion} from 'framer-motion';

import {Component} from "react";
import {ImageAnimation} from "../animations/typingAnimation";

enum Sample {
    Rasmi,
    Mohavereh,
    Telephoni,
    BaMusic,
    Ghadimi,
    Lahje,
    Englisi
}

class SampleSection extends Component {

    state = {
        chosenSample: Sample.Rasmi
    }

    constructor(props: any) {
      super(props);
        window.setInterval(() => {
            let randomNumber:number = Math.floor((Math.random() * 7) + 1);
            switch(randomNumber) {
                case 1:
                    this.setState({
                        chosenSample: Sample.Rasmi
                    })
                    break;
                case 2:
                    this.setState({
                        chosenSample: Sample.Mohavereh
                    })
                    break;
                case 3:
                    this.setState({
                        chosenSample: Sample.Telephoni
                    })
                    break;
                case 4:
                    this.setState({
                        chosenSample: Sample.BaMusic
                    })
                    break;
                case 5:
                    this.setState({
                        chosenSample: Sample.Ghadimi
                    })
                    break;
                case 6:
                    this.setState({
                        chosenSample: Sample.Lahje
                    })
                    break;
                case 7:
                    this.setState({
                        chosenSample: Sample.Englisi
                    })
                    break;
            }

        },5000);
    }


    componentDidMount() {
    }

    onSampleClick = (sampleName: Sample) => {
        switch (sampleName) {
            case Sample.Rasmi:
                this.setState({
                    chosenSample: Sample.Rasmi,
                });
                break;
            case Sample.Mohavereh:
                this.setState({
                    chosenSample: Sample.Mohavereh,
                });
                break;
            case Sample.Telephoni:
                this.setState({
                    chosenSample: Sample.Telephoni,
                });
                break;
            case Sample.BaMusic:
                this.setState({
                    chosenSample: Sample.BaMusic,
                });
                break;
            case Sample.Ghadimi:
                this.setState({
                    chosenSample: Sample.Ghadimi,
                });
                break;
            case Sample.Lahje:
                this.setState({
                    chosenSample: Sample.Lahje,
                });
                break;
            case Sample.Englisi:
                this.setState({
                    chosenSample: Sample.Englisi,
                });
                break;
        }
    }

    whichSample = () => {
        switch (this.state.chosenSample) {

        }
    }

    render() {

        return (
            <div className={'sample'}>
                <p id={'sample-title'}>
                    نمونه‌های حرف
                </p>
                <div style={{height: '10vw'}}/>
                <div id={'sample-section'}>
                    <div className={'sample-container'}>
                        <div id={"harf-text-container"}>
                            لورم ایپسوم متن ساختگی با [تولید سادگی] نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و [سطرآنچنان] که لازم است
                        </div>
                        <Player/>
                    </div>
                    <div style={{width: '20vw'}}/>
                    <div id={'buttons'}>
                        <div className={'button'} onClick={this.onSampleClick.bind(this,Sample.Rasmi)}>
                            <div className={'sample-row'}>
                                <p className={'white-title-sample'}
                                   id={this.state.chosenSample === Sample.Rasmi ? 'active-orange-title' : ''}>
                                    گفتار رسمی
                                </p>
                                <Dot className={this.state.chosenSample === Sample.Rasmi ? 'no-dot' : 'dot'}/>
                                <Polygon className={this.state.chosenSample === Sample.Rasmi ? 'polygon' : 'no-dot'}/>
                            </div>
                        </div>
                        <div className={'button'} onClick={this.onSampleClick.bind(this,Sample.Mohavereh)}>
                            <div className={'sample-row'}>
                                <p className={'white-title-sample text-left-title'}
                                   id={this.state.chosenSample === Sample.Mohavereh ? 'active-orange-title' : ''}>
                                    گفتار محاوره
                                </p>
                                <Dot className={this.state.chosenSample === Sample.Mohavereh ? 'no-dot' : 'dot'}/>
                                <Polygon className={this.state.chosenSample === Sample.Mohavereh ? 'polygon' : 'no-dot'}/>
                            </div>
                        </div>
                        <div className={'button'} onClick={this.onSampleClick.bind(this,Sample.Telephoni)}>
                            <div className={'sample-row'}>
                                <p className={'white-title-sample'}
                                   id={this.state.chosenSample === Sample.Telephoni ? 'active-orange-title' : ''}>
                                    صحبت تلفنی
                                </p>
                                <Dot className={this.state.chosenSample === Sample.Telephoni ? 'no-dot' : 'dot'}/>
                                <Polygon className={this.state.chosenSample === Sample.Telephoni ? 'polygon' : 'no-dot'}/>
                            </div>
                        </div>
                        <div className={'button'} onClick={this.onSampleClick.bind(this,Sample.BaMusic)}>
                            <div className={'sample-row'}>
                                <p className={'white-title-sample'}
                                   id={this.state.chosenSample === Sample.BaMusic ? 'active-orange-title' : ''}>
                                    گفتار با موسیقی در حال پخش
                                </p>
                                <Dot className={this.state.chosenSample === Sample.BaMusic ? 'no-dot' : 'dot'}/>
                                <Polygon className={this.state.chosenSample === Sample.BaMusic ? 'polygon' : 'no-dot'}/>
                            </div>
                        </div>
                        <div className={'button'} onClick={this.onSampleClick.bind(this,Sample.Ghadimi)}>
                            <div className={'sample-row'}>
                                <p className={'white-title-sample'}
                                   id={this.state.chosenSample === Sample.Ghadimi ? 'active-orange-title' : ''}>
                                    قدیمی
                                </p>
                                <Dot className={this.state.chosenSample === Sample.Ghadimi ? 'no-dot' : 'dot'}/>
                                <Polygon className={this.state.chosenSample === Sample.Ghadimi ? 'polygon' : 'no-dot'}/>
                            </div>
                        </div>
                        <div className={'button'} onClick={this.onSampleClick.bind(this,Sample.Lahje)}>
                            <div className={'sample-row'}>
                                <p className={'white-title-sample'}
                                   id={this.state.chosenSample === Sample.Lahje ? 'active-orange-title' : ''}>
                                    لهجه
                                </p>
                                <Dot className={this.state.chosenSample === Sample.Lahje ? 'no-dot' : 'dot'}/>
                                <Polygon className={this.state.chosenSample === Sample.Lahje ? 'polygon' : 'no-dot'}/>
                            </div>
                        </div>
                        <div className={'button'} onClick={this.onSampleClick.bind(this,Sample.Englisi)}>
                            <div className={'sample-row'}>
                                <p className={'white-title-sample'}
                                   id={this.state.chosenSample === Sample.Englisi ? 'active-orange-title' : ''}>
                                    انگلیسی
                                </p>
                                <Dot className={this.state.chosenSample === Sample.Englisi ? 'no-dot' : 'dot'}/>
                                <Polygon className={this.state.chosenSample === Sample.Englisi ? 'polygon' : 'no-dot'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SampleSection;
