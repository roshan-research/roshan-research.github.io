import { useState } from "react";
import { motion } from "framer-motion";
import User from "@/assets/images/conclusion/user.png";
import Laptop from "@/assets/images/conclusion/laptop.png";
import {
  recognizeText_border_animation,
  recognize_text_svg_part_1_path_6,
  recognize_text_svg_part_1_path_8,
} from "@/components/animations/main";
import { BorderSvg1, RecognizeTextSvgAnimatePart1 } from "@/components/svg";

const RecoPart1 = () => {
  const [inview, setInview] = useState<boolean>(false);
  return (
    <motion.div
      onViewportEnter={() => setInview(true)}
      className='relative flex h-[248px] w-[375px] flex-col items-center bg-[#303030] px-[30px] py-[22px] text-[#FAFAFA] custombp5:h-auto custombp5:w-[95%] custombp5:border-2 custombp5:border-[#A76CF3]'
    >
      <BorderSvg1
        width={375}
        height={248}
        inview={inview}
        animation={recognizeText_border_animation}
      />
      <RecognizeTextSvgAnimatePart1 width={186} height={94} inview={inview} />
      <div className='absolute -top-[60px] left-[112px] whitespace-nowrap text-[20px] font-[500] text-[#FAFAFA]'>
        <motion.span
          variants={recognize_text_svg_part_1_path_6}
          initial='hidden'
          animate={inview ? "visible" : ""}
          viewport={{ once: true, amount: 0.5 }}
          className='flex justify-end overflow-hidden'
        >
          سوال فنی
        </motion.span>
      </div>
      <motion.div
        variants={recognize_text_svg_part_1_path_8}
        initial='hidden'
        animate={inview ? "visible" : ""}
        viewport={{ once: true, amount: 0.5 }}
        className='absolute -top-[64px] left-[105px] h-[36px] w-[93px] bg-[#a86cf333]'
      ></motion.div>
      <div className='flex items-center justify-start gap-[10px] custombp5:w-full custombp5:justify-between'>
        <div className='flex items-center gap-2'>
          <img
            src={User}
            alt=''
            className='h-[40px] w-[40px] rounded-full'
            draggable={false}
          />
          <span className='text-base font-light'>رضا طنابی</span>
        </div>
        <span className='mr-[80px] font-iranyekannum text-sm font-light custombp5:mr-0 '>
          14:25 1400/07/05
        </span>
      </div>
      <div className='mt-4 flex items-center gap-7'>
        <p className='w-fit text-left font-light'>
          لپ تاپ 13 اینچی اپل مدل
          <br />
          <span className='font-sans'>MacBook Air MGN63 2020</span>
        </p>
        <img src={Laptop} alt='' className='w-[63px]' draggable={false} />
      </div>
      <span className='mt-3 text-base font-normal'>
        سلام در اینجا نوشتن بدون حافظه گرافیکی مجزا این یعنی چی میشه کمک کنید.
      </span>
      <div className='mt-4 flex w-full items-center justify-between'>
        <div className='flex items-center gap-1'>
          <span className='mt-[3px] opacity-60'>9</span>
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12.3755 2.25C11.0705 2.25 9.81799 2.8575 9.00049 3.8175C8.18299 2.8575 6.93049 2.25 5.62549 2.25C3.31549 2.25 1.50049 4.065 1.50049 6.375C1.50049 9.21 4.05049 11.52 7.91299 15.03L9.00049 16.0125L10.088 15.0225C13.9505 11.52 16.5005 9.21 16.5005 6.375C16.5005 4.065 14.6855 2.25 12.3755 2.25ZM9.07549 13.9125L9.00049 13.9875L8.92549 13.9125C5.35549 10.68 3.00049 8.5425 3.00049 6.375C3.00049 4.875 4.12549 3.75 5.62549 3.75C6.78049 3.75 7.90549 4.4925 8.30299 5.52H9.70549C10.0955 4.4925 11.2205 3.75 12.3755 3.75C13.8755 3.75 15.0005 4.875 15.0005 6.375C15.0005 8.5425 12.6455 10.68 9.07549 13.9125Z'
              fill='white'
              fillOpacity='0.6'
            />
          </svg>
        </div>
        <div className='flex items-center gap-[10px]'>
          <svg
            width='17'
            height='17'
            viewBox='0 0 17 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.03701 6.33337V3.51855L2.11108 8.44448L7.03701 13.3704V10.4852C10.5555 10.4852 13.0185 11.6111 14.7778 14.0741C14.074 10.5556 11.9629 7.03707 7.03701 6.33337Z'
              fill='white'
              fillOpacity='0.6'
            />
          </svg>
          <svg
            width='17'
            height='17'
            viewBox='0 0 17 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.1334 4.22235L9.85189 2.81494H3.51855V14.7779H4.92596V9.85198H8.8667L9.14818 11.2594H14.0741V4.22235H10.1334Z'
              fill='white'
              fillOpacity='0.6'
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default RecoPart1;
