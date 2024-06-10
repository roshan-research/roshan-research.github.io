import { IconProps } from "@/shared/types";

const HarfIcon: React.FC<IconProps> = ({ width, height, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 300 300'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <rect
        x='0.5'
        y='0.5'
        width='299'
        height='299'
        rx='39.5'
        stroke='url(#paint0_linear_15964_1934)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M137.5 95C137.5 90.8579 134.142 87.5 130 87.5C125.858 87.5 122.5 90.8579 122.5 95V205C122.5 209.142 125.858 212.5 130 212.5C134.142 212.5 137.5 209.142 137.5 205V95ZM97.5 135C97.5 130.858 94.1421 127.5 90 127.5C85.8579 127.5 82.5 130.858 82.5 135V165C82.5 169.142 85.8579 172.5 90 172.5C94.1421 172.5 97.5 169.142 97.5 165L97.5 135ZM170 113.5C174.142 113.5 177.5 116.858 177.5 121V179C177.5 183.142 174.142 186.5 170 186.5C165.858 186.5 162.5 183.142 162.5 179V121C162.5 116.858 165.858 113.5 170 113.5ZM217.5 140C217.5 135.858 214.142 132.5 210 132.5C205.858 132.5 202.5 135.858 202.5 140V160C202.5 164.142 205.858 167.5 210 167.5C214.142 167.5 217.5 164.142 217.5 160V140Z'
        fill='url(#paint1_linear_15964_1934)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_15964_1934'
          x1='150'
          y1='0'
          x2='150'
          y2='300'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#26FD7B' />
          <stop offset='1' stopColor='#26FD7B' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_15964_1934'
          x1='151'
          y1='87.5'
          x2='151'
          y2='212.5'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#26FD7B' />
          <stop offset='1' stopColor='#26FD7B' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HarfIcon;
