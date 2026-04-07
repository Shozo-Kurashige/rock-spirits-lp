import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Quote } from 'lucide-react'

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

const career = [
  { year: '1997', company: '三菱製鋼', role: '製造業でのキャリアをスタート' },
  { year: '2000', company: 'テクモ株式会社', role: '執行役員 / モンスターファームシリーズを牽引' },
  { year: '2010', company: 'ヴァルハラゲームスタジオ', role: 'ゲームプロデューサーとして活躍' },
  { year: '2020', company: '株式会社ロックスピリッツ', role: '代表取締役として創業' },
]

const detailedCareer = [
  {
    year: '１９８７年',
    desc: '三菱製鋼株式会社入社',
  },
  {
    year: '１９９３年',
    desc: 'ゲーム開発メーカー・テクモ（現コーエーテクモゲームス）に転職。販売部門（アーケード・家庭用・海外販売）、営業部門の統括を歴任。その実績を買われ、開発部門統括（執行役員）に就任。モンスターファームシリーズ等、同社の看板タイトルを手掛けた。またパチンコ部門を立ち上げた後、常務執行役員として経営に参画（米国法人社長も兼任）。',
  },
  {
    year: '２００８年',
    desc: '独立してヴァルハラゲームスタジオ（現ソレイユゲームスタジオ）創業。ナルト・シノビストライカー、桃太郎電鉄DS等リリースの他、超人気タイトル「鬼滅の刃 血風剣戟ロワイヤル」を発表。',
  },
  {
    year: '２０２０年９月',
    desc: '新たな挑戦を求めて、株式会社ロックスピリッツ創業。',
  },
]

