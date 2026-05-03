'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, X } from 'lucide-react'

type FormData = {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

type Errors = Partial<Record<keyof FormData, string>>

const services = [
  'Web Development',
  'Mobile App Development',
  'Cloud Solutions',
  'Cybersecurity',
  'AI & Automation',
  'IT Support & Maintenance',
  'Other',
]

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [toast, setToast] = useState(false)

  const validate = (): boolean => {
    const e: Errors = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    if (!form.service) e.service = 'Please select a service'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    setToast(true)
    setForm({ name: '', email: '', phone: '', service: '', message: '' })
    setTimeout(() => setToast(false), 5000)
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  return (
    <>
      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 right-4 z-50 flex items-center gap-3 bg-dark border border-accent/30 rounded-2xl px-5 py-4 shadow-2xl neon-glow"
          >
            <CheckCircle size={20} className="text-accent shrink-0" />
            <div>
              <p className="font-poppins font-semibold text-white text-sm">Message Sent!</p>
              <p className="font-inter text-white/60 text-xs">We&apos;ll get back to you within 24 hours.</p>
            </div>
            <button onClick={() => setToast(false)} aria-label="Close notification" className="text-white/40 hover:text-white ml-2">
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <section className="section-padding bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-dark mb-2">Send Us a Message</h2>
              <p className="font-inter text-dark/60 mb-8">Fill out the form and we&apos;ll respond within 24 hours.</p>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-inter text-sm font-medium text-dark/80 mb-1.5">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Rohit Sharma"
                    className={`w-full px-4 py-3 rounded-xl border font-inter text-sm bg-white text-dark placeholder-dark/30 outline-none transition-all focus:ring-2 focus:ring-primary/30 ${errors.name ? 'border-red-400' : 'border-dark/10 focus:border-primary'}`}
                  />
                  {errors.name && <p className="font-inter text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block font-inter text-sm font-medium text-dark/80 mb-1.5">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="you@example.com"
                      className={`w-full px-4 py-3 rounded-xl border font-inter text-sm bg-white text-dark placeholder-dark/30 outline-none transition-all focus:ring-2 focus:ring-primary/30 ${errors.email ? 'border-red-400' : 'border-dark/10 focus:border-primary'}`}
                    />
                    {errors.email && <p className="font-inter text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-inter text-sm font-medium text-dark/80 mb-1.5">Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      className={`w-full px-4 py-3 rounded-xl border font-inter text-sm bg-white text-dark placeholder-dark/30 outline-none transition-all focus:ring-2 focus:ring-primary/30 ${errors.phone ? 'border-red-400' : 'border-dark/10 focus:border-primary'}`}
                    />
                    {errors.phone && <p className="font-inter text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block font-inter text-sm font-medium text-dark/80 mb-1.5">Service Interested In *</label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => handleChange('service', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border font-inter text-sm bg-white text-dark outline-none transition-all focus:ring-2 focus:ring-primary/30 ${errors.service ? 'border-red-400' : 'border-dark/10 focus:border-primary'} ${!form.service ? 'text-dark/30' : ''}`}
                  >
                    <option value="" disabled>Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && <p className="font-inter text-red-500 text-xs mt-1">{errors.service}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-inter text-sm font-medium text-dark/80 mb-1.5">Message *</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us about your project..."
                    className={`w-full px-4 py-3 rounded-xl border font-inter text-sm bg-white text-dark placeholder-dark/30 outline-none transition-all focus:ring-2 focus:ring-primary/30 resize-none ${errors.message ? 'border-red-400' : 'border-dark/10 focus:border-primary'}`}
                  />
                  {errors.message && <p className="font-inter text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-brand-gradient text-white font-poppins font-semibold py-4 rounded-xl neon-glow flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-dark mb-2">Contact Information</h2>
                <p className="font-inter text-dark/60">Reach out through any of these channels.</p>
              </div>

              {[
                { icon: Mail, label: 'Email', value: 'Techsupport@tech-rapids.com', href: 'mailto:Techsupport@tech-rapids.com'},
                { icon: Phone, label: 'Phone', value: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX' },
                { icon: MapPin, label: 'Location', value: 'India', href: '#' },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 glass-light rounded-2xl p-5 border border-primary/10">
                  <div className="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-inter text-dark/50 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                    <a href={href} className="font-poppins font-semibold text-dark hover:text-primary transition-colors">{value}</a>
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-4 glass-light rounded-2xl p-5 border border-primary/10">
                <div className="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-inter text-dark/50 text-xs uppercase tracking-wider mb-1">Business Hours</p>
                  <p className="font-poppins font-semibold text-dark text-sm">Always Available For You</p>
                  <p className="font-inter text-dark/60 text-xs">Support available 24/7</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl overflow-hidden h-64 flex items-center justify-center border border-white/10"
          >
            <div className="text-center">
              <MapPin size={40} className="text-accent mx-auto mb-3" />
              <p className="font-poppins font-semibold text-white">India</p>
              <p className="font-inter text-white/50 text-sm">Map integration coming soon</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
