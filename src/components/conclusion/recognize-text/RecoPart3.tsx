import { useState } from "react";
import { motion } from "framer-motion";
import Tablet from "@/assets/images/conclusion/tablet.png";
import User from "@/assets/images/conclusion/user-3.png";
import {
  recognizeText_border_animation,
  recognize_text_svg_part_3_path_6,
  recognize_text_svg_part_3_path_8,
} from "@/components/animations/main";
import { BorderSvg3, RecognizeTextSvgAnimatePart3 } from "@/components/svg";

const RecoPart3 = () => {
  const [inview, setInview] = useState<boolean>(false);
  return (
    <motion.div
      onViewportEnter={() => setInview(true)}
      onViewportLeave={() => setInview(false)}
      className='relative flex h-[277px] w-[376px] flex-col items-center bg-[#303030] px-[33px] py-6 text-[#FAFAFA]'
    >
      <BorderSvg3
        width={376}
        height={278}
        animation={recognizeText_border_animation}
        inview={inview}
      />
      <RecognizeTextSvgAnimatePart3 width={285} height={115} inview={inview} />
      <div className='absolute -top-[67px] left-[212px] whitespace-nowrap text-[20px] font-[500] text-[#FAFAFA]'>
        <motion.span
          variants={recognize_text_svg_part_3_path_8}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.5 }}
          className='flex justify-end overflow-hidden'
        >
          پیشنهاد خرید
        </motion.span>
      </div>
      <motion.div
        variants={recognize_text_svg_part_3_path_6}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, amount: 0.5 }}
        className='absolute -top-[69.5px] left-[205px] h-[36px] w-[93px] bg-[#a86cf333]'
      ></motion.div>
      <div className='flex items-center gap-3'>
        <img src={Tablet} alt='' className='w-[29px]' draggable={false} />
        <div className='flex flex-col items-start text-base font-normal'>
          <span>تبلت اپل مدل</span>
          <span className='font-sans'>iPad mini 8.3 inch 2021-MK7M3LL/A</span>
        </div>
      </div>
      <span className='mt-3 text-base'>
        اگه یه گوشی دارید و برای کارایی مثل بازی یا خوندن کتاب به یه صفحه ی
        بزرگتر نیاز دارید حتما این تبلت رو بهتون پیشنهاد میکنم چون نسبت به قیمتش
        بی نظیره
      </span>
      <div className='my-3 h-[0.5px] w-full bg-[#FAFAFA]'></div>
      <div className='mt-3 flex w-full items-center justify-between'>
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
