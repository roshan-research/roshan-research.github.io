import clsx from "clsx";
import { FC } from "react";
import RecoPart1 from "./RecoPart1";
import RecoPart2 from "./RecoPart2";
import RecoPart3 from "./RecoPart3";

type RecognizeTextProps = {
  activeTab: number;
};

const RecognizeText: FC<RecognizeTextProps> = ({ activeTab }) => {
  return (
    <div
      className={clsx(
        "items-center gap-[135px]",
        activeTab === 1 ? "flex" : "hidden"
      )}>
      <div>
        <RecoPart1 />
      </div>
      <div className='flex flex-col items-start gap-[145px]'>
        <div className='mr-[70px]'>
          <RecoPart2 />
        </div>
        <div>
          <RecoPart3 />
        </div>
      </div>
    </div>
  );
};

export default RecognizeText;
