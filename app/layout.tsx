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
  metadataBase: new URL("https://nusnavi.vercel.app"),

  title: "NUSNAVI｜長崎大学の進学・学生生活情報サイト",

  description:
    "長崎大学への進学を考える高校生から現役大学生まで。奨学金・経済支援・履修登録・成績情報など、進学準備と大学生活に役立つ情報をわかりやすく届けます。",

  applicationName: "NUSNAVI",

  openGraph: {
    title: "NUSNAVI｜進学準備から大学生活まで",
    description:
      "長崎大学への進学を考える高校生・高校既卒生から大学生まで。奨学金・経済支援・履修登録・成績情報など、進学準備と大学生活に役立つ情報を届けます。",
    siteName: "NUSNAVI",
    url: "https://nusnavi.vercel.app",
    type: "website",
  },

  keywords: [
    "NUSNAVI",
    "長崎大学",
    "長崎大学 進学",
    "長崎大学 奨学金",
    "奨学金",
    "経済支援",
    "授業料免除",
    "履修登録",
    "教養教育",
    "成績分布",
    "学生支援",
    "高校生",
    "高校既卒生",
    "大学生",
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