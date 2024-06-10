import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تماس با ما",
  description:
    "شرکت راهکار پردازش ژرف (با نام تجاری روشن)، شرکتی دانش‌بنیان در حیطهٔ هوش مصنوعی است.",
  icons: "/images/logo.png",
  alternates: {
    canonical: "https://www.roshan-ai.ir/",
  },
  openGraph: {
    title: "روشن | تماس با ما",
    description:
      "شرکت راهکار پردازش ژرف (با نام تجاری روشن)، شرکتی دانش‌بنیان در حیطهٔ هوش مصنوعی است.",
    images: "/images/logo.png",
  },
};

export default function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
