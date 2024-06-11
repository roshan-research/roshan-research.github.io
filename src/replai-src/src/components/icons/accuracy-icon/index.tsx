const AccuracyIcon: React.FC<IconsProps> = ({ width, height }) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M96.0005 27.3809V29.384C60.1238 31.3842 31.3847 60.1235 29.3847 96.0003H27.3816C29.3861 59.0186 59.0189 29.3856 96.0005 27.3809ZM170.617 96.0003C168.617 60.1234 139.877 31.384 104.001 29.3839V27.3809C140.982 29.3854 170.615 59.0185 172.62 96.0003H170.617ZM104.001 170.616C139.877 168.616 168.616 139.877 170.617 104H172.62C170.615 140.982 140.982 170.615 104.001 172.619V170.616ZM96.0005 170.616C60.124 168.616 31.385 139.877 29.3847 104H27.3816C29.3864 140.982 59.0191 170.614 96.0005 172.619V170.616Z"
          fill="#4E69FE"
        />
        <path
          d="M145.454 100H190.909"
          stroke="#4E69FE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.09082 100L54.5454 100"
          stroke="#4E69FE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M99.9995 54.5449V9.09038"
          stroke="#4E69FE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M99.9995 190.909L99.9995 145.455"
          stroke="#4E69FE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default AccuracyIcon;
