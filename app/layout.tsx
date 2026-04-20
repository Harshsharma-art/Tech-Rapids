import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Tech Rapids — Flow Fast Through Tech Troubles',
    template: '%s | Tech Rapids',
  },
  description:
    'Tech Rapids is a premium IT company offering Web Development, Mobile Apps, Cloud Solutions, Cybersecurity, AI & Automation, and IT Support.',
  keywords: ['IT company', 'web development', 'mobile app', 'cloud solutions', 'cybersecurity', 'AI automation'],
  openGraph: {
    type: 'website',
    siteName: 'Tech Rapids',
    title: 'Tech Rapids — Flow Fast Through Tech Troubles',
    description: 'Premium IT solutions to accelerate your business growth.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
