import { IconProps } from "@/shared/types";

const AlefbaSquircle: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      {...props}
      viewBox='0 0 301 300'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.5 150C0.5 119.13 2.16024 94.358 6.57503 74.5592C10.9885 54.7662 18.1483 39.9741 29.1267 29.0323C40.1052 18.0903 54.947 10.954 74.8067 6.55497C94.672 2.15473 119.527 0.5 150.5 0.5C181.473 0.5 206.328 2.15473 226.193 6.55497C246.053 10.954 260.895 18.0903 271.873 29.0323C282.852 39.9741 290.011 54.7662 294.425 74.5592C298.84 94.358 300.5 119.13 300.5 150C300.5 180.87 298.84 205.642 294.425 225.441C290.011 245.234 282.852 260.026 271.873 270.968C260.895 281.91 246.053 289.046 226.193 293.445C206.328 297.845 181.473 299.5 150.5 299.5C119.527 299.5 94.672 297.845 74.8067 293.445C54.947 289.046 40.1052 281.91 29.1267 270.968C18.1483 260.026 10.9885 245.234 6.57503 225.441C2.16024 205.642 0.5 180.87 0.5 150Z'
        fill='url(#paint0_linear_16402_1442)'
        stroke='url(#paint1_linear_16402_1442)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_16402_1442'
          x1='150.5'
          y1='0'
          x2='150.5'
          y2='300'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF6200' stopOpacity='0.2' />
          <stop offset='0.2' stopColor='#FF6200' stopOpacity='0' />
          <stop offset='0.85' stopColor='#FF6200' stopOpacity='0' />
          <stop offset='1' stopColor='#FF6200' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_16402_1442'
          x1='150.5'
          y1='0'
          x2='150.5'
          y2='300'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF6200' />
          <stop offset='1' stopColor='#FF6200' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AlefbaSquircle;
