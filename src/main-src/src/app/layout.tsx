import { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: {
    default: "روشن",
    template: "روشن | %s",
  },
  description:
    "شرکت راهکار پردازش ژرف (با نام تجاری روشن)، شرکتی دانش‌بنیان در حیطهٔ هوش مصنوعی است.",
  icons: "/images/logo.png",
  alternates: {
    canonical: "https://www.roshan-ai.ir/",
  },
  openGraph: {
    title: "روشن",
    description:
      "شرکت راهکار پردازش ژرف (با نام تجاری روشن)، شرکتی دانش‌بنیان در حیطهٔ هوش مصنوعی است.",
    images: "/images/logo.png",
  },
};

import "./styles/globals.css";
import Header from "@/components/layout/Header";

const myFont = localFont({ src: "../../public/fonts/YekanBakh-VF.ttf" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fa'>
      <body className={myFont.className} style={{ backgroundColor: "#000" }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
