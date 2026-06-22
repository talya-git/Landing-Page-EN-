import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-assistant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const playfair = Playfair_Display({
  variable: '--font-heebo',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'A-Z by Oren Cohen Group | Full-Service Luxury Real Estate in Jerusalem',
  description:
    'A-Z by Oren Cohen Group. Complete management of all professionals, suppliers, and your project in Israel under one roof — from purchase to key handover.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0c0f1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${playfair.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
