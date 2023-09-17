import { EnvelopSvg, LocationSvg, PhoneSvg } from "../svg";

const Footer = () => {
  return (
    <div className='mx-auto mt-[320px] flex max-w-[1487px] flex-col items-center gap-[170px] text-[#FAFAFA]'>
      <span className='text-[42px] font-[700] text-[#A76CF3]'>
        با ما در تماس باشید
      </span>
      <div className='flex w-full items-start justify-between'>
        <div className='mt-4 flex flex-col items-start gap-[120px] text-[24px] font-[500]'>
          <div className='flex items-center gap-[26px]'>
            <EnvelopSvg width={58} height={58} />
            <span className='opacity-60'>salam@roshan-ai.ir</span>
          </div>
          <div className='flex items-center gap-[30px]'>
            <PhoneSvg width={48} height={50} />
            <div className='flex flex-col items-start opacity-60'>
              <span>+98 21 9100 33 03</span>
              <span>+98 21 88943638</span>
            </div>
          </div>
          <div className='flex items-center gap-[30px]'>
            <LocationSvg width={44} height={52} />
            <span className='max-w-[370px] opacity-60'>
              میدان ولیعصر، خیابان کریم خان زند، خیابان به آفرین، پلاک 30، طبقه
              دوم
            </span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-[48px]'>
          <div className='w-[795px]'>
            <input
              type='text'
              placeholder='آدرس ایمیل'
              className='w-full border-b-[1px] border-[#FAFAFA] bg-transparent py-7 pr-3 text-[20px] outline-none'
              autoComplete='off'
              autoCorrect='off'
            />
          </div>
          <div className='w-[795px]'>
            <textarea
              name=''
              id=''
              rows={10}
              className='w-full resize-none border-b-[1px] border-[#FAFAFA] bg-transparent pr-3 pt-[14px] text-[20px] outline-none'
              placeholder='پیام شما'
            ></textarea>
          </div>
          <button
            type='button'
            className='h-[85px] w-[310px] rounded-[5px] bg-[#A76CF3] text-[24px] text-base font-[700] text-[#000]'
          >
            ارسال
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
