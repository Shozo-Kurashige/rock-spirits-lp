import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center bottom, rgba(239,68,68,0.12) 0%, rgba(0,0,0,0) 70%), #000',
      }}
    >
      {/* Background grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(239,68,68,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.8) 100%)',
        }}
      />

      {/* Horizontal scan lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 relative"
        >
          {/* 背景グロー（浮き上がり感） */}
          <div
            className="absolute inset-0 -z-10 blur-2xl scale-110"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(239,68,68,0.35) 0%, rgba(245,158,11,0.15) 50%, transparent 75%)',
            }}
          />
          {/* 下部の反射光 */}
          <div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-6 blur-xl -z-10"
            style={{ background: 'rgba(239,68,68,0.25)' }}
          />
          <motion.img
            src={`${import.meta.env.BASE_URL}images/Logo.png`}
            alt="Rock Spirits Logo"
            className="w-56 md:w-80 lg:w-96 relative"
            style={{
              filter:
                'drop-shadow(0 0 16px rgba(239,68,68,0.9)) drop-shadow(0 0 40px rgba(239,68,68,0.5)) drop-shadow(0 0 80px rgba(245,158,11,0.3))',
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Main Copy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className="mb-6"
        >
          <h1
            className="animate-flame-text font-mincho font-bold leading-tight"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              lineHeight: 1.1,
            }}
          >
            Made In Japanを
            <br />
            世界に!!
          </h1>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-48 h-px mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, #EF4444, #F59E0B, transparent)' }}
        />

        {/* Sub Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-oswald text-xl md:text-2xl tracking-[0.5em] text-gray-300 mb-4 animate-flicker glow-white"
          style={{ letterSpacing: '0.5em' }}
        >
          ROCK SPIRITS
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="font-mincho text-base md:text-lg text-gray-500 tracking-widest mb-16"
        >
          ―― 魂を揺さぶれ ――
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#message"
            className="font-oswald tracking-widest px-10 py-4 text-sm font-medium transition-all duration-300 animate-pulse-glow"
            style={{
              background: 'linear-gradient(135deg, #EF4444, #F59E0B)',
              letterSpacing: '0.3em',
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.filter = 'brightness(1.2)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.filter = 'brightness(1)'
            }}
          >
            OUR MESSAGE
          </a>
          <a
            href="#services"
            className="font-oswald tracking-widest px-10 py-4 text-sm font-medium border transition-all duration-300"
            style={{
              borderColor: 'rgba(239,68,68,0.5)',
              color: '#e5e5e5',
              letterSpacing: '0.3em',
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#EF4444'
              e.currentTarget.style.background = 'rgba(239,68,68,0.1)'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(239,68,68,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(239,68,68,0.5)'
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            SERVICES
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-oswald text-xs tracking-widest text-gray-600" style={{ letterSpacing: '0.3em' }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-red-500" />
        </motion.div>
      </motion.div>

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(239,68,68,0.06), transparent)',
        }}
      />
    </section>
  )
}
