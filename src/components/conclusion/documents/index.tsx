import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import IdCard from "@/assets/images/conclusion/Idcard.webp";
import certificate from "@/assets/images/conclusion/certificate.webp";
import Animation from "@/components/animation";
import { conlusion_animation } from "@/components/animations/main";

type DocumentsProps = {
  activeTab: number;
};

const Documents: React.FC<DocumentsProps> = ({ activeTab }) => {
  const [inview, setInview] = useState<boolean>(false);

  return (
    <motion.div
      variants={conlusion_animation}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
      className={clsx(
        activeTab === 4 ? "flex gap-[34px] custombp5:flex-col" : "hidden"
      )}
      onViewportEnter={() => setInview(true)}
    >
      <div className='relative h-fit w-fit'>
        <div className='absolute right-[18px] top-[16px] h-fit w-fit -scale-x-100 -scale-y-100'>
          <Animation
            className={[
              "absolute -top-[95px] left-[77px] overflow-visible custombp5:-right-[40px] custombp5:-top-[30px]",
              "absolute -top-[92px] left-[211px] flex items-center justify-center whitespace-nowrap text-base font-normal text-[#FAFAFA]",
              "-ml-[14px] mt-1 -scale-100 overflow-hidden",
              "absolute -top-[94px] left-[194px] h-[36px] w-[136px] bg-[#a86cf333]",
              "absolute bottom-[40px] left-0 -scale-100 whitespace-nowrap text-sm text-white",
            ]}
            width={[335, 270]}
            height={[204, 130]}
            duration={[0.6, 0.5, 0.5, 0.4, 0.4, 0.4, 0.4, 0.4, 1]}
            delay={[1, 2, 2.3, 3.6, 2.8, 3.1, 3.64, 3.6, 3.7]}
            maxwidth='70px'
            inview={inview}
            linepot={77}
            text='کارت ملی'
            percentage='۹۹ درصد'
            diameter={6.85036}
            color='white'
          />
        </div>
        <img src={IdCard} width={374} height={235} alt='Id Card - kashf' />
      </div>
      <div className='relative -mt-[90px] h-fit w-fit'>
        <div className='absolute right-[18px] top-[16px] h-fit w-fit'>
          <Animation
            className={[
              "absolute -top-[95px] left-[47px] overflow-visible custombp5:-right-[40px] custombp5:-top-[30px]",
              "absolute -top-[92px] left-[181px] flex items-center justify-center whitespace-nowrap text-base font-normal text-[#FAFAFA]",
              "-ml-[14px] mt-1 overflow-hidden",
              "absolute -top-[94px] left-[164px] h-[36px] w-[136px] bg-[#a86cf333]",
              "absolute top-[40px] whitespace-nowrap text-sm text-white",
            ]}
            width={[325, 270]}
            height={[214, 130]}
            duration={[0.6, 0.5, 0.5, 0.4, 0.4, 0.4, 0.4, 0.4, 1]}
            delay={[1, 2, 2.3, 3.6, 2.8, 3.1, 3.64, 3.6, 3.7]}
            maxwidth='70px'
            inview={inview}
            linepot={77}
            text='شناسنامه'
            percentage='۹۸ درصد'
            diameter={6.85036}
            color='white'
          />
        </div>
        <img
          src={certificate}
          width={359}
          height={248}
          alt='Certificate Card - kashf'
        />
      </div>
    </motion.div>
  );
};

export default Documents;
