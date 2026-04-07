import { useEffect, useRef } from 'react'

export default function EmberParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = canvas.height + Math.random() * 20
        this.size = Math.random() * 3 + 1
        this.speedY = -(Math.random() * 1.5 + 0.5)
        this.speedX = (Math.random() - 0.5) * 0.8
        this.life = 1
        this.decay = Math.random() * 0.008 + 0.004
        const colors = [
          { r: 239, g: 68, b: 68 },
          { r: 249, g: 115, b: 22 },
          { r: 245, g: 158, b: 11 },
          { r: 255, g: 215, b: 0 },
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.y += this.speedY
        this.x += this.speedX + Math.sin(this.y * 0.02) * 0.3
        this.life -= this.decay
        this.size *= 0.995
        if (this.life <= 0 || this.y < -10) {
          this.reset()
        }
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.life * 0.7
        ctx.fillStyle = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`
        ctx.shadowBlur = 8
        ctx.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.8)`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    for (let i = 0; i < 60; i++) {
      const p = new Particle()
      p.y = Math.random() * canvas.height
      p.life = Math.random()
      particles.push(p)
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.update()
        p.draw()
      })
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  )
}
