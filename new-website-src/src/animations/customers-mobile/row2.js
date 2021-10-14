export const couple2Man = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 0,
    },
    transition:{
        repeatDelay: 10,
        ease: "easeOut",
        duration: 2,
        repeatType: "reverse",
        repeat: Infinity
    }
};

export const couple2Woman = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    transition:{
        repeatDelay: 10,
        ease: "easeOut",
        duration: 2,
        repeatType: "reverse",
        repeat: Infinity
    }
};
