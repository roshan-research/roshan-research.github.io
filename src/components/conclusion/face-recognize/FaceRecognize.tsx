import { FC, useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Pic from "@/assets/images/conclusion/Pic.webp";
import { conlusion_animation } from "@/components/animations/main";
import Animation from "@/components/animation";

type FaceRecognizeProps = {
  activeTab: number;
};

const FaceRecognize: FC<FaceRecognizeProps> = ({ activeTab }) => {
  const [inview, setInview] = useState<boolean>(false);
  return (
    <>
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
        <div className='absolute right-[295px] top-[95px] h-fit w-fit'>
          <Animation
            className={[
              "absolute -top-[175px] left-[98px] overflow-visible custombp5:-right-[40px] custombp5:-top-[30px]",
              "absolute -top-[172px] left-[232px] whitespace-nowrap text-[20px] font-[500] text-[#FAFAFA]",
              "flex justify-end overflow-hidden",
              "absolute -top-[174px] left-[215px] h-[36px] w-[136px] bg-[#a86cf333]",
              "absolute top-[40px] whitespace-nowrap text-sm text-white",
            ]}
            width={[120, 270]}
            height={[150, 190]}
            duration={[0.6, 0.5, 0.5, 0.4, 0.4, 0.4, 0.4, 0.4, 1.5]}
            delay={[1, 2, 2.3, 3.6, 2.8, 3.1, 3.65, 3.6, 4]}
            maxwidth='136px'
            inview={inview}
            linepot={77}
            text='حسن یزدانی'
            percentage='۷۸ درصد'
            diameter={6.85036}
            color='white'
          />
        </div>
        <img
          src={Pic}
          alt='kashf'
          width={600}
          height={367}
          className='h-full w-full'
          draggable={false}
        />
      </motion.div>
      {/* responsive */}
      <motion.div
        className='relative hidden h-[470px] w-[770px] sm:mt-[153px] custombp5:flex custombp5:h-auto custombp5:w-full custombp5:justify-center'
        onViewportEnter={() => setInview(true)}
      >
        <div className='absolute right-[55px] top-[0px] h-fit w-fit'>
          <Animation
            className={[
              "absolute -left-[155px] -top-[42px] overflow-visible",
              "absolute -top-[172px] right-[10px] whitespace-nowrap text-[20px] font-[500] text-[#FAFAFA]",
              "flex justify-end overflow-hidden",
              "absolute -top-[174px] right-[10px] h-[36px] w-[136px] bg-[#a86cf333]",
              "absolute top-[40px] whitespace-nowrap text-sm text-white",
              "absolute -left-[155px] top-[30px]",
            ]}
            width={[50, 270]}
            height={[60, 80]}
            duration={[0.6, 0.5, 0.5, 0.4, 0.4, 0.4, 0.4, 0.4, 1.5]}
            delay={[1, 2, 2.3, 3.6, 2.8, 3.1, 3.65, 3.6, 4]}
            maxwidth='136px'
            inview={inview}
            linepot={45}
            text='حسن یزدانی'
            percentage='۷۸ درصد'
            diameter={4.5}
            diameter2={2.5}
            color='white'
          />
        </div>
        <img
          src={Pic}
          alt='picture'
          className='h-full w-full custombp5:w-[75vw]'
          draggable={false}
        />
      </motion.div>
      <span className='mt-[30px] hidden w-full text-center text-xl text-[#FAFAFA] sm:text-base custombp5:block'>
        تشخیص چهره
      </span>
    </>
  );
};

export default FaceRecognize;
