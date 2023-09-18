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
    <motion.div
      variants={conlusion_animation}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.5 }}
      className={clsx(
        "relative h-[470px] w-[770px]",
        activeTab === 2 ? "block" : "hidden"
      )}
      onViewportEnter={() => setInview(true)}
      onViewportLeave={() => setInview(false)}
    >
      <BorderSvg4
        width={206}
        height={247}
        inview={inview}
        animation={recognize_face_border_1_path}
      />
      <BorderSvg5
        width={201}
        height={258}
        inview={inview}
        animation={recognize_face_border_2_path}
      />
      <RecognizeFaceSvgAnimatePart1 width={252} height={109} inview={inview} />
      <RecognizeFaceSvgAnimatePart2 width={247} height={126} inview={inview} />
      <div className='absolute left-[572px] top-[15px] whitespace-nowrap text-[20px] font-[500] text-[#FAFAFA]'>
        <motion.span
          variants={recognize_face_svg_part_1_path_7}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.5 }}
          className='flex justify-end overflow-hidden'
        >
          مهران غفوریان
        </motion.span>
      </div>
      <motion.div
        variants={recognize_face_svg_part_1_path_8}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, amount: 0.5 }}
        className='absolute left-[564px] top-[15px] h-[36px] w-[136px] bg-[#a86cf333]'
      ></motion.div>
      <div className='absolute -top-[33px] right-[596px] whitespace-nowrap text-[20px] font-[500] text-[#FAFAFA]'>
        <motion.span
          variants={recognize_face_svg_part_2_path_7}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.5 }}
          className='flex justify-start overflow-hidden'
        >
          رامبد جوان
        </motion.span>
      </div>
      <motion.div
        variants={recognize_face_svg_part_2_path_8}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, amount: 0.5 }}
        className='absolute -top-[34px] right-[590px] h-[36px] w-[104px] bg-[#a86cf333]'
      ></motion.div>
      <img src={Pic} alt='' className='h-full w-full' draggable={false} />
    </motion.div>
  );
};

export default FaceRecognize;
