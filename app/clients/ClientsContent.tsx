'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Building2, Cpu, ShoppingBag, Truck, Home, Star, Quote } from 'lucide-react'

const clients = [
  {
    icon: GraduationCap,
    name: 'Education Solution Provider',
    industry: 'EdTech / Education',
    desc: 'Delivered comprehensive digital infrastructure and IT support solutions to enhance the educational experience for thousands of students.',
    color: 'from-blue-500/20 to-cyan-500/20',
    featured: true,
  },
  {
    icon: Building2,
    name: 'TechCorp Industries',
    industry: 'Manufacturing & Tech',
    desc: 'Built a full-stack enterprise resource planning system and migrated legacy infrastructure to the cloud.',
    color: 'from-purple-500/20 to-blue-500/20',
    featured: false,
  },
  {
    icon: Cpu,
    name: 'FinTech Innovations',
    industry: 'Financial Technology',
    desc: 'Developed AI-powered fraud detection and automated reporting dashboards for real-time financial insights.',
    color: 'from-green-500/20 to-cyan-500/20',
    featured: false,
  },
  {
    icon: ShoppingBag,
    name: 'RetailMax',
    industry: 'E-Commerce & Retail',
    desc: 'Designed and launched a high-performance e-commerce platform handling 10,000+ daily transactions.',
    color: 'from-orange-500/20 to-yellow-500/20',
    featured: false,
  },
  {
    icon: Truck,
    name: 'LogiTrack',
    industry: 'Logistics & Supply Chain',
    desc: 'Created a real-time fleet tracking and route optimization system reducing delivery times by 35%.',
    color: 'from-cyan-500/20 to-teal-500/20',
    featured: false,
  },
  {
    icon: Home,
    name: 'BuildSmart',
    industry: 'Real Estate & Construction',
    desc: 'Implemented a property management platform with integrated CRM and automated client communication.',
    color: 'from-red-500/20 to-orange-500/20',
    featured: false,
  },
]



const metrics = [
  { value: '98%', label: 'Client Retention Rate' },
  { value: '50+', label: 'Active Clients' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '100%', label: 'On-Time Delivery' },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function ClientsContent() {
  return (
    <>
      {/* Client Cards */}
      <section className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="font-inter text-accent text-sm font-medium tracking-widest uppercase mb-3">Who We Serve</p>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mb-4">Trusted By Industry Leaders</h2>
            <p className="font-inter text-white/60 max-w-xl mx-auto">
              From startups to enterprises, we partner with businesses across every industry to deliver transformative IT solutions.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {clients.map((client) => (
              <motion.div
                key={client.name}
                variants={item}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0,170,255,0.15)' }}
                className={`glass rounded-2xl p-7 flex flex-col relative ${client.featured ? 'border border-accent/30' : ''}`}
              >
                {client.featured && (
                  <span className="absolute top-4 right-4 bg-accent/20 text-accent text-xs font-inter font-medium px-3 py-1 rounded-full border border-accent/30">
                    Featured
                  </span>
                )}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${client.color} flex items-center justify-center mb-5`}>
                  <client.icon size={26} className="text-accent" />
                </div>
                <h3 className="font-poppins font-bold text-white text-lg mb-1">{client.name}</h3>
                <p className="font-inter text-accent/70 text-xs font-medium uppercase tracking-wider mb-3">{client.industry}</p>
                <p className="font-inter text-white/60 text-sm leading-relaxed flex-1">{client.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding bg-brand-gradient relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mb-3">Client Success Metrics</h2>
            <p className="font-inter text-white/70">Numbers that reflect our commitment to client satisfaction.</p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-poppins font-extrabold text-4xl sm:text-5xl text-white mb-2">{m.value}</p>
                <p className="font-inter text-white/70 text-sm">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
    
    </>
  )
}
