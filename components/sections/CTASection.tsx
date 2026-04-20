'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/20 blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-accent/10 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Zap size={14} className="text-accent" />
            <span className="font-inter text-xs text-accent font-medium tracking-wider uppercase">
              Ready to Get Started?
            </span>
          </div>

          <h2 className="font-poppins font-bold text-3xl sm:text-5xl text-white mb-5 leading-tight">
            Let&apos;s Build Something{' '}
            <span className="text-accent neon-text">Amazing Together</span>
          </h2>

          <p className="font-inter text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Ready to accelerate your business with cutting-edge technology? Let&apos;s talk about your project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-gradient text-white font-poppins font-semibold px-8 py-4 rounded-full neon-glow"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 glass text-white font-poppins font-semibold px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              >
                View Services
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
