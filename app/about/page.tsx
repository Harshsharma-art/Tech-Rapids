import type { Metadata } from 'next'
import Link from 'next/link'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Tech Rapids, founded by Rahi Sharma — our mission, vision, team, and core values.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-inter text-accent text-sm font-medium tracking-widest uppercase mb-3">Our Story</p>
          <h1 className="font-poppins font-extrabold text-4xl sm:text-6xl text-white mb-4">About Us</h1>
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 font-inter text-sm text-white/50">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-accent">About</span>
          </nav>
        </div>
      </section>

      <AboutContent />
    </>
  )
}
