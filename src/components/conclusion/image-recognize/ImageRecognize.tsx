import BabyFeet from "@/assets/images/conclusion/baby-feet.png";
import Watermelon from "@/assets/images/conclusion/watermelon.png";
import Boat from "@/assets/images/conclusion/boat.png";
import clsx from "clsx";
import { FC } from "react";

type ImageRecognizeProps = {
  activeTab: number;
};

const ImageRecognize: FC<ImageRecognizeProps> = ({ activeTab }) => {
  return (
    <div
      className={clsx(
        "items-start gap-10",
        activeTab === 3 ? "flex" : "hidden"
      )}>
      <div>
        <img src={BabyFeet} alt='' className='w-[330px]' />
      </div>
      <div className='mt-[170px]'>
        <img src={Watermelon} alt='' className='w-[330px]' />
      </div>
      <div className='mt-[80px]'>
        <img src={Boat} alt='' className='w-[330px]' />
      </div>
    </div>
  );
};

export default ImageRecognize;
