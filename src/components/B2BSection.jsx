import { useState, useRef } from 'react'
import empresasImg from '@/assets/img/empresas.png'
import negociosImg from '@/assets/img/portrait-barista-girl-asian-female-cafe-worker-shows-okay-ok-sign-approval-recommend-smth-happ.jpg'
import hotelesImg from '@/assets/img/hoteles.png'
import iconoEmpresas from '@/assets/icono-empresas.svg'
import iconoNegocios from '@/assets/icono-negocios.svg'
import iconoHoteles from '@/assets/icono-hoteles.svg'

const segments = [
  {
    img: negociosImg,
    icon: iconoNegocios,
    tag: 'NEGOCIOS Y COMERCIOS',
    desc: 'Tu negocio no puede parar. Nosotros tampoco.',
    cta: 'Ver Soluciones',
    accent: '#146071',
    href: '#negocios',
  },
  {
    img: empresasImg,
    icon: iconoEmpresas,
    tag: 'EMPRESAS Y GOBIERNO',
    desc: 'Soluciones de alta densidad para operaciones que no pueden detenerse.',
    cta: 'Ver Soluciones',
    accent: '#146071',
    href: '#empresas',
  },
  {
    img: hotelesImg,
    icon: iconoHoteles,
    tag: 'HOTELES Y HOSPITALIDAD',
    desc: 'Tus huéspedes esperan lo mejor. Tu red también.',
    cta: 'Ver Soluciones',
    accent: '#146071',
    href: '#hoteles',
  },
]

function B2BCard({ s }) {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden flex flex-col h-full"
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.08)', transition: 'transform 0.35s ease, box-shadow 0.35s ease' }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 48px rgba(20,96,113,0.2)' }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)' }}
    >
      <div className="relative overflow-hidden" style={{ height: '280px' }}>
        <img src={s.img} alt={s.tag} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 40%)' }} />
      </div>
      <div className="flex flex-col gap-3 px-7 py-6 flex-1" style={{ backgroundColor: s.accent }}>
        <div className="flex items-start gap-3">
          <img src={s.icon} alt="" style={{ width: '36px', height: '36px', objectFit: 'contain', flexShrink: 0 }} />
          <h3 className="font-extrabold text-white leading-tight"
            style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', letterSpacing: '0.01em' }}>
            {s.tag}
          </h3>
        </div>
        <p className="text-white leading-relaxed" style={{ fontSize: '0.92rem', opacity: 0.85 }}>{s.desc}</p>
      </div>
      <div className="px-7 py-5" style={{ backgroundColor: s.accent, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <a href={s.href} className="inline-block font-bold text-white text-sm px-6 py-2.5 rounded-xl transition-all hover:opacity-90 hover:scale-105"
          style={{ backgroundColor: '#2bbdbd', boxShadow: '0 4px 14px rgba(43,189,189,0.4)' }}>
          {s.cta}
        </a>
      </div>
    </div>
  )
}

export default function B2BSection() {
  const [current, setCurrent] = useState(0)
  const startX = useRef(null)

  const prev = () => setCurrent((c) => Math.max(c - 1, 0))
  const next = () => setCurrent((c) => Math.min(c + 1, segments.length - 1))
  const onTouchStart = (e) => { startX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (startX.current === null) return
    const diff = startX.current - e.changedTouches[0].clientX
    if (diff > 40) next()
    else if (diff < -40) prev()
    startX.current = null
  }

  return (
    <section className="w-full py-20 px-6 overflow-hidden bg-white">
      <div className="mx-auto" style={{ maxWidth: '1340px' }}>

        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="font-extrabold text-gray-900"
            style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            ¿No es para <span style={{ color: '#2bbdbd' }}>tu casa</span>?
          </h2>
          <p className="text-gray-500 mt-2" style={{ fontSize: '1.05rem' }}>
            También te tenemos algo.
          </p>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden -mx-6 px-6" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${current} * (85% + 16px)))`, gap: '16px' }}
          >
            {segments.map((s) => (
              <div key={s.tag} className="shrink-0 w-[85%]">
                <B2BCard s={s} />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {segments.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className="rounded-full transition-all"
                style={{ width: i === current ? '20px' : '8px', height: '8px', backgroundColor: i === current ? '#2bbdbd' : '#cbd5e1' }} />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {segments.map((s) => <B2BCard key={s.tag} s={s} />)}
        </div>

      </div>
    </section>
  )
}
