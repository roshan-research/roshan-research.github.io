import { IconProps } from "@/shared/types";

const TopArrowIcon: React.FC<IconProps> = ({ width, height, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 42 42'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect
        x='1'
        y='1'
        width='40'
        height='40'
        rx='3'
        stroke='white'
        strokeWidth='0.5'
      />
      <path
        d='M21 28L21 14M21 14L26 18.7727M21 14L16 18.7727'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default TopArrowIcon;
