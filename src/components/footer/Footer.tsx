const Footer = () => {
  return (
    <div className='mx-auto mt-[320px] flex max-w-[1487px] flex-col items-center gap-[170px] text-[#FAFAFA]'>
      <span className='text-[42px] font-[700] text-[#A76CF3]'>
        با ما در تماس باشید
      </span>
      <div className='flex w-full items-start justify-between'>
        <div className='mt-4 flex flex-col items-start gap-[120px] text-[24px] font-[500]'>
          <div className='flex items-center gap-[26px]'>
            <svg
              width='58'
              height='58'
              viewBox='0 0 58 58'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M2.07251 12.4224L27.822 29.4739C28.5312 29.9437 29.4708 29.9437 30.1803 29.4739L55.9296 12.4224H2.07251Z'
                stroke='#A76CF3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M53.8583 11.8921H4.14395C2.99992 11.8921 2.07251 12.7792 2.07251 13.8735V43.5939C2.07251 44.6881 2.99992 45.5753 4.14395 45.5753H53.8583C55.0022 45.5753 55.9296 44.6881 55.9296 43.5939V13.8735C55.9296 12.7792 55.0022 11.8921 53.8583 11.8921Z'
                stroke='#A76CF3'
              />
            </svg>
            <span className='opacity-60'>salam@roshan-ai.ir</span>
          </div>
          <div className='flex items-center gap-[30px]'>
            <svg
              width='48'
              height='50'
              viewBox='0 0 48 50'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g clip-path='url(#clip0_1648_3734)'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M18.3536 15.2727C20.5256 13.1686 19.356 11.712 19.356 11.712C19.356 11.712 15.6804 4.42855 14.0097 3.13371C12.506 1.67703 10.5011 2.64816 10.5011 2.64816L4.65355 8.47489C-2.0294 21.2613 28.7121 51.0424 42.0781 44.5683L47.9256 38.9034C47.9256 38.9034 48.9282 37.1229 47.5916 35.5044C46.0879 34.0477 38.7367 30.3252 38.7367 30.3252C38.7367 30.3252 37.0659 29.3541 35.061 31.2963C33.0561 33.4004 33.0561 33.4004 33.0561 33.4004C33.0561 33.4004 32.0536 34.2097 30.717 33.5621C25.5378 30.9725 18.8548 24.4984 16.0146 19.3191C15.3463 18.1861 16.3487 17.0531 16.3487 17.0531L18.3536 15.2727Z'
                  stroke='#A76CF3'
                />
                <path
                  d='M32.6306 4.021C39.4193 5.74218 44.7534 11.0622 46.5314 17.4775'
                  stroke='#A76CF3'
                  stroke-linecap='round'
                />
                <path
                  d='M29.1533 17.3081C31.0705 17.7986 32.4647 19.1065 32.8131 20.7414'
                  stroke='#A76CF3'
                  stroke-linecap='round'
                />
                <path
                  d='M31.0027 10.6704C35.2522 11.8223 38.6519 15.1133 39.6719 19.227'
                  stroke='#A76CF3'
                  stroke-linecap='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_1648_3734'>
                  <rect
                    width='48'
                    height='48.5775'
                    fill='white'
                    transform='translate(0 0.667969)'
                  />
                </clipPath>
              </defs>
            </svg>
            <div className='flex flex-col items-start opacity-60'>
              <span>+98 21 9100 33 03</span>
              <span>+98 21 88943638</span>
            </div>
          </div>
          <div className='flex items-center gap-[30px]'>
            <svg
              width='44'
              height='52'
              viewBox='0 0 44 52'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M41.8022 21.3668C41.8022 35.3254 26.5467 44.9111 22.0022 47.4581C17.4481 44.9201 2.20215 35.3709 2.20215 21.3668C2.20215 10.7786 11.0669 2.19531 22.0022 2.19531C32.9373 2.19531 41.8022 10.7786 41.8022 21.3668Z'
                stroke='#A76CF3'
              />
              <path
                d='M22.0014 31.4102C27.6092 31.4102 32.1553 26.9889 32.1553 21.5347C32.1553 16.0806 27.6092 11.6592 22.0014 11.6592C16.3937 11.6592 11.8477 16.0806 11.8477 21.5347C11.8477 26.9889 16.3937 31.4102 22.0014 31.4102Z'
                stroke='#A76CF3'
              />
            </svg>
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
              placeholder='پیام شما'></textarea>
          </div>
          <button
            type='button'
            className='h-[85px] w-[310px] rounded-[5px] bg-[#A76CF3] text-[24px] text-base font-[700] text-[#000]'>
            ارسال
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
