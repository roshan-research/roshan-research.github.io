import '../../stylesheets/new-sample-style.scss';

const TextGroup = ({
    fontSize,
    text,
    height,
    left,
    top,
    width,
    textAlign = 'auto',
    lineHeight,
    lineType = 'line_bold',
    delay = '0s',
    duration = '3000ms',
    isRooznameh = false,
}) => {
    return (
        <div style={{ animationPlayState: 'inherit' }}>
            <span
                dir="auto"
                id={'bg-orange'}
                className="line_bold"
                style={{
                    left: left,
                    top: top,
                    width: width,
                    height: height,
                    textAlign: textAlign,
                    lineHeight: lineHeight,
                    '--animation-delay': delay,
                    '--animation-duration': duration,
                    animationPlayState: isRooznameh ? 'paused' : 'unset',
                }}
            ></span>
            <span
                dir="auto"
                className={lineType}
                id={'text-black-sample'}
                style={{
                    left: left,
                    top: top,
                    width: width,
                    height: height,
                    textAlign: textAlign,
                    overflow: 'hidden',
                    display: 'inline-block',
                    backgroundColor: 'transparent',
                    lineHeight: lineHeight,
                    '--animation-delay': delay,
                    '--animation-duration': duration,
                    animationPlayState: 'inherit',
                }}
            >
                <span
                    className="words"
                    data-text={text}
                    style={{
                        fontSize: fontSize,
                        '--animation-delay': delay,
                        '--animation-duration': duration,
                        animationPlayState: 'inherit',
                    }}
                >
                    {text}
                </span>
            </span>
        </div>
    );
};

export default TextGroup;
