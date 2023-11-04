import { IconProps } from "@/shared/types";
import { FC } from "react";

const EnginGlassIcon: FC<IconProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 37 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_2288_899)'>
        <path
          d='M33 16.0829V17.5089C32.9981 20.8513 31.9158 24.1036 29.9145 26.7807C27.9132 29.4578 25.1001 31.4162 21.8948 32.3639C18.6895 33.3116 15.2637 33.1978 12.1284 32.0395C8.9931 30.8811 6.31621 28.7403 4.49699 25.9363C2.67776 23.1323 1.81368 19.8154 2.0336 16.4802C2.25352 13.1449 3.54567 9.97017 5.71733 7.42933C7.889 4.88849 10.8238 3.11771 14.0841 2.3811C17.3444 1.64448 20.7554 1.98149 23.8085 3.34187'
          stroke='#FAFAFA'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M26.498 29.6288L35.2884 38.2982'
          stroke='#FAFAFA'
          stroke-width='3'
          stroke-linecap='round'
        />
        <path
          d='M33 6L17.6154 21L13 16.5045'
          stroke='#A76CF3'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_2288_899'>
          <rect width='37' height='40' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default EnginGlassIcon;
