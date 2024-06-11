'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { variants } from '@/animations/variant';
import EnvelopIcon from '@/components/icons/EnvelopIcon';
import PhoneIcon from '@/components/icons/PhoneIcon';
import LocationIcon from '@/components/icons/LocationIcon';
import Direction from './ui/Direction';
// import map from '@/assets/images/map.png'

const ContactUs = ({}) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="w-full relative h-[100vh] flex items-center justify-center overflow-hidden"
    >
      <Image
        src="static/media/map.png"
        alt="شرکت روشن"
        className="h-full max-w-[864px] w-full absolute left-0 bp960:opacity-50 bp480:w-[180%] bp480:-translate-x-[220px]"
      />
      <div className="absolute right-[187px] flex flex-col items-end gap-[51px] text-white text-[20px] font-light bp960:right-[80px] bp768:right-[30px]">
        <div className="flex items-center gap-[30px]">
          <span>salam@roshan-ai.ir</span>
          <EnvelopIcon width={22} height={15} />
        </div>
        <div className="flex items-center gap-[30px]">
          <div className="flex flex-col gap-[13px] items-end">
            <span> +۹۸ ۲۱ ۸۸ ۹۴ ۳۶ ۳۸</span>
            <span> +۹۸ ۲۱ ۸۸ ۹۰ ۸۷ ۱۰</span>
          </div>
          <PhoneIcon width={22} height={22} />
        </div>
        <div className="flex items-center gap-[30px] text-right">
          <span className="max-w-[330px] bp480:max-w-[220px]">
            تهران، میدان ولیعصر، بلوار کریمخان زند، خیابان به آفرین، پلاک ۳۰
          </span>
          <LocationIcon width={18} height={23} />
        </div>
      </div>
      <Direction />
    </motion.div>
  );
};

export default ContactUs;
