const customersAnimation = (delay,initialOpacity,targetOpacity) =>{
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
}

export const CustomerMobileAnimations = {
    couple11Man: customersAnimation(5.2, 1, 0),
    couple11Woman: customersAnimation(1, 0, 1),
    couple12Man: customersAnimation(2.3, 1, 0),
    couple12Woman: customersAnimation(1, 0, 1),
    couple13Man: customersAnimation(5.3, 1, 0),
    couple13Woman: customersAnimation( 1, 0, 1),
    couple21Man: customersAnimation(4, 1, 0),
    couple21Woman: customersAnimation(1, 0, 1),
    couple22Man: customersAnimation(3, 1, 0),
    couple22Woman: customersAnimation(1, 0, 1),
    couple23Man: customersAnimation(1.5, 1, 0),
    couple23Woman: customersAnimation(1, 0, 1),
    couple31Man: customersAnimation(5.6, 1, 0),
    couple31Woman: customersAnimation(1, 0, 1),
    couple32Man: customersAnimation(3, 1, 0),
    couple32Woman: customersAnimation(1, 0, 1),
    couple33Man: customersAnimation(4.4, 1, 0),
    couple33Woman: customersAnimation(1, 0, 1),
    couple41Man: customersAnimation(2.1, 1, 0),
    couple41Woman: customersAnimation(1, 0, 1),
    couple42Man: customersAnimation(1, 1, 0),
    couple42Woman: customersAnimation(1, 0, 1),
    couple43Man: customersAnimation(4.2, 1, 0),
    couple43Woman: customersAnimation(1, 0, 1),
};



