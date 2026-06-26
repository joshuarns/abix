import { useState, useRef } from 'react'
import imgEstable from '@/assets/img/SENAL-ESTABLE-DESKTOP.png'
import imgSimetrica from '@/assets/img/SENAL-SIMERICA-DESKTOP.png'
import imgLocal from '@/assets/img/SOMOS-DE-AQUI-DESKTOP.png'

const cards = [
  {
    img: imgEstable,
    alt: 'Mujer en videollamada',
    title: 'Señal estable',
    desc: 'Trabaja, juega y comparte\nsin interrupciones.',
  },
  {
    img: imgSimetrica,
    alt: 'Joven jugando en computadora',
    title: 'Señal simétrica',
    desc: 'Sube y descarga\ncon la misma rapidez.',
  },
  {
    img: imgLocal,
    alt: 'Hombre con smartphone',
    title: 'Somos de aquí',
    desc: 'Estamos cerca de ti\ncuando nos necesitas.',
  },
]

export default function FiberSection() {
  const [current, setCurrent] = useState(0)
  const startX = useRef(null)

  const prev = () => setCurrent((c) => (c - 1 + cards.length) % cards.length)
  const next = () => setCurrent((c) => (c + 1) % cards.length)

  const onTouchStart = (e) => { startX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (startX.current === null) return
    const diff = startX.current - e.changedTouches[0].clientX
    if (diff > 40) next()
    else if (diff < -40) prev()
    startX.current = null
  }

  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <div className="mx-auto px-6" style={{ maxWidth: '1340px' }}>

        {/* Header */}
        <div className="text-center mb-10">
          <h2
            className="font-extrabold text-gray-900"
            style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            ABIX <span style={{ color: '#2bbdbd' }}>Fiber</span>
          </h2>
          <p className="text-gray-600 mt-2" style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)' }}>
            Internet residencia 100% Fibra Óptica
          </p>
        </div>

        {/* Desktop: grid — Mobile: carrusel */}
        <div
          className="hidden md:grid md:grid-cols-3 gap-6"
        >
          {cards.map((card) => <Card key={card.title} card={card} />)}
        </div>

        {/* Mobile carousel */}
        <div
          className="md:hidden relative -mx-6 px-6"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${current} * (85% + 16px)))`, gap: '16px' }}
          >
            {cards.map((card) => (
              <div key={card.title} className="shrink-0 w-[85%]">
                <Card card={card} />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all"
                style={{
                  width: i === current ? '20px' : '8px',
                  height: '8px',
                  backgroundColor: i === current ? '#2bbdbd' : '#cbd5e1',
                }}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <a
            href="#por-que-abix"
            className="font-semibold transition-colors hover:bg-[#2bbdbd] hover:text-white"
            style={{
              border: '2px solid #2bbdbd',
              color: '#2bbdbd',
              borderRadius: '9999px',
              padding: '0.75rem 2.5rem',
              fontSize: '1rem',
            }}
          >
            Conoce por qué es el mejor internet
          </a>
        </div>

      </div>
    </section>
  )
}

function Card({ card }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md flex flex-col">
      <div className="w-full overflow-hidden" style={{ height: '260px' }}>
        <img src={card.img} alt={card.alt} className="w-full h-full object-cover object-top" />
      </div>
      <div className="flex flex-col gap-2 p-6" style={{ backgroundColor: '#146071' }}>
        <h3
          className="text-white font-bold"
          style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)', fontFamily: "'Montserrat Alternates', sans-serif" }}
        >
          {card.title}
        </h3>
        <p className="text-white" style={{ fontSize: 'clamp(0.85rem, 1.1vw, 1rem)', whiteSpace: 'pre-line', lineHeight: 1.6 }}>
          {card.desc}
        </p>
      </div>
    </div>
  )
}
