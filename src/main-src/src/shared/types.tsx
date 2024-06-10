import { HTMLAttributes } from "react";

export type IconProps = HTMLAttributes<HTMLOrSVGElement> & {
  width: number;
  height: number;
  color?: string;
  colors?: string[];
};
