import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import BGMPlayer from './BGMPlayer'

const navLinks = [
  { label: 'MESSAGE', href: '#message' },
  { label: 'SERVICES', href: '#services' },
  { label: 'PRODUCTS', href: '#products' },
  { label: 'COMPANY', href: '#company' },
  { label: 'CONTACT', href: '#contact' }, // ← ここにCONTACTを追加してリンク先を修正！
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(0, 0, 0, 0.92)'
            : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(239,68,68,0.2)' : 'none',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center group">
            <img
              src={`${import.meta.env.BASE_URL}images/Logo.png`}
              alt="Rock Spirits"
              className="h-10 w-auto transition-all duration-300"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(239,68,68,0.7))',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 14px rgba(239,68,68,1)) drop-shadow(0 0 28px rgba(245,158,11,0.6))'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(239,68,68,0.7))'
              }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-oswald text-sm tracking-widest text-gray-400 hover:text-white transition-all duration-300 relative group"
                style={{ letterSpacing: '0.2em' }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: 'linear-gradient(90deg, #EF4444, #F59E0B)' }}
                />
              </a>
            ))}
          </nav>

          {/* BGM Player + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <BGMPlayer />
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.97)' }}
          >
            <nav className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="font-oswald text-3xl tracking-widest text-white hover:text-red-400 transition-colors"
                  style={{ letterSpacing: '0.3em' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}