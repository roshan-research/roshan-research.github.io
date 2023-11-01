import { IconProps } from "@/shared/types";
import { FC } from "react";
import ButterflyImg from "@/assets/images/article-main/butterfly.webp";
import Animation from "@/components/animation";

const Butterfly: FC<IconProps> = ({ width, height }) => {
  return (
    <div className='relative h-fit w-fit'>
      <div className='absolute left-0 h-fit w-fit sm:-left-[10vw] sm:-top-[20px]'>
        <Animation
          className={[
            "absolute -top-[20px] left-[128px] overflow-visible", // lines and circle
            "absolute -top-[17px] left-[216px] whitespace-nowrap text-[20px] font-[500] text-[#FAFAFA] sm:text-sm", // text container
            "flex justify-end overflow-hidden sm:pt-[7px]", // text span
            "absolute -top-[19px] left-[208px] h-[36px] w-[136px] bg-[#a86cf333] sm:w-[50px]", // text background
            "absolute top-[40px] whitespace-nowrap text-sm text-white", // percentage text
            "hidden", // bigger square
          ]}
          width={[120, 270]}
          height={[150, 80]}
          duration={[0, 0.5, 0.5, 0.4, 0.4, 0.4, 0.4, 0.4, 1.5]} // big square - circle border - circle - angle line - horizontal line - vetical line - text - text background - percentage
          delay={[0, 2, 2.3, 3.6, 2.8, 3.1, 3.65, 3.6, 4]} // big square - circle border - circle - angle line - horizontal line - vetical line - text - text background - percentage
          maxwidth='65px'
          inview={true}
          linepot={40}
          text='پروانه'
          percentage=''
          diameter={10}
          color='#A76CF3'
        />
      </div>
      <img
        src={ButterflyImg}
        alt='butterfly'
        width={width}
        height={height}
        className='sm:w-[57vw]'
      />
    </div>
  );
};

export default Butterfly;
