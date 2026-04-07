import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { X, CheckCircle } from 'lucide-react'

const initialForm = { company: '', name: '', email: '', message: '' }

const inputBase = {
  background: 'transparent',
  border: '1px solid rgba(255,255,255,0.08)',
  color: '#fff',
  outline: 'none',
  transition: 'border-color 0.25s',
}

function Field({ label, labelJa, required, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="font-oswald text-xs text-gray-500 flex items-center gap-2"
        style={{ letterSpacing: '0.25em' }}
      >
        {label}
        <span className="font-mincho text-xs" style={{ color: required ? 'rgba(239,68,68,0.7)' : 'rgba(255,255,255,0.2)', letterSpacing: 0 }}>
          {labelJa}
        </span>
      </label>
      {children}
    </div>
  )
}

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('') // エラー用ステート追加

  /* スクロールロック */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  /* モーダルを閉じるときにリセット */
  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setForm(initialForm)
      setSubmitted(false)
      setSubmitting(false)
      setErrorMessage('')
    }, 400)
  }

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleFocus = (e) => { e.currentTarget.style.borderColor = 'rgba(239,68,68,0.55)' }
  const handleBlur = (e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }

  // 🔴 Formspree本番通信ロジック
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setErrorMessage('')

    const endpoint = "https://formspree.io/f/meelyzrk"

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (response.ok) {
        setSubmitted(true)
        // 成功したら3秒後に自動でモーダルを閉じる
        setTimeout(handleClose, 3000)
      } else {
        setErrorMessage('送信に失敗しました。時間をおいて再度お試しください。')
      }
    } catch (error) {
      setErrorMessage('ネットワークエラーが発生しました。')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Overlay ── */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50"
            style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(6px)' }}
            onClick={handleClose}
          />

          {/* ── Modal ── */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none"
          >
            <div
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-lg pointer-events-auto"
              style={{
                background: '#060606',
                border: '1px solid rgba(239,68,68,0.35)',
                boxShadow: '0 0 60px rgba(239,68,68,0.12), 0 0 120px rgba(239,68,68,0.04)',
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-red-600 pointer-events-none" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-red-600 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-red-600 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-red-600 pointer-events-none" />

              {/* Top glow line */}
              <div
                className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(239,68,68,0.6), transparent)' }}
              />

              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, color: '#fff' }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClose}
                className="absolute top-6 right-6 sm:top-4 sm:right-4 w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center text-gray-600 transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                aria-label="閉じる"
              >
                <X size={14} />
              </motion.button>

              <div className="px-10 py-10">
                {/* ── Header ── */}
                <div className="mb-8">
                  <p
                    className="font-oswald text-xs text-red-500 mb-2"
                    style={{ letterSpacing: '0.55em' }}
                  >
                    GET IN TOUCH
                  </p>
                  <h2
                    className="font-oswald font-bold text-white"
                    style={{ fontSize: '2.4rem', letterSpacing: '0.08em', lineHeight: 1 }}
                  >
                    CONTACT
                  </h2>
                  <p className="font-mincho text-sm text-gray-600 mt-1">お問い合わせ</p>
                  <div
                    className="mt-4 h-px w-14"
                    style={{ background: 'linear-gradient(90deg, #EF4444, transparent)' }}
                  />
                </div>

                {/* ── Success ── */}
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center py-14 gap-5"
                  >
                    <CheckCircle
                      size={52}
                      style={{
                        color: '#EF4444',
                        filter: 'drop-shadow(0 0 14px rgba(239,68,68,0.75))',
                      }}
                    />
                    <p
                      className="font-oswald text-xl text-white"
                      style={{ letterSpacing: '0.2em' }}
                    >
                      SENT SUCCESSFULLY
                    </p>
                    <p className="font-mincho text-sm text-gray-500 text-center leading-relaxed">
                      送信が完了しました。<br />
                      折り返しご連絡いたします。
                    </p>
                  </motion.div>
                ) : (
                  /* ── Form ── */
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                    {/* 会社名 */}
                    <Field label="COMPANY" labelJa="（任意）" required={false}>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholder="株式会社〇〇"
                        className="font-mincho text-sm px-4 py-3 w-full placeholder-gray-700"
                        style={inputBase}
                      />
                    </Field>

                    {/* お名前 */}
                    <Field label="NAME" labelJa="（必須）" required>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        required
                        placeholder="山田 太郎"
                        className="font-mincho text-sm px-4 py-3 w-full placeholder-gray-700"
                        style={inputBase}
                      />
                    </Field>

                    {/* メールアドレス */}
                    <Field label="EMAIL" labelJa="（必須）" required>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        required
                        placeholder="example@email.com"
                        className="font-mincho text-sm px-4 py-3 w-full placeholder-gray-700"
                        style={inputBase}
                      />
                    </Field>

                    {/* お問い合わせ内容 */}
                    <Field label="MESSAGE" labelJa="（必須）" required>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        required
                        rows={5}
                        placeholder="お問い合わせ内容をご記入ください。"
                        className="font-mincho text-sm px-4 py-3 w-full placeholder-gray-700 resize-none"
                        style={inputBase}
                      />
                    </Field>

                    {/* エラーメッセージ */}
                    {errorMessage && (
                      <p className="text-red-500 text-xs font-mincho text-center">
                        {errorMessage}
                      </p>
                    )}

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={submitting}
                      whileHover={{
                        scale: 1.03,
                        skewX: -5,
                        boxShadow: '0 0 28px rgba(239,68,68,0.65)',
                      }}
                      whileTap={{ scale: 0.97 }}
                      className="relative overflow-hidden mt-2 border border-red-500 bg-black text-red-500 px-8 py-4 font-oswald text-sm font-bold group disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ letterSpacing: '0.28em' }}
                    >
                      <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                        {submitting ? 'SENDING...' : 'SUBMIT'}
                      </span>
                      <div className="absolute inset-0 bg-red-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}