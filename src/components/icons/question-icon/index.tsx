import { IconProps } from "@/shared/types";
import { FC } from "react";

const QuestionIcon: FC<IconProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 36 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_2288_872)'>
        <path
          d='M18 34.875C27.3198 34.875 34.875 27.3198 34.875 18C34.875 8.68019 27.3198 1.125 18 1.125C8.68019 1.125 1.125 8.68019 1.125 18C1.125 27.3198 8.68019 34.875 18 34.875Z'
          stroke='#FAFAFA'
          stroke-width='3'
          stroke-miterlimit='10'
          stroke-linejoin='round'
        />
        <path
          d='M17.9998 29.2075C18.5625 29.2075 19.0187 28.7514 19.0187 28.1887C19.0187 27.626 18.5625 27.1698 17.9998 27.1698C17.4371 27.1698 16.981 27.626 16.981 28.1887C16.981 28.7514 17.4371 29.2075 17.9998 29.2075Z'
          fill='#A76CF3'
        />
        <path
          d='M18 24.75V21.8081C18 20.187 18.9866 18.7301 20.4919 18.1283C22.3841 17.3711 23.625 15.5385 23.625 13.5C23.625 10.3939 21.1061 7.875 18 7.875C14.8939 7.875 12.375 10.3939 12.375 13.5'
          stroke='#A76CF3'
          stroke-width='3'
          stroke-miterlimit='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_2288_872'>
          <rect width='36' height='36' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default QuestionIcon;
