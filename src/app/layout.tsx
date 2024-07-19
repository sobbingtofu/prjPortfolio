import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"

import "./globals.css"

import QueryProvider from "@/components/common/ReactQueryClientProvider"

const inter = Noto_Sans_KR({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "윤기준 개발 포트폴리오",
  description: "프론트엔드 개발 포트폴리오 2024",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="scrollbar-thin scrollbar-w-1 scrollbar-thumb-[#9f9f9f] scrollbar-track-[#f4f4f4] h-32 overflow-y-scroll"
    >
      <body className={inter.className}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
