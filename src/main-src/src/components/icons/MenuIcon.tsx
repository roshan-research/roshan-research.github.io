import { IconProps } from "@/shared/types";

const MenuIcon: React.FC<IconProps> = ({ width, height, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 70 70'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17 27.75C16.5858 27.75 16.25 28.0858 16.25 28.5C16.25 28.9142 16.5858 29.25 17 29.25H53C53.4142 29.25 53.75 28.9142 53.75 28.5C53.75 28.0858 53.4142 27.75 53 27.75H17ZM17 40.75C16.5858 40.75 16.25 41.0858 16.25 41.5C16.25 41.9142 16.5858 42.25 17 42.25H53C53.4142 42.25 53.75 41.9142 53.75 41.5C53.75 41.0858 53.4142 40.75 53 40.75H17Z'
        fill='white'
      />
    </svg>
  );
};

export default MenuIcon;
