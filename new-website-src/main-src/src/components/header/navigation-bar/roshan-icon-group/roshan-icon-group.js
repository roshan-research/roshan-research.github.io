import React from 'react';
import RoshanIcon from "./roshan-icon/roshan-icon";
import RoshanTitle from "./roshan-title/roshan-title";
import './roshan-icon-group.scss';

function IconTextGroup() {
    return (
        <div className='roshan-icon-group' title={'خانه'}>
            <RoshanIcon/>
            <RoshanTitle/>
        </div>
    )
}

export default IconTextGroup;
