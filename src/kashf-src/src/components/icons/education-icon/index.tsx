import { FC } from "react";
import { IconProps } from "@/shared/types";

const EducationIcon: FC<IconProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 110 110'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g opacity='0.25'>
        <path
          d='M56.1496 86.9404C36.5322 86.9404 20.6274 77.1063 20.6274 61.369V35.7976H91.6735V61.369C91.6735 74.5925 75.7671 86.9404 56.1496 86.9404Z'
          fill='#390181'
        />
        <path
          d='M105.813 25.546L62.5663 1.95216C60.2106 0.667673 57.6232 0 55.0013 0C52.3793 0 49.792 0.667673 47.4363 1.95216L4.19114 25.546C2.90517 26.2472 1.82677 27.3458 1.0842 28.7111C0.341632 30.0764 -0.0338553 31.651 0.00239785 33.2475C0.038651 34.8441 0.485119 36.3954 1.2887 37.717C2.09228 39.0386 3.21916 40.0749 4.5353 40.7026L10.308 43.4704L48.2161 61.573C50.3579 62.5955 52.6633 63.1227 54.993 63.1227C57.3226 63.1227 59.628 62.5955 61.7699 61.573L99.6779 43.4704L105.456 40.7137C106.774 40.0872 107.903 39.0509 108.709 37.7283C109.514 36.4057 109.961 34.8527 109.998 33.2542C110.034 31.6558 109.657 30.0794 108.913 28.7131C108.169 27.3467 107.088 26.2479 105.8 25.5478L105.813 25.546Z'
          fill='#A76CF3'
        />
        <path
          d='M91.6759 97.1688C91.0683 97.1688 90.4855 96.8995 90.0558 96.4201C89.6262 95.9406 89.3848 95.2904 89.3848 94.6124V49.5073L57.1108 31.0408C56.5697 30.7309 56.1612 30.1937 55.975 29.5477C55.7889 28.9016 55.8404 28.1995 56.1182 27.5958C56.396 26.992 56.8774 26.5362 57.4564 26.3285C58.0354 26.1208 58.6647 26.1782 59.2058 26.4882L93.9671 46.3832V94.6179C93.9658 95.295 93.7238 95.9438 93.2943 96.422C92.8647 96.9002 92.2827 97.1688 91.6759 97.1688Z'
          fill='#A76CF3'
        />
        <path
          d='M56.1468 35.7979C61.8427 35.7979 66.4603 32.3634 66.4603 28.1267C66.4603 23.8901 61.8427 20.4556 56.1468 20.4556C50.4508 20.4556 45.8333 23.8901 45.8333 28.1267C45.8333 32.3634 50.4508 35.7979 56.1468 35.7979Z'
          fill='#390181'
        />
        <path
          d='M91.6713 109.958C96.7347 109.958 100.839 105.378 100.839 99.7284C100.839 94.0788 96.7347 89.4989 91.6713 89.4989C86.608 89.4989 82.5034 94.0788 82.5034 99.7284C82.5034 105.378 86.608 109.958 91.6713 109.958Z'
          fill='#A76CF3'
        />
      </g>
    </svg>
  );
};

export default EducationIcon;