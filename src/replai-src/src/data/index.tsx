import LessPayIcon from "@/components/icons/less-pay-icon";
import PersonalizationIcon from "@/components/icons/personalization-icon";
import SellAssitantIcon from "@/components/icons/sell-assistant-icon";
import SupportIcon from "@/components/icons/support-icon";
import OnlineStores from "@/assets/images/article-applications/online-stores.webp";
import FinancialCenters from "@/assets/images/article-applications/financial-centers.webp";
import ServiceCenters from "@/assets/images/article-applications/service-centers.webp";
import AccuracyIcon from "@/components/icons/accuracy-icon";
import ImprovementIcon from "@/components/icons/improvement-icon";
import ResponseIcon from "@/components/icons/response-icon";
import BigModelIcon from "@/components/icons/big-model-icon";

export const capabilitiesDummyData = [
  {
    title: "پشتیبانی ۲۴ ساعته‌",
    subTitle:
      "ریپلای برخلاف نیروی انسانی، نیازی به استراحت یا تعطیلی ندارد ودر تمام ساعات شبانه‌روز آماده پاسخگویی بدون وقفه به سوالات و درخواست‌های کاربران است",
    icon: <SupportIcon width={44} height={44} />,
  },
  {
    title: "دستیار فروش مجازی",
    subTitle:
      "ریپلای می‌تواند به عنوان دستیار فروش با دسترسی به اطلاعات و داده‌های محصول و فرآیند فروش، به سوالات مشتریان در زمینه‌هایی مانند: معرفی محصولات، موجودی محصول، روند ثبت سفارش و پرداخت و... پاسخ دهد. این ویژگی باعث افزایش فروش، بهبود تجربه و صرفه‌جویی در وقت مشتری می‌شود.",
    icon: <SellAssitantIcon width={44} height={44} />,
  },
  {
    title: "کاهش هزینه‌ها",
    subTitle:
      "استفاده از ریپلای به جای نیروی انسانی، موجب صرفه‌جویی قابل توجهی در منابع و هزینه‌های عملیاتی شرکت‌ها می‌شود.",
    icon: <LessPayIcon width={44} height={44} />,
  },
  {
    title: "شخصی‌سازی",
    subTitle:
      "ریپلای امکان شخصی‌سازی کامل بر اساس نیازها و حوزه فعالیت هر سازمان یا شرکت را دارد. چت بات ما با دریافت اطلاعات، داده‌ها و الگوهای مکالمه مورد نیاز از سازمان مشتری، به صورت اختصاصی آموزش داده شده و قابلیت‌های آن دقیقاً بر اساس نیاز آن سازمان تنظیم می‌شود.",
    icon: <PersonalizationIcon width={44} height={44} />,
  },
];

export const applicationsDummyData = [
  {
    title: "مراکز مالی",
    subTitle:
      "ریپلای در مراکز مالی، بانک‌ها، کارگزاری‌ها و... برای پاسخگویی و تسریع روند خدمت‌رسانی به مشتریان کاربرد بسیاری دارد.",
    image: FinancialCenters,
    size: {
      width: 200,
      height: 200,
    },
  },
  {
    title: "مراکز خدماتی",
    subTitle:
      "مراکز پاسخگویی، خدماتی، شرکت‌های بیمه و... برای پاسخگویی به مشتریان خود بهره زیادی از این محصول می‌برند.",
    image: ServiceCenters,
    size: {
      width: 284,
      height: 284,
    },
  },
  {
    title: "فروشگاه‌های اینترنتی و پلتفرم‌ها",
    subTitle:
      "چت بات ما به عنوان دستیار فروش، کمک زیادی به استارتاپ‌ها، فروشگاه‌های اینترنتی، پلتفرم‌ها و... می‌کند.",
    image: OnlineStores,
    size: {
      width: 242,
      height: 242,
    },
  },
];

export const facilitiesDummyData = [
  {
    title: "دقت و سرعت",
    subTitle:
      "ریپلای می‌تواند با دقت زیاد و سرعت بسیار بیشتری از نیروی انسانی پاسخگوی نیاز مشتریان باشد.",
    icon: <AccuracyIcon width={200} height={200} />,
  },
  {
    title: "بهبود مداوم از طریق تعامل با کاربران",
    subTitle:
      "ریپلای با تحلیل رفتار و الگوهای مکالمات کاربران، سعی در شناخت بهتر سؤالات، نیازها و خواسته‌های آن‌ها دارد. هر چه تعامل و گفتگوی بیشتری با کاربران صورت گیرد، چت بات قادر خواهد بود عملکرد خود را بهبود بخشد و پاسخ‌های دقیق‌تر و مرتبط‌تری ارائه کند.",
    icon: <ImprovementIcon width={150} height={150} />,
  },
  {
    title: "حجم بالای پاسخگویی همزمان",
    subTitle:
      "ریپلای قادر است به طور همزمان حجم بالایی از سوالات را به چندین کاربر پاسخ دهد بدون اینکه تاخیر یا اختلالی در کیفیت پاسخ‌ها ایجاد شود.",
    icon: <ResponseIcon width={200} height={200} />,
  },
  {
    title: "استفاده از مدل‌های زبانی بزرگ",
    subTitle:
      "ریپلای از دو مدل زبانی مطرح بهره می‌برد که منجر به درک بهتر مطالب کاربران می‌شود.",
    icon: <BigModelIcon width={181} height={148} />,
  },
];
