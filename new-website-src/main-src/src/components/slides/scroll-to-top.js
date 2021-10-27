const scrollToTop = (height) => {
    const totalHeight = 5 * height;
    window.scrollTo({
        top: totalHeight - 1 * height,
        behavior:'smooth',
    });
    setTimeout(() => {
        window.scrollTo({
            top: totalHeight - 2 * height,
            behavior:'smooth',
        });
    }, 500);
    setTimeout(() => {
        window.scrollTo({
            top: totalHeight - 3 * height,
            behavior:'smooth',
        });
    }, 1000);
    setTimeout(() => {
        window.scrollTo({
            top: totalHeight - 4 * height,
            behavior:'smooth',
        });
    }, 1500);
    setTimeout(() => {
        window.scrollTo({
            top: totalHeight - 5 * height,
            behavior:'smooth',
        });
    }, 2000);

    setTimeout(() => {
        window.location.reload();
    }, 2500);
};

export default scrollToTop;
