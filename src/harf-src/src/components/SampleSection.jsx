import Player from './samples/Player';
import { ReactComponent as Dot } from '../assets/images/samples/dot.svg';
import { ReactComponent as Polygon } from '../assets/images/samples/polygon.svg';
import '../stylesheets/sample-section.scss';
import { segments, segmentFixer } from './samples/segments.js';
import akhbar from '../assets/voices/akhbar.mp3';
import podcast from '../assets/voices/podcast.mp3';
import reading from '../assets/voices/reading.mp3';
import historical from '../assets/voices/historical.mp3';
import majles from '../assets/voices/majles_-_2020-05-03.mp3';

import { Component } from 'react';

let sampleSegments = segmentFixer(segments);

class SampleSection extends Component {
    state = {
        chosenSample: 0,
    };

    voices = [akhbar, podcast, reading, historical, majles];
    titles = [
        'اخبار',
        'پادکست',
        'متن‌خوانی',
        'فیلم تاریخی',
        'صحن علنی مجلس',
    ];

    onSampleClick = (sampleName) => {
        this.setState({ chosenSample: sampleName });
    };

    render() {
        return (
            <div className={'sample'}>
                <p id={'sample-title'}>نمونه‌های واقعی حرف</p>
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
                                    اخبار
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
                                    پادکست
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
                                    متن‌خوانی
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
                                    فیلم تاریخی
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
                                    صحن علنی مجلس
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
