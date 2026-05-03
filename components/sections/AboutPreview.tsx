'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

const highlights = [
  'Expert team of 10+ professionals',
  '10+ successful projects delivered',
  'Trusted by clients across 5+ industries',
  'Cutting-edge technology stack',
]

export default function AboutPreview() {
  return (
    <section className="section-padding bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[420px] hidden sm:block"
          >
            <div className="absolute top-0 left-0 w-[65%] h-[75%] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                alt="Tech Rapids team collaboration"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[55%] h-[60%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1554699802-b54d95006c00?w=800"
                alt="Tech Rapids server infrastructure"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-light rounded-2xl px-5 py-3 shadow-xl border border-primary/20 z-10">
              <p className="font-poppins font-bold text-2xl text-primary">1+ Years</p>
              <p className="font-inter text-xs text-secondary/70">of Excellence</p>
            </div>
          </motion.div>

          {/* Content right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-inter text-primary text-sm font-medium tracking-widest uppercase mb-3">About Us</p>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-dark mb-5">
              We Are Your Trusted <span className="text-primary">Technology Partner</span>
            </h2>
            <p className="font-inter text-dark/70 leading-relaxed mb-6">
              Tech Rapids has been at the forefront of digital transformation since day one.
              We combine technical expertise with business acumen to deliver solutions that truly make a difference.
            </p>
            <ul className="space-y-3 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-primary shrink-0" />
                  <span className="font-inter text-dark/80 text-sm">{h}</span>
                </li>
              ))}
            </ul>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-brand-gradient text-white font-poppins font-semibold px-7 py-3.5 rounded-full neon-glow"
              >
                Learn More <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
