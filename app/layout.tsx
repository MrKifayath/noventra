import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ScrollToTop } from '@/components/scroll-to-top'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Noventra Technologies | Enterprise Software Solutions',
  description: 'Premium digital and software solutions including ERP, CRM, e-commerce, and custom development. Transform your business with Noventra.',
  generator: 'v0.app',
  keywords: 'Software Solutions, ERP, CRM, Web Applications, Custom Development, Enterprise Software, Business Management',
  authors: [{ name: 'Noventra Technologies' }],
  openGraph: {
    title: 'Noventra Technologies | Enterprise Software Solutions',
    description: 'Premium digital and software solutions for modern enterprises',
    type: 'website',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
