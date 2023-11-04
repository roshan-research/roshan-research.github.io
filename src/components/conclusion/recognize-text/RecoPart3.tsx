import { useState } from "react";
import { motion } from "framer-motion";
import Tablet from "@/assets/images/conclusion/tablet.png";
import User from "@/assets/images/conclusion/user-3.png";
import { recognizeText_border_animation } from "@/components/animations/main";
import { BorderSvg3 } from "@/components/svg";
import Animation from "@/components/animation";

const RecoPart3 = () => {
  const [inview, setInview] = useState<boolean>(false);
  return (
    <motion.div
      onViewportEnter={() => setInview(true)}
      className='relative flex h-[277px] w-[376px] flex-col items-center bg-[#303030] px-[33px] py-6 text-[#FAFAFA] sm:h-auto sm:w-[350px] custombp5:border-2 custombp5:border-[#A76CF3]'
    >
      <BorderSvg3
        width={376}
        height={278}
        animation={recognizeText_border_animation}
        inview={inview}
      />
      <div className='absolute -top-[80px] left-5 h-fit w-fit sm:hidden'>
        <Animation
          className={[
            "absolute left-0 top-0 overflow-visible", // lines and circle
            "absolute left-[185px] top-0 whitespace-nowrap text-[20px] font-[500] text-[#FAFAFA]", // text span container
            "ml-2 mt-[2px] flex justify-end overflow-hidden", // text span
            "absolute left-[185px] top-[1px] h-[36px] w-[136px] bg-[#a86cf333]", // text background
            "absolute top-[40px] whitespace-nowrap text-[10px] text-white", // percentage text
            "hidden", // bigger square
          ]}
          width={[120, 285]}
          height={[150, 115]}
          duration={[
            {
              bsqr: 0, // big square
              crc: 0.5, // circle
              crcb: 0.5, // circle border
              vrln: 0.4, // vetical line
              anln: 0.4, // angle line
              hrln: 0.4, // horizontal line
              txt: 0.4, // text
              txtbg: 0.4, // text background
              pct: 0.4, // percentage
            },
          ]}
          delay={[
            {
              bsqr: 0, // big square
              crc: 2.5, // circle
              crcb: 2.8, // circle border
              vrln: 4.1, // vetical line
              anln: 3.3, // angle line
              hrln: 3.6, // horizontal line
              txt: 4.4, // text
              txtbg: 4.4, // text background
              pct: 5, // percentage
            },
          ]}
          maxwidth='130px'
          inview={inview}
          linepot={145}
          text='پیشنهاد خرید'
          percentage='99 درصد'
          diameter={6.8}
          color='white'
        />
      </div>
      {/* responsive */}
      <div className='absolute -top-[70px] left-5 hidden h-fit w-fit sm:block'>
        <Animation
          className={[
            "absolute left-0 top-0 overflow-visible", // lines and circle
            "absolute left-[160px] top-0 whitespace-nowrap text-[20px] font-[500] text-[#FAFAFA]", // text span container
            "ml-2 mt-[7px] flex justify-end overflow-hidden text-sm", // text span
            "absolute left-[160px] top-[1px] h-[36px] w-[136px] bg-[#a86cf333]", // text background
            "absolute top-[40px] whitespace-nowrap text-[10px] text-white", // percentage text
            "hidden", // bigger square
          ]}
          width={[120, 285]}
          height={[150, 100]}
          duration={[
            {
              bsqr: 0, // big square
              crc: 0.5, // circle
              crcb: 0.5, // circle border
              vrln: 0.4, // vetical line
              anln: 0.4, // angle line
              hrln: 0.4, // horizontal line
              txt: 0.6, // text
              txtbg: 0.4, // text background
              pct: 0.4, // percentage
            },
          ]}
          delay={[
            {
              bsqr: 0, // big square
              crc: 1, // circle
              crcb: 1.3, // circle border
              vrln: 2.6, // vetical line
              anln: 1.8, // angle line
              hrln: 2.1, // horizontal line
              txt: 2.6, // text
              txtbg: 2.6, // text background
              pct: 3, // percentage
            },
          ]}
          maxwidth='95px'
          inview={inview}
          linepot={120}
          text='پیشنهاد خرید'
          percentage='99 درصد'
          diameter={6.8}
          color='white'
        />
      </div>
      <div className='flex items-center gap-3'>
        <img src={Tablet} alt='' className='w-[29px]' draggable={false} />
        <div className='flex flex-col items-start text-base font-normal'>
          <span className='sm:text-xs'>تبلت اپل مدل</span>
          <span className='font-sans sm:text-xs'>
            iPad mini 8.3 inch 2021-MK7M3LL/A
          </span>
        </div>
      </div>
      <span className='mt-3 text-base sm:text-xs'>
        اگه یه گوشی دارید و برای کارایی مثل بازی یا خوندن کتاب به یه صفحه ی
        بزرگتر نیاز دارید حتما این تبلت رو بهتون پیشنهاد میکنم چون نسبت به قیمتش
        بی نظیره
      </span>
      <div className='my-3 h-[0.5px] w-full bg-[#FAFAFA]'></div>
      <div className='mt-3 flex w-full items-center justify-between sm:text-xs'>
        <div className='flex items-center gap-[7px]'>
          <img src={User} alt='' className='w-[26px]' draggable={false} />
          <span className='text-base font-light'>برنا جویا</span>
        </div>
        <p>
          <span className='font-sans'>3</span> روز قبل
        </p>
      </div>
    </motion.div>
  );
};

export default RecoPart3;
