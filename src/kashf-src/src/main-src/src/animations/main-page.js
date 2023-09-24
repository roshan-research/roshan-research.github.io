export const startingAnimation = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    transition:{
        default: { duration: 2 },
    }
};


export const imageScrollDownAnimation = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 0,
    },
    transition:{
        default: { duration: 0.3},
    }
};


export const noneAnimation = {
    initial: {
    },
    animate: {
    },
    transition:{
    }
};

export const noneAnimationAlefba = {
    hidden: {
        x:-33,
    },
    visible: {
        transition: {
            duration: 0.1
        }
    },
};

export const noneAnimationHazm = {
    hidden: {
        y:+25,
    },
    visible: {
        transition: {
            duration: 0.1
        }
    },
};

export const appAnimation = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay:0.5,
            duration: 0.001
        }
    },
};


export const loadingAnimation = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    transition:{
        delay: 10,
        default: { duration: 5 },
    }
};
