import { IconProps } from "@/shared/types";

const fahmSquircle: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      {...props}
      viewBox='0 0 300 300'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.5 150C0.5 119.13 2.15473 94.3578 6.55489 74.5589C10.9538 54.7656 18.0899 39.9735 29.0317 29.0317C39.9735 18.0899 54.7656 10.9538 74.5589 6.55489C94.3578 2.15473 119.13 0.5 150 0.5C180.87 0.5 205.642 2.15473 225.441 6.55489C245.234 10.9538 260.027 18.0899 270.968 29.0317C281.91 39.9735 289.046 54.7656 293.445 74.5589C297.845 94.3578 299.5 119.13 299.5 150C299.5 180.87 297.845 205.642 293.445 225.441C289.046 245.234 281.91 260.027 270.968 270.968C260.027 281.91 245.234 289.046 225.441 293.445C205.642 297.845 180.87 299.5 150 299.5C119.13 299.5 94.3578 297.845 74.5589 293.445C54.7656 289.046 39.9735 281.91 29.0317 270.968C18.0899 260.027 10.9538 245.234 6.55489 225.441C2.15473 205.642 0.5 180.87 0.5 150Z'
        fill='url(#paint0_linear_16406_1419)'
        stroke='url(#paint1_linear_16406_1419)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_16406_1419'
          x1='150'
          y1='0'
          x2='150'
          y2='300'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#6658CA' stopOpacity='0.2' />
          <stop offset='0.2' stopColor='#6658CA' stopOpacity='0' />
          <stop offset='0.85' stopColor='#6658CA' stopOpacity='0' />
          <stop offset='1' stopColor='#6658CA' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_16406_1419'
          x1='150'
          y1='0'
          x2='150'
          y2='300'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#7D72DA' />
          <stop offset='1' stopColor='#7D72DA' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default fahmSquircle;
