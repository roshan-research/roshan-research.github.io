import clsx from "clsx";

type EmptyContainerProps = {
  leftBorder?: boolean;
  rightBorder?: boolean;
  topBorder?: boolean;
  bottomBorder?: boolean;
};

const EmptyContainer: React.FC<EmptyContainerProps> = ({
  bottomBorder,
  leftBorder,
  rightBorder,
  topBorder,
}) => {
  return (
    <div
      className={clsx(
        "w-[240px] h-[240px] border-[1px] border-[#303030] bp700:w-[140px] bp700:h-[140px]",
        leftBorder === false && "border-l-0",
        rightBorder === false && "border-r-0",
        topBorder === false && "border-t-0",
        bottomBorder === false && "border-b-0"
      )}
    />
  );
};

export default EmptyContainer;
