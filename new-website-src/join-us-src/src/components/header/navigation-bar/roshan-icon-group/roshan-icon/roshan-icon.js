import './roshan-icon.scss';
import {ReactComponent as RoshanSVG} from '../../../../../assets/images/roshan-icon.svg';

function RoshanIcon() {
    return (
        <div className='roshan-icon' title={'خانه'}>
            <a href={'https://www.roshan-ai.ir/'}>
                <RoshanSVG className='icon'/>
            </a>
        </div>
    )
}

export default RoshanIcon;
