'use client'

import { motion } from 'framer-motion'

const clients = [
  'Education Solution Provider',
  'FinTech Innovations',
  'HealthCare Plus',
  'RetailMax',
  'LogiTrack',
  'BuildSmart',
  'EduLearn Pro',
  'SecureNet',
  'CloudFirst',
  'DataDriven Co',
]

export default function Clients() {
  return (
    <section className="section-padding bg-gray-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-inter text-primary text-sm font-medium tracking-widest uppercase mb-3">Trusted By</p>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-dark mb-4">
            Our Valued Clients
          </h2>
        </motion.div>

        {/* Marquee */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={(e) => {
            const el = e.currentTarget.querySelector('.marquee-track') as HTMLElement
            if (el) el.style.animationPlayState = 'paused'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget.querySelector('.marquee-track') as HTMLElement
            if (el) el.style.animationPlayState = 'running'
          }}
        >
          <div className="marquee-track flex gap-8 animate-marquee whitespace-nowrap">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client}-${i}`}
                className="glass-light rounded-xl px-8 py-4 shrink-0 border border-primary/10"
              >
                <span className="font-poppins font-semibold text-secondary text-sm">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
