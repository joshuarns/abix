import { useState, useEffect, useRef, useCallback } from 'react'

import mesh1 from '@/assets/img/ABIX-MESH-desktop-1.png'
import mesh2 from '@/assets/img/ABIX-MESH-desktop-2.png'
import mesh3 from '@/assets/img/ABIX-MESH-desktop-3.png'
import mesh4 from '@/assets/img/ABIX-MESH-desktop-4.png'
import mesh5 from '@/assets/img/ABIX-MESH-desktop-5.png'

const slides = [
  {
    img: mesh1,
    titleBlack: '¿Tu WiFi no llega igual',
    titleTeal: 'a toda tu casa?',
    desc: '¿Hay zonas donde funciona bien y áreas donde se vuelve lento?',
  },
  {
    img: mesh2,
    titleBlack: '¿Por qué pasa?',
    titleTeal: 'La señal pierde fuerza en el camino',
    desc: 'Paredes, pisos, distancia y materiales pueden debilitar el WiFi antes de que llegue a todos los espacios.',
  },
  {
    img: mesh3,
    titleBlack: 'La solución es',
    titleTeal: 'distribuir mejor la señal',
    desc: 'En vez de depender de una sola señal, se colocan nodos adicionales para crear una red interna que cubra todo tu espacio.',
  },
  {
    img: mesh4,
    titleBlack: 'Cobertura',
    titleTeal: 'en cada rincón',
    desc: 'ABIX Mesh garantiza señal estable en cada habitación, sin importar el tamaño de tu hogar.',
  },
  {
    img: mesh5,
    titleBlack: 'Una sola red,',
    titleTeal: 'conexión perfecta',
    desc: 'Todos tus dispositivos en una misma red inteligente que siempre elige el nodo más cercano.',
  },
]

export default function MeshSection() {
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 640)
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const visibleSlides = isMobile ? 1 : isTablet ? 2 : 3
  const GAP = isMobile ? 0 : 30

  const goTo = (index) => {
    setCurrent((index + slides.length) % slides.length)
  }

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000)
  }

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  const handleDotClick = (i) => {
    goTo(i)
    resetTimer()
  }

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="mx-auto" style={{ maxWidth: '1340px' }}>

        {/* Title */}
        <h2
          className="text-center font-extrabold mb-10"
          style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}
        >
          <span className="text-gray-900">WiFi en toda tu casa </span>
          <span style={{ color: '#2bbdbd' }}>con ABIX</span>
          <span className="text-gray-900"> si se puede</span>
        </h2>

        {/* Carousel track wrapper */}
        <div className="overflow-hidden rounded-2xl" style={{ touchAction: 'pan-y' }}>
          <div
            style={{
              display: 'flex',
              gap: `${GAP}px`,
              transform: `translateX(calc(-${current} * (calc(100% / ${visibleSlides} + ${GAP * (visibleSlides - 1) / visibleSlides}px))))`,
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: 'transform',
            }}
          >
            {slides.map((s, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl cursor-pointer shrink-0"
                style={{
                  width: `calc((100% - ${GAP * (visibleSlides - 1)}px) / ${visibleSlides})`,
                  minHeight: isMobile ? '340px' : '460px',
                }}
                onClick={() => { goTo(i); resetTimer() }}
              >
                {/* Background image */}
                <img
                  src={s.img}
                  alt={s.titleBlack}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.1) 100%)',
                  }}
                />

                {/* Text */}
                <div className="relative z-10 p-8 flex flex-col gap-3" style={{ minHeight: '460px' }}>
                  <h3
                    className="font-bold leading-snug"
                    style={{
                      fontFamily: "'Montserrat Alternates', sans-serif",
                      fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                    }}
                  >
                    <span className="text-gray-900">{s.titleBlack}</span>
                    <br />
                    <span style={{ color: '#2bbdbd' }}>{s.titleTeal}</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed" style={{ fontSize: '0.9rem', maxWidth: '280px' }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className="rounded-full transition-all duration-500"
              style={{
                width: i === current ? '28px' : '10px',
                height: '10px',
                backgroundColor: i === current ? '#2bbdbd' : '#cbd5e1',
              }}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Price block */}
        <div className="text-center mt-12 flex flex-col items-center gap-2">
          <p className="text-gray-500" style={{ fontSize: '1rem' }}>
            Una señal fuerte en todos tus espacios.
          </p>
          <p
            className="font-bold text-gray-900"
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontFamily: "'Montserrat Alternates', sans-serif",
            }}
          >
            Desde $129
          </p>
          <p className="text-gray-500" style={{ fontSize: '0.95rem' }}>
            al mes por nodo adicional. Diagnóstico técnico gratuito para casas grandes.
          </p>

          <a
            href="#mesh"
            className="mt-4 font-bold text-white px-8 py-3 rounded-xl transition-opacity hover:opacity-90"
            style={{
              backgroundColor: '#4caf50',
              fontSize: '1rem',
              boxShadow: '0 4px 14px rgba(76,175,80,0.35)',
            }}
          >
            Quiero WiFi en toda mi casa
          </a>
        </div>

      </div>
    </section>
  )
}
