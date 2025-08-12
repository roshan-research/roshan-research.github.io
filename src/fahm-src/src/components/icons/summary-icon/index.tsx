import { FC } from "react";
import { IconProps } from "@/shared/types";

const Summary: FC<IconProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 98 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x={1.90942}
        y={1.91016}
        width={94.1818}
        height={94.1818}
        rx={20.9294}
        stroke="white"
        strokeWidth={3}
      />
      <path
        d="M56 56H44"
        stroke="#88C4FF"
        strokeWidth={3}
        strokeLinecap="round"
      />
      <path
        d="M70 56H66"
        stroke="#88C4FF"
        strokeWidth={3}
        strokeLinecap="round"
      />
      <path
        d="M56 42H28"
        stroke="#88C4FF"
        strokeWidth={3}
        strokeLinecap="round"
      />
      <path
        d="M70 42H66"
        stroke="#88C4FF"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Summary;
