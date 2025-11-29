import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieConsentProvider } from "@/context/cookie-consent-context"
import CookieConsentBanner from "@/components/cookie-consent-banner"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Sport na Hrvatskom | sportnahrvatskom.com",
  description:
    "Premijerni hrvatski vodič za sportsko klađenje. Otkrijte pouzdane kladionice s ekskluzivnim bonusima i vrhunskim kvotama za hrvatske ljubitelje sporta.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr" className={`${playfair.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CookieConsentProvider>
            {children}
            <CookieConsentBanner />
          </CookieConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
