import { IconProps } from "@/components/icons/chart-icon";
import clsx from "clsx";
import { FC } from "react";

type FacilityProps = {
  Image: FC<IconProps>;
  width: number;
  height: number;
  title: string;
  text: string;
  left?: boolean;
};

const Facility: FC<FacilityProps> = ({
  Image,
  width,
  height,
  title,
  text,
  left,
}) => {
  return (
    <div className='relative'>
      <div className={clsx("absolute top-0", left ? "left-0" : "right-0")}>
        <Image width={width} height={height} />
      </div>
      <div
        className={clsx(
          "flex flex-col gap-[10px]",
          left ? "ml-[145px] mt-[120px]" : "mr-[205px] mt-[190px]"
        )}>
        <span className='text-[24px] font-normal text-[#A76CF3]'>{title}</span>
        <span className='max-w-[390px] text-[18px] font-light text-[#FAFAFA]'>
          {text}
        </span>
      </div>
    </div>
  );
};

export default Facility;
