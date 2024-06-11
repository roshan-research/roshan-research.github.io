const ResponseIcon: React.FC<IconsProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.25">
        <path
          d="M170.273 63H59C54.5817 63 51 66.5817 51 71V146.919C51 151.337 54.5817 154.919 59 154.919H155.09C155.568 154.919 156.03 155.09 156.393 155.402L178.273 174.182V71C178.273 66.5817 174.691 63 170.273 63Z"
          stroke="#4E69FE"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M163.273 56V56C163.273 51.5817 159.691 48 155.273 48H44C39.5817 48 36 51.5817 36 56V131.919C36 136.337 39.5817 139.919 44 139.919V139.919"
          stroke="#4E69FE"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M29 124.919V124.919C24.5817 124.919 21 121.337 21 116.919V41C21 36.5817 24.5817 33 29 33H140.273C144.691 33 148.273 36.5817 148.273 41V41"
          stroke="#4E69FE"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M87.4546 98.4551H142"
          stroke="#4E69FE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M87.4546 119.728H142"
          stroke="#4E69FE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default ResponseIcon;
