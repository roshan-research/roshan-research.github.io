import Player from "./samples/Player";
import {ReactComponent as Dot} from "../assets/images/samples/dot.svg";
import {ReactComponent as Polygon} from "../assets/images/samples/polygon.svg";
import '../stylesheets/sample-section.scss';
import {motion} from 'framer-motion';
import {segments,segmentFixer} from "./samples/segments.js";
import rasmi from "../assets/voices/rasmi.mp3";
import mohavereh from "../assets/voices/mohavereh.mp3";
import telephone from "../assets/voices/telephone.mp3";

import {Component} from "react";
import {ImageAnimation} from "../animations/typingAnimation";


let sampleSegments = segmentFixer(segments);

class SampleSection extends Component {

    state = {
        chosenSample: 0
    }

    voices = [rasmi,mohavereh,telephone];

    constructor(props: any) {
      super(props);
        window.setInterval(() => {
            let randomNumber:number = Math.floor((Math.random() * 2) + 0);
            this.setState({chosenSample:randomNumber});

        },60000);
    }


    componentDidMount() {
    }

    onSampleClick = (sampleName) => {
        console.log(this.state.chosenSample)
        this.setState({chosenSample: sampleName})
    }

    render() {

        return (
            <div className={'sample'}>
                <p id={'sample-title'}>
                    نمونه‌های حرف
                </p>
                <div style={{height: '10vw'}}/>
                <div id={'sample-section'}>
                    <Player
                        segments={sampleSegments[this.state.chosenSample]}
                        music={this.voices[this.state.chosenSample]}
                        key={this.state.chosenSample}
                    />
                    <div style={{width: '20vw'}}/>
                    <div id={'buttons'}>
                        <div className={'button'} onClick={this.onSampleClick.bind(this,0)}>
                            <div className={'sample-row'}>
                                <p className={'white-title-sample'}
                                   id={this.state.chosenSample === 0 ? 'active-orange-title' : ''}>
                                    گفتار رسمی
                                </p>
                                <Dot className={this.state.chosenSample === 0 ? 'no-dot' : 'dot'}/>
                                <Polygon className={this.state.chosenSample === 0 ? 'polygon' : 'no-dot'}/>
                            </div>
                        </div>
                        <div className={'button'} onClick={this.onSampleClick.bind(this,1)}>
                            <div className={'sample-row'}>
                                <p className={'white-title-sample text-left-title'}
                                   id={this.state.chosenSample === 1 ? 'active-orange-title' : ''}>
                                    گفتار محاوره
                                </p>
                                <Dot className={this.state.chosenSample === 1 ? 'no-dot' : 'dot'}/>
                                <Polygon className={this.state.chosenSample === 1 ? 'polygon' : 'no-dot'}/>
                            </div>
                        </div>
                        <div className={'button'} onClick={this.onSampleClick.bind(this,2)}>
                            <div className={'sample-row'}>
                                <p className={'white-title-sample'}
                                   id={this.state.chosenSample === 2 ? 'active-orange-title' : ''}>
                                    صحبت تلفنی
                                </p>
                                <Dot className={this.state.chosenSample === 2 ? 'no-dot' : 'dot'}/>
                                <Polygon className={this.state.chosenSample === 2 ? 'polygon' : 'no-dot'}/>
                            </div>
                        </div>
                        {/*<div className={'button'} onClick={this.onSampleClick.bind(this,Sample.BaMusic)}>*/}
                        {/*    <div className={'sample-row'}>*/}
                        {/*        <p className={'white-title-sample'}*/}
                        {/*           id={this.state.chosenSample === Sample.BaMusic ? 'active-orange-title' : ''}>*/}
                        {/*            گفتار با موسیقی در حال پخش*/}
                        {/*        </p>*/}
                        {/*        <Dot className={this.state.chosenSample === Sample.BaMusic ? 'no-dot' : 'dot'}/>*/}
                        {/*        <Polygon className={this.state.chosenSample === Sample.BaMusic ? 'polygon' : 'no-dot'}/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={'button'} onClick={this.onSampleClick.bind(this,Sample.Ghadimi)}>*/}
                        {/*    <div className={'sample-row'}>*/}
                        {/*        <p className={'white-title-sample'}*/}
                        {/*           id={this.state.chosenSample === Sample.Ghadimi ? 'active-orange-title' : ''}>*/}
                        {/*            قدیمی*/}
                        {/*        </p>*/}
                        {/*        <Dot className={this.state.chosenSample === Sample.Ghadimi ? 'no-dot' : 'dot'}/>*/}
                        {/*        <Polygon className={this.state.chosenSample === Sample.Ghadimi ? 'polygon' : 'no-dot'}/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={'button'} onClick={this.onSampleClick.bind(this,Sample.Lahje)}>*/}
                        {/*    <div className={'sample-row'}>*/}
                        {/*        <p className={'white-title-sample'}*/}
                        {/*           id={this.state.chosenSample === Sample.Lahje ? 'active-orange-title' : ''}>*/}
                        {/*            لهجه*/}
                        {/*        </p>*/}
                        {/*        <Dot className={this.state.chosenSample === Sample.Lahje ? 'no-dot' : 'dot'}/>*/}
                        {/*        <Polygon className={this.state.chosenSample === Sample.Lahje ? 'polygon' : 'no-dot'}/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={'button'} onClick={this.onSampleClick.bind(this,Sample.Englisi)}>*/}
                        {/*    <div className={'sample-row'}>*/}
                        {/*        <p className={'white-title-sample'}*/}
                        {/*           id={this.state.chosenSample === Sample.Englisi ? 'active-orange-title' : ''}>*/}
                        {/*            انگلیسی*/}
                        {/*        </p>*/}
                        {/*        <Dot className={this.state.chosenSample === Sample.Englisi ? 'no-dot' : 'dot'}/>*/}
                        {/*        <Polygon className={this.state.chosenSample === Sample.Englisi ? 'polygon' : 'no-dot'}/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default SampleSection;
