export const TypingAnimation = (delay) => {
    return {
        hidden: {
            x: 201,
        },
        visible: {
            x: 0,
            width: 201,
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
