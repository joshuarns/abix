import { useState, useRef } from 'react'
import { Check, Zap, Wifi, Shield, Phone } from 'lucide-react'

const plans = [
  {
    name: 'FIBER 60+',
    price: 499,
    speed: 60,
    featured: false,
    ideal: 'Ideal para 1–2 usuarios',
    perks: ['Navegación fluida', 'Streaming HD', 'Home office básico'],
  },
  {
    name: 'FIBER 100+',
    price: 549,
    speed: 100,
    featured: false,
    ideal: 'Ideal para familias pequeñas',
    perks: ['Streaming 4K', 'Videollamadas estables', 'Varios dispositivos'],
  },
  {
    name: 'FIBER 150+',
    price: 599,
    speed: 150,
    featured: false,
    ideal: 'Ideal para familias activas',
    perks: ['Gaming online', 'Smart home', 'Downloads rápidos'],
  },
  {
    name: 'FIBER 300+',
    price: 649,
    speed: 300,
    featured: true,
    ideal: 'El favorito de las familias',
    perks: ['Máximo rendimiento', 'Gaming sin lag', 'Toda la familia conectada'],
  },
  {
    name: 'FIBER 500+',
    price: 999,
    speed: 500,
    featured: false,
    ideal: 'Para hogares exigentes',
    perks: ['Home office avanzado', 'Múltiples streams 4K', 'Backups en la nube'],
  },
  {
    name: 'FIBER 1000+',
    price: 1499,
    speed: 1000,
    featured: false,
    ideal: 'Máxima potencia disponible',
    perks: ['Velocidad ilimitada', 'Servidor en casa', 'Sin límites'],
  },
]

const included = [
  { icon: Wifi,    label: 'Fibra óptica 100% simétrica' },
  { icon: Shield,  label: 'Sin contratos forzosos' },
  { icon: Zap,     label: 'Instalación gratuita' },
  { icon: Phone,   label: 'Soporte 24/7' },
]

