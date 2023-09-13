import Pic1 from '@/assets/images/article-usage/pic-1.png';
import Pic2 from '@/assets/images/article-usage/pic-2.png';
import Pic3 from '@/assets/images/article-usage/pic-3.png';
import Pic4 from '@/assets/images/article-usage/pic-4.png';
import LeftLine from '@/assets/images/article-usage/left-line.png';

const KashUsage = () => {
	return (
		<div className="mt-[320px] flex flex-col items-center gap-[43px] text-[#FAFAFA]">
			<span className="text-[42px] text-[#A76CF3] font-[700]">
				کاربرد های کشف
			</span>
			<div className="flex items-start mt-[43px]">
				<div className="flex items-start flex-col gap-[219px]">
					<div className="flex flex-col items-start gap-5">
						<div className="relative">
							<img
								src={LeftLine}
								alt=""
								className="absolute -top-5 -left-4 w-[60px]"
							/>
							<img src={Pic1} alt="" className="w-[265px] rounded-[60px]" />
						</div>
						<span className="text-[#A76CF3] text-[24px] font-normal">
							تحلیل نظرات
						</span>
						<span className="text-[18px] font-light max-w-[480px]">
							کاربران در سایت ها و نرم افزار های همراه مختلف، در مورد همه چیز
							نظر می دهند. سوال ها و پاسخ ها نامحدود هستند؛ سرزمین های تازه ای
							که باید کشف شوند.
						</span>
					</div>
					<div></div>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default KashUsage;
