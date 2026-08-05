import { useState, useEffect, useRef } from 'react'

import photo1 from '@/assets/img/magnific_ultra-realistic-cinematic_mCyoisjhJQ.png'
import photo2 from '@/assets/img/portrait-barista-girl-asian-female-cafe-worker-shows-okay-ok-sign-approval-recommend-smth-happ.jpg'
import photo3 from '@/assets/img/3184783.png'
import photo4 from '@/assets/img/4819393.png'

const testimonials = [
  {
    photo: photo1,
    quote: 'Desde que tenemos ABIX el home office es otra cosa. Antes perdía llamadas, se trababa el video. Ahora todo funciona y ya no pienso en el internet.',
    name: 'María G.',
    location: 'Playa del Carmen',
  },
  {
    photo: photo2,
    quote: 'Contraté ABIX hace 6 meses y no lo cambiaría por nada. La señal llega a toda la casa y el servicio al cliente siempre responde rápido.',
    name: 'Sofía R.',
    location: 'Cancún',
  },
  {
    photo: photo3,
    quote: 'Tenía otro proveedor y siempre había cortes. Con ABIX Fiber la velocidad es constante todo el día. Mis hijos juegan online sin problema.',
    name: 'Carlos M.',
    location: 'Tulum',
  },
  {
    photo: photo4,
    quote: 'Lo que más me gusta es que el internet sube y baja igual de rápido. Para mis videollamadas de trabajo es perfecto.',
    name: 'Andrea L.',
    location: 'Puerto Morelos',
  },
]

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])

  return count
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [started, setStarted] = useState(false)
  const sectionRef = useRef(null)
  const timerRef = useRef(null)
  const count = useCountUp(6000, 2000, started)

  // Intersection observer para el contador
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.4 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Auto-advance
  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 6000)
  }

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  const goTo = (i) => {
    setCurrent(i)
    resetTimer()
  }

  const t = testimonials[current]

  return (
    <section ref={sectionRef} className="w-full py-20 px-6" style={{ backgroundColor: '#2bbdbd' }}>
      <div className="mx-auto" style={{ maxWidth: '860px' }}>

        {/* Stat counter */}
        <div className="text-center mb-12">
          <p
            className="font-extrabold text-white leading-none"
            style={{
              fontFamily: "'Montserrat Alternates', sans-serif",
              fontSize: 'clamp(3.5rem, 8vw, 6rem)',
            }}
          >
            +{count.toLocaleString('en-US')}
          </p>
          <p className="font-bold text-white mt-1" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', opacity: 0.9 }}>
            familias ya tienen ABIX
          </p>
        </div>

        {/* Testimonial card */}
        <div className="relative" style={{ minHeight: '260px' }}>

          {/* Avatar — flota sobre la card */}
          <div className="flex justify-center" style={{ marginBottom: '-36px', position: 'relative', zIndex: 10 }}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="absolute transition-all duration-500"
                style={{
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? 'scale(1)' : 'scale(0.85)',
                }}
              >
                <div
                  className="rounded-full overflow-hidden"
                  style={{
                    width: '88px',
                    height: '88px',
                    border: '4px solid #2bbdbd',
                    boxShadow: '0 4px 20px rgba(43,189,189,0.35)',
                  }}
                >
                  <img src={t.photo} alt={t.name} className="w-full h-full object-cover object-top" />
                </div>
              </div>
            ))}
            {/* Spacer para empujar el layout */}
            <div style={{ width: '88px', height: '88px' }} />
          </div>

          {/* Card */}
          <div
            className="relative rounded-2xl px-12 pt-14 pb-10 text-center overflow-hidden"
            style={{ backgroundColor: '#2bbdbd' }}
          >
            {/* Quote marks decorativas */}
            <span
              className="absolute top-6 left-8 font-serif font-bold leading-none select-none"
              style={{ fontSize: '5rem', color: 'rgba(255,255,255,0.2)', lineHeight: 1 }}
            >
              "
            </span>
            <span
              className="absolute top-6 right-8 font-serif font-bold leading-none select-none"
              style={{ fontSize: '5rem', color: 'rgba(255,255,255,0.2)', lineHeight: 1 }}
            >
              "
            </span>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" fill="#FFD700" className="w-5 h-5">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote text with transition */}
            <div style={{ minHeight: '80px' }}>
              {testimonials.map((item, i) => (
                <p
                  key={i}
                  className="text-white font-medium leading-relaxed"
                  style={{
                    fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
                    position: i === current ? 'relative' : 'absolute',
                    opacity: i === current ? 1 : 0,
                    transform: i === current ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                    inset: i !== current ? 0 : undefined,
                  }}
                >
                  {item.quote}
                </p>
              ))}
            </div>

            {/* Author */}
            <div className="mt-6">
              <p className="text-white font-bold" style={{ fontSize: '1rem' }}>{t.name}</p>
              <p className="text-white" style={{ fontSize: '0.85rem', opacity: 0.8 }}>
                Cliente ABIX · {t.location}
              </p>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-500"
              style={{
                width: i === current ? '28px' : '10px',
                height: '10px',
                backgroundColor: i === current ? '#2bbdbd' : '#cbd5e1',
              }}
              aria-label={`Testimonio ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
