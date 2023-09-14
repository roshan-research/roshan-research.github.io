import { IconProps } from "@/shared/types";
import { FC } from "react";

type FeaturesProps = {
  Icon: FC<IconProps>;
  width: number;
  height: number;
  title: string;
  text: string;
};

export const Features: FC<FeaturesProps> = ({
  Icon,
  width,
  height,
  title,
  text,
}) => {
  return (
    <div>
      <Icon width={width} height={height} />
      <div className='-mt-10 flex flex-col items-start gap-[5px] pr-[58px]'>
        <span className='text-[28px] font-[700]'>{title}</span>
        <span className='max-w-[450px] text-[20px] font-light'>{text}</span>
      </div>
    </div>
  );
};
