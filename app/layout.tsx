import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script" // 추가

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "백엔드 개발자 포트폴리오",
  description: "유지보수성과 확장성, 비용 효율성을 균형 있게 고려하는 백엔드 개발자 포트폴리오",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Google Analytics 스크립트 삽입 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XK3T0S4DE1"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XK3T0S4DE1');
          `}
        </Script>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
