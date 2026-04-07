import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function IntroAnimation() {
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setIsFadingOut(true), 2400)
    const t2 = setTimeout(() => setIsDone(true), 3300)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (isDone) return null

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: isFadingOut ? 0 : 1 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      {/* ── Phase 1: サイケデリック背景 ── */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.1, ease: 'easeIn' }}
      >
        {/* ゆらぎラッパー */}
        <div className="psycho-bg-waver">
          <div className="psycho-layer-1 absolute inset-0" />
          <div
            className="psycho-layer-2 absolute inset-0"
            style={{ mixBlendMode: 'screen' }}
          />
          <div
            className="psycho-layer-3 absolute inset-0"
            style={{ mixBlendMode: 'overlay' }}
          />
          <div
            className="psycho-layer-4 absolute inset-0"
            style={{ mixBlendMode: 'color-dodge' }}
          />
        </div>

        {/* スキャンライン */}
        <div className="psycho-scanlines absolute inset-0 pointer-events-none" />

        {/* 暗めのヴィネット（暗さ調整） */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(0,0,0,0.58)' }}
        />
      </motion.div>

      {/* ── Phase 2: テキスト（奥からズームアップ）── */}
      <motion.div
        className="relative z-10 text-center select-none px-4"
        initial={{ scale: 0.03, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{
          delay: 1.1,
          scale: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
          opacity: { duration: 0.35, ease: 'easeOut' },
        }}
      >
        {/* ゆらぎ + クロマティック収差ラッパー */}
        <div className="text-waver">
          {/* WAKE UP ! */}
          <p
            className="font-psycho text-white"
            style={{
              fontSize: 'clamp(2.8rem, 11vw, 7.5rem)',
              lineHeight: 1,
              letterSpacing: '0.04em',
              textShadow: [
                '-3px 0 rgba(255, 0, 220, 0.85)',   /* マゼンタ収差 */
                '3px 0 rgba(0, 255, 200, 0.85)',     /* シアン収差 */
                '0 0 25px rgba(255,255,255,0.95)',
                '0 0 55px rgba(255,255,255,0.6)',
                '0 0 100px rgba(180,80,255,0.8)',
              ].join(', '),
            }}
          >
            WAKE UP !
          </p>

          {/* セパレーターライン */}
          <div
            style={{
              width: '100%',
              height: '2px',
              margin: '0.6rem 0',
              background:
                'linear-gradient(90deg, transparent, rgba(255,0,220,0.8), rgba(255,255,255,0.9), rgba(0,255,200,0.8), transparent)',
            }}
          />

          {/* INSIDE OF YOU ! */}
          <p
            className="font-psycho"
            style={{
              fontSize: 'clamp(1.6rem, 6.5vw, 4.8rem)',
              lineHeight: 1,
              letterSpacing: '0.1em',
              color: '#EDD5FF',
              textShadow: [
                '-2px 0 rgba(255, 0, 180, 0.8)',
                '2px 0 rgba(0, 230, 255, 0.8)',
                '0 0 20px rgba(200,100,255,0.95)',
                '0 0 50px rgba(200,60,255,0.75)',
                '0 0 90px rgba(160,40,255,0.55)',
              ].join(', '),
            }}
          >
            INSIDE OF YOU !
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
