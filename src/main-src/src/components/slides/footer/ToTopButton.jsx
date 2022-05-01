import {Component} from 'react';
import {Fullpage} from 'fullpage-react';
import '../../../stylesheets/to-top.scss';
import {flowerAnimation} from "../../../animations/kashf-image";
import {motion} from "framer-motion";
const { changeFullpageSlide} = Fullpage;

const goToTop = changeFullpageSlide.bind(null, 0);


class ToTopButton extends Component {
    render() {
        return(
            <motion.div
                id={'to-top'}
                onClick={goToTop}
                className={'to-top-clients'}
                variants={flowerAnimation}
                initial={"hidden"}
                animate={"visible"}
            >
                &uarr;
            </motion.div>
        )
    }
}

export default ToTopButton;
