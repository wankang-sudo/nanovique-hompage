import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NANOVIQUE - Precision Delivery, Remarkable Outcomes",
  description: "나노비크는 나노전달체 기반 전달 솔루션 플랫폼 바이오테크 회사입니다. 혁신적인 나노의학 기술로 인류 건강에 기여합니다.",
  keywords: "나노비크, NANOVIQUE, 나노전달체, 나노의학, 바이오테크, 정밀의학, 혁신, 기술",
  authors: [{ name: "NANOVIQUE" }],
  creator: "NANOVIQUE",
  openGraph: {
    title: "NANOVIQUE - Precision Delivery, Remarkable Outcomes",
    description: "미래형 전달 솔루션 전문 기업 나노비크입니다",
    url: "https://nanovique.com",
    siteName: "NANOVIQUE",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "NANOVIQUE - Precision Delivery, Remarkable Outcomes",
    description: "미래형 전달 솔루션 전문 기업 나노비크입니다",
    creator: "@nanovique",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
