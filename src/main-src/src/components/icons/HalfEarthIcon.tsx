import { IconProps } from "@/shared/types";

const HalfEarthIcon: React.FC<IconProps> = ({ width, height, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 630 1006'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M503 1.00004C780.247 1.00003 1005 225.753 1005 503C1005 780.247 780.247 1005 503 1005C225.753 1005 0.99999 780.247 0.999978 503C0.999966 225.753 225.753 1.00005 503 1.00004Z'
        stroke='url(#paint0_linear_15850_699)'
        strokeWidth='2'
      />
      <defs>
        <linearGradient
          id='paint0_linear_15850_699'
          x1='1006'
          y1='503'
          x2='-2.19868e-05'
          y2='503'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FABE46' />
          <stop offset='0.3' />
          <stop offset='0.7' />
          <stop offset='1' stopColor='#FABE46' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HalfEarthIcon;
