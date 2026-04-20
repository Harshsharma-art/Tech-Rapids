'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, X } from 'lucide-react'

export default function VideoSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const videoUrl = 'https://videos.pexels.com/video-files/6804109/6804109-uhd_2732_1440_25fps.mp4'

  return (
    <section className="relative h-[60vh] overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/70 bg-gradient-to-b from-dark/40 via-dark/60 to-dark/80" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-inter text-accent text-sm font-medium tracking-widest uppercase mb-4"
        >
          See Us In Action
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-poppins font-bold text-3xl sm:text-5xl text-white mb-8 max-w-2xl"
        >
          Building the Future of Technology
        </motion.h2>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setModalOpen(true)}
          aria-label="Play video"
          className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center neon-glow hover:bg-accent/20 transition-colors"
        >
          <Play size={32} className="text-white ml-1" fill="white" />
        </motion.button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              aria-label="Close video"
              className="absolute -top-10 right-0 text-white/70 hover:text-white"
            >
              <X size={28} />
            </button>
            <video
              controls
              autoPlay
              className="w-full h-full rounded-xl"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  )
}
