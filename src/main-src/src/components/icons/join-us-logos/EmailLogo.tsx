import { IconProps } from "@/shared/types";

const EmailLogo: React.FC<IconProps> = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 200 200'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='0.5'
        y='0.5'
        width='199'
        height='199'
        rx='29.5'
        stroke='url(#paint0_linear_15856_2847)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M80.0099 90.7556C80.0033 90.8365 80 90.9182 80 91.0008V109.001C80 110.658 81.3431 112.001 83 112.001H117C118.657 112.001 120 110.658 120 109.001V91.0008C120 90.9182 119.997 90.8365 119.99 90.7556L102.315 101.361C100.89 102.216 99.1098 102.216 97.6848 101.361L80.0099 90.7556ZM118.277 88.2852C117.889 88.1028 117.457 88.0008 117 88.0008H83C82.5435 88.0008 82.1108 88.1028 81.7234 88.2852L99.2283 98.7881C99.7033 99.0731 100.297 99.0731 100.772 98.7881L118.277 88.2852Z'
        fill={color}
      />
      <defs>
        <linearGradient
          id='paint0_linear_15856_2847'
          x1='100'
          y1='0'
          x2='100'
          y2='200'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor={color} />
          <stop offset='1' stopColor={color} stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default EmailLogo;
