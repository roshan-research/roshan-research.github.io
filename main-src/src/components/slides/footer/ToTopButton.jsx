import {Component} from 'react';
import {Fullpage} from 'fullpage-react';
import '../../../stylesheets/to-top.scss'
const { changeFullpageSlide} = Fullpage;

const goToTop = changeFullpageSlide.bind(null, 0);


class ToTopButton extends Component {
    render() {
        return(
            <div id={'to-top'} onClick={goToTop}>
                &uarr;
            </div>
        )
    }
}

export default ToTopButton;
