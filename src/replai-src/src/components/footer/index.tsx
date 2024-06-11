import { useRef } from "react";
import FooterLogoIcon from "../icons/footer-logo-icon";

const Footer = () => {
  const emailLinkRef = useRef<HTMLSpanElement>(null);

  const mailHandler = () => {
    if (emailLinkRef.current) {
      const emailAddress = emailLinkRef.current?.innerText;
      if (emailAddress) {
        window.open(`mailto:${emailAddress}`);
      }
    }
  };

  return (
    <div className="relative mt-[200px] w-full pb-[69px] pt-[43px] text-xs font-normal">
      <div className="absolute top-0 h-[0.5px] w-full bg-white opacity-25"></div>
      <div className="bp480:flex-col bp480:items-center bp480:gap-10 mx-auto flex w-full max-w-[1045px] items-center justify-between">
        <a href="https://www.roshan-ai.ir">
          <FooterLogoIcon width={53} height={19} />
        </a>
        <div className="bp480:items-center flex flex-col items-start gap-[13px]">
          <a href="https://www.roshan-ai.ir/contact-us">
            <span>تماس با ما</span>
          </a>
          <a href="https://www.roshan-ai.ir/join-us">
            <span>همکاری با ما</span>
          </a>
        </div>
        <div className="bp480:items-center flex flex-col items-start gap-[13px]">
          <span>شرکت دانش بنیان «راهکار پردازش ژرف»</span>
          <span
            ref={emailLinkRef}
            className="cursor-pointer"
            onClick={mailHandler}
          >
            salam@roshan-ai.ir
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
