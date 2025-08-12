import { motion } from "framer-motion";
import documentHead from '../../assets/images/article-main/document-head.png';
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { main_animation } from "@/components/animations/main";
import { FC } from "react";

type ArticleMainProps = {
  windowWidth: number | null;
};

const ArticleMain: FC<ArticleMainProps> = ({ windowWidth }) => {
  return (
    <motion.div
      variants={main_animation}
      initial='hidden'
      animate='visible'
      className='sm:text-center mx-auto mt-[25vh] flex max-w-[1200px] items-center justify-between custombp2:mt-[15vh] custombp2:flex-col-reverse'
    >
      <div className='flex flex-col items-start whitespace-nowrap'>
        <span className='text-justify text-[80px] font-extrabold font-iranyekan text-[#88C4FF] custombp2:text-[30px] sm:mx-auto'>
          پردازش اسنـاد<br />بـا مــدل زبانـی
        </span>
        <span className='text-[24px] pt-4 fw-semibold font-iranyekan text-[#FAFAFA] custombp2:text-[20px] sm:mx-2'>
          فهم، یک سامانه هوشمند برای ارتقای مدیریت <br />اطلاعات، تحلیل سریع تر، دسترسی هدفمند و <br />آینده نگری سازمانی محسوب می‌شود
        </span>
      </div>
      <img
        className="sm:mr-2"
        src={documentHead}
        width={windowWidth! < 641 ? "100%" : 386}
        height={windowWidth! < 641 ? "100%" : 385}
      />
    </motion.div>
  );
};

export default ArticleMain;
