import { FC } from "react";
import { IconProps } from "@/shared/types";

const IntelSearchIcon: FC<IconProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M59.9998 107.092H48.2394C35.8726 107.092 29.6892 107.092 24.9657 104.685C20.8108 102.568 17.4327 99.1902 15.3157 95.0352C12.9089 90.3117 12.9089 84.1283 12.9089 71.7615V48.2406C12.9089 35.8738 12.9089 29.6904 15.3157 24.9669C17.4327 20.812 20.8108 17.4339 24.9657 15.3169C29.6892 12.9102 35.8726 12.9102 48.2394 12.9102H81.9756C84.793 12.9102 86.2017 12.9102 87.3872 13.0386C97.7002 14.1557 105.845 22.3007 106.962 32.6137C107.091 33.7992 107.091 35.2079 107.091 38.0253V38.0253"
        stroke="white"
        strokeWidth={3}
        strokeLinecap="round"
      />
      <path
        d="M110.119 104.594L115.975 110.449"
        stroke="#88C4FF"
        strokeWidth={3}
        strokeLinecap="round"
      />
      <circle
        cx={90.7978}
        cy={79.7558}
        r={23.3417}
        stroke="#88C4FF"
        strokeWidth={3}
      />
      <path
        d="M38 46L78.3636 46"
        stroke="white"
        strokeWidth={3}
        strokeLinecap="round"
      />
      <path
        d="M38 60H58.1818"
        stroke="white"
        strokeWidth={3}
        strokeLinecap="round"
      />
      <path
        d="M38 74H48.0909"
        stroke="white"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default IntelSearchIcon;
