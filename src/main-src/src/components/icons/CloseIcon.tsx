import { IconProps } from "@/shared/types";

const CloseIcon: React.FC<IconProps> = ({ width, height, ...props }) => {
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
        d='M21.8232 46.8232C21.5303 47.1161 21.5303 47.591 21.8232 47.8839C22.1161 48.1768 22.591 48.1768 22.8838 47.8839L35 35.7678L47.5719 48.3397C47.8648 48.6326 48.3397 48.6326 48.6326 48.3397C48.9255 48.0468 48.9255 47.572 48.6326 47.2791L36.0606 34.7071L48.3397 22.428C48.6326 22.1351 48.6326 21.6603 48.3397 21.3674C48.0468 21.0745 47.5719 21.0745 47.279 21.3674L35 33.6464L23.1767 21.8232C22.8838 21.5303 22.409 21.5303 22.1161 21.8232C21.8232 22.1161 21.8232 22.591 22.1161 22.8839L33.9393 34.7071L21.8232 46.8232Z'
        fill='white'
      />
    </svg>
  );
};

export default CloseIcon;
