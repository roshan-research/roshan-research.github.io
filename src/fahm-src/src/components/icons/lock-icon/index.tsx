import { FC } from "react";
import { IconProps } from "@/shared/types";

const LockIcon: FC<IconProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 112 121"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x={1}
        y={31.4336}
        width={110}
        height={88.5656}
        rx={19}
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.48 30.4338V24.52C32.48 11.5303 43.0102 1 56 1V1C68.9897 1 79.52 11.5303 79.52 24.52V30.4338"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M56 82L56 70"
        stroke="#88C4FF"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LockIcon;
