'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Target, Eye, CheckCircle, Users, Lightbulb, Shield, Zap, Heart, Globe } from 'lucide-react'

const values = [
  { icon: Target, title: 'Excellence', desc: 'We pursue the highest standards in everything we deliver.' },
  { icon: Users, title: 'Collaboration', desc: 'We work as one team — with each other and with our clients.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We embrace new ideas and cutting-edge technologies.' },
  { icon: Shield, title: 'Integrity', desc: 'We are honest, transparent, and accountable in all we do.' },
  { icon: Zap, title: 'Speed', desc: 'We deliver fast without compromising on quality.' },
  { icon: Heart, title: 'Client Focus', desc: 'Your success is our primary goal and motivation.' },
]

const team = [
  {
    name: 'Rahi Sharma',
    role: 'Founder & CEO',
    img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400',
  },
  {
    name: 'Priya Mehta',
    role: 'Lead Developer',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
  },
  {
    name: 'Arjun Kapoor',
    role: 'Cloud Architect',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400',
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function AboutContent() {
  return (
    <>
      {/* Founder Section */}
      <section className="section-padding bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                <div className="absolute inset-0 rounded-3xl bg-brand-gradient opacity-20 blur-xl" />
                <Image
                  id="founder-photo"
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                  alt="Rahi Sharma — Founder & CEO, Tech Rapids"
                  fill
                  className="object-cover rounded-3xl relative z-10"
                />
                <div className="absolute -bottom-4 -right-4 glass-light rounded-2xl px-4 py-3 z-20 border border-primary/20">
                  <p className="font-poppins font-bold text-primary text-sm">Tech Rapids</p>
                 
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-dark mb-5">
                Meet <span className="text-primary"> Tech Rapids</span>
              </h2>
              <p className="font-inter text-dark/70 leading-relaxed mb-4">
                   Tech Rapids has been at the forefront of digital transformation since day one. We combine technical expertise with business acumen to deliver solutions that truly make a difference.              </p>
              <p className="font-inter text-dark/70 leading-relaxed mb-6">
               Tech Rapids has grown from a small startup to a trusted IT partner for businesses across multiple industries, delivering 10  + successful projects and counting.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Visionary Leader', 'Tech Enthusiast', '5+ Years Experience'].map((tag) => (
                  <span key={tag} className="glass-light border border-primary/20 text-primary font-inter text-xs font-medium px-4 py-2 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="font-inter text-accent text-sm font-medium tracking-widest uppercase mb-3">Our Purpose</p>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white">Mission & Vision</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-brand-gradient rounded-3xl p-8 neon-glow"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                <Target size={28} className="text-white" />
              </div>
              <h3 className="font-poppins font-bold text-white text-2xl mb-4">Our Mission</h3>
              <p className="font-inter text-white/80 leading-relaxed">
                To bridge the gap between technology and users by providing smart, secure, and cost-effective IT solutions that drive growth and innovation for businesses of all sizes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass rounded-3xl p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                <Eye size={28} className="text-accent" />
              </div>
              <h3 className="font-poppins font-bold text-white text-2xl mb-4">Our Vision</h3>
              <p className="font-inter text-white/70 leading-relaxed">
                To become a trusted global IT service provider known for excellence, innovation, and customer-centric solutions that transform how businesses operate in the digital age.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="font-inter text-accent text-sm font-medium tracking-widest uppercase mb-3">What We Stand For</p>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white">Our Core Values</h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={item}
                whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(0,212,255,0.15)' }}
                className="glass rounded-2xl p-6 flex gap-4 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <v.icon size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-white mb-1">{v.title}</h3>
                  <p className="font-inter text-white/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