export default function PlansSection() {
  const [hovered, setHovered] = useState(null)
  const [current, setCurrent] = useState(0)
  const startX = useRef(null)

  const prev = () => setCurrent((c) => Math.max(c - 1, 0))
  const next = () => setCurrent((c) => Math.min(c + 1, plans.length - 1))
  const onTouchStart = (e) => { startX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (startX.current === null) return
    const diff = startX.current - e.changedTouches[0].clientX
    if (diff > 40) next()
    else if (diff < -40) prev()
    startX.current = null
  }

  return (
    <section className="w-full py-24 px-6 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f0fdfd 0%, #f8fafc 100%)' }}>
      <div className="mx-auto" style={{ maxWidth: '1340px' }}>

        {/* Header */}
        <div className="text-center mb-6">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: 'rgba(43,189,189,0.12)', color: '#146071' }}
          >
            Internet Residencial
          </span>
          <h2
            className="font-extrabold text-gray-900"
            style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            ABIX Fiber, <span style={{ color: '#2bbdbd' }}>elige tu plan</span>
          </h2>
          <p className="text-gray-500 mt-3 mb-8" style={{ fontSize: '1.05rem' }}>
            Todos los planes con velocidad simétrica · Sin contratos forzosos
          </p>
        </div>

        {/* Included perks strip */}
        <div
          className="flex flex-wrap justify-center gap-6 mb-14 py-4 px-8 rounded-2xl"
          style={{ backgroundColor: 'rgba(20,96,113,0.06)' }}
        >
          {included.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-4 h-4 shrink-0" style={{ color: '#2bbdbd' }} />
              <span className="text-sm font-semibold text-gray-600">{label}</span>
            </div>
          ))}
        </div>

        {/* Plans — Mobile carousel */}
        <div
          className="md:hidden relative -mx-6 px-6"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${current} * (85% + 16px)))`, gap: '16px' }}
          >
            {plans.map((plan, i) => {
              const isHovered = false
              return (
                <div key={plan.name} className="shrink-0 w-[85%] pt-6">
                  <PlanCard plan={plan} i={i} isHovered={isHovered} setHovered={setHovered} />
                </div>
              )
            })}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {plans.map((_, i) => (
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

        {/* Plans — Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch pt-6">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} i={i} isHovered={hovered === i} setHovered={setHovered} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center gap-3 mt-14">
          <p className="text-gray-400 text-sm">¿No sabes cuál elegir? Revisa la cobertura en tu zona.</p>
          <a
            href="#cobertura"
            className="font-bold transition-all hover:shadow-lg"
            style={{
              border: '2px solid #146071',
              color: '#146071',
              borderRadius: '9999px',
              padding: '0.75rem 2.5rem',
              fontSize: '1rem',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#146071'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#146071'
            }}
          >
            Revisar cobertura
          </a>
        </div>

      </div>
    </section>
  )
}

function PlanCard({ plan, i, isHovered, setHovered }) {
  return (
    <div
      className="relative flex flex-col rounded-2xl cursor-pointer"
      style={{
        background: plan.featured
          ? 'linear-gradient(155deg, #1a7a8f 0%, #0d4a58 100%)'
          : isHovered
          ? 'linear-gradient(155deg, #2bbdbd 0%, #1a9a9a 100%)'
          : '#ffffff',
        border: plan.featured
          ? '2px solid rgba(255,255,255,0.15)'
          : isHovered
          ? '2px solid #2bbdbd'
          : '2px solid #e2e8f0',
        boxShadow: plan.featured
          ? '0 24px 64px rgba(20,96,113,0.4)'
          : isHovered
          ? '0 16px 40px rgba(43,189,189,0.3)'
          : '0 2px 12px rgba(0,0,0,0.05)',
        transform: plan.featured ? 'scale(1.02)' : isHovered ? 'translateY(-6px)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
        zIndex: plan.featured ? 2 : isHovered ? 1 : 0,
        padding: '1.25rem 1.25rem',
      }}
      onMouseEnter={() => setHovered && !plan.featured && setHovered(i)}
      onMouseLeave={() => setHovered && setHovered(null)}
    >
      {plan.featured && (
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full text-white font-bold whitespace-nowrap"
          style={{ backgroundColor: '#e02020', fontSize: '0.7rem', letterSpacing: '0.03em' }}
        >
          ❤ el más amado
        </div>
      )}
      {/* Plan name — banda superior */}
      <div
        className="-mx-5 -mt-5 mb-4 py-2.5 px-4 text-center rounded-t-2xl"
        style={{ backgroundColor: plan.featured ? 'rgba(255,255,255,0.15)' : isHovered ? 'rgba(255,255,255,0.18)' : '#2bbdbd' }}
      >
        <p className="font-extrabold tracking-widest text-white text-center"
          style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: '0.75rem', letterSpacing: '0.1em' }}>
          {plan.name}
        </p>
      </div>

      {/* PRECIO — protagonista */}
      <div className="text-center mb-1">
        <div className="flex items-start justify-center gap-0.5 leading-none">
          <span className="font-extrabold"
            style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(2rem, 3vw, 2.6rem)', color: plan.featured || isHovered ? '#ffffff' : '#1e293b', lineHeight: 1 }}>
            ${plan.price.toLocaleString('en-US')}
          </span>
        </div>
        <span style={{ fontSize: '0.8rem', color: plan.featured || isHovered ? 'rgba(255,255,255,0.7)' : '#94a3b8', fontWeight: 600 }}>/mes</span>
      </div>

      {/* Velocidad + simétrico en una línea */}
      <p className="text-center mb-3 font-semibold"
        style={{ fontSize: '0.82rem', color: plan.featured || isHovered ? 'rgba(255,255,255,0.8)' : '#475569' }}>
        {plan.speed >= 1000 ? '1,000' : plan.speed} Mbps <span style={{ fontWeight: 400, opacity: 0.75 }}>simétrico</span>
      </p>

      {/* Ideal para */}
      <p className="text-center mb-4" style={{ fontSize: '0.7rem', color: plan.featured || isHovered ? 'rgba(255,255,255,0.6)' : '#94a3b8', lineHeight: 1.4 }}>
        {plan.ideal}
      </p>
      {/* Perks — comentado temporalmente
      <ul>...</ul>
      */}
      <a href="#contratar" className="block text-center font-bold py-2.5 rounded-xl text-sm transition-all mt-auto"
        style={{
          backgroundColor: plan.featured ? '#e02020' : isHovered ? 'rgba(255,255,255,0.2)' : '#f1f5f9',
          color: plan.featured || isHovered ? '#ffffff' : '#146071',
          border: isHovered && !plan.featured ? '1px solid rgba(255,255,255,0.3)' : 'none',
          boxShadow: plan.featured ? '0 4px 16px rgba(224,32,32,0.45)' : 'none',
        }}>
        Lo quiero
      </a>
    </div>
  )
}
