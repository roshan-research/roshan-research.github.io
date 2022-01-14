const clientsAnimationMobile = (delay,initialOpacity,targetOpacity) =>{
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
            duration: 2,
        }
    };
};

export const ClientsMobileAnimations = {
    couple11Man: clientsAnimationMobile(5.2, 1, 0),
    couple11Woman: clientsAnimationMobile(1, 0, 1),
    couple12Man: clientsAnimationMobile(2.3, 1, 0),
    couple12Woman: clientsAnimationMobile(1, 0, 1),
    couple13Man: clientsAnimationMobile(5.3, 1, 0),
    couple13Woman: clientsAnimationMobile( 1, 0, 1),
    couple21Man: clientsAnimationMobile(4, 1, 0),
    couple21Woman: clientsAnimationMobile(1, 0, 1),
    couple22Man: clientsAnimationMobile(3, 1, 0),
    couple22Woman: clientsAnimationMobile(1, 0, 1),
    couple23Man: clientsAnimationMobile(1.5, 1, 0),
    couple23Woman: clientsAnimationMobile(1, 0, 1),
    couple31Man: clientsAnimationMobile(5.6, 1, 0),
    couple31Woman: clientsAnimationMobile(1, 0, 1),
    couple32Man: clientsAnimationMobile(3, 1, 0),
    couple32Woman: clientsAnimationMobile(1, 0, 1),
    couple33Man: clientsAnimationMobile(4.4, 1, 0),
    couple33Woman: clientsAnimationMobile(1, 0, 1),
    couple41Man: clientsAnimationMobile(2.1, 1, 0),
    couple41Woman: clientsAnimationMobile(1, 0, 1),
    couple42Man: clientsAnimationMobile(1, 1, 0),
    couple42Woman: clientsAnimationMobile(1, 0, 1),
    couple43Man: clientsAnimationMobile(4.2, 1, 0),
    couple43Woman: clientsAnimationMobile(1, 0, 1),
};


const clientsAnimationDesktop = (delay, duration, shouldAnimate) => {
    return shouldAnimate ? {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: delay,
                duration: duration,
            }
        },
    } : {
        hidden: {
        },
        visible: {
        },
    }
};

export const ClientsAnimationsDesktop = (shouldAnimate) => {
    let delay = Math.random() * 2 + 1;
    let duration = Math.random() * 2;
    return clientsAnimationDesktop(delay, duration,shouldAnimate);
};
