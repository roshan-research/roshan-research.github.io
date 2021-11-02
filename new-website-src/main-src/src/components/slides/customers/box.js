import {motion,useAnimation} from "framer-motion";
import './customers-mobile.scss';
import {useEffect, useState} from "react";

export default function CustomerBox({animationMan,animationWoman,boxID,manComponent,womanComponent}){

    const [initialWoman,setInitialWoman] = useState(animationWoman.initial);
    const [initialMan,setInitialMan] = useState(animationMan.initial);
    const [animateWoman,setAnimateWoman] = useState(animationWoman.animate);
    const [animateMan,setAnimateMan] = useState(animationMan.animate);

    const controlsMan = useAnimation();
    const controlsWoman = useAnimation();

    const onManComplete = ()=> {
        setTimeout(() => {
            setAnimateWoman(animateMan);
            setInitialWoman(initialMan);
            controlsWoman.start(animateWoman)
        },1000)
    };

    const onWomanComplete = ()=> {
        setTimeout(() => {
            setAnimateMan(animateWoman);
            setInitialMan(initialWoman);
            controlsMan.start(animateMan)
        },1000)
    };

    useEffect(() => {
        controlsMan.start(animateMan)
    })
    return(
        <div className={'box'} id={boxID}>
            <motion.div
                className={'box'}
                id={'stack'}
                initial={initialMan}
                animate={controlsMan}
                transition={animationMan.transition}
                onAnimationComplete={onManComplete}
            >
                {(manComponent)}
            </motion.div>
            <motion.div
                className={'box'}
                id={'stack'}
                initial={initialWoman}
                animate={controlsWoman}
                transition={animationWoman.transition}
                onAnimationComplete={onWomanComplete}
            >
                {(womanComponent)}
            </motion.div>
        </div>
    )
}
