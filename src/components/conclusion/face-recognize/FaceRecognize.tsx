import clsx from "clsx";
import { FC } from "react";
import Pic from "@/assets/images/conclusion/pic.png";

type FaceRecognizeProps = {
  activeTab: number;
};

const FaceRecognize: FC<FaceRecognizeProps> = ({ activeTab }) => {
  return (
    <div
      className={clsx(
        "h-[470px] w-[770px]",
        activeTab === 2 ? "block" : "hidden"
      )}>
      <img src={Pic} alt='' className='h-full w-full' />
    </div>
  );
};

export default FaceRecognize;
