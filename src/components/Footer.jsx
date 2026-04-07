import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import ContactModal from './ContactModal'

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const year = new Date().getFullYear()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
    <footer
      id="contact"
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: '#000',
        borderTop: '1px solid rgba(239,68,68,0.2)',
      }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #EF4444, #F59E0B, #EF4444, transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 flex items-center justify-center font-anton text-xl text-white"
                style={{
                  background: 'linear-gradient(135deg, #EF4444, #F59E0B)',
                  boxShadow: '0 0 15px rgba(239,68,68,0.4)',
                }}
              >
                R
              </div>
              <span
                className="font-oswald font-semibold text-lg text-white tracking-widest"
                style={{ letterSpacing: '0.15em' }}
              >
                ROCK SPIRITS
              </span>
            </div>
            <p className="font-mincho text-sm text-gray-500 leading-loose">
              Made In Japanのコンテンツを世界へ。<br />
              魂を揺さぶるエンターテインメントを創り続ける。
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h4
              className="font-oswald text-xs tracking-widest text-red-500 mb-6"
              style={{ letterSpacing: '0.4em' }}
            >
              NAVIGATION
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                ['MESSAGE', '#message'],
                ['SERVICES', '#services'],
                ['PRODUCTS', '#products'],
                ['COMPANY', '#company'],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="font-oswald text-sm text-gray-500 hover:text-white transition-colors tracking-widest group flex items-center gap-2"
                  style={{ letterSpacing: '0.2em' }}
                >
                  <span
                    className="w-0 h-px group-hover:w-4 transition-all duration-300"
                    style={{ background: '#EF4444' }}
                  />
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h4
              className="font-oswald text-xs tracking-widest text-red-500 mb-6"
              style={{ letterSpacing: '0.4em' }}
            >
              CONTACT
            </h4>
            <address className="not-italic">
              <p className="font-mincho text-sm text-gray-500 mb-1">〒151-0053</p>
              <p className="font-mincho text-sm text-gray-500 mb-1">東京都渋谷区代々木1-53-1</p>
              <a
                href="https://maps.google.com/?q=東京都渋谷区代々木1-53-1+マイタワーレジデンス"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mincho text-sm text-gray-500 hover:text-red-400 transition-colors inline-block"
              >
                マイタワーレジデンス2103 →
              </a>

              {/* Rocking Contact Button (Replaced Email) */}
              <div className="mt-8">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    skewX: -5,
                    boxShadow: '0 0 20px rgba(239,68,68,0.6)',
                    textShadow: '0 0 8px rgba(239,68,68,0.8)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden border border-red-500 bg-black text-red-500 px-8 py-3 font-oswald text-sm font-bold tracking-widest transition-all duration-300 group"
                  style={{ letterSpacing: '0.2em' }}
                  onClick={() => setIsModalOpen(true)}
                >
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                    CONTACT US
                  </span>
                  <div
                    className="absolute inset-0 bg-red-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"
                    style={{ transformOrigin: 'left' }}
                  />
                </motion.button>
              </div>
            </address>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(239,68,68,0.3), transparent)' }}
        />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-oswald text-xs text-gray-700 tracking-widest" style={{ letterSpacing: '0.2em' }}>
            © {year} 株式会社ロックスピリッツ / Rock Spirits Inc. All Rights Reserved.
          </p>
          <p
            className="font-oswald text-xs tracking-widest"
            style={{ color: 'rgba(239,68,68,0.5)', letterSpacing: '0.3em' }}
          >
            MADE IN JAPAN — ROCK YOUR SOUL
          </p>
        </motion.div>
      </div>
    </footer>

    <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}