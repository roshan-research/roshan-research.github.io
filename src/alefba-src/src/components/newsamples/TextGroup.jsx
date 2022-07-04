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
   width
}) => {
    return(
        <span className="lines">
            <motion.span
                dir="auto"
                className="line_bold"
                width={202}
                height={50}
                variants={BackgroundAnimation(animationDelay)}
                initial={"hidden"}
                animate={"visible"}
                style={{
                    transformOrigin: "right",
                    left: left,
                    top: top,
                    width: width,
                    height: height,
                    textAlign: "auto"
                }}
            >
            </motion.span>
              <motion.span
                  dir="auto"
                  className="line_bold"
                  width={202}
                  height={50}
                  style={{
                      transformOrigin: "right",
                      left: left,
                      top: top,
                      width: width,
                      height: height,
                      textAlign: "auto",
                      overflow: "hidden",
                      backgroundColor: "transparent"
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
