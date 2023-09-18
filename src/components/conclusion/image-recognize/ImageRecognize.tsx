import { FC, useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import BabyFeet from "@/assets/images/conclusion/baby-feet.png";
import Watermelon from "@/assets/images/conclusion/watermelon.png";
import Boat from "@/assets/images/conclusion/boat.png";
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

type ImageRecognizeProps = {
  activeTab: number;
};

const ImageRecognize: FC<ImageRecognizeProps> = ({ activeTab }) => {
  const [inview, setInview] = useState<boolean>(false);
  return (
    <motion.div
      variants={conlusion_animation}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.5 }}
      className={clsx(
        "relative items-start gap-10",
        activeTab === 3 ? "flex" : "hidden"
      )}
      onViewportEnter={() => setInview(true)}
      onViewportLeave={() => setInview(false)}
    >
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
            whileInView='visible'
            viewport={{ once: false, amount: 0.5 }}
            className='flex justify-start overflow-hidden'
          >
            پای بچه
          </motion.span>
        </div>
        <motion.div
          variants={recognize_image_svg_part_3_path_8}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.5 }}
          className='absolute bottom-[92.5px] right-[188px] h-[36px] w-[77px] bg-[#a86cf333]'
        ></motion.div>
      </div>
      <div className='mt-[170px] flex items-center justify-center'>
        <BorderSvg7
          width={300}
          height={300}
          inview={inview}
          animation={recognize_image_border_2_path}
        />
        <img src={Watermelon} alt='' className='w-[330px]' />
        <RecognizeImageSvgAnimatePart2
          width={241}
          height={178}
          inview={inview}
        />
        <div className='absolute left-[551px] top-[74px] whitespace-nowrap text-[20px] font-[500] text-[#FAFAFA]'>
          <motion.span
            variants={recognize_image_svg_part_2_path_7}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.5 }}
            className='flex justify-end overflow-hidden'
          >
            قاچ هندوانه
          </motion.span>
        </div>
        <motion.div
          variants={recognize_image_svg_part_2_path_8}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.5 }}
          className='absolute left-[545px] top-[71.5px] h-[36px] w-[112px] bg-[#a86cf333]'
        ></motion.div>
      </div>
      <div className='mt-[80px] flex items-center justify-center'>
        <BorderSvg6
          width={290}
          height={290}
          inview={inview}
          animation={recognize_image_border_1_path}
        />
        <img src={Boat} alt='' className='w-[330px]' />
        <RecognizeImageSvgAnimatePart1
          width={267}
          height={161}
          inview={inview}
        />
        <div className='absolute -top-[5px] right-[935px] whitespace-nowrap text-[20px] font-[500] text-[#FAFAFA]'>
          <motion.span
            variants={recognize_image_svg_part_1_path_7}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.5 }}
            className='flex justify-start overflow-hidden'
          >
            قایق کاغذی
          </motion.span>
        </div>
        <motion.div
          variants={recognize_image_svg_part_1_path_8}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.5 }}
          className='absolute -top-[9px] right-[928px] h-[36px] w-[112px] bg-[#a86cf333]'
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default ImageRecognize;
