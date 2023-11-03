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
    <>
      <motion.div
        variants={conlusion_animation}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        className={clsx(
          "custombp5:hidden",
          activeTab === 4 ? "flex gap-[34px] custombp5:flex-col" : "hidden",
        )}
        onViewportEnter={() => setInview(true)}>
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
                  pct: 1, // percentage
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
                  txt: 3.64, // text
                  txtbg: 3.6, // text background
                  pct: 3.7, // percentage
                },
              ]}
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
                  pct: 1, // percentage
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
                  txt: 3.64, // text
                  txtbg: 3.6, // text background
                  pct: 3.7, // percentage
                },
              ]}
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
      {/* responsive */}
      <motion.div
        variants={conlusion_animation}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        className={clsx(
          "no-scrollbar mt-[80px] hidden max-w-[430px] overflow-x-scroll py-10 custombp5:flex",
          activeTab === 4 ? "flex gap-[34px] custombp5:flex-col" : "hidden",
        )}
        onViewportEnter={() => setInview(true)}>
        <div className='flex min-w-[580px] items-center justify-start gap-[22px] px-[40px]'>
          <div className='relative flex h-fit w-fit items-center justify-center'>
            <div className='absolute h-fit w-fit -scale-x-100 -scale-y-100'>
              <Animation
                className={[
                  "absolute -top-[60px] left-[50px] overflow-visible", // lines and circles
                  "absolute -top-[44px] left-[155px] flex items-center justify-center whitespace-nowrap text-base font-normal text-[#FAFAFA]", // text span container
                  "-ml-[14px] -mt-1 -scale-100 overflow-hidden text-xs", // text span
                  "absolute -top-[58px] left-[135px] h-[36px] w-[60px] bg-[#a86cf333]", // text background
                  "absolute bottom-[40px] left-0 -scale-100 whitespace-nowrap text-[10px] text-white", // percentage
                ]}
                width={[228, 270]}
                height={[138, 80]}
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
                    pct: 1, // percentage
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
                    txt: 3.64, // text
                    txtbg: 3.6, // text background
                    pct: 3.7, // percentage
                  },
                ]}
                maxwidth='70px'
                inview={inview}
                linepot={45}
                text='کارت ملی'
                percentage='۹۹ درصد'
                diameter={6.85036}
                color='white'
              />
            </div>
            <img
              src={IdCard}
              width={234}
              height={147}
              alt='Id Card - kashf'
              className='w-[65vw]'
            />
          </div>
          <div className='relative mt-[80px] flex h-fit w-fit items-center justify-center'>
            <div className='absolute h-fit w-fit'>
              <Animation
                className={[
                  "absolute -top-[80px] left-[30px] overflow-visible", // lines and circles
                  "absolute -top-[72px] left-[150px] flex items-center justify-center whitespace-nowrap text-base font-normal text-[#FAFAFA]", // text span container
                  "-ml-[14px] mt-1 overflow-hidden text-xs", // text span
                  "absolute -top-[79px] left-[130px] h-[36px] w-[136px] bg-[#a86cf333]", // text background
                  "absolute top-[40px] whitespace-nowrap text-[10px] text-white", // percentage
                ]}
                width={[213, 270]}
                height={[146, 100]}
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
                    pct: 1, // percentage
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
                    txt: 3.64, // text
                    txtbg: 3.6, // text background
                    pct: 3.7, // percentage
                  },
                ]}
                maxwidth='60px'
                inview={inview}
                linepot={60}
                text='شناسنامه'
                percentage='۹۸ درصد'
                diameter={6.85036}
                color='white'
              />
            </div>
            <img
              src={certificate}
              width={213}
              height={147}
              alt='Certificate Card - kashf'
              className='w-[59vw]'
            />
          </div>
        </div>
      </motion.div>
      <span className='mt-10 hidden text-xl text-[#FAFAFA] sm:block sm:text-base'>
        شناسایی اسناد و مدارک
      </span>
    </>
  );
};

export default Documents;
