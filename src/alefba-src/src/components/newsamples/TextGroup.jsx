import {motion} from "framer-motion";
import {BackgroundAnimation, TypingAnimation} from "../../animations/typingAnimation";
import "./new-sample-style.scss";

const TextGroup = ({
                       animationDelay,
                       fontSize,
                       text,
                       translationX,
                       height,
                       left,
                       top,
                       width,
                       textAlign = "auto",
                       lineHeight,
                       lineType = "line_bold",
                   }) => {
    return(
        <>
            <motion.span
                dir="auto"
                id={"bg-orange"}
                className="line_bold"
                variants={BackgroundAnimation(animationDelay)}
                initial={"hidden"}
                animate={"visible"}
                style={{
                    left: left,
                    top: top,
                    width: width,
                    height: height,
                    textAlign: textAlign,
                    lineHeight: lineHeight
                }}
            >
            </motion.span>
            <motion.span
                dir="auto"
                className={lineType}
                id={"text-black-sample"}
                style={{
                    left: left,
                    top: top,
                    width: width,
                    height: height,
                    textAlign: textAlign,
                    overflow: "hidden",
                    backgroundColor: "transparent",
                    lineHeight: lineHeight
                }}
            >
                <motion.span
                    className="words"
                    style={{ fontSize: fontSize}}
                    variants={TypingAnimation(animationDelay,translationX)}
                    initial={"hidden"}
                    animate={"visible"}
                >
                    {text}
                </motion.span>
            </motion.span>
        </>
    );
};

export default TextGroup;
