import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Tech Rapids. Request a free consultation, ask questions, or start your digital transformation journey today.',
}

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-inter text-accent text-sm font-medium tracking-widest uppercase mb-3">Get In Touch</p>
          <h1 className="font-poppins font-extrabold text-4xl sm:text-6xl text-white mb-4">Contact Us</h1>
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 font-inter text-sm text-white/50">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-accent">Contact</span>
          </nav>
        </div>
      </section>
      <ContactForm />
    </>
  )
}
