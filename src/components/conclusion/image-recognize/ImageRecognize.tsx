import { FC, useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import BabyFeet from "@/assets/images/conclusion/baby-feet.webp";
import Watermelon from "@/assets/images/conclusion/watermelon.webp";
import Boat from "@/assets/images/conclusion/boat.webp";
import {
  conlusion_animation,
  recognize_image_border_1_path,
  recognize_image_border_2_path,
  recognize_image_border_3_path,
  recognize_image_svg_part_1_path_7,
  recognize_image_svg_part_1_path_8,
  recognize_image_svg_part_2_path_7,
  recognize_image_svg_part_2_path_8,
  recognize_image_svg_part_3_path_7,
  recognize_image_svg_part_3_path_8,
} from "@/components/animations/main";
import {
  BorderSvg6,
  BorderSvg7,
  RecognizeImageSvgAnimatePart1,
  RecognizeImageSvgAnimatePart2,
  RecognizeImageSvgAnimatePart3,
} from "@/components/svg";
import Animation from "@/components/animation";

type ImageRecognizeProps = {
  activeTab: number;
};

const ImageRecognize: FC<ImageRecognizeProps> = ({ activeTab }) => {
  const [inview, setInview] = useState<boolean>(false);
  return (
    <>
      <motion.div
        variants={conlusion_animation}
        initial='hidden'
        animate={inview ? "visible" : ""}
        viewport={{ once: true, amount: 0.5 }}
        className={clsx(
          "relative items-start gap-10 custombp5:hidden",
          activeTab === 3 ? "flex" : "hidden",
        )}
        onViewportEnter={() => setInview(true)}>
        <div className='flex items-center justify-center'>
          <BorderSvg7
            width={300}
            height={300}
            inview={inview}
            animation={recognize_image_border_3_path}
          />
          <img src={BabyFeet} alt='' className='w-[330px]' />
          <RecognizeImageSvgAnimatePart3
            width={230}
            height={159}
            inview={inview}
          />
          <div className='absolute bottom-[96px] right-[192px] whitespace-nowrap text-[20px] font-[500] text-[#FAFAFA]'>
            <motion.span
              variants={recognize_image_svg_part_3_path_7}
              initial='hidden'
              animate={inview ? "visible" : ""}
              viewport={{ once: true, amount: 0.5 }}
              className='flex justify-start overflow-hidden'>
              پای بچه
            </motion.span>
          </div>
          <motion.div
            variants={recognize_image_svg_part_3_path_8}
            initial='hidden'
            animate={inview ? "visible" : ""}
            viewport={{ once: true, amount: 0.5 }}
            className='absolute bottom-[92.5px] right-[188px] h-[36px] w-[77px] bg-[#a86cf333]'></motion.div>
        </div>
        <div className='relative mt-[170px] flex items-center justify-center'>
          <BorderSvg7
            width={300}
            height={300}
            inview={inview}
            animation={recognize_image_border_2_path}
          />
          <img src={Watermelon} alt='' className='w-[330px]' />
          <div className='absolute -top-[80px] h-fit w-fit'>
            <RecognizeImageSvgAnimatePart2
              width={241}
              height={178}
              inview={inview}
            />
            <div className='absolute left-[135px] top-[4px] whitespace-nowrap text-[20px] font-[500] text-[#FAFAFA]'>
              <motion.span
                variants={recognize_image_svg_part_2_path_7}
                initial='hidden'
                animate={inview ? "visible" : ""}
                viewport={{ once: true, amount: 0.5 }}
                className='flex justify-end overflow-hidden'>
                قاچ هندوانه
              </motion.span>
            </div>
            <motion.div
              variants={recognize_image_svg_part_2_path_8}
              initial='hidden'
              animate={inview ? "visible" : ""}
              viewport={{ once: true, amount: 0.5 }}
              className='absolute left-[130px] top-[1px] h-[36px] w-[112px] bg-[#a86cf333]'></motion.div>
          </div>
        </div>
        <div className='mt-[80px] flex items-center justify-center'>
          <BorderSvg6
            width={290}
            height={290}
            inview={inview}
            animation={recognize_image_border_1_path}
          />
          <img src={Boat} alt='' className='w-[330px]' />
          <div className='absolute top-[0px]'>
            <RecognizeImageSvgAnimatePart1
              width={267}
              height={161}
              inview={inview}
            />
            <div className='absolute right-[163px] top-[4px] whitespace-nowrap text-[20px] font-[500] text-[#FAFAFA]'>
              <motion.span
                variants={recognize_image_svg_part_1_path_7}
                initial='hidden'
                animate={inview ? "visible" : ""}
                viewport={{ once: true, amount: 0.5 }}
                className='flex justify-start overflow-hidden'>
                قایق کاغذی
              </motion.span>
            </div>
            <motion.div
              variants={recognize_image_svg_part_1_path_8}
              initial='hidden'
              animate={inview ? "visible" : ""}
              viewport={{ once: true, amount: 0.5 }}
              className='absolute right-[155px] top-[1px] h-[36px] w-[112px] bg-[#a86cf333]'></motion.div>
          </div>
        </div>
      </motion.div>
      {/* responsive */}
      <motion.div
        className='no-scrollbar mt-[100px] hidden max-w-[430px] overflow-x-scroll pb-[45px] pt-[30px] sm:flex'
        onViewportEnter={() => setInview(true)}>
        <div className='flex h-fit min-w-[650px] items-center justify-start gap-[22px] px-[40px]'>
          <div className='relative flex h-fit w-fit items-center justify-center'>
            <div className='absolute h-fit w-fit'>
              <Animation
                className={[
                  "absolute -bottom-[60px] right-7 rotate-180 overflow-visible", // lines and circle
                  "absolute -bottom-[50px] right-[115px] whitespace-nowrap text-[20px] font-[500] text-[#FAFAFA] sm:text-sm", // text container
                  "flex justify-end overflow-hidden text-xs", // text span
                  "absolute -bottom-[59px] right-[108px] h-[36px] w-[90px] bg-[#a86cf333] sm:w-[50px]", // text background
                  "absolute right-0 top-10 whitespace-nowrap text-[10px] text-white", // percentage text
                ]}
                width={[160, 270]}
                height={[160, 80]}
                duration={[0.6, 0.5, 0.5, 0.4, 0.4, 0.4, 0.4, 0.4, 1.5]} // big square - circle border - circle - angle line - horizontal line - vetical line - text - text background - percentage
                delay={[1, 2, 2.3, 3.6, 2.8, 3.1, 3.65, 3.6, 4]} // big square - circle border - circle - angle line - horizontal line - vetical line - text - text background - percentage
                maxwidth='65px'
                inview={inview}
                linepot={40}
                text='پای بچه'
                percentage='99 درصد'
                diameter={6.5}
                color='white'
              />
            </div>
            <img
              src={BabyFeet}
              alt='kashf - baby feet'
              className='w-[44.5vw]'
            />
          </div>
          <div className='relative mt-[41px] flex h-fit w-fit items-center justify-center'>
            <div className='absolute h-fit w-fit'>
              <Animation
                className={[
                  "absolute -top-[80px] left-5 overflow-visible", // lines and circle
                  "absolute -top-[70px] left-[107px] whitespace-nowrap text-[20px] font-[500] text-[#FAFAFA] sm:text-sm", // text container
                  "mt-1 flex justify-end overflow-hidden text-xs", // text span
                  "absolute -top-[79px] left-[101px] h-[36px] w-[90px] bg-[#a86cf333] sm:w-[50px]", // text background
                  "absolute right-0 top-10 whitespace-nowrap text-[10px] text-white", // percentage text
                ]}
                width={[160, 270]}
                height={[160, 100]}
                duration={[0.6, 0.5, 0.5, 0.4, 0.4, 0.4, 0.4, 0.4, 1.5]} // big square - circle border - circle - angle line - horizontal line - vetical line - text - text background - percentage
                delay={[1, 2, 2.3, 3.6, 2.8, 3.1, 3.65, 3.6, 4]} // big square - circle border - circle - angle line - horizontal line - vetical line - text - text background - percentage
                maxwidth='65px'
                inview={inview}
                linepot={40}
                text='هندوانه'
                percentage='98 درصد'
                diameter={6.5}
                color='white'
              />
            </div>
            <img
              src={Watermelon}
              alt='kashf - watermelon'
              className='w-[44.5vw]'
            />
          </div>
          <div className='relative mt-[15px] flex h-fit w-fit items-center justify-center'>
            <div className='absolute h-fit w-fit -scale-x-100'>
              <Animation
                className={[
                  "absolute -top-[75px] left-4 overflow-visible", // lines and circle
                  "absolute -top-[65px] left-[102px] whitespace-nowrap text-[20px] text-sm font-[500] text-[#FAFAFA]", // text container
                  "mt-1 flex -scale-x-100 justify-end overflow-hidden text-xs", // text span
                  "absolute -top-[74px] left-[95px] h-[36px] w-[70px] bg-[#a86cf333]", // text background
                  "absolute left-0 top-10 -scale-x-100 whitespace-nowrap text-[10px] text-white", // percentage text
                ]}
                width={[160, 1]}
                height={[160, 90]}
                duration={[0.6, 0.5, 0.5, 0.4, 0.4, 0.4, 0.7, 0.4, 1.5]} // big square - circle border - circle - angle line - horizontal line - vetical line - text - text background - percentage
                delay={[1, 2, 2.3, 3.6, 2.8, 3.1, 3.65, 3.6, 4]} // big square - circle border - circle - angle line - horizontal line - vetical line - text - text background - percentage
                maxwidth='130px'
                inview={inview}
                linepot={40}
                text='قایق کاغذی'
                percentage='98 درصد'
                diameter={6.5}
                color='white'
              />
            </div>
            <img src={Boat} alt='kashf - boat' className='w-[44.5vw]' />
          </div>
        </div>
      </motion.div>
      <span className='mt-[24px] hidden w-full text-center text-xl text-[#FAFAFA] custombp5:block'>
        شناسایی تصویر
      </span>
    </>
  );
};

export default ImageRecognize;
