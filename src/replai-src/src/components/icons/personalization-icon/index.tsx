const PersonalizationIcon: React.FC<IconsProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 12H17.5M37 12H23.5" stroke="white" strokeLinecap="round" />
      <path d="M7 22H26.5M37 22H32.5" stroke="white" strokeLinecap="round" />
      <path d="M7 32H12.5M37 32H18.5" stroke="white" strokeLinecap="round" />
      <rect
        x="17.5"
        y="9.5"
        width="6"
        height="5"
        rx="0.5"
        stroke="#4E69FE"
        strokeLinecap="round"
      />
      <rect
        x="26.5"
        y="19.5"
        width="6"
        height="5"
        rx="0.5"
        stroke="#4E69FE"
        strokeLinecap="round"
      />
      <rect
        x="12.5"
        y="29.5"
        width="6"
        height="5"
        rx="0.5"
        stroke="#4E69FE"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PersonalizationIcon;
