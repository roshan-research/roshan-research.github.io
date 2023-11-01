import { motion } from "framer-motion";

type AnimationProps = {
  width: number[];
  height: number[];
  duration: number[];
  delay: number[];
  linepot: number;
  inview: boolean;
  className?: string[];
  maxwidth: string;
  text: string;
  percentage: string;
  color: string;
  diameter: number;
  diameter2?: number;
};

const Animation: React.FC<AnimationProps> = ({
  width,
  height,
  duration,
  delay,
  linepot,
  inview,
  className,
  maxwidth,
  text,
  percentage,
  color,
  diameter,
  diameter2,
}) => {
  const animation = (dur: number, del: number) => {
    return {
      hidden: {
        opacity: 0,
        pathLength: 0,
      },
      visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
          duration: dur,
          delay: del,
        },
      },
    };
  };

  const animation2 = (dur: number, del: number) => {
    return {
      hidden: {
        fillOpacity: 0,
        strokeWidth: 0,
      },
      visible: {
        fillOpacity: 0.1,
        strokeWidth: 1,
        transition: {
          duration: dur,
          delay: del,
        },
      },
    };
  };

  const animation3 = (maxw: string, dur: number, del: number) => {
    return {
      hidden: {
        maxWidth: "0px",
      },
      visible: {
        maxWidth: maxw,
        transition: {
          duration: dur,
          delay: del,
        },
      },
    };
  };

  return (
    <div>
      <svg
        width={width[0]}
        height={height[0]}
        viewBox={`0 0 ${width[0]} ${height[0]}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className?.[5] ?? ""}
      >
        <motion.rect
          variants={animation2(duration[0], delay[0])}
          initial='hidden'
          animate={inview ? "visible" : ""}
          viewport={{ once: false, amount: 0.5 }}
          width={width[0]}
          height={height[0]}
          fill='#7000FF'
          stroke='#A76CF3'
          strokeWidth={1}
        />
      </svg>
      <svg
        width={width[1]}
        height={height[1]}
        viewBox={`0 0 ${width[1]} ${height[1]}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className?.[0] ?? ""}
      >
        <motion.circle
          variants={animation(duration[1], delay[1])}
          initial='hidden'
          animate={inview ? "visible" : ""}
          viewport={{ once: false, amount: 0.5 }}
          cx='7.55104'
          cy={height[1]}
          r={diameter2 ?? "5.85035"}
          fill='#A76CF3'
        />
        <motion.circle
          variants={animation(duration[2], delay[2])}
          initial='hidden'
          animate={inview ? "visible" : ""}
          viewport={{ once: false, amount: 0.5 }}
          cx='7.35036'
          cy={height[1]}
          r={diameter}
          stroke={color}
        />
        <mask id='path-3-inside-1_1648_769' fill='white'>
          <path d='M116 1L252 1V37H116V1Z' />
        </mask>
        <motion.line
          variants={animation(duration[3], delay[3])}
          initial='hidden'
          animate={inview ? "visible" : ""}
          viewport={{ once: false, amount: 0.5 }}
          stroke='#A76CF3'
          x1={linepot + 40}
          y1='37'
          x2={linepot + 40}
          y2='1'
        />
        <motion.line
          variants={animation(duration[4], delay[4])}
          initial='hidden'
          animate={inview ? "visible" : ""}
          viewport={{ once: false, amount: 0.5 }}
          x1='6.58855'
          y1={height[1]}
          x2={linepot}
          y2='17.7159'
          stroke='#A76CF3'
        />
        <motion.line
          variants={animation(duration[5], delay[5])}
          initial='hidden'
          animate={inview ? "visible" : ""}
          viewport={{ once: false, amount: 0.5 }}
          x1={linepot}
          y1='18.5'
          x2={linepot + 40}
          y2='18.5'
          stroke='#A76CF3'
        />
      </svg>
      <div className={className?.[1] ?? ""}>
        <motion.span
          variants={animation3(maxwidth, duration[6], delay[6])}
          initial='hidden'
          animate={inview ? "visible" : ""}
          viewport={{ once: true, amount: 0.5 }}
          className={className?.[2] ?? ""}
        >
          {text}
        </motion.span>
      </div>
      <motion.div
        variants={animation3(maxwidth, duration[7], delay[7])}
        initial='hidden'
        animate={inview ? "visible" : ""}
        viewport={{ once: true, amount: 0.5 }}
        className={className?.[3] ?? ""}
      >
        <motion.span
          variants={animation(duration[8], delay[8])}
          initial='hidden'
          animate={inview ? "visible" : ""}
          viewport={{ once: true, amount: 0.5 }}
          className={className?.[4] ?? ""}
        >
          {percentage}
        </motion.span>
      </motion.div>
    </div>
  );
};

export default Animation;
