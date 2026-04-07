import { useRef, useEffect } from 'react'

const SRC = `${import.meta.env.BASE_URL}audio/bgm.mp3`

export default function BGMPlayer() {
  const audioRef  = useRef(null)
  const btnRef    = useRef(null)
  const playingRef = useRef(false)

  useEffect(() => {
    const btn   = btnRef.current
    const audio = audioRef.current
    if (!btn || !audio) return

    function onTap(e) {
      e.preventDefault()
      e.stopPropagation()

      if (!playingRef.current) {
        // play()はここで同期的に呼ぶ — iOSジェスチャーコンテキスト内
        audio.play()
        playingRef.current = true
        btn.setAttribute('data-playing', 'true')
        btn.innerHTML = `
          <span style="display:flex;align-items:center;gap:6px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2.5">
              <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
            </svg>
            <span style="font-family:'Oswald',sans-serif;font-size:12px;letter-spacing:0.15em;color:#EF4444;">BGM</span>
          </span>
        `
        btn.style.borderColor = 'rgba(239,68,68,0.6)'
        btn.style.background  = 'rgba(239,68,68,0.08)'
        btn.style.boxShadow   = '0 0 12px rgba(239,68,68,0.25)'
      } else {
        audio.pause()
        audio.currentTime = 0
        playingRef.current = false
        btn.setAttribute('data-playing', 'false')
        btn.innerHTML = `
          <span style="display:flex;align-items:center;gap:6px;">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
              <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
            </svg>
            <span style="font-family:'Oswald',sans-serif;font-size:12px;letter-spacing:0.15em;color:#555;">BGM</span>
          </span>
        `
        btn.style.borderColor = 'rgba(255,255,255,0.12)'
        btn.style.background  = 'transparent'
        btn.style.boxShadow   = 'none'
      }
    }

    // touchstart で即発火（iOSは300ms遅延回避）
    btn.addEventListener('touchstart', onTap, { passive: false })
    btn.addEventListener('click', onTap)

    return () => {
      btn.removeEventListener('touchstart', onTap)
      btn.removeEventListener('click', onTap)
    }
  }, [])

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <audio ref={audioRef} src={SRC} loop playsInline preload="none" />
      <button
        ref={btnRef}
        data-playing="false"
        style={{
          display: 'flex', alignItems: 'center',
          padding: '6px 12px',
          border: '1px solid rgba(255,255,255,0.12)',
          background: 'transparent',
          WebkitTapHighlightColor: 'transparent',
          touchAction: 'manipulation',
          cursor: 'pointer',
          transition: 'all 0.3s',
          userSelect: 'none',
          WebkitUserSelect: 'none',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
            <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
          </svg>
          <span style={{ fontFamily: "'Oswald',sans-serif", fontSize: 12, letterSpacing: '0.15em', color: '#555' }}>
            BGM
          </span>
        </span>
      </button>
    </div>
  )
}
