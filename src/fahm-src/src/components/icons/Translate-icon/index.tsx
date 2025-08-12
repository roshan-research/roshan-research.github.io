import { FC } from "react";
import { IconProps } from "@/shared/types";

const TranslateIcon: FC<IconProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 98 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x={1.90894}
        y={1.91016}
        width={94.1818}
        height={94.1818}
        rx={20.9293}
        stroke="white"
        strokeWidth={3}
      />
      <path
        d="M33.3638 69.3636L38.9698 55.9091M67.0001 69.3636L61.3941 55.9091M38.9698 55.9091H61.3941M38.9698 55.9091L50.1819 29L61.3941 55.9091"
        stroke="#88C4FF"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 35.7273L31.1994 33.0104C32.2756 30.5727 34.6891 29 37.3537 29H68.6818"
        stroke="#88C4FF"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TranslateIcon;
