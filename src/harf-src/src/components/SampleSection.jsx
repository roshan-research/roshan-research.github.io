import Player from './samples/Player';
import { ReactComponent as Dot } from '../assets/images/samples/dot.svg';
import { ReactComponent as Polygon } from '../assets/images/samples/polygon.svg';
import '../stylesheets/sample-section.scss';
import { segments, segmentFixer } from './samples/segments.js';
import rasmi from '../assets/voices/rasmi.mp3';
import mohavereh from '../assets/voices/mohavereh.mp3';
import telephone from '../assets/voices/telephone.mp3';
import ghadimi from '../assets/voices/old.mp3';
import bamusic from '../assets/voices/musicover.mp3';

import { Component } from 'react';

let sampleSegments = segmentFixer(segments);

class SampleSection extends Component {
    state = {
        chosenSample: 0,
    };

    voices = [rasmi, mohavereh, telephone, ghadimi, bamusic];
    titles = [
        'گفتار رسمی',
        'گفتار محاوره‌ای',
        'گفتگوی تلفنی',
        'گفتار با لحن فارسی قدیم',
        'گفتار با موسیقی زمینه',
    ];

    onSampleClick = (sampleName) => {
        this.setState({ chosenSample: sampleName });
    };

    render() {
        return (
            <div className={'sample'}>
                <p id={'sample-title'}>به عمل کار برآید</p>
                <div className="sample-title-space" />
                <div id={'sample-section'}>
                    <Player
                        segments={sampleSegments[this.state.chosenSample]}
                        music={this.voices[this.state.chosenSample]}
                        key={this.state.chosenSample}
                        title={this.titles[this.state.chosenSample]}
                    />
                    <div style={{ width: '20vw' }} />
                    <div id={'buttons'}>
                        <div
                            className={'button'}
                            onClick={this.onSampleClick.bind(this, 0)}
                        >
                            <div className={'sample-row'}>
                                <p
                                    className={'white-title-sample'}
                                    id={
                                        this.state.chosenSample === 0
                                            ? 'active-orange-title'
                                            : ''
                                    }
                                >
                                    گفتار رسمی
                                </p>
                                <Dot
                                    className={
                                        this.state.chosenSample === 0
                                            ? 'no-dot'
                                            : 'dot'
                                    }
                                />
                                <Polygon
                                    className={
                                        this.state.chosenSample === 0
                                            ? 'polygon'
                                            : 'no-dot'
                                    }
                                />
                            </div>
                        </div>
                        <div
                            className={'button'}
                            onClick={this.onSampleClick.bind(this, 1)}
                        >
                            <div className={'sample-row'}>
                                <p
                                    className={'white-title-sample'}
                                    id={
                                        this.state.chosenSample === 1
                                            ? 'active-orange-title'
                                            : ''
                                    }
                                >
                                    گفتار محاوره‌ای
                                </p>
                                <Dot
                                    className={
                                        this.state.chosenSample === 1
                                            ? 'no-dot'
                                            : 'dot'
                                    }
                                />
                                <Polygon
                                    className={
                                        this.state.chosenSample === 1
                                            ? 'polygon'
                                            : 'no-dot'
                                    }
                                />
                            </div>
                        </div>
                        <div
                            className={'button'}
                            onClick={this.onSampleClick.bind(this, 2)}
                        >
                            <div className={'sample-row'}>
                                <p
                                    className={'white-title-sample'}
                                    id={
                                        this.state.chosenSample === 2
                                            ? 'active-orange-title'
                                            : ''
                                    }
                                >
                                    گفتگوی تلفنی
                                </p>
                                <Dot
                                    className={
                                        this.state.chosenSample === 2
                                            ? 'no-dot'
                                            : 'dot'
                                    }
                                />
                                <Polygon
                                    className={
                                        this.state.chosenSample === 2
                                            ? 'polygon'
                                            : 'no-dot'
                                    }
                                />
                            </div>
                        </div>
                        <div
                            className={'button'}
                            onClick={this.onSampleClick.bind(this, 3)}
                        >
                            <div className={'sample-row'}>
                                <p
                                    className={'white-title-sample'}
                                    id={
                                        this.state.chosenSample === 3
                                            ? 'active-orange-title'
                                            : ''
                                    }
                                >
                                    گفتار با لحن فارسی قدیم
                                </p>
                                <Dot
                                    className={
                                        this.state.chosenSample === 3
                                            ? 'no-dot'
                                            : 'dot'
                                    }
                                />
                                <Polygon
                                    className={
                                        this.state.chosenSample === 3
                                            ? 'polygon'
                                            : 'no-dot'
                                    }
                                />
                            </div>
                        </div>
                        <div
                            className={'button'}
                            onClick={this.onSampleClick.bind(this, 4)}
                        >
                            <div className={'sample-row'}>
                                <p
                                    className={'white-title-sample'}
                                    id={
                                        this.state.chosenSample === 4
                                            ? 'active-orange-title'
                                            : ''
                                    }
                                >
                                    گفتار با موسیقی زمینه
                                </p>
                                <Dot
                                    className={
                                        this.state.chosenSample === 4
                                            ? 'no-dot'
                                            : 'dot'
                                    }
                                />
                                <Polygon
                                    className={
                                        this.state.chosenSample === 4
                                            ? 'polygon'
                                            : 'no-dot'
                                    }
                                />
                            </div>
                        </div>
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
        );
    }
}

export default SampleSection;
