export const TypingAnimation = (delay,translationX = 0) => {
    return {
        hidden: {
            x: 0,
        },
        visible: {
            x: 0,
            transition: {
                delay: delay,
                duration: 0.75,
            }
        },
    }
}


export const BackgroundAnimation = (delay) => {
    return {
        hidden: {
            scaleX: 1,
        },
        visible: {
            scaleX: 1,
            transition: {
                delay: delay,
                duration: 10,
            }
        },
    }
}
