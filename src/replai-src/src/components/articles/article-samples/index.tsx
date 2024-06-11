import BasalamIcon from "@/components/icons/basalam-icon";
import BotIcon from "@/components/icons/bot-icon";
import DivarIcon from "@/components/icons/divar-icon";
import SamanBimeIcon from "@/components/icons/saman-bime-icon";
import UserIcon from "@/components/icons/user-icon";

const ArticleSample = () => {
  return (
    <div className="bp480:mr-0 mr-10 mt-[205px] flex flex-col items-center text-[24px] font-[700] text-[#4E69FE]">
      <span>نمونه‌های ریپلای</span>
      <div className="bp1024:flex-col bp1024:items-center bp1024:gap-[50px] mt-[35px] flex items-start justify-center gap-[201px]">
        {/* right */}
        <div className="flex flex-col gap-3">
          <DivarIcon
            width={50}
            height={50}
            className="bp480:m-0 -mb-2 -mr-[50px]"
          />
          <div className="bp480:w-[72.917vw] flex w-[350px] flex-col gap-3 whitespace-normal text-sm text-white">
            <div className="flex h-[68px] w-full items-center gap-4 rounded-[10px] bg-[#181818] px-6">
              <UserIcon width={36} height={36} />
              <span className="max-w-[242px]">
                سلام شما خودتون مالک خونه هستید؟
              </span>
            </div>
            <div className="flex h-[68px] w-full items-center gap-4 rounded-[10px] bg-[#4e69fe33] px-6">
              <BotIcon width={36} height={36} />
              <span className="max-w-[242px]">
                سلام بله من صاحب این خونه هستم در خدمتم.
              </span>
            </div>
          </div>
          <div className="bp480:w-[72.917vw] flex w-[350px] flex-col gap-3 whitespace-normal text-sm text-white">
            <div className="flex h-[68px] w-full items-center gap-4 rounded-[10px] bg-[#181818] px-6">
              <UserIcon width={36} height={36} />
              <span className="max-w-[242px]">سیستم سرمایش خونه چیه؟</span>
            </div>
            <div className="flex h-[68px] w-full items-center gap-4 rounded-[10px] bg-[#4e69fe33] px-6">
              <BotIcon width={36} height={36} />
              <span className="max-w-[242px]">
                واحد کولر ابی داره و کولر گازی داخل پذیرایی
              </span>
            </div>
          </div>
        </div>
        {/* left */}
        <div className="bp1024:mt-0 mt-[110px] flex flex-col gap-3">
          <BasalamIcon
            width={50}
            height={50}
            className="bp480:m-0 -mb-2 -mr-[50px]"
          />
          <div className="bp480:w-[72.917vw] flex w-[350px] flex-col gap-3 whitespace-normal text-sm text-white">
            <div className="flex h-[68px] w-full items-center gap-4 rounded-[10px] bg-[#181818] px-6">
              <UserIcon width={36} height={36} />
              <span className="max-w-[242px]">
                سلام خسته نباشید میخواستم بدونم هزینه ارسال محصول به عهده کیه؟
              </span>
            </div>
            <div className="flex h-[68px] w-full items-center gap-4 rounded-[10px] bg-[#4e69fe33] px-6">
              <BotIcon width={36} height={36} />
              <span className="max-w-[242px]">
                سلام هزینه ارسال را مشتری پرداخت می‌کند اما مشخص کردن آن با
                غرفه‌دار است
              </span>
            </div>
          </div>
          <div className="bp480:w-[72.917vw] flex w-[350px] flex-col gap-3 whitespace-normal text-sm text-white">
            <div className="flex h-[68px] w-full items-center gap-4 rounded-[10px] bg-[#181818] px-6">
              <UserIcon width={36} height={36} />
              <span className="max-w-[242px]">
                چند روز طول میکشه که محصول به دستم برسه؟{" "}
              </span>
            </div>
            <div className="flex h-[68px] w-full items-center gap-4 rounded-[10px] bg-[#4e69fe33] px-6">
              <BotIcon width={36} height={36} />
              <span className="max-w-[242px]">
                بسته به نوع محصول و موجودی ۲ تا ۵ روز کاری طول میکشد{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="bp1024:mr-0 bp1024:mt-[50px] -mr-[320px] -mt-[25px] flex flex-col gap-3">
        <SamanBimeIcon
          width={50}
          height={50}
          className="bp480:m-0 -mb-2 -mr-[50px]"
        />
        <div className="bp480:w-[72.917vw] flex w-[350px] flex-col gap-3 whitespace-normal text-sm text-white">
          <div className="flex h-[68px] w-full items-center gap-4 rounded-[10px] bg-[#181818] px-6">
            <UserIcon width={36} height={36} />
            <span className="max-w-[242px]">
              سلام خسته نباشید هزینه غربال گری تحت پوشش هست؟
            </span>
          </div>
          <div className="flex h-[68px] w-full items-center gap-4 rounded-[10px] bg-[#4e69fe33] px-6">
            <BotIcon width={36} height={36} />
            <span className="max-w-[242px]">
              بله؛ هزینه غربال گری با بررسی مستندات توسط کمیسیون پرداخت میشود
            </span>
          </div>
        </div>
        <div className="bp480:w-[72.917vw] flex w-[350px] flex-col gap-3 whitespace-normal text-sm text-white">
          <div className="flex h-[68px] w-full items-center gap-4 rounded-[10px] bg-[#181818] px-6">
            <UserIcon width={36} height={36} />
            <span className="max-w-[242px]">
              هزینه همراه بیمار در چه صورت پرداخت می‌گردد؟
            </span>
          </div>
          <div className="flex h-[68px] w-full items-center gap-4 rounded-[10px] bg-[#4e69fe33] px-6">
            <BotIcon width={36} height={36} />
            <span className="max-w-[242px]">
              همراه بیمار زیر 10 سال و بالای 70 سال پرداخت می گردد.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSample;
