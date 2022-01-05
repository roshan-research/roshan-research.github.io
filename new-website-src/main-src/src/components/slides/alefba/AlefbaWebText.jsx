import {motion} from 'framer-motion';
import {
        backgroundAnimation,
        boxAnimation,
        boxAnimationNoX,
        aboutAnimation,
} from '../../../animations/alefba';

import {
    mainLineAnimation,
    subLineAnimation,
    polygonAnimation,
    dotAnimation,
    textAnimation,
    basicKashfAnimation,
    flowerAndFrameAnimation,
} from '../../../animations/kashf';
import {noneAnimation, noneAnimationAlefba} from "../../../animations/main-page";
import '../../../stylesheets/buttons.scss';
//the styles of kashf worked with alefba too, so I reused it as is.
import '../../../stylesheets/slides/kashf.scss';

const animationChooser = (scrollQuantity) => {

    switch (scrollQuantity) {
        case 2:
            return {
                'flowerAndFrameAnimation':flowerAndFrameAnimation,
                'mainLineAnimation': mainLineAnimation,
                'subLineAnimation': subLineAnimation,
                'polygonAnimation': polygonAnimation,
                'dotAnimation': dotAnimation,
                'textAnimation': textAnimation,
                'backgroundAnimation': backgroundAnimation,
                'boxAnimation': boxAnimation,
                'boxAnimationNoX': boxAnimationNoX,
                'aboutAnimation': aboutAnimation,
                'basicKashfAnimation':basicKashfAnimation,
            };

        default:
            return {
                'flowerAndFrameAnimation':noneAnimationAlefba,
                'mainLineAnimation': noneAnimationAlefba,
                'subLineAnimation': noneAnimationAlefba,
                'polygonAnimation': noneAnimationAlefba,
                'dotAnimation': noneAnimationAlefba,
                'textAnimation': noneAnimationAlefba,
                'backgroundAnimation': noneAnimationAlefba,
                'boxAnimation': noneAnimation,
                'boxAnimationNoX': noneAnimation,
                'aboutAnimation': noneAnimationAlefba,
                'basicKashfAnimation':noneAnimation,
            };
    }
};

