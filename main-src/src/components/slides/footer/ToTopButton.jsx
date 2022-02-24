import {Fullpage} from 'fullpage-react';
const { changeFullpageSlide} = Fullpage;

const goToTop = changeFullpageSlide.bind(null, 0);


class ToTopButton extends Component {
    render() {
        return(
            <div id={'to-top'} onClick={goToTopAll}>
                &uarr;
            </div>
        )
    }
}

export default ToTopButton;
