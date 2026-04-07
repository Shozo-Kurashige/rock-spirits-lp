import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Gamepad2, Dices, Film } from 'lucide-react'

const services = [
  {
    icon: Gamepad2,
    title: 'ゲーム事業',
    titleEn: 'GAME',
    description:
      '日本が世界に誇るゲーム文化の継承と革新。プレイヤーの魂を震わせる体験を追求し、新世代のゲームコンテンツを創造し続ける。',
    color: '#EF4444',
    gradient: 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(239,68,68,0.03))',
  },
  {
    icon: Dices,
    title: 'ぱちんこ・パチスロ事業',
    titleEn: 'PACHINKO & SLOTS',
    description:
      '日本固有の遊技文化に最高のコンテンツを融合。エンターテインメントの可能性を最大限に引き出し、業界に革命をもたらす。',
    color: '#F97316',
    gradient: 'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(249,115,22,0.03))',
  },
  {
    icon: Film,
    title: 'コンテンツ事業',
    titleEn: 'CONTENT',
    description:
      'ゲームの枠を超えたIPの展開。映像、音楽、グッズなど多角的なアプローチでMade In Japanの価値を世界へ発信する。',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(245,158,11,0.03))',
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      className="card-hover relative flex flex-col h-full"
      style={{
        background: service.gradient,
        border: `1px solid rgba(${service.color === '#EF4444' ? '239,68,68' : service.color === '#F97316' ? '249,115,22' : '245,158,11'},0.25)`,
        clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
        padding: '2px',
      }}
    >
      <div
        className="flex flex-col h-full p-8"
        style={{
          background: '#0a0a0a',
          clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
        }}
      >
        {/* Icon */}
        <div className="mb-6">
          <div
            className="w-14 h-14 flex items-center justify-center relative"
            style={{
              background: `linear-gradient(135deg, ${service.color}22, ${service.color}11)`,
              border: `1px solid ${service.color}44`,
            }}
          >
            <Icon size={28} style={{ color: service.color }} />
            <div
              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
              style={{ boxShadow: `0 0 20px ${service.color}60` }}
            />
          </div>
        </div>

        {/* Label */}
        <p
          className="font-oswald text-xs tracking-widest mb-3"
          style={{ color: service.color, letterSpacing: '0.3em' }}
        >
          {service.titleEn}
        </p>

        {/* Title */}
        <h3 className="font-mincho text-xl font-bold text-white mb-4 leading-snug">
          {service.title}
        </h3>

        {/* Divider */}
        <div
          className="w-12 h-px mb-5"
          style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
        />

        {/* Description */}
        <p className="font-mincho text-sm text-gray-400 leading-relaxed flex-1">
          {service.description}
        </p>

        {/* Bottom arrow */}
        <div className="mt-6 flex items-center gap-2">
          <div
            className="h-px flex-1"
            style={{ background: `linear-gradient(90deg, ${service.color}44, transparent)` }}
          />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke={service.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="services"
      className="relative py-32 overflow-hidden"
      style={{ background: '#000' }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 40% at 50% 50%, rgba(239,68,68,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p
              className="font-oswald text-sm tracking-widest text-red-500 mb-4"
              style={{ letterSpacing: '0.5em' }}
            >
              WHAT WE DO
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-mincho font-bold mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            <span className="text-white">私たちの</span>
            <span className="animate-flame-text">事業</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto w-24 h-px mt-6"
            style={{ background: 'linear-gradient(90deg, transparent, #EF4444, transparent)' }}
          />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
