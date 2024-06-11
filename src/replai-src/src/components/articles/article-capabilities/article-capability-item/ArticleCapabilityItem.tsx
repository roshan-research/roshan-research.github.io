import { motion } from "framer-motion";
import clsx from "clsx";
import { text_animation, text_bg_animation } from "@/animations";

type ArticleCapabilityItemProps = {
  title: string;
  subTitle: string;
  icon: React.ReactElement;
  index: number;
};

const ArticleCapabilityItem: React.FC<ArticleCapabilityItemProps> = ({
  title,
  subTitle,
  icon,
  index,
}) => {
  return (
    <div
      className={clsx(
        "flex w-full max-w-[400px] flex-col items-start",
        (index === 1 || index === 3) && "mt-[90px]",
      )}
    >
      <div>{icon}</div>
      <motion.div
        variants={text_bg_animation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="relative mt-[23px] overflow-visible whitespace-nowrap bg-[#4E69FE] text-[18px] font-[700]"
      >
        <span className="text-[#4E69FE]">{title}</span>
        <motion.span
          variants={text_animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="absolute right-0 top-0 overflow-hidden text-black"
        >
          {title}
        </motion.span>
      </motion.div>
      <span className="mt-3 text-sm font-light text-white">{subTitle}</span>
    </div>
  );
};

export default ArticleCapabilityItem;
