import { useState } from "react";
import { motion } from "framer-motion";
import User from "@/assets/images/conclusion/user-2.png";
import LogoTwitter from "@/assets/images/conclusion/logo-twitter.png";
import {
  recognizeText_border_animation,
  recognize_text_svg_part_2_path_6,
  recognize_text_svg_part_2_path_7,
} from "@/components/animations/main";
import { BorderSvg2, RecognizeTextSvgAnimatePart2 } from "@/components/svg";

const RecoPart2 = () => {
  const [inview, setInview] = useState<boolean>(false);
  return (
    <motion.div
      onViewportEnter={() => setInview(true)}
      className='relative flex h-[236px] w-[424px] flex-col items-center bg-[#303030] px-7 pb-3 pt-5 text-[#FAFAFA] custombp5:h-auto custombp5:w-[95%] custombp5:border-2 custombp5:border-[#A76CF3]'
    >
      <BorderSvg2
        width={424}
        height={236}
        animation={recognizeText_border_animation}
        inview={inview}
      />
      <div className='absolute -left-[10px] -top-[70px] h-fit w-fit'>
        <RecognizeTextSvgAnimatePart2
          width={211}
          height={127}
          inview={inview}
        />
        <div className='absolute right-[112px] top-[2px] whitespace-nowrap text-[20px] font-[500] text-[#FAFAFA]'>
          <motion.span
            variants={recognize_text_svg_part_2_path_7}
            initial='hidden'
            animate={inview ? "visible" : ""}
            viewport={{ once: true, amount: 0.5 }}
            className='flex justify-start overflow-hidden'
          >
            توییت طنز
          </motion.span>
        </div>
        <motion.div
          variants={recognize_text_svg_part_2_path_6}
          initial='hidden'
          animate={inview ? "visible" : ""}
          viewport={{ once: true, amount: 0.5 }}
          className='absolute right-[105px] top-[1px] h-[36px] w-[104px] bg-[#a86cf333]'
        ></motion.div>
      </div>
      <div className='flex items-center gap-[10px] custombp5:w-full custombp5:justify-between'>
        <div className='flex items-center gap-2'>
          <img
            src={User}
            alt=''
            className='w-[46px] rounded-full'
            draggable={false}
          />
          <div className='flex flex-col items-start gap-[1px]'>
            <span className='text-base font-[500]'>سجاد ظاهری</span>
            <span className='text-[13px] font-light opacity-60'>sajjzah@</span>
          </div>
        </div>
        <img
          className='mr-[180px] w-[31px] custombp5:mr-0'
          alt=''
          src={LogoTwitter}
        />
      </div>
      <div className='mt-[6px] flex flex-col items-start gap-[11px]'>
        <span>
          یه سری تازه کار تو باشگاه هستن، میان یواشکی میگن: داداش داشتی اشتباه
          می زدی صدامون کن بهت بگیم!
        </span>
        <span className='text-sm font-light opacity-40'>16:17 8 مهر 1401</span>
      </div>
      <div className='my-[18px] h-[0.5px] w-full bg-[#FAFAFA]'></div>
      <div className='flex w-fit items-center gap-[50px] font-sans'>
        <div className='flex items-center gap-2'>
          <svg
            width='17'
            height='14'
            viewBox='0 0 17 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M13.5416 10.3526C13.5433 10.3539 13.5433 10.3552 13.5433 10.3552C13.5433 10.3552 10.7253 12.1157 8.21718 13.6463C7.32921 14.1886 6.18778 14.0965 6.18778 13.442V11.1713C2.82479 11.17 0.0996094 8.88066 0.0996094 6.05839C0.0996094 3.23478 2.82479 0.946777 6.18778 0.946777H10.2466C13.6096 0.946777 16.3347 3.23612 16.3347 6.05839C16.3347 7.86155 15.2198 9.44164 13.5416 10.3526ZM9.9931 1.76688H6.44125C3.49905 1.76688 1.11348 3.68891 1.11348 6.06106C1.11348 8.43321 3.49905 10.3552 6.44125 10.3552H7.20165V12.4349C7.20165 12.889 7.70859 12.8089 7.70859 12.8089L12.7812 9.74084H12.7266C14.2788 8.99152 15.3192 7.62513 15.3192 6.06106C15.3192 3.68891 12.9353 1.76688 9.9931 1.76688Z'
              fill='white'
              fillOpacity='0.6'
            />
          </svg>
          <span className='opacity-60'>1.8K</span>
        </div>
        <div className='flex items-center gap-2'>
          <svg
            width='20'
            height='13'
            viewBox='0 0 20 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15.9829 10.8747L17.7191 9.47489C18.0184 9.23354 18.5049 9.23354 18.8042 9.47489C19.1036 9.71623 19.1036 10.1084 18.8042 10.3498L15.7397 12.8175C15.4404 13.0589 14.9539 13.0589 14.6546 12.8175L11.5975 10.3498C11.2982 10.1084 11.2982 9.71623 11.5975 9.47489C11.8969 9.23354 12.3833 9.23354 12.6826 9.47489L14.4488 10.8988L14.4488 2.64631C14.4488 2.3039 14.1064 2.02786 13.6817 2.02786L10.6396 2.02786C10.2149 2.02786 9.87256 1.75182 9.87256 1.40941C9.87256 1.067 10.2149 0.79096 10.6396 0.79096L14.4488 0.79096C15.2944 0.79096 15.981 1.34455 15.981 2.02635L15.981 10.8747L15.9829 10.8747Z'
              fill='white'
              fillOpacity='0.6'
            />
            <path
              d='M3.73967 2.81672L2.00348 4.21652C1.70413 4.45787 1.2177 4.45787 0.918356 4.21652C0.619012 3.97517 0.619012 3.58299 0.918356 3.34164L3.97914 0.87388C4.27849 0.632535 4.76492 0.632535 5.06427 0.87388L8.12505 3.34164C8.4244 3.58299 8.4244 3.97517 8.12505 4.21652C7.82571 4.45787 7.33928 4.45787 7.03993 4.21652L5.27381 2.79258L5.27381 11.1447C5.27381 11.4871 5.61618 11.7631 6.04087 11.7631L9.08295 11.7631C9.50765 11.7631 9.85002 12.0391 9.85002 12.3816C9.85002 12.724 9.50765 13 9.08295 13L5.27381 13C4.42816 13 3.73967 12.4464 3.73967 11.7646L3.73967 2.81672Z'
              fill='white'
              fillOpacity='0.6'
            />
          </svg>
          <span className='opacity-60'>371</span>
        </div>
        <div className='flex items-center gap-2'>
          <svg
            width='21'
            height='18'
            viewBox='0 0 21 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.5352 15.574L9.2707 14.6459C4.77951 11.3623 1.81445 9.19675 1.81445 6.53899C1.81445 4.3734 3.92488 2.67188 6.61087 2.67188C8.12828 2.67188 9.58465 3.2414 10.5352 4.14138C11.4858 3.2414 12.9421 2.67188 14.4596 2.67188C17.1455 2.67188 19.256 4.3734 19.256 6.53899C19.256 9.19675 16.2909 11.3623 11.7997 14.6529L10.5352 15.574Z'
              fill='#E1082C'
            />
          </svg>
          <span className='opacity-60'>32K</span>
        </div>
      </div>
    </motion.div>
  );
};

export default RecoPart2;
