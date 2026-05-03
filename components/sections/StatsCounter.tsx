'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { target: 10, suffix: '+', label: 'Projects Completed' },
  { target: 5, suffix: '+', label: 'Happy Clients' },
  { target: 1, suffix: '+', label: 'Years Experience' },
  { target: 24, suffix: '/7', label: 'Support Hours' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="font-poppins font-extrabold text-4xl sm:text-5xl text-white">
      {count}{suffix}
    </span>
  )
}

export default function StatsCounter() {
  return (
    <section className="section-padding bg-brand-gradient relative overflow-hidden">
      {/* Glow overlay */}
      <div className="absolute inset-0 circuit-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mb-3">
            Our Numbers Speak
          </h2>
          <p className="font-inter text-white/70">Proven results that demonstrate our commitment to excellence.</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <Counter target={stat.target} suffix={stat.suffix} />
              <p className="font-inter text-white/70 mt-2 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
