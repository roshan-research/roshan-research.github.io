import Link from "next/link";
import LogoIcon from "../icons/LogoIcon";
import TopArrowIcon from "../icons/TopArrowIcon";

type FooterProps = {
  toTopHandler: () => void;
};

const Footer: React.FC<FooterProps> = ({ toTopHandler }) => {
  return (
    <div className='relative w-full h-[292px] bg-black mt-[240px] flex items-center justify-center flex-col gap-4 border-t-[1px] border-[#303030]'>
      <Link href='/'>
        <LogoIcon width={102} height={35} />
      </Link>
      <span className='text-xs font-light text-white'>
        شرکت دانـش بنیـــان راهکــار پـــردازش ژرف
      </span>
      <TopArrowIcon
        width={42}
        height={42}
        className='absolute left-[126px] bottom-[126px] cursor-pointer bp700:left-[30px]'
        onClick={toTopHandler}
      />
    </div>
  );
};

export default Footer;
