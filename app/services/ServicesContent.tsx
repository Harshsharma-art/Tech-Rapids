'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Globe, Smartphone, Cloud, Shield, Bot, Headphones, ArrowRight, Check } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'We craft high-performance, scalable web applications using modern frameworks and best practices.',
    features: ['React / Next.js Applications', 'E-commerce Platforms', 'CMS & Content Portals', 'API Development & Integration', 'Performance Optimization'],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile experiences that delight users on iOS and Android.',
    features: ['React Native & Flutter', 'iOS & Android Native', 'App Store Optimization', 'Push Notifications', 'Offline-First Architecture'],
    color: 'from-purple-500/20 to-blue-500/20',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable, secure cloud infrastructure designed to grow with your business.',
    features: ['Cloud Migration Strategy', 'AWS / Azure / GCP Setup', 'DevOps & CI/CD Pipelines', 'Serverless Architecture', 'Cost Optimization'],
    color: 'from-cyan-500/20 to-teal-500/20',
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    description: 'Intelligent automation and AI-powered tools that transform your business operations.',
    features: ['Machine Learning Models', 'Process Automation (RPA)', 'Chatbots & Virtual Assistants', 'Data Analytics & BI', 'Predictive Analytics'],
    color: 'from-green-500/20 to-cyan-500/20',
  },
  {
    icon: Headphones,
    title: 'IT Support',
    description: '24/7 managed IT services and technical support to keep your operations running smoothly.',
    features: ['24/7 Help Desk Support', 'Network Management', 'Hardware Procurement', 'IT Infrastructure Setup', 'Disaster Recovery Planning'],
    color: 'from-yellow-500/20 to-orange-500/20',
  },
]

const steps = [
  { num: '01', title: 'Discovery', desc: 'We analyze your requirements and define project scope.' },
  { num: '02', title: 'Design', desc: 'Our team creates detailed architecture and UI/UX designs.' },
  { num: '03', title: 'Development', desc: 'Agile development with regular updates and reviews.' },
  { num: '04', title: 'Delivery', desc: 'Testing, deployment, and ongoing support.' },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function ServicesContent() {
  return (
    <>
      {/* Service cards */}
      <section className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((svc) => (
              <motion.div
                key={svc.title}
                variants={item}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0,170,255,0.15)' }}
                className="glass rounded-2xl p-7 flex flex-col"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-5`}>
                  <svc.icon size={26} className="text-accent" />
                </div>
                <h2 className="font-poppins font-bold text-white text-xl mb-3">{svc.title}</h2>
                <p className="font-inter text-white/60 text-sm leading-relaxed mb-5">{svc.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check size={14} className="text-accent shrink-0" />
                      <span className="font-inter text-white/70 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-brand-gradient text-white font-poppins font-semibold text-sm px-6 py-3 rounded-full w-full justify-center"
                  >
                    Get Started <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Work Process */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="font-inter text-accent text-sm font-medium tracking-widest uppercase mb-3">How We Work</p>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white">Our Work Process</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-accent to-primary-light" />

            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 rounded-full bg-brand-gradient flex items-center justify-center mx-auto mb-5 neon-glow relative z-10">
                  <span className="font-poppins font-bold text-white text-xl">{step.num}</span>
                </div>
                <h3 className="font-poppins font-semibold text-white text-lg mb-2">{step.title}</h3>
                <p className="font-inter text-white/60 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
