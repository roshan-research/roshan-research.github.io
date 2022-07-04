import {motion} from "framer-motion";
import {BackgroundAnimation, TypingAnimation} from "../../animations/typingAnimation";

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
        <span className="lines">
            <motion.span
                dir="auto"
                className="line_bold"
                variants={BackgroundAnimation(animationDelay)}
                initial={"hidden"}
                animate={"visible"}
                style={{
                    transformOrigin: "right",
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
                  style={{
                      transformOrigin: "right",
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
                  style={{ fontSize: fontSize,transformOrigin: "right"}}
                  variants={TypingAnimation(animationDelay,translationX)}
                  initial={"hidden"}
                  animate={"visible"}
              >
                {text}
              </motion.span>
            </motion.span>
          </span>
    );
};

export default TextGroup;
