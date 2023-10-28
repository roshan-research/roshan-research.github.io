import { FooterSvg } from "../svg";

const Footer = () => {
  return (
    <div className='relative mt-[200px] flex w-full items-center justify-center pb-[50px] text-sm text-[#FAFAFA]'>
      <div className='absolute top-0 h-[1px] w-full bg-[#FAFAFA] opacity-25'></div>
      <div className='mt-[50px] flex w-full items-center justify-between px-[100px] md:flex-col md:gap-10'>
        <FooterSvg width={53} height={19} />
        <div className='flex items-start gap-[112px]'>
          <div className='flex flex-col items-start gap-[20px] whitespace-nowrap'>
            <a href='https://www.roshan-ai.ir/contact-us'>
              <span className='hover:text-[#A76CF3]'>تماس با ما</span>
            </a>
            <a href='https://www.roshan-ai.ir/join-us'>
              <span className='hover:text-[#A76CF3]'>همکاری با ما</span>
            </a>
          </div>
          <div className='flex flex-col items-start gap-[20px]'>
            <span>شرکت دانش‌بنیان «راهکار پردازش ژرف»</span>
            <a href='https://www.roshan-ai.ir'>
              <span className='whitespace-nowrap hover:text-[#A76CF3]'>
                salam@roshan-ai.ir
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
