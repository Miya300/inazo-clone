import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ホームページ | NUSNAVI",
  description:
    "NUSNAVIは長崎大学生向けの履修登録支援、教養教育検索、学生生活支援を提供する総合支援サイトです。",
  keywords: [
    "NUSNAVI",
    "長崎大学",
    "履修登録",
    "教養教育",
    "成績分布",
    "学生支援",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
