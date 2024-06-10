"use client";

import Link from "next/link";
import React, { JSXElementConstructor, ReactElement, useState } from "react";

type JoinUsLogoProps = {
  lo: {
    icon: ReactElement<
      { color: string; colors: string[] },
      string | JSXElementConstructor<any>
    >;
    color: string;
    colors: string[];
    href: string;
  };
};

const JoinUsLogo: React.FC<JoinUsLogoProps> = ({ lo }) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <Link href={lo.href}>
      <div
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        {React.cloneElement(lo.icon, {
          color: hovered ? lo.color : "#ffffff",
          colors: hovered
            ? lo.colors
            : [
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "#fff",
              ],
        })}
      </div>
    </Link>
  );
};

export default JoinUsLogo;
