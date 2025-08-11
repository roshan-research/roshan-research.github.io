import { FC } from "react";

type ActiveTabIconProps = {
  activeTab: number;
  currentTab: number;
};

const ActiveTabIcon: FC<ActiveTabIconProps> = ({ activeTab, currentTab }) => {
  if (activeTab === currentTab) {
    return (
      <svg
        width='38'
        height='35'
        viewBox='0 0 38 35'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <circle cx='19.501' cy='17.5' r='5' fill='#A76CF3' stroke='#A76CF3' />
        <path
          d='M27.0495 1.5L10.9525 1.5C10.7101 1.50133 10.4724 1.56795 10.2633 1.69314C10.0541 1.81832 9.88102 1.99765 9.76134 2.21304L1.67879 16.8217C1.5623 17.028 1.50098 17.2619 1.50098 17.5C1.50098 17.7381 1.5623 17.972 1.67879 18.1783L9.76134 32.787C9.88102 33.0023 10.0541 33.1817 10.2633 33.3069C10.4724 33.4321 10.7101 33.4987 10.9525 33.5L27.0495 33.5C27.2918 33.4987 27.5296 33.4321 27.7387 33.3069C27.9478 33.1817 28.1209 33.0023 28.2406 32.787L36.3232 18.1783C36.4397 17.972 36.501 17.7381 36.501 17.5C36.501 17.2619 36.4397 17.028 36.3232 16.8217L28.2406 2.21304C28.1209 1.99765 27.9478 1.81832 27.7387 1.69314C27.5296 1.56795 27.2918 1.50133 27.0495 1.5Z'
          stroke='#A76CF3'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    );
  } else {
    return (
      <svg
        width='11'
        height='11'
        viewBox='0 0 11 11'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <circle cx='5.50098' cy='5.5' r='5.5' fill='#D9D9D9' />
      </svg>
    );
  }
};

export default ActiveTabIcon;
