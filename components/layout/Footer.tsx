'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/clients', label: 'Clients' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  'Web Development',
  'Mobile App Development',
  'Cloud Solutions',
  'Cybersecurity',
  'AI & Automation',
  'IT Support',
]

const socials = [
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'GitHub', href: '#', icon: Github },
]

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-poppins font-bold text-xl text-white">
                Tech<span className="text-accent">Rapids</span>
              </span>
            </div>
            <p className="font-inter text-white/60 text-sm leading-relaxed mb-2">
              Flow Fast Through Tech Troubles.
            </p>
            <p className="font-inter text-white/40 text-xs leading-relaxed mb-6 italic">
              We don&apos;t just build solutions, we build your business growth.
            </p>
            <div className="flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/60 hover:text-accent transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-white/60 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="font-inter text-sm text-white/60 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="font-inter text-sm text-white/60">India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent shrink-0" />
                <a href="tel:+91XXXXXXXXXX" className="font-inter text-sm text-white/60 hover:text-accent transition-colors">
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent shrink-0" />
                <a href="mailto:info@techrapids.com" className="font-inter text-sm text-white/60 hover:text-accent transition-colors">
                  info@techrapids.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-white/40 text-center sm:text-left">
            © 2025 Tech Rapids. All rights reserved. | Founded by Rahi Sharma
          </p>
          <p className="font-inter text-xs text-accent/70 text-center sm:text-right italic">
            We don&apos;t just build solutions, we build your business growth.
          </p>
        </div>
      </div>
    </footer>
  )
}
