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
          activeTab === 2 ? "block" : "hidden",
        )}
        onViewportEnter={() => setInview(true)}>
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
            duration={[
              {
                bsqr: 0.6, //  big square
                crc: 0.5, // circle
                crcb: 0.5, // circle border
                vrln: 0.4, // vetical line
                anln: 0.4, // angle line
                hrln: 0.4, // horizontal line
                txt: 0.4, // text
                txtbg: 0.4, // text background
                pct: 1.5, // percentage
              },
            ]}
            delay={[
              {
                bsqr: 1, //  big square
                crc: 2, // circle
                crcb: 2.3, // circle border
                vrln: 3.6, // vetical line
                anln: 2.8, // angle line
                hrln: 3.1, // horizontal line
                txt: 3.65, // text
                txtbg: 3.6, // text background
                pct: 4, // percentage
              },
            ]}
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
        className='hidden h-[470px] w-[770px] sm:mt-[153px] custombp5:flex custombp5:h-auto custombp5:w-full custombp5:items-center custombp5:justify-center'
        onViewportEnter={() => setInview(true)}>
        <div className='relative h-fit w-fit'>
          <div className='absolute left-[45.5%] top-[16%] h-fit w-fit'>
            <Animation
              className={[
                "absolute -top-[90px] left-[2px] overflow-visible",
                "absolute -top-[80px] left-[95px] whitespace-nowrap text-[20px] font-[500] text-[#FAFAFA]",
                "flex justify-end overflow-hidden text-xs",
                "absolute -top-[90px] left-[88px] h-[36px] w-[75px] bg-[#a86cf333]",
                "absolute right-0 top-10 whitespace-nowrap text-xs text-white",
              ]}
              width={[50, 270]}
              height={[60, 100]}
              duration={[
                {
                  bsqr: 0.6, //  big square
                  crc: 0.5, // circle
                  crcb: 0.5, // circle border
                  vrln: 0.4, // vetical line
                  anln: 0.4, // angle line
                  hrln: 0.4, // horizontal line
                  txt: 0.4, // text
                  txtbg: 0.4, // text background
                  pct: 1.5, // percentage
                },
              ]}
              delay={[
                {
                  bsqr: 1, //  big square
                  crc: 2, // circle
                  crcb: 2.3, // circle border
                  vrln: 3.6, // vetical line
                  anln: 2.8, // angle line
                  hrln: 3.1, // horizontal line
                  txt: 3.65, // text
                  txtbg: 3.6, // text background
                  pct: 4, // percentage
                },
              ]}
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
        </div>
      </motion.div>
      <span className='mt-[30px] hidden w-full text-center text-xl text-[#FAFAFA] sm:text-base custombp5:block'>
        تشخیص چهره
      </span>
    </>
  );
};

export default FaceRecognize;
