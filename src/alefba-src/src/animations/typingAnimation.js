export const TypingAnimation = (delay,translationX = 0) => {
    return {
        hidden: {
            x: translationX,
        },
        visible: {
            x: 0,
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
