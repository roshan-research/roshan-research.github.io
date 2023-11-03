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
            "absolute -top-[17px] left-[216px] whitespace-nowrap text-[20px] font-[500] text-[#FAFAFA] sm:text-sm", // text span container
            "flex justify-end overflow-hidden sm:pt-[7px]", // text span
            "absolute -top-[19px] left-[208px] h-[36px] w-[136px] bg-[#a86cf333] sm:w-[50px]", // text background
            "absolute top-[40px] whitespace-nowrap text-sm text-white", // percentage text
            "hidden", // bigger square
          ]}
          width={[120, 270]}
          height={[150, 80]}
          duration={[
            {
              bsqr: 0, //  big square
              crc: 0.5, // circle
              crcb: 0.5, // circle border
              vrln: 0.4, // vetical line
              anln: 0.4, // angle line
              hrln: 0.4, // horizontal line
              txt: 0.4, // text
              txtbg: 0.4, // text background
              pct: 1.5, // percentage
            },
          ]}
          delay={[
            {
              bsqr: 0, // big square
              crc: 2, // circle
              crcb: 2.3, // circle border
              vrln: 3.6, // vetical line
              anln: 2.8, // angle line
              hrln: 3.1, // horizontal line
              txt: 3.65, // text
              txtbg: 3.6, // text background
              pct: 4, // percentage
            },
          ]}
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
