import { HTMLAttributes } from "react";

export type IconProps = HTMLAttributes<HTMLOrSVGElement> &
  Partial<{
    width: number;
    height: number;
    color: string;
    colors: string[];
  }>;
