import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Building2, DollarSign, Calendar, Users } from 'lucide-react'

const companyData = [
  { icon: Building2, label: '社名', value: '株式会社ロックスピリッツ', valueEn: 'Rock Spirits Inc.' },
  {
    icon: DollarSign,
    label: '資本金',
    value: '777万円',
    valueEn: '¥7,770,000',
    highlight: true,
    note: '777 — ラッキーセブンへの誓い',
  },
  {
    icon: MapPin,
    label: '所在地',
    value: '東京都渋谷区代々木1-53-1\nマイタワーレジデンス2103',
    valueEn: '1-53-1 Yoyogi, Shibuya, Tokyo',
  },
  { icon: Calendar, label: '設立', value: '2020年', valueEn: 'Founded in 2020' },
  { icon: Users, label: '代表者', value: '代表取締役 兼松 聡', valueEn: 'CEO Satoshi Kanematsu' },
]

function InfoRow({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const Icon = item.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex items-start gap-6 py-6 transition-all duration-300"
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.paddingLeft = '12px'
        e.currentTarget.style.borderBottomColor = 'rgba(239,68,68,0.3)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.paddingLeft = '0'
        e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.05)'
      }}
    >
      {/* Icon */}
      <div
        className="w-10 h-10 flex items-center justify-center shrink-0 mt-1"
        style={{
          background: 'rgba(239,68,68,0.1)',
          border: '1px solid rgba(239,68,68,0.3)',
        }}
      >
        <Icon size={18} style={{ color: '#EF4444' }} />
      </div>

      {/* Label */}
      <div className="w-24 shrink-0">
        <p className="font-mincho text-xs text-gray-600 mt-2">{item.label}</p>
      </div>

      {/* Value */}
      <div className="flex-1">
        {item.highlight ? (
          <div>
            <p
              className="font-oswald text-3xl md:text-4xl font-bold glow-gold"
              style={{
                color: '#FFD700',
                letterSpacing: '0.05em',
              }}
            >
              {item.value}
            </p>
            {item.note && (
              <p className="font-mincho text-xs text-gray-600 mt-1">{item.note}</p>
            )}
            <p className="font-oswald text-xs text-gray-600 mt-1" style={{ letterSpacing: '0.15em' }}>
              {item.valueEn}
            </p>
          </div>
        ) : (
          <div>
            <p className="font-mincho text-lg text-white" style={{ whiteSpace: 'pre-line' }}>{item.value}</p>
            <p className="font-oswald text-xs text-gray-600 mt-0.5" style={{ letterSpacing: '0.15em' }}>
              {item.valueEn}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function CompanySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="company"
      className="relative py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000 0%, #0d0d0d 50%, #000 100%)',
      }}
    >
      {/* Background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        style={{ opacity: 0.03 }}
      >
        <span
          className="font-anton text-white select-none"
          style={{ fontSize: 'clamp(8rem, 25vw, 20rem)', whiteSpace: 'nowrap' }}
        >
          ROCK
        </span>
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(239,68,68,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-oswald text-sm tracking-widest text-red-500 mb-4"
            style={{ letterSpacing: '0.5em' }}
          >
            ABOUT US
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-mincho font-bold mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            <span className="text-white">会社</span>
            <span className="animate-flame-text">概要</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto w-24 h-px mt-6"
            style={{ background: 'linear-gradient(90deg, transparent, #EF4444, transparent)' }}
          />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Company Info */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
              style={{
                border: '1px solid rgba(239,68,68,0.15)',
                background: 'rgba(239,68,68,0.02)',
                padding: '2px',
              }}
            >
              <div
                style={{
                  background: '#060606',
                  padding: '2rem',
                }}
              >
                {/* Corner decoration */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-600" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-600" />

                <div>
                  {companyData.map((item, i) => (
                    <InfoRow key={i} item={item} index={i} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Vision */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p
                className="font-oswald text-xs tracking-widest text-red-500 mb-4"
                style={{ letterSpacing: '0.4em' }}
              >
                OUR MISSION
              </p>
              <h3 className="font-mincho text-2xl font-bold text-white leading-relaxed mb-4">
                Made In Japanを<br />
                <span className="animate-flame-text">世界の熱狂</span>へ
              </h3>
              <p className="font-mincho text-sm text-gray-400 leading-loose">
                日本が誇るゲーム文化と、それを支えるものづくりの精神。私たちはその炎を絶やすことなく、
                次の世代へと受け継ぐ使命を帯びている。
              </p>
            </motion.div>

            {/* 777 Symbol */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255,215,0,0.08), rgba(255,215,0,0.02))',
                border: '1px solid rgba(255,215,0,0.3)',
                padding: '2rem',
                textAlign: 'center',
              }}
            >
              <div className="absolute inset-0 opacity-10" style={{
                background: 'radial-gradient(ellipse at center, rgba(255,215,0,0.4), transparent 70%)',
              }} />
              <p
                className="font-anton relative z-10"
                style={{
                  fontSize: '5rem',
                  color: '#FFD700',
                  lineHeight: 1,
                  textShadow: '0 0 30px rgba(255,215,0,0.6), 0 0 60px rgba(255,215,0,0.3)',
                }}
              >
                777
              </p>
              <p className="font-mincho text-xs text-yellow-600 mt-2 tracking-widest relative z-10">
                資本金 七七七万円 — Lucky Seven
              </p>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative overflow-hidden group/map"
              style={{
                border: '1px solid rgba(239,68,68,0.2)',
                aspectRatio: '4/3',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(239,68,68,0.6)'
                e.currentTarget.style.boxShadow = '0 0 30px rgba(239,68,68,0.2)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(239,68,68,0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Google Maps iframe */}
              <iframe
                title="Rock Spirits Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5!2d139.6917!3d35.6838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca6ebbef3f1%3A0x7b5e7c6b8e5d9b0a!2z5p2x5Lqs6YO95riL6LC35Yy65Luj3005N-S!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp&q=東京都渋谷区代々木1-53-1"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'grayscale(100%) invert(90%) contrast(85%) brightness(0.4) sepia(20%)',
                  position: 'absolute',
                  inset: 0,
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* オーバーレイ */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }}
              />
              {/* クリックしてGoogle Mapsを開くボタン */}
              <a
                href="https://maps.google.com/?q=東京都渋谷区代々木1-53-1+マイタワーレジデンス"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-3 transition-all duration-300"
                style={{
                  background: 'rgba(0,0,0,0.85)',
                  border: '1px solid rgba(239,68,68,0.4)',
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(239,68,68,0.9)'
                  e.currentTarget.style.background = 'rgba(239,68,68,0.15)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(239,68,68,0.4)'
                  e.currentTarget.style.background = 'rgba(0,0,0,0.85)'
                }}
              >
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-red-500 shrink-0" style={{ filter: 'drop-shadow(0 0 6px rgba(239,68,68,0.8))' }} />
                  <div>
                    <p className="font-mincho text-xs text-white leading-snug">渋谷区代々木1-53-1</p>
                    <p className="font-mincho text-xs text-gray-500 leading-snug">マイタワーレジデンス2103</p>
                  </div>
                </div>
                <span className="font-oswald text-xs text-red-500 shrink-0" style={{ letterSpacing: '0.15em' }}>
                  MAP →
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
