import { FC } from "react";
import { IconProps } from "@/shared/types";

const CustomIcon: FC<IconProps> = ({ width = 20, height = 20 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 0H11C12.2887 0 13.3333 1.04467 13.3333 2.33333V4.33333C13.3333 5.622 14.378 6.66667 15.6667 6.66667H17.6667C18.9553 6.66667 20 7.71134 20 9V11C20 12.2887 18.9553 13.3333 17.6667 13.3333H15.6667C14.378 13.3333 13.3333 14.378 13.3333 15.6667V17.6667C13.3333 18.9553 12.2887 20 11 20H9C7.71134 20 6.66667 18.9553 6.66667 17.6667V15.6667C6.66667 14.378 7.71134 13.3333 9 13.3333H11C12.2887 13.3333 13.3333 12.2887 13.3333 11V9C13.3333 7.71134 12.2887 6.66667 11 6.66667H9C7.71134 6.66667 6.66667 5.622 6.66667 4.33333V2.33333C6.66667 1.04467 7.71134 0 9 0Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M2.33333 6.66667C1.04467 6.66667 0 7.71134 0 9V11C0 12.2887 1.04467 13.3333 2.33333 13.3333H4.33333C5.622 13.3333 6.66667 12.2887 6.66667 11V9C6.66667 7.71134 5.622 6.66667 4.33333 6.66667H2.33333Z"
        fill="url(#paint1_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="0"
          y1="10"
          x2="20"
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DE30F5" />
          <stop offset="1" stopColor="#71DBFA" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="0"
          y1="10"
          x2="20"
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DE30F5" />
          <stop offset="1" stopColor="#71DBFA" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CustomIcon;
