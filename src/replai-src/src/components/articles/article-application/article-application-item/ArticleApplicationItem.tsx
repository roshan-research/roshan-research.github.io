import { motion } from "framer-motion";
import clsx from "clsx";
import { image_animation } from "@/animations";

type ArticleApplicationItemProps = {
  title: string;
  subTitle: string;
  image: string;
  size: { width: number; height: number };
  index: number;
};

const ArticleApplicationItem: React.FC<ArticleApplicationItemProps> = ({
  title,
  subTitle,
  image,
  size,
  index,
}) => {
  return (
    <motion.div
      variants={image_animation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={clsx(
        "flex max-w-[270px] flex-col items-start",
        index === 1 && "bp768:m-0 mt-[110px]",
        index === 2 && "bp768:m-0 -mr-[350px] -mt-[60px]",
      )}
    >
      {/* desktop */}
      <img
        src={image}
        alt="replay-application"
        width={size.width}
        height={size.height}
        className="bp768:hidden"
      />
      {/* responsive */}
      <img
        src={image}
        alt="replay-application"
        className="bp768:block hidden w-full"
      />
      <span className="mt-[23px] text-[18px] font-[700] text-[#4E69FE]">
        {title}
      </span>
      <span className="mt-3 text-sm font-light text-white">{subTitle}</span>
    </motion.div>
  );
};

export default ArticleApplicationItem;
