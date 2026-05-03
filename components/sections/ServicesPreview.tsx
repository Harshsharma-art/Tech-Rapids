'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Globe, Smartphone, Cloud, Shield, Bot, Headphones, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with the latest technologies.',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android that users love.',
    color: 'from-purple-500/20 to-blue-500/20',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure, migration, and management for your business.',
    color: 'from-cyan-500/20 to-teal-500/20',
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    description: 'Intelligent automation and AI-powered solutions to streamline your operations.',
    color: 'from-green-500/20 to-cyan-500/20',
  },
  {
    icon: Headphones,
    title: 'IT Support',
    description: '24/7 technical support and managed IT services to keep your business running.',
    color: 'from-yellow-500/20 to-orange-500/20',
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

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-inter text-accent text-sm font-medium tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mb-4">
            Our Core Services
          </h2>
          <p className="font-inter text-white/60 max-w-xl mx-auto">
            From concept to deployment, we deliver end-to-end technology solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              variants={item}
              whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(0,170,255,0.2)' }}
              className="glass rounded-2xl p-6 cursor-pointer group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-4`}>
                <svc.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-poppins font-semibold text-white text-lg mb-2">{svc.title}</h3>
              <p className="font-inter text-white/60 text-sm leading-relaxed mb-4">{svc.description}</p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-brand-gradient text-white font-poppins font-semibold px-8 py-3.5 rounded-full neon-glow"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
