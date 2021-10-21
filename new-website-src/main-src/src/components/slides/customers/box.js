import {motion} from "framer-motion";
import './customers-mobile.scss';

export default function CustomerBox({animationMan,animationWoman,boxID,manComponent,womanComponent}){
    return(
        <div className={'box'} id={boxID}>
            <motion.div
                className={'box'}
                id={'stack'}
                initial={animationMan.initial}
                animate={animationMan.animate}
                transition={animationMan.transition}
            >
                {(
                    manComponent
                )}
            </motion.div>
            <motion.div
                className={'box'}
                id={'stack'}
                initial={animationWoman.initial}
                animate={animationWoman.animate}
                transition={animationWoman.transition}
            >
                {(
                    womanComponent
                )}
            </motion.div>
        </div>
    )
}