function AlefbaWebText(props) {
    return (
        <div>
            <motion.div
                id={'kashf-emerging-box'}
                variants={animationChooser(props.status)['textAnimation']}
                initial={"hidden"}
                animate={"visible"}
            >
                <h2 id={'kashf-emerging-title'}>
                    الفبا
                </h2>
            </motion.div>
            <motion.div
                id={'kashf-text-box'}
                variants={animationChooser(props.status)['basicKashfAnimation']}
                initial={"hidden"}
                animate={"visible"}
            >
                <h1 id={'kashf-title-text'}>
                    تبدیل تصویر به نوشته (OCR)
                </h1>
                <h4 id={'kashf-main-text'}>
                    الفبا نوشته‌های فارسی، عربی و انگلیسی را در تصویر اسناد می‌خواند. الفبا ساختار اسناد را هم تحلیل می‌کند و با قلم‌های مختلف آشناست.
                </h4>
            </motion.div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 438 252">

                <motion.path
                    variants={animationChooser(props.status)['flowerAndFrameAnimation']}
                    initial={"hidden"}
                    animate={"visible"}
                    stroke="#FF6200"
                    d="M437 23.5V31h-6.522M413.522 31H407v-7.5M430.48 1h6.522v7.5M407 8.5V1h6.522"
                />
                <motion.path
                    variants={animationChooser(props.status)['flowerAndFrameAnimation']}
                    initial={"hidden"}
                    animate={"visible"}
                    stroke="#FF6200"
                    strokeLinecap="round"
                    d="M426 8.439h-4.667c-1.436 0-2.667 0-3.333 2"
                />
                <motion.path
                    variants={animationChooser(props.status)['flowerAndFrameAnimation']}
                    initial={"hidden"}
                    animate={"visible"}
                    fill="#FF6200"
                    d="M422.5 12.5v11a.5.5 0 01-1 0v-11a.5.5 0 011 0z"
                />
                <motion.path
                    variants={animationChooser(props.status)['mainLineAnimation']}
                    initial={"hidden"}
                    animate={"visible"}
                    stroke="#FF6200" d="M261.302 59.5 L 287.86 37.882 L 437.12 37.882"/>
                <motion.path
                    variants={animationChooser(props.status)['subLineAnimation']}
                    initial={"hidden"}
                    animate={"visible"}
                    stroke="#FF6200" d="M341.85 40.529h-53.114l-9.327 7.592"/>
                <motion.path
                    variants={animationChooser(props.status)['polygonAnimation']}
                    initial={"hidden"}
                    animate={"visible"}
                    stroke="#FF6200"
                    d="M257.48 50.676h9.2l4.6 7.941-4.6 7.941h-9.2l-4.6-7.94 4.6-7.942z"
                    clipRule="evenodd"
                />
                <motion.path
                    variants={animationChooser(props.status)['dotAnimation']}
                    initial={"hidden"}
                    animate={"visible"}
                    fill="#FF6200"
                    d="M262.14 62.088a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                />
                <a
                    target="_blank"
                    href={'https://www.roshan-ai.ir/alefba/'}
                    id={'link-alefba'}
                    title={'الفبا'}
                >
                    <rect id="Hidden Layer" y="218" width="153" height="33" fill="black" fillOpacity="0.01"/>
                    <motion.path
                        fill="#FF6200"
                        variants={animationChooser(props.status)['backgroundAnimation']}
                        initial={"hidden"}
                        animate={"visible"}
                        d="M65.29 219l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32H45.48l31.18-32h1.103zm3.118 0L49.7 251h-1.102l31.18-32h1.103zm3.118 0l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32H57.95l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.117 0l-31.18 32h-1.102l31.18-32h1.102zm3.118 0l-31.18 32h-1.102l31.18-32h1.102zm3.118 0l-31.18 32H76.66l31.18-32h1.102zm3.118 0l-31.18 32h-1.102l31.18-32h1.102zm3.118 0l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32h-1.102l31.18-32h1.103zm3.118 0l-31.18 32H92.25l31.18-32h1.103zm9.354 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32H135.9l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.118 0l-31.18 32h-1.103l31.18-32h1.103zm3.117 0l-31.18 32h-1.102l31.18-32h1.102zm3.118 0l-31.18 32h-1.102l31.18-32h1.102zm3.118 0l-31.18 32h-1.102l31.18-32h1.102zm.228 1.834v1.132L155.71 251h-1.102L184 220.834zm0 3.2v1.132L158.828 251h-1.102L184 224.034zm0 3.2v1.132L161.946 251h-1.102L184 227.234zm0 3.2v1.132L165.064 251h-1.102L184 230.434zm0 3.2v1.132L168.182 251h-1.102L184 233.634zm0 3.2v1.132L171.3 251h-1.102L184 236.834zm0 3.2v1.132L174.418 251h-1.102L184 240.034zm0 3.2v1.132L177.536 251h-1.103l7.567-7.766zm0 3.2v1.132L180.654 251h-1.103l4.45-4.566zm0 3.2v1.132l-.228.234h-1.103l1.331-1.366zM127.65 219l-31.18 32h-1.103l31.18-32h1.103zm3.117 0l-31.18 32h-1.102l31.18-32h1.103zm-68.595 0L32 249.965v-1.131L61.07 219h1.102zm-3.118 0L32 246.765v-1.131L57.951 219h1.103zm-3.118 0L32 243.565v-1.131L54.833 219h1.103zm-3.118 0L32 240.365v-1.131L51.715 219h1.103zm-3.118 0L32 237.165v-1.131L48.597 219H49.7zm-3.118 0L32 233.966v-1.132L45.48 219h1.102zm-3.118 0L32 230.766v-1.132L42.361 219h1.103zm-3.118 0L32 227.566v-1.132L39.243 219h1.103zm-3.118 0L32 224.366v-1.132L36.126 219h1.102zm-3.117 0L32 221.166v-1.132L33.007 219h1.103z"
                        opacity="0.3"
                    />
                    <motion.path
                        d="M189.19 186.5H162.89L123.24 219.5H152.5V251.5H0.5V219.5H116.64"
                        stroke="#FF6200"
                        variants={animationChooser(props.status)['boxAnimationNoX']}
                        initial={"hidden"}
                        animate={"visible"}
                    />
                    <motion.path
                        fill="#fff"
                        id={'text'}
                        variants={animationChooser(props.status)['aboutAnimation']}
                        initial={"hidden"}
                        animate={"visible"}
                        d="M79.371 238.41c-.577 0-1.04-.068-1.39-.203-.343-.136-.608-.337-.792-.604s-.305-.594-.363-.982a9.324 9.324 0 01-.088-1.353v-7.236h.91v7.236c0 .451.014.822.043 1.113s.102.521.218.691a.932.932 0 00.517.349c.232.063.547.095.945.095h.102v.894h-.102zm6.064-.894v.894h-.51c-.324 0-.632-.048-.923-.145s-.546-.235-.764-.415a1.911 1.911 0 01-.327-.334c-.247.31-.558.535-.93.676-.374.141-.828.213-1.36.218h-1.368v-.894h1.367c.286-.01.54-.037.764-.08.223-.044.412-.119.567-.226.155-.106.274-.247.356-.422.088-.179.136-.407.146-.683v-2.611h.894v2.611c0 .262.049.482.146.662.097.179.22.324.37.436.151.111.318.191.502.24.19.048.376.073.56.073h.51zm-4.175 3.614l.83-.836.857.851-.843.843-.844-.858zm8.194-4.174a3.986 3.986 0 00.567-.269c.146-.083.294-.18.444-.291.15-.117.286-.248.407-.393.126-.146.228-.31.306-.495.077-.184.116-.385.116-.603a2.019 2.019 0 00-.48-1.302 1.81 1.81 0 00-.567-.436 1.617 1.617 0 00-.75-.168 2.2 2.2 0 00-.8.138 1.668 1.668 0 00-.61.386c-.17.165-.3.364-.393.596a2.12 2.12 0 00-.138.786c0 .232.044.443.131.632.092.19.208.362.35.517.144.155.302.291.472.407.174.116.346.218.516.306l.204.101c.072.029.148.059.225.088zm.11-4.851c.353 0 .69.075 1.01.225.32.146.599.349.837.611.242.262.431.565.567.909.14.34.21.691.21 1.055 0 .475-.128.919-.385 1.331-.252.412-.62.775-1.105 1.091.63.126 1.285.189 1.963.189h.72v.894h-.72c-.581 0-1.144-.041-1.687-.123a8.872 8.872 0 01-1.52-.379 9.12 9.12 0 01-1.578.379c-.567.082-1.178.123-1.833.123h-.894v-.894h.894c.776 0 1.494-.063 2.153-.189a4.053 4.053 0 01-.61-.466 3.151 3.151 0 01-.488-.567 2.736 2.736 0 01-.32-.655 2.3 2.3 0 01-.117-.734c0-.408.07-.783.211-1.128a2.64 2.64 0 01.582-.894c.252-.252.553-.449.902-.589.32-.126.674-.189 1.062-.189h.145zm-1.063-3.048l.931-.945.96.96-.945.945-.946-.96zm7.92 6.72c0 .786-.225 1.397-.676 1.833-.548.534-1.426.8-2.633.8v-.894c.533 0 .958-.049 1.273-.146.32-.102.565-.235.734-.4s.28-.351.328-.56a2.54 2.54 0 00.08-.633l.007-7.745h.894l-.007 7.745zm3.336 2.633h-.91v-10.378h.91v10.378zm10.314 0c-.412 0-.8-.065-1.163-.196a3.158 3.158 0 01-.946-.553 2.754 2.754 0 01-.64-.814 2.248 2.248 0 01-.232-1.004c0-.339.046-.652.138-.938s.206-.548.342-.786c.14-.242.29-.46.45-.654.16-.199.306-.378.437-.538a9.543 9.543 0 01.502-.56c.087-.097.172-.187.254-.27.088-.087.165-.167.233-.24l-.567-.632.654-.597c.005 0 .063.063.175.189.116.122.262.279.436.473.18.194.376.41.589.647.214.238.42.473.618.706.243.276.468.545.677.807.208.262.388.521.538.778.155.257.276.517.364.779a2.5 2.5 0 01.13.807c0 .363-.08.708-.24 1.033-.155.32-.382.603-.683.85-.276.233-.592.41-.946.531a3.407 3.407 0 01-1.12.182zm-.021-5.891c-.068.068-.141.143-.22.226l-.24.247a9.811 9.811 0 00-.435.495l-.385.465a4.27 4.27 0 00-.38.545 3.265 3.265 0 00-.29.633 2.146 2.146 0 00-.116.713c0 .218.05.429.153.633.102.198.247.375.436.531.204.164.434.29.69.378.263.087.532.131.808.131.29 0 .563-.044.815-.131a2.33 2.33 0 00.669-.364c.189-.155.337-.337.444-.545a1.39 1.39 0 00.167-.662c0-.184-.032-.369-.095-.553a2.834 2.834 0 00-.283-.589 5.292 5.292 0 00-.466-.662c-.184-.237-.4-.499-.647-.785l-.625-.706zm2.343 9.913v-.887h1.01c1.14 0 1.974-.298 2.503-.895.484-.553.727-1.379.727-2.48v-4.669h.894v4.669c0 1.406-.35 2.468-1.047 3.186-.693.717-1.72 1.076-3.076 1.076h-1.011zm10.087-4.022c-.577 0-1.04-.068-1.39-.203a1.687 1.687 0 01-.792-.604 2.306 2.306 0 01-.363-.982 9.205 9.205 0 01-.088-1.353v-7.236h.909v7.236c0 .451.015.822.044 1.113s.102.521.218.691a.935.935 0 00.517.349c.232.063.548.095.945.095h.102v.894h-.102zm3.576-5.847l.16.691c.059.252.109.514.153.785.049.267.09.538.124.815.034.276.056.54.065.793v.043c0 .33-.051.657-.153.982a2.852 2.852 0 01-.45.88 2.35 2.35 0 01-.735.625 1.985 1.985 0 01-.967.233h-1.891v-.894h1.89c.233-.015.437-.075.612-.182.179-.107.327-.245.443-.415.122-.174.214-.371.277-.589a2.36 2.36 0 00.08-.611v-.051a6.5 6.5 0 00-.06-.727 9.331 9.331 0 00-.115-.749 15.518 15.518 0 00-.145-.72 74.099 74.099 0 00-.153-.647l.865-.262zm-1.927 8.487l.829-.836.858.851-.843.843-.844-.858zm3.217 1.382v-.887h1.01c1.14 0 1.974-.298 2.503-.895.485-.553.727-1.379.727-2.48v-4.669h.894v4.669c0 1.406-.35 2.468-1.047 3.186-.693.717-1.72 1.076-3.076 1.076h-1.011zm10.174-3.964a7.393 7.393 0 01-2.181-.334 4.622 4.622 0 01-.866-.386l-.385-.225.458-.771.385.233c.204.121.446.225.728.312.28.088.577.156.887.204.31.044.625.066.945.066h.088c.28 0 .545-.022.792-.066a2.2 2.2 0 00.808-.284c.218-.135.368-.303.45-.501.049-.122.073-.25.073-.386 0-.063-.012-.162-.036-.298-.024-.141-.11-.32-.255-.538l-.96-1.44c-.266-.403-.492-.742-.676-1.018a177.032 177.032 0 00-.705-1.069 2.136 2.136 0 00-.124-.182.327.327 0 01-.03-.058l-.24-.379.757-.48c.039.068.083.141.13.219.054.072.12.169.197.29l.299.466c.126.184.28.419.465.705.189.282.417.623.684 1.026.266.397.582.873.945 1.425.233.349.376.701.429 1.055a1.848 1.848 0 01-.131 1.011c-.145.344-.383.63-.712.858-.33.223-.735.376-1.215.458-.305.058-.64.087-1.004.087z"
                    />
                </a>
            </svg>
        </div>
    );
}

export default AlefbaWebText;
