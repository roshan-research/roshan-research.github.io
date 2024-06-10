import { Metadata } from "next";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fa'>
      <body className='font-yekanbakh bg-black'>
        <Header />
        {children}
      </body>
    </html>
  );
}
