import { useState } from "react";
import ActiveTabIcon from "../icons/active-tab-icon";
import clsx from "clsx";
import RecognizeText from "./recognize-text/RecognizeText";
import FaceRecognize from "./face-recognize/FaceRecognize";
import ImageRecognize from "./image-recognize/ImageRecognize";

const Conclusion = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className='mt-[320px] flex w-full flex-col items-center gap-[196px] sm:gap-[100px]'>
      <span className='text-[42px] font-normal text-[#A76CF3] sm:text-[30px]'>
        به عمل کار برآید :){" "}
      </span>
      <div className='flex w-full max-w-[1500px] items-center justify-between gap-[30px]'>
        <div className='flex flex-col items-start gap-[50px] whitespace-nowrap text-[24px] font-normal sm:text-base'>
          <div
            onClick={() => setActiveTab(1)}
            className={clsx(
              "flex cursor-pointer items-center",
              activeTab === 1 ? "gap-[30px]" : "gap-[43px] pr-[14px]"
            )}
          >
            <ActiveTabIcon activeTab={activeTab} currentTab={1} />
            <span
              className={clsx(
                "select-none py-1 transition-all duration-1000 ease-in-out",
                activeTab === 1
                  ? "bg-[#A76CF3] text-[#000]"
                  : "bg-[#000] text-[#FAFAFA]"
              )}
            >
              تشخیص مفهوم متن
            </span>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className={clsx(
              "flex cursor-pointer items-center",
              activeTab === 2 ? "gap-[30px]" : "gap-[43px] pr-[14px]"
            )}
          >
            <ActiveTabIcon activeTab={activeTab} currentTab={2} />
            <span
              className={clsx(
                "select-none py-1 transition-all duration-1000 ease-in-out",
                activeTab === 2
                  ? "bg-[#A76CF3] text-[#000]"
                  : "bg-[#000] text-[#FAFAFA]"
              )}
            >
              تشخیص چهره
            </span>
          </div>
          <div
            onClick={() => setActiveTab(3)}
            className={clsx(
              "flex cursor-pointer items-center",
              activeTab === 3 ? "gap-[30px]" : "gap-[43px] pr-[14px]"
            )}
          >
            <ActiveTabIcon activeTab={activeTab} currentTab={3} />
            <span
              className={clsx(
                "select-none py-1 transition-all duration-1000 ease-in-out",
                activeTab === 3
                  ? "bg-[#A76CF3] text-[#000]"
                  : "bg-[#000] text-[#FAFAFA]"
              )}
            >
              شناسایی تصاویر
            </span>
          </div>
        </div>
        <div className='scrollbar-hide no-scrollbar flex max-w-[1080px] items-end justify-start'>
          <div className='flex min-h-[800px] min-w-[1070px] items-center justify-center'>
            <RecognizeText activeTab={activeTab} />
            <FaceRecognize activeTab={activeTab} />
            <ImageRecognize activeTab={activeTab} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
