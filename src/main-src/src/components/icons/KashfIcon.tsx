import { IconProps } from "@/shared/types";

const fahmIcon: React.FC<IconProps> = ({ width, height, ...props }) => {
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
        stroke='url(#paint0_linear_15964_1921)'
      />
      <path
        d='M118.57 136.547L69.1667 194.827C64.7604 200.025 68.4549 208 75.2692 208H122.37C125.586 208 128.489 206.075 129.74 203.113L144.511 168.148C147.237 161.695 156.353 161.614 159.193 168.017L174.819 203.244C176.102 206.136 178.968 208 182.132 208H225.731C232.545 208 236.24 200.025 231.833 194.827L182.43 136.547C181.205 135.102 180.532 133.269 180.532 131.374V99C180.532 94.5817 176.951 91 172.532 91H128.468C124.049 91 120.468 94.5817 120.468 99V131.374C120.468 133.269 119.795 135.102 118.57 136.547Z'
        fill='url(#paint1_linear_15964_1921)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_15964_1921'
          x1='150'
          y1='0'
          x2='150'
          y2='300'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#7D72DA' />
          <stop offset='1' stopColor='#7D72DA' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_15964_1921'
          x1='150.5'
          y1='88.7735'
          x2='150.5'
          y2='208'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#6356C6' />
          <stop offset='1' stopColor='#6356C6' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default fahmIcon;
