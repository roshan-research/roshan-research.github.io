const UserIcon: React.FC<IconsProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="36" height="36" rx="2" fill="#00C999" />
      <circle cx="18" cy="14.5" r="4.5" fill="white" />
      <path
        d="M11 25C11 22.7909 12.7909 21 15 21H21C23.2091 21 25 22.7909 25 25C25 26.1046 24.1046 27 23 27H13C11.8954 27 11 26.1046 11 25Z"
        fill="white"
      />
    </svg>
  );
};

export default UserIcon;
