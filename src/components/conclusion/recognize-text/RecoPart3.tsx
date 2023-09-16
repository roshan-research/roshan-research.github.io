import Tablet from "@/assets/images/conclusion/tablet.png";
import User from "@/assets/images/conclusion/user-3.png";

const RecoPart3 = () => {
  return (
    <div className='flex h-[278px] w-[376px] flex-col items-center bg-[#303030] px-[33px] py-6 text-[#FAFAFA]'>
      <div className='flex items-center gap-3'>
        <img src={Tablet} alt='' className='w-[29px]' draggable={false} />
        <div className='flex flex-col items-start text-base font-normal'>
          <span>تبلت اپل مدل</span>
          <span className='font-sans'>iPad mini 8.3 inch 2021-MK7M3LL/A</span>
        </div>
      </div>
      <span className='mt-3 text-base'>
        اگه یه گوشی دارید و برای کارایی مثل بازی یا خوندن کتاب به یه صفحه ی
        بزرگتر نیاز دارید حتما این تبلت رو بهتون پیشنهاد میکنم چون نسبت به قیمتش
        بی نظیره
      </span>
      <div className='my-3 h-[0.5px] w-full bg-[#FAFAFA]'></div>
      <div className='mt-3 flex w-full items-center justify-between'>
        <div className='flex items-center gap-[7px]'>
          <img src={User} alt='' className='w-[26px]' draggable={false} />
          <span className='text-base font-light'>برنا جویا</span>
        </div>
        <p>
          <span className='font-sans'>3</span> روز قبل
        </p>
      </div>
    </div>
  );
};

export default RecoPart3;
