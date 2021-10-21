export default function customersAnimation(repeatDelay,delay,initialOpacity,targetOpacity){
    return {
        initial: {
            opacity: initialOpacity,
        },
        animate: {
            opacity: targetOpacity,
        },
        transition:{
            repeatDelay: repeatDelay,
            delay: delay,
            ease: "linear",
            duration: 1,
            repeatType: "reverse",
            repeat: Infinity
        }
    };
}
