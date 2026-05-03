'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Deepak Sharma',
    company: 'Education Solution Provider',
    role: 'CEO',
    quote:
      'Tech Rapids transformed our entire digital infrastructure. Their team delivered beyond expectations — on time and within budget. Truly a world-class partner.',
    rating: 5,
  },
  {
    name: 'Arjun Kapoor',
    company: 'FinTech Innovations',
    role: 'CTO',
    quote:
      'The AI automation solution they built for us reduced our processing time by 70%. Rahi and the team are incredibly talented and professional.',
    rating: 5,
  },
  {
    name: 'Sneha Patel',
    company: 'HealthCare Plus',
    role: 'Director of Technology',
    quote:
      'Outstanding software implementation. We feel completely secure now. Their 24/7 support is a game-changer for our operations.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section className="section-padding bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-inter text-accent text-sm font-medium tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-3xl p-8 sm:p-12 text-center"
            >
              <Quote size={40} className="text-accent/30 mx-auto mb-6" />
              <p className="font-inter text-white/80 text-lg leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="font-poppins font-semibold text-white">{testimonials[current].name}</p>
              <p className="font-inter text-accent/70 text-sm">
                {testimonials[current].role}, {testimonials[current].company}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? 'bg-accent w-6' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
