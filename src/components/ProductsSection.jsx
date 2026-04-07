import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Star } from 'lucide-react'

const base = import.meta.env.BASE_URL

const products = [
  {
    title: 'モンスターストライク\nゴールドラッシュバトラー',
    titleEn: 'MONSTER STRIKE GOLD RUSH BATTLER',
    category: 'ぱちんこ',
    image: `${base}images/monst.png`,
    tags: ['モンスターストライク', 'パチンコ', 'アクション'],
    description: '大人気スマホゲーム「モンスターストライク」とのコラボレーション。迫力の映像と爽快な演出で新たな興奮を体験。',
    link: 'https://mixi.co.jp/news/2023/0605/21308/',
    accentColor: 'rgba(239,68,68,1)',
    glowColor: 'rgba(239,68,68,0.35)',
  },
  {
    title: 'サンリオキャラクターズ\nミラクルマッチ',
    titleEn: 'SANRIO CHARACTERS MIRACLE MATCH',
    category: 'パチスロ',
    image: `${base}images/miraclemt.png`,
    tags: ['サンリオ', 'パチスロ', 'キャラクター'],
    description: '世界的人気を誇るサンリオキャラクターズとのコラボ作品。可愛さと興奮が融合した全く新しいエンターテインメント体験。',
    link: 'https://www.miracle-match.com/',
    accentColor: 'rgba(245,158,11,1)',
    glowColor: 'rgba(245,158,11,0.3)',
  },
]

function ProductCard({ product, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 70 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.2, ease: 'easeOut' }}
      className="group relative"
    >
      <div
        className="relative overflow-hidden transition-all duration-500 flex flex-col h-full"
        style={{
          border: `1px solid rgba(239,68,68,0.2)`,
          background: '#080808',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = product.accentColor.replace('1)', '0.6)')
          e.currentTarget.style.boxShadow = `0 0 40px ${product.glowColor}, 0 0 80px ${product.glowColor.replace('0.3', '0.1')}`
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(239,68,68,0.2)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* Image — object-contain で全体表示、背景は黒 */}
        <div
          className="relative overflow-hidden w-full"
          style={{ aspectRatio: '16/9', background: '#050505' }}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
            style={{ padding: '0' }}
          />
          {/* 下部グラデーション */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, #080808 0%, rgba(8,8,8,0.2) 50%, transparent 100%)',
            }}
          />
          {/* カテゴリバッジ */}
          <div className="absolute top-4 left-4">
            <span
              className="font-oswald text-xs px-3 py-1 tracking-widest text-white"
              style={{
                background: product.accentColor.replace('1)', '0.9)'),
                letterSpacing: '0.2em',
                clipPath: 'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)',
              }}
            >
              {product.category}
            </span>
          </div>
          {/* スター */}
          <div className="absolute top-4 right-4 flex gap-1">
            {[...Array(3)].map((_, i) => (
              <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" style={{ opacity: 0.8 }} />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col flex-1">
          <p
            className="font-oswald text-xs tracking-widest text-gray-600 mb-3"
            style={{ letterSpacing: '0.3em' }}
          >
            {product.titleEn}
          </p>

          <h3
            className="font-mincho text-xl md:text-2xl font-bold text-white mb-4 leading-snug"
            style={{ whiteSpace: 'pre-line' }}
          >
            {product.title}
          </h3>

          {/* アクセントライン */}
          <div
            className="w-10 h-px mb-4"
            style={{ background: `linear-gradient(90deg, ${product.accentColor}, transparent)` }}
          />

          <p className="font-mincho text-sm text-gray-400 leading-relaxed mb-6 flex-1">
            {product.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {product.tags.map((tag, i) => (
              <span
                key={i}
                className="font-mincho text-xs px-3 py-1"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#888',
                }}
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* LEARN MORE リンク */}
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-oswald text-sm tracking-widest flex items-center gap-2 transition-all duration-300 group/btn w-fit"
            style={{ color: product.accentColor, letterSpacing: '0.2em' }}
            onMouseEnter={e => {
              e.currentTarget.style.textShadow = `0 0 12px ${product.glowColor}`
              e.currentTarget.style.gap = '10px'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.textShadow = 'none'
              e.currentTarget.style.gap = '8px'
            }}
          >
            LEARN MORE
            <ExternalLink
              size={14}
              className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
            />
          </a>
        </div>

        {/* ホバー時ボトムライン */}
        <div
          className="h-px w-0 group-hover:w-full transition-all duration-500"
          style={{ background: `linear-gradient(90deg, ${product.accentColor}, #F59E0B)` }}
        />
      </div>
    </motion.article>
  )
}

export default function ProductsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="products"
      className="relative py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000 0%, #0a0505 50%, #000 100%)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(239,68,68,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(245,158,11,0.04) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-oswald text-sm tracking-widest text-red-500 mb-4"
            style={{ letterSpacing: '0.5em' }}
          >
            OUR WORKS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-mincho font-bold mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            <span className="text-white">プロダクト</span>
            <span className="text-white"> & </span>
            <span className="animate-flame-text">実績</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-mincho text-gray-500 text-sm md:text-base"
          >
            魂を込めて作り上げた、私たちの代表作品
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto w-24 h-px mt-6"
            style={{ background: 'linear-gradient(90deg, transparent, #EF4444, transparent)' }}
          />
        </div>

        {/* Products Grid — 等高カード */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {products.map((product, i) => (
            <ProductCard key={i} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
