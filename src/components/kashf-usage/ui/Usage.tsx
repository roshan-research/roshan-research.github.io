import clsx from "clsx";
import { FC } from "react";

type UsageProps = {
  line: string;
  image: string;
  size: number;
  lineSize: number;
  left: boolean;
  title: string;
  text: string;
};

const Usage: FC<UsageProps> = ({
  line,
  image,
  size,
  lineSize,
  left,
  title,
  text,
}) => {
  return (
    <div className='flex flex-col items-start gap-5'>
      <div className='relative'>
        <img
          src={line}
          alt=''
          width={lineSize}
          className={clsx(
            "absolute -top-5",
            left ? "-left-4" : "-right-4 rotate-90"
          )}
        />
        <img src={image} alt='' className='rounded-[60px]' width={size} />
      </div>
      <span className='text-[24px] font-normal text-[#A76CF3]'>{title}</span>
      <span className='max-w-[480px] text-[18px] font-light'>{text}</span>
    </div>
  );
};

export default Usage;
