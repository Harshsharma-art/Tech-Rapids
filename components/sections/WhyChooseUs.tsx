'use client'

import { motion } from 'framer-motion'
import { Users, Clock, Trophy, Cpu, Heart } from 'lucide-react'

const reasons = [
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our team of 50+ certified professionals brings deep expertise across all technology domains.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical support ensures your systems are always running at peak performance.',
  },
  {
    icon: Trophy,
    title: 'Proven Track Record',
    description: '500+ successful projects delivered across diverse industries with measurable business impact.',
  },
  {
    icon: Cpu,
    title: 'Cutting-Edge Technology',
    description: 'We leverage the latest technologies and frameworks to build future-proof solutions.',
  },
  {
    icon: Heart,
    title: 'Client-Centric Approach',
    description: 'Your success is our success. We align every decision with your business goals and vision.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-inter text-accent text-sm font-medium tracking-widest uppercase mb-3">Why Us</p>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mb-4">
            Why Choose Tech Rapids?
          </h2>
          <p className="font-inter text-white/60 max-w-xl mx-auto">
            We combine technical excellence with genuine partnership to deliver results that matter.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              variants={item}
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(0,212,255,0.15)' }}
              className="glass rounded-2xl p-6 text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <r.icon size={26} className="text-accent" />
              </div>
              <h3 className="font-poppins font-semibold text-white text-base mb-2">{r.title}</h3>
              <p className="font-inter text-white/55 text-sm leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
