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


export const couple11Woman = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    transition:{
        repeatDelay: 10,
        ease: "linear",
        duration: 1,
        repeatType: "reverse",
        repeat: Infinity
    }
};
export const couple12Man = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 0,
    },
    transition:{
        delay: 4,
        repeatDelay: 10,
        ease: "linear",
        duration: 1,
        repeatType: "reverse",
        repeat: Infinity
    }
};

export const couple12Woman = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    transition:{
        delay: 4,
        repeatDelay: 10,
        ease: "linear",
        duration: 1,
        repeatType: "reverse",
        repeat: Infinity
    }
};
export const couple13Man = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 0,
    },
    transition:{
        delay: 10,
        repeatDelay: 10,
        ease: "linear",
        duration: 1,
        repeatType: "reverse",
        repeat: Infinity
    }
};

export const couple13Woman = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    transition:{
        delay: 10,
        repeatDelay: 10,
        ease: "linear",
        duration: 1,
        repeatType: "reverse",
        repeat: Infinity
    }
};
