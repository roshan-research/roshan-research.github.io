import './roshan-icon.scss'
import {ReactComponent as RoshanSVG} from '../../../../../assets/images/roshan-icon.svg';
import {Link} from "react-router-dom";

function RoshanIcon() {
    return (
        <div className='roshan-icon'>
            <Link to={'/test'}>
                <RoshanSVG className='icon'/>
            </Link>
        </div>
    )
}

export default RoshanIcon;
