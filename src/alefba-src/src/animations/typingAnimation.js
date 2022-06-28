export const TypingAnimation = (delay) => {
    return {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            }
        },
    }
}


export const BackgroundAnimation = (delay) => {
    return {
        hidden: {
            scaleX: 0,
        },
        visible: {
            scaleX: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            }
        },
    }
}
