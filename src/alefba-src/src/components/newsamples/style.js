const style = {
    css: ".container {\n" +
        "    width: 1170px;\n" +
        "}\n" +
        "#document {\n" +
        "    margin: 50px 0;\n" +
        "    transform-origin: top left;\n" +
        "    -moz-transform-origin: top left;\n" +
        "}\n" +
        "#document img {\n" +
        "    z-index: -1;\n" +
        "    border: 2px solid #ddd;\n" +
        "    margin-top: -2px;\n" +
        "    margin-left: -2px;\n" +
        "}\n" +
        ".document.line-view .line, .document.paragraph-view p, .document.paragraph-view table {\n" +
        "    font-family: IRMitra;\n" +
        "    /*background: rgba(255, 98, 0, 0.9);*/\n" +
        "    background: rgba(255, 98, 0, 0.95);\n" +
        "    color: black;\n" +
        "    border-radius: 3px;\n" +
        "    color: #333;\n" +
        "    line-height: 1;\n" +
        "    /* box-shadow: 0px 2px 2px #777; */\n" +
        "    /* text-shadow: 0px 1px 1px #999; */\n" +
        "    /* border: 1px solid #e45701; */\n" +
        "}\n" +
        ".document.line-view .line_bold, .document.paragraph-view p, .document.paragraph-view table {\n" +
        "    font-family: IRMitra;\n" +
        "    /*background: rgba(255, 98, 0, 0.9);*/\n" +
        "    background: rgba(255, 98, 0, 0.95);\n" +
        "    color: black;\n" +
        "    border-radius: 3px;\n" +
        "    color: #333;\n" +
        "    line-height: 1;\n" +
        "    /* box-shadow: 0px 2px 2px #777; */\n" +
        "    /* text-shadow: 0px 1px 1px #999; */\n" +
        "    /* border: 1px solid #e45701; */\n" +
        "}\n" +
        ".document .words {\n" +
        "    white-space: nowrap;\n" +
        "}\n" +
        ".document.line-view .line {\n" +
        "    display: table;\n" +
        "    position: absolute;\n" +
        "    text-align: center;\n" +
        "}\n" +
        ".document.line-view .line_bold {\n" +
        "    display: table;\n" +
        "    position: absolute;\n" +
        "    text-align: center;\n" +
        "    font-weight: bold\n" +
        "}\n" +
        ".document.line-view .words {\n" +
        "    display: table-cell;\n" +
        "    vertical-align: middle;\n" +
        "}\n" +
        ".document.line-view p, .document.line-view table {\n" +
        "    height: initial !important;\n" +
        "    width: initial !important;\n" +
        "}\n" +
        ".document.paragraph-view p, .document.paragraph-view table {\n" +
        "    position: absolute;\n" +
        "    padding: 5px 30px;\n" +
        "    display: table;\n" +
        "}\n" +
        ".document.paragraph-view .lines {\n" +
        "    display: table-cell;\n" +
        "    vertical-align: middle;\n" +
        "}\n" +
        ".document.paragraph-view .line {\n" +
        "    display: block;\n" +
        "    line-height: 1.3;\n" +
        "    height: initial !important;\n" +
        "    width: initial !important;\n" +
        "}\n" +
        ".document.paragraph-view .words {\n" +
        "    font-size: inherit !important;\n" +
        "}\n" +
        ".document div.image {\n" +
        "    position: absolute;\n" +
        "    /*border: 10px solid #33bbff;*/\n" +
        "    border-radius: 5px;\n" +
        "    /*box-shadow: 0px 2px 5px #777;*/\n" +
        "    margin-top: 0;\n" +
        "    background: rgba(255, 98, 0, 0);\n" +
        "}\n" +
        ".document .image div.image-wrapper{\n" +
        "    height: 100%;\n" +
        "    max-width: 128px;\n" +
        "    margin: auto;\n" +
        "    background: url(\"/static/images/picture1600.png\") no-repeat center center;\n" +
        "    background-size: contain;\n" +
        "}\n" +
        ".document.paragraph-view table th, .document.paragraph-view table td {\n" +
        "    border: 6px dashed #fff;\n" +
        "}\n"
}

const sampleRelationCoefficientWidth = 0.44;

const resizer = (innerWidth) => {
    return innerWidth * sampleRelationCoefficientWidth;
};

const getScale = (innerWidth,originalWidth) => {
    let newDimensions = resizer(innerWidth);
    let scaleXCoefficient = (newDimensions / originalWidth) - 0.1;
    return {
        scaleX: 1,
        scaleY: 1,
    }
};


export default style;
export {
    getScale,
};
