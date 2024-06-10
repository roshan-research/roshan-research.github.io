import { IconProps } from "@/shared/types";

const BackArrowIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M15 6H1M1 6L5.77273 1M1 6L5.77273 11'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default BackArrowIcon;
