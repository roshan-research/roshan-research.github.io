import { IconProps } from "@/shared/types";

const KashfIcon: React.FC<IconProps> = ({ width, height, colors }) => {
  return (
    <svg
      width='200'
      height='200'
      viewBox='0 0 200 200'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.333333 43.2C0.333333 35.6338 0.333593 29.9792 0.700079 25.4936C1.06625 21.0119 1.79635 17.7266 3.23983 14.8936C5.79645 9.87593 9.87593 5.79645 14.8936 3.23983C17.7266 1.79635 21.0119 1.06625 25.4936 0.700079C29.9792 0.333593 35.6338 0.333333 43.2 0.333333H156.8C164.366 0.333333 170.021 0.333593 174.506 0.700079C178.988 1.06625 182.273 1.79635 185.106 3.23983C190.124 5.79645 194.204 9.87593 196.76 14.8936C198.204 17.7266 198.934 21.0119 199.3 25.4936C199.666 29.9792 199.667 35.6338 199.667 43.2V156.8C199.667 164.366 199.666 170.021 199.3 174.506C198.934 178.988 198.204 182.273 196.76 185.106C194.204 190.124 190.124 194.204 185.106 196.76C182.273 198.204 178.988 198.934 174.506 199.3C170.021 199.666 164.366 199.667 156.8 199.667H43.2C35.6338 199.667 29.9792 199.666 25.4936 199.3C21.0119 198.934 17.7266 198.204 14.8936 196.76C9.87593 194.204 5.79645 190.124 3.23983 185.106C1.79635 182.273 1.06625 178.988 0.700079 174.506C0.333593 170.021 0.333333 164.366 0.333333 156.8V43.2Z'
        stroke='url(#paint0_linear_16195_1623)'
        strokeWidth='0.666667'
      />
      <path
        d='M79.046 91.0316L46.1105 129.885C43.173 133.35 45.636 138.667 50.1788 138.667H81.5796C83.7231 138.667 85.6584 137.383 86.4925 135.409L96.34 112.099C98.1574 107.797 104.235 107.743 106.128 112.011L116.545 135.496C117.4 137.424 119.311 138.667 121.42 138.667H150.487C155.029 138.667 157.492 133.35 154.555 129.885L121.619 91.0316C120.803 90.0681 120.354 88.846 120.354 87.5829V66C120.354 63.0544 117.967 60.6666 115.021 60.6666H85.6444C82.6989 60.6666 80.311 63.0544 80.311 66V87.5829C80.311 88.846 79.8628 90.0681 79.046 91.0316Z'
        fill='url(#paint1_linear_16195_1623)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_16195_1623'
          x1='100'
          y1='0'
          x2='100'
          y2='200'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor={colors![0]} />
          <stop offset='1' stopColor={colors![0]} stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_16195_1623'
          x1='100.333'
          y1='59.1823'
          x2='100.333'
          y2='138.667'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor={colors![1]} />
          <stop offset='1' stopColor={colors![1]} stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default KashfIcon;