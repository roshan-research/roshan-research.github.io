import { IconProps } from "@/shared/types";
import { FC } from "react";

const ChartIcon: FC<IconProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 28 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect y='5' width='6' height='25' rx='3' fill='#FAFAFA' />
      <rect
        x='11'
        y='12.8571'
        width='6'
        height='17.1429'
        rx='3'
        fill='#A76CF3'
      />
      <rect x='22' width='6' height='30' rx='3' fill='#A76CF3' />
    </svg>
  );
};

export default ChartIcon;
