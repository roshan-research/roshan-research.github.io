import { IconProps } from "@/shared/types";

const AlefbaIcon: React.FC<IconProps> = ({ width, height, colors }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 200 200'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.333333 43.2C0.333333 35.6338 0.333593 29.9792 0.700079 25.4936C1.06625 21.0119 1.79635 17.7266 3.23983 14.8936C5.79645 9.87593 9.87593 5.79645 14.8936 3.23983C17.7266 1.79635 21.0119 1.06625 25.4936 0.700079C29.9792 0.333593 35.6338 0.333333 43.2 0.333333H156.8C164.366 0.333333 170.021 0.333593 174.506 0.700079C178.988 1.06625 182.273 1.79635 185.106 3.23983C190.124 5.79645 194.204 9.87593 196.76 14.8936C198.204 17.7266 198.934 21.0119 199.3 25.4936C199.666 29.9792 199.667 35.6338 199.667 43.2V156.8C199.667 164.366 199.666 170.021 199.3 174.506C198.934 178.988 198.204 182.273 196.76 185.106C194.204 190.124 190.124 194.204 185.106 196.76C182.273 198.204 178.988 198.934 174.506 199.3C170.021 199.666 164.366 199.667 156.8 199.667H43.2C35.6338 199.667 29.9792 199.666 25.4936 199.3C21.0119 198.934 17.7266 198.204 14.8936 196.76C9.87593 194.204 5.79645 190.124 3.23983 185.106C1.79635 182.273 1.06625 178.988 0.700079 174.506C0.333593 170.021 0.333333 164.366 0.333333 156.8V43.2Z'
        stroke='url(#paint0_linear_16195_1610)'
        strokeWidth='0.666667'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M123.333 75.2C123.333 72.213 123.333 70.7195 123.915 69.5787C124.426 68.5751 125.242 67.7592 126.245 67.2479C127.386 66.6666 128.88 66.6666 131.867 66.6666H144.133C147.12 66.6666 148.614 66.6666 149.755 67.2479C150.758 67.7592 151.574 68.5751 152.085 69.5787C152.667 70.7195 152.667 72.213 152.667 75.2V87.4666C152.667 90.4536 152.667 91.947 152.085 93.0879C151.574 94.0914 150.758 94.9073 149.755 95.4187C148.614 96 147.12 96 144.133 96H131.867C128.88 96 127.386 96 126.245 95.4187C125.242 94.9073 124.426 94.0914 123.915 93.0879C123.333 91.947 123.333 90.4536 123.333 87.4666V75.2ZM47 72C47 69.2385 49.2386 67 52 67L106.667 67C109.428 67 111.667 69.2385 111.667 72C111.667 74.7614 109.428 77 106.667 77L52 77C49.2386 77 47 74.7614 47 72ZM52 123C49.2386 123 47 125.239 47 128C47 130.761 49.2386 133 52 133L148 133C150.761 133 153 130.761 153 128C153 125.239 150.761 123 148 123L52 123ZM47 109.333C47 106.572 49.2386 104.333 52 104.333L148 104.333C150.761 104.333 153 106.572 153 109.333C153 112.095 150.761 114.333 148 114.333L52 114.333C49.2386 114.333 47 112.095 47 109.333ZM52 85.6666C49.2386 85.6666 47 87.9052 47 90.6666C47 93.428 49.2386 95.6666 52 95.6666L106.667 95.6666C109.428 95.6666 111.667 93.4281 111.667 90.6666C111.667 87.9052 109.428 85.6666 106.667 85.6666L52 85.6666Z'
        fill='url(#paint1_linear_16195_1610)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_16195_1610'
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
          id='paint1_linear_16195_1610'
          x1='100.357'
          y1='66.6666'
          x2='100.357'
          y2='142.667'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor={colors![1]} />
          <stop offset='1' stopColor={colors![1]} stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AlefbaIcon;