export default function MessageSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [photoOverlayActive, setPhotoOverlayActive] = useState(false)

  return (
    <section
      id="message"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000 0%, #0d0d0d 40%, #111 70%, #0d0d0d 100%)',
      }}
    >
      {/* Spotlight effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(239,68,68,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Side lines */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(239,68,68,0.4), transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-px"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(239,68,68,0.4), transparent)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section label */}
        <FadeUp delay={0}>
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, rgba(239,68,68,0.6))' }} />
            <span
              className="font-oswald text-sm tracking-[0.4em] text-red-500"
              style={{ letterSpacing: '0.4em' }}
            >
              CEO MESSAGE
            </span>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(239,68,68,0.6), transparent)' }} />
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-5 gap-16 items-start">
          {/* Left: CEO Photo + Name */}
          <div className="md:col-span-2">
            <FadeUp delay={0.1}>
              <div className="relative">
                {/* Photo frame with glow + hover/tap overlay */}
                <div
                  className="relative overflow-hidden cursor-pointer select-none"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                    boxShadow: '0 0 40px rgba(239,68,68,0.2)',
                    border: '1px solid rgba(239,68,68,0.3)',
                  }}
                  onMouseEnter={() => setPhotoOverlayActive(true)}
                  onMouseLeave={() => setPhotoOverlayActive(false)}
                  onTouchEnd={(e) => {
                    e.preventDefault()
                    setPhotoOverlayActive(prev => !prev)
                  }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/ceo-kanematsu.jpeg`}
                    alt="CEO 兼松 聡"
                    className="w-full object-cover"
                    style={{
                      transition: 'transform 0.5s ease',
                      transform: photoOverlayActive ? 'scale(1.04)' : 'scale(1)',
                    }}
                  />

                  {/* Existing gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }}
                  />

                  {/* Career history overlay */}
                  <div
                    className="absolute inset-0 overflow-y-auto"
                    style={{
                      background: 'rgba(0,0,0,0.78)',
                      opacity: photoOverlayActive ? 1 : 0,
                      transition: 'opacity 0.4s ease',
                      padding: '1.25rem',
                      pointerEvents: photoOverlayActive ? 'auto' : 'none',
                    }}
                  >
                    {/* Header */}
                    <p
                      className="font-oswald text-xs tracking-widest text-red-500 mb-4"
                      style={{ letterSpacing: '0.35em' }}
                    >
                      CAREER HISTORY
                    </p>

                    {/* Divider */}
                    <div
                      className="mb-4 w-8 h-px"
                      style={{ background: 'linear-gradient(90deg, #EF4444, transparent)' }}
                    />

                    {/* Career items */}
                    <div className="space-y-4">
                      {detailedCareer.map((item, i) => (
                        <div key={i}>
                          <p
                            className="font-oswald text-xs font-bold mb-1"
                            style={{ color: '#EF4444', letterSpacing: '0.05em' }}
                          >
                            {item.year}
                          </p>
                          <p className="font-mincho text-xs text-gray-200 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Mobile tap-to-close hint */}
                    <p className="font-mincho text-xs text-gray-600 mt-5 text-center md:hidden">
                      タップで閉じる
                    </p>
                  </div>

                  {/* "CAREER +" hint badge — visible only when overlay is hidden */}
                  <div
                    className="absolute bottom-3 right-3 px-2 py-1 flex items-center gap-1"
                    style={{
                      background: 'rgba(0,0,0,0.7)',
                      border: '1px solid rgba(239,68,68,0.4)',
                      opacity: photoOverlayActive ? 0 : 1,
                      transition: 'opacity 0.3s ease',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    <span className="font-oswald text-xs text-red-500" style={{ letterSpacing: '0.1em' }}>
                      CAREER +
                    </span>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-500" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-500" />
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-8 text-center md:text-left">
                <p className="font-oswald text-xs tracking-widest text-red-500 mb-2" style={{ letterSpacing: '0.3em' }}>
                  FOUNDER & CEO
                </p>
                <h3 className="font-mincho text-3xl font-bold text-white mb-1">兼松 聡</h3>
                <p className="font-oswald text-sm text-gray-500 tracking-widest">Satoshi Kanematsu</p>
                {/* PC hover hint */}
                <p className="font-mincho text-xs text-gray-600 mt-2 hidden md:block">
                  ↑ 写真にカーソルで詳細経歴を表示
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Right: Message */}
          <div className="md:col-span-3 flex flex-col gap-10">
            <FadeUp delay={0.2}>
              <div className="relative">
                <Quote
                  size={48}
                  className="absolute -top-4 -left-4 opacity-20"
                  style={{ color: '#EF4444' }}
                />
                <blockquote
                  className="font-mincho text-2xl md:text-3xl font-bold leading-relaxed pl-6"
                  style={{
                    color: '#F5F5F5',
                    borderLeft: '3px solid #EF4444',
                    textShadow: '0 0 40px rgba(0,0,0,0.8)',
                  }}
                >
                  日本のゲーム業界は、<br />
                  かつての<span className="animate-flame-text">狂気のような情熱</span>を<br />
                  失った。
                </blockquote>
              </div>
            </FadeUp>

            <FadeUp delay={0.35}>
              <div
                className="p-6 relative"
                style={{
                  background: 'rgba(239,68,68,0.04)',
                  border: '1px solid rgba(239,68,68,0.2)',
                  clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
                }}
              >
                <p className="font-mincho text-lg leading-loose text-gray-300">
                  ロックとは、<strong className="text-white">揺さぶる</strong>という意味であり、
                </p>
                <p
                  className="font-mincho text-xl font-bold mt-3 leading-relaxed"
                  style={{
                    color: '#FFD700',
                    textShadow: '0 0 20px rgba(255,215,0,0.4)',
                  }}
                >
                  「お前の魂を揺さぶってやるぜ」
                </p>
                <p className="font-mincho text-lg leading-loose text-gray-300 mt-3">
                  という想いを込めて、この会社を立ち上げた。
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.45}>
              <p className="font-mincho text-base text-gray-400 leading-loose">
                日本の誇るコンテンツを世界に届けるために。
                Made In Japanの魂を、次の世代へ。
                私たちは常に挑戦し続ける。
              </p>
            </FadeUp>

            {/* Career Timeline */}
            <FadeUp delay={0.55}>
              <div>
                <h4
                  className="font-oswald text-xs tracking-widest mb-6 text-red-500"
                  style={{ letterSpacing: '0.4em' }}
                >
                  CAREER
                </h4>
                <div className="relative">
                  <div
                    className="absolute left-16 top-0 bottom-0 w-px"
                    style={{ background: 'linear-gradient(180deg, rgba(239,68,68,0.6), rgba(239,68,68,0.1))' }}
                  />
                  <div className="space-y-6">
                    {career.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.7 + i * 0.1, duration: 0.6 }}
                        className="flex gap-6 items-start"
                      >
                        <span
                          className="font-oswald text-sm w-16 pt-1 shrink-0"
                          style={{ color: '#EF4444' }}
                        >
                          {item.year}
                        </span>
                        <div className="relative">
                          <div
                            className="absolute -left-3.5 top-1.5 w-2 h-2 rounded-full"
                            style={{
                              background: '#EF4444',
                              boxShadow: '0 0 8px rgba(239,68,68,0.8)',
                            }}
                          />
                          <p className="font-mincho text-sm font-bold text-white">{item.company}</p>
                          <p className="font-mincho text-xs text-gray-500 mt-0.5">{item.role}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(239,68,68,0.4), transparent)' }}
      />
    </section>
  )
}
