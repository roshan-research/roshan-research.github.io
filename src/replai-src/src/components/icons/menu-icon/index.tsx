const MenuIcon: React.FC<IconsProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 15.5H30" stroke="white" strokeLinecap="round" />
      <path d="M10 24.5H30" stroke="white" strokeLinecap="round" />
    </svg>
  );
};

export default MenuIcon;
