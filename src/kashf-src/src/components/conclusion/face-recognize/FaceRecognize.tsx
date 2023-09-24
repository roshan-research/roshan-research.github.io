import { FC, useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Pic from "@/assets/images/conclusion/pic.png";
import {
  conlusion_animation,
  recognize_face_border_1_path,
  recognize_face_border_2_path,
  recognize_face_svg_part_1_path_7,
  recognize_face_svg_part_1_path_8,
  recognize_face_svg_part_2_path_7,
  recognize_face_svg_part_2_path_8,
} from "@/components/animations/main";
import {
  BorderSvg4,
  BorderSvg5,
  RecognizeFaceSvgAnimatePart1,
  RecognizeFaceSvgAnimatePart2,
} from "@/components/svg";

type FaceRecognizeProps = {
  activeTab: number;
};

const FaceRecognize: FC<FaceRecognizeProps> = ({ activeTab }) => {
  const [inview, setInview] = useState<boolean>(false);
  return (
    <>
      <span className='mb-[100px] mt-[120px] hidden w-full text-center text-xl text-[#FAFAFA] custombp5:block'>
        تشخیص چهره
      </span>
      <motion.div
        variants={conlusion_animation}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        className={clsx(
          "relative h-[470px] w-[770px] custombp5:hidden custombp5:h-auto custombp5:w-[95%]",
          activeTab === 2 ? "block" : "hidden"
        )}
        onViewportEnter={() => setInview(true)}
      >
        <div className='absolute right-[135px] top-[100px] h-fit w-fit'>
          <BorderSvg5
            width={201}
            height={258}
            inview={inview}
            animation={recognize_face_border_2_path}
          />
          <RecognizeFaceSvgAnimatePart1
            width={252}
            height={109}
            inview={inview}
          />
          <div className='absolute -top-[82px] left-[138px] whitespace-nowrap text-[20px] font-[500] text-[#FAFAFA]'>
            <motion.span
              variants={recognize_face_svg_part_1_path_7}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              className='flex justify-end overflow-hidden'
            >
              مهران غفوریان
            </motion.span>
          </div>
          <motion.div
            variants={recognize_face_svg_part_1_path_8}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            className='absolute -top-[84px] left-[130px] h-[36px] w-[136px] bg-[#a86cf333]'
          ></motion.div>
        </div>
        <div className='absolute left-[150px] top-[50px] h-fit w-fit'>
          <BorderSvg4
            width={206}
            height={247}
            inview={inview}
            animation={recognize_face_border_1_path}
          />
          <RecognizeFaceSvgAnimatePart2
            width={247}
            height={126}
            inview={inview}
          />
          <div className='absolute -top-[86px] right-[183px] whitespace-nowrap text-[20px] font-[500] text-[#FAFAFA]'>
            <motion.span
              variants={recognize_face_svg_part_2_path_7}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              className='flex justify-start overflow-hidden'
            >
              رامبد جوان
            </motion.span>
          </div>
          <motion.div
            variants={recognize_face_svg_part_2_path_8}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            className='absolute -top-[88px] right-[175px] h-[36px] w-[104px] bg-[#a86cf333]'
          ></motion.div>
        </div>
        <img src={Pic} alt='' className='h-full w-full' draggable={false} />
      </motion.div>
      {/* responsive */}
      <motion.div
        className='relative hidden h-[470px] w-[770px] custombp5:block custombp5:h-auto custombp5:w-[95%]'
        onViewportEnter={() => setInview(true)}
      >
        <div className='absolute right-[55px] top-[0px] h-fit w-fit'>
          <BorderSvg5
            width={80}
            height={178}
            inview={inview}
            animation={recognize_face_border_2_path}
          />
          <RecognizeFaceSvgAnimatePart1
            width={115}
            height={109}
            inview={inview}
          />
          <div className='absolute left-[65px] top-[0px] whitespace-nowrap text-[20px] font-[500] text-[#FAFAFA]'>
            <motion.span
              variants={recognize_face_svg_part_1_path_7}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              className='flex justify-end overflow-hidden text-[10px]'
            >
              مهران غفوریان
            </motion.span>
          </div>
          <motion.div
            variants={recognize_face_svg_part_1_path_8}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            className='absolute left-[57px] top-[0.5px] h-[17px] w-[74px] bg-[#a86cf333]'
          ></motion.div>
        </div>
        <div className='absolute left-[58px] top-[10px] h-fit w-fit'>
          <BorderSvg4
            width={90}
            height={129}
            inview={inview}
            animation={recognize_face_border_1_path}
          />
          <RecognizeFaceSvgAnimatePart2
            width={107}
            height={126}
            inview={inview}
          />
          <div className='absolute -top-[30px] right-[85px] whitespace-nowrap text-[20px] font-[500] text-[#FAFAFA]'>
            <motion.span
              variants={recognize_face_svg_part_2_path_7}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              className='flex justify-start overflow-hidden text-xs'
            >
              رامبد جوان
            </motion.span>
          </div>
          <motion.div
            variants={recognize_face_svg_part_2_path_8}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            className='absolute -top-[29px] right-[74px] h-[16px] w-[80px] bg-[#a86cf333]'
          ></motion.div>
        </div>
        <img
          src={Pic}
          alt=''
          className='h-full w-full custombp5:w-[95%]'
          draggable={false}
        />
      </motion.div>
    </>
  );
};

export default FaceRecognize;
