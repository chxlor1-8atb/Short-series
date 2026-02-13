import type { Metadata } from "next";
import { Spline_Sans, Noto_Sans_Thai } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const splineSans = Spline_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spline-sans",
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans-thai",
});

export const metadata: Metadata = {
  title: "บุ๊คบิ๊ก - แพลตฟอร์มซีรีส์สั้น",
  description: "A modern streaming platform for short series",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="dark">
      <body
        className={`${splineSans.variable} ${notoSansThai.variable} font-display antialiased bg-background-light dark:bg-background-dark text-slate-900 dark:text-white`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
