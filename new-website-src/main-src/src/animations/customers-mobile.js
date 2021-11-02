export default function customersAnimation(delay,initialOpacity,targetOpacity){
    return {
        initial: {
            opacity: initialOpacity,
        },
        animate: {
            opacity: targetOpacity,
        },
        transition:{
            delay: delay,
            ease: "easeIn",
            duration: 1,
        }
    };
}
