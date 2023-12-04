import { FC, useState } from "react";
import clsx from "clsx";
import { Tooltip } from "react-tooltip";
import ActiveTabIcon from "../icons/active-tab-icon";
import RecognizeText from "./recognize-text/RecognizeText";
import FaceRecognize from "./face-recognize/FaceRecognize";
import ImageRecognize from "./image-recognize/ImageRecognize";
import Documents from "./documents/Document";

type ConclusionProps = {
  windowWidth: number | null;
};

const Conclusion: FC<ConclusionProps> = ({ windowWidth }) => {
  const [activeTab, setActiveTab] = useState(1);

  const recognizeTextHandler = () => {
    setActiveTab(1);
  };
  const recognizeFaceHandler = () => {
    setActiveTab(2);
  };
  const recognizeImageHandler = () => {
    setActiveTab(3);
  };
  const recognizeDocumentsHandler = () => {
    setActiveTab(4);
  };

  return (
    <div className='mt-[320px] flex w-full flex-col items-center gap-[120px] sm:mt-[92px] sm:gap-[60px]'>
      <span className='text-[1.8vw] font-normal text-[#A76CF3] sm:text-[20px]'>
        به عمل کار برآید :{")"}{" "}
      </span>
      <div className='flex w-full max-w-[1500px] items-center justify-between gap-[30px] custombp4:gap-[10px]'>
        <div className='flex flex-col items-start gap-[50px] whitespace-nowrap text-[1.3vw] font-light sm:text-base custombp4:w-[60px] custombp5:hidden'>
          <div
            onClick={recognizeTextHandler}
            className={clsx(
              "flex cursor-pointer items-center",
              activeTab === 1 ? "gap-[30px]" : "gap-[43px] pr-[14px]"
            )}
            data-tooltip-id='my-tooltip'
            data-tooltip-content='تشخیص مفهم متن'
          >
            <ActiveTabIcon activeTab={activeTab} currentTab={1} />
            <span
              className={clsx(
                "select-none py-1 transition-colors duration-300 ease-in-out custombp4:hidden",
                activeTab === 1
                  ? "bg-[#A76CF3] font-normal text-[#000]"
                  : "bg-[#000] text-[#FAFAFA]"
              )}
            >
              تشخیص مفهوم متن
            </span>
            {windowWidth! < 821 && (
              <Tooltip id='my-tooltip' className='z-40' place='left' />
            )}
          </div>
          <div
            onClick={recognizeFaceHandler}
            className={clsx(
              "flex cursor-pointer items-center",
              activeTab === 2 ? "gap-[30px]" : "gap-[43px] pr-[14px]"
            )}
            data-tooltip-id='my-tooltip-2'
            data-tooltip-content='تشخیص چهره'
          >
            <ActiveTabIcon activeTab={activeTab} currentTab={2} />
            <span
              className={clsx(
                "select-none py-1 transition-colors duration-300 ease-in-out custombp4:hidden",
                activeTab === 2
                  ? "bg-[#A76CF3] font-normal text-[#000]"
                  : "bg-[#000] text-[#FAFAFA]"
              )}
            >
              تشخیص چهره
            </span>
            {windowWidth! < 821 && (
              <Tooltip id='my-tooltip-2' className='z-40' place='left' />
            )}
          </div>
          <div
            onClick={recognizeImageHandler}
            className={clsx(
              "flex cursor-pointer items-center",
              activeTab === 3 ? "gap-[30px]" : "gap-[43px] pr-[14px]"
            )}
            data-tooltip-id='my-tooltip-3'
            data-tooltip-content='شناسایی تصاویر'
          >
            <ActiveTabIcon activeTab={activeTab} currentTab={3} />
            <span
              className={clsx(
                "select-none py-1 transition-colors duration-300 ease-in-out custombp4:hidden",
                activeTab === 3
                  ? "bg-[#A76CF3] font-normal text-[#000]"
                  : "bg-[#000] text-[#FAFAFA]"
              )}
            >
              شناسایی تصاویر
            </span>
            {windowWidth! < 821 && (
              <Tooltip id='my-tooltip-3' className='z-40' place='left' />
            )}
          </div>
          {/* <div
            onClick={recognizeDocumentsHandler}
            className={clsx(
              "flex cursor-pointer items-center",
              activeTab === 4 ? "gap-[30px]" : "gap-[43px] pr-[14px]"
            )}
            data-tooltip-id='my-tooltip-3'
            data-tooltip-content='شناسایی اسناد و مدارک'
          >
            <ActiveTabIcon activeTab={activeTab} currentTab={4} />
            <span
              className={clsx(
                "select-none py-1 transition-colors duration-300 ease-in-out custombp4:hidden",
                activeTab === 4
                  ? "bg-[#A76CF3] font-normal text-[#000]"
                  : "bg-[#000] text-[#FAFAFA]"
              )}
            >
              شناسایی اسناد و مدارک
            </span>
            {windowWidth! < 821 && (
              <Tooltip id='my-tooltip-3' className='z-40' place='left' />
            )}
          </div> */}
        </div>
        <div className='flex max-w-[1080px] items-start justify-start sm:w-full'>
          <div className='flex min-h-[840px] min-w-[1070px] items-center justify-center sm:w-full custombp5:min-h-0 custombp5:min-w-0 custombp5:flex-col'>
            <RecognizeText activeTab={activeTab} />
            <FaceRecognize activeTab={activeTab} />
            <ImageRecognize activeTab={activeTab} />
            {/* <Documents activeTab={activeTab} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
