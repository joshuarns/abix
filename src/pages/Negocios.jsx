import { useState, useRef, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientesSection from '@/components/ClientesSection'

// Images
import heroImg from '@/assets/img/BUSINESS-DESKTOP.png'
import personajeHeroImg from '@/assets/img/emprendedores-negocios.png'
import soloInternetImg from '@/assets/img/boutique-negocios.jpg'
import hotelesGrandesImg from '@/assets/img/hoteles-grandes.jpg'
import clientesImg from '@/assets/img/restaurante-negocios.jpg'
import equipoImg from '@/assets/img/imprenta-negocios.jpg'
import wifiNegocioImg from '@/assets/img/cageteria-wifi-negocios.jpg'
import lineasMovilesImg from '@/assets/img/ingenieros-celulares-negocios.jpg'
import masNegocioImg from '@/assets/img/ABIX-MAS-NEGOCIO.jpg'
import estrategicoImg from '@/assets/img/ABIX-ESTRATEGICO.jpg'
import simetricoImg from '@/assets/img/SIMETRICO-NEGOCIOS.jpg'
import meshImg from '@/assets/img/ABIX-MESH-desktop-1.png'
import toGoImg from '@/assets/img/abix-to-go-negocios.jpg'
import lteImg from '@/assets/img/lte-negocios.jpg'
import logoAbix from '@/assets/logo-abix.png'
import vasAAmarImg from '@/assets/img/vas-a-amar-tu-internet-02.png'

// ─── Plan data ────────────────────────────────────────────────────────────────
const plans = [
  { name: 'FIBER 60+',   price: 599,  down: 60,   up: 25,  ideal: 'Para operar lo básico sin complicarte',       featured: false },
  { name: 'FIBER 100+',  price: 640,  down: 60,   up: 50,  ideal: 'Más estabilidad para tu día a día',           featured: false },
  { name: 'FIBER 150+',  price: 699,  down: 150,  up: 80,  ideal: 'Ideal para equipos pequeños conectados',      featured: false },
  { name: 'FIBER 300+',  price: 749,  down: 300,  up: 100, ideal: 'Para negocios con más usuarios y actividad',  featured: true  },
  { name: 'FIBER 500+',  price: 1099, down: 500,  up: 100, ideal: 'Mayor rendimiento para operaciones exigentes',featured: false },
  { name: 'FIBER 1000+', price: 1599, down: 1000, up: 100, ideal: 'Máxima capacidad para negocios que no paran', featured: false },
]

// ─── Use case cards ───────────────────────────────────────────────────────────
const useCases = [
  {
    img: soloInternetImg,
    title: 'Solo necesito internet',
    desc: 'Fibra óptica para operar tu negocio. Rápida, estable y con línea telefónica incluida.',
    ideal: 'Ideal para tiendas, consultorios, despachos y oficinas.',
    href: '#planes',
  },
  {
    img: clientesImg,
    title: 'Mi negocio recibe clientes',
    desc: 'Internet para tu operación y para tus clientes. Con TV para que se queden más tiempo.',
    ideal: 'Ideal para restaurantes, bares, cafés, gimnasios.',
    href: '#mas-negocio',
  },
  {
    img: equipoImg,
    title: 'Mi equipo necesita comunicarse',
    desc: 'Internet, teléfono y celulares para ti y tu equipo. Todo con un solo proveedor.',
    ideal: 'Ideal para agencias, despachos y negocios familiares.',
    href: '#estrategico',
  },
]

// ─── Diferenciadores ──────────────────────────────────────────────────────────
const difs = [
  { icon: '🔌', title: 'Red de fibra propia', desc: 'Más de 300 km de fibra. Solo nuestra, solo para ti. De Cancún a Tulum.' },
  { icon: '📍', title: 'Operación local', desc: 'Somos de aquí. Nuestro equipo opera en la Riviera Maya, no desde un call center.' },
  { icon: '👁', title: 'Siempre vigilantes', desc: 'Monitoreamos nuestra red 24/7 para que tú no tengas que hacerlo.' },
  { icon: '⚡', title: 'Experiencia probada', desc: 'Miles de negocios conectados. Sabemos lo que necesita cada tipo de operación.' },
]

// ─── WhatsApp Float ───────────────────────────────────────────────────────────
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/16012587695?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20ABIX%20Negocios"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110"
      style={{ bottom: '24px', right: '24px', width: '56px', height: '56px', backgroundColor: '#25D366' }}
    >
      <svg viewBox="0 0 24 24" fill="white" width="30" height="30">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.571a.75.75 0 0 0 .93.906l5.889-1.545A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.372l-.36-.214-3.733.979.997-3.645-.234-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
      </svg>
    </a>
  )
}

// ─── Plan Card ────────────────────────────────────────────────────────────────
function PlanCard({ plan, isHovered, onEnter, onLeave }) {
  return (
    <div
      className="relative flex flex-col rounded-2xl cursor-pointer"
      style={{
        background: plan.featured
          ? 'linear-gradient(155deg, #1a7a8f 0%, #0d4a58 100%)'
          : isHovered
          ? 'linear-gradient(155deg, #2bbdbd 0%, #1a9a9a 100%)'
          : '#ffffff',
        border: plan.featured ? '2px solid rgba(255,255,255,0.15)' : isHovered ? '2px solid #2bbdbd' : '2px solid #e2e8f0',
        boxShadow: plan.featured ? '0 24px 64px rgba(20,96,113,0.4)' : isHovered ? '0 16px 40px rgba(43,189,189,0.3)' : '0 2px 12px rgba(0,0,0,0.05)',
        transform: plan.featured ? 'scale(1.04)' : isHovered ? 'translateY(-6px)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
        zIndex: plan.featured ? 2 : isHovered ? 1 : 0,
        padding: '1.25rem',
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {plan.featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full text-white font-bold whitespace-nowrap"
          style={{ backgroundColor: '#e02020', fontSize: '0.7rem' }}>
          ❤ el más amado
        </div>
      )}
      {/* Banda nombre */}
      <div className="-mx-5 -mt-5 mb-4 py-2.5 px-4 text-center rounded-t-2xl"
        style={{ backgroundColor: plan.featured ? 'rgba(255,255,255,0.15)' : isHovered ? 'rgba(255,255,255,0.18)' : '#2bbdbd' }}>
        <p className="font-extrabold tracking-widest text-white"
          style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: '0.72rem', letterSpacing: '0.1em' }}>
          {plan.name}
        </p>
      </div>
      {/* Precio */}
      <div className="text-center mb-1">
        <span className="font-extrabold leading-none"
          style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', color: plan.featured || isHovered ? '#fff' : '#1e293b' }}>
          ${plan.price.toLocaleString('en-US')}
        </span>
        <span className="block" style={{ fontSize: '0.8rem', color: plan.featured || isHovered ? 'rgba(255,255,255,0.7)' : '#94a3b8', fontWeight: 600 }}>/mes</span>
      </div>
      {/* Velocidades */}
      <p className="text-center mb-1" style={{ fontSize: '0.82rem', color: plan.featured || isHovered ? 'rgba(255,255,255,0.8)' : '#475569' }}>
        {plan.down >= 1000 ? '1,000' : plan.down} Mbps <span style={{ fontWeight: 400, opacity: 0.75 }}>simétrico</span>
      </p>
      {/* Ideal */}
      <p className="text-center mb-4 font-semibold" style={{ fontSize: '0.95rem', color: plan.featured || isHovered ? 'rgba(255,255,255,0.85)' : '#475569', lineHeight: 1.4 }}>
        {plan.ideal}
      </p>
      <a href="https://wa.me/16012587695" target="_blank" rel="noopener noreferrer" className="block text-center font-bold py-2.5 rounded-xl text-sm transition-all mt-auto"
        style={{
          backgroundColor: plan.featured ? '#e02020' : isHovered ? 'rgba(255,255,255,0.2)' : '#f1f5f9',
          color: plan.featured || isHovered ? '#fff' : '#146071',
          boxShadow: plan.featured ? '0 4px 16px rgba(224,32,32,0.45)' : 'none',
        }}>
        Lo quiero
      </a>
    </div>
  )
}

// ─── Plans Section ─────────────────────────────────────────────────────────────
function PlanesNegocios() {
  const [hovered, setHovered] = useState(null)
  const [current, setCurrent] = useState(0)
  const startX = useRef(null)

  const next = () => setCurrent((c) => Math.min(c + 1, plans.length - 1))
  const prev = () => setCurrent((c) => Math.max(c - 1, 0))
  const onTouchStart = (e) => { startX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (startX.current === null) return
    const diff = startX.current - e.changedTouches[0].clientX
    if (diff > 40) next(); else if (diff < -40) prev()
    startX.current = null
  }

  return (
    <section id="planes" className="w-full py-24 px-6" style={{ background: 'linear-gradient(180deg, #f0fdfd 0%, #f8fafc 100%)' }}>
      <div className="mx-auto" style={{ maxWidth: '1340px' }}>
        <div className="text-center mb-6">
          <span className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: 'rgba(43,189,189,0.12)', color: '#146071' }}>
            Internet para Negocios
          </span>
          <h2 className="font-extrabold text-gray-900"
            style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}>
            Elige tu plan <span style={{ color: '#2bbdbd' }}>ABIX Fiber Negocios</span>
          </h2>
          <p className="text-gray-500 mt-3 mb-4" style={{ fontSize: '1.05rem' }}>
            Empieza con fibra óptica y una línea telefónica incluida.
          </p>
          <p className="text-gray-400 text-sm">
            Todos los planes incluyen línea telefónica con llamadas ilimitadas a móviles y fijos en México, EE.UU. y Canadá.
          </p>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative overflow-hidden mt-10" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${current} * (100% + 16px)))`, gap: '16px' }}>
            {plans.map((plan, i) => (
              <div key={plan.name} className="shrink-0 w-full pt-6">
                <PlanCard plan={plan} isHovered={false} onEnter={() => {}} onLeave={() => {}} />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {plans.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className="rounded-full transition-all"
                style={{ width: i === current ? '20px' : '8px', height: '8px', backgroundColor: i === current ? '#2bbdbd' : '#cbd5e1' }} />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch pt-10">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} isHovered={hovered === i}
              onEnter={() => !plan.featured && setHovered(i)}
              onLeave={() => setHovered(null)} />
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-8">
          Costo de instalación $1,500. Disponible en la Riviera Maya. Aplica política de uso justo.
        </p>
      </div>
    </section>
  )
}

// ─── Use Cases Section ─────────────────────────────────────────────────────────
function ConectaTuNegocio() {
  return (
    <section className="w-full py-20 px-6" style={{ backgroundColor: '#fff' }}>
      <div className="mx-auto" style={{ maxWidth: '1340px' }}>
        <div className="text-center mb-14">
          <h2 className="font-extrabold text-gray-900"
            style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em' }}>
            ABIX Fiber Negocios
          </h2>
          <p className="text-gray-500 mt-2" style={{ fontSize: '1.05rem' }}>Conecta lo que hace funcionar a tu negocio</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((u) => (
            <div key={u.title}
              className="group flex flex-col rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.07)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(20,96,113,0.15)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)' }}>
              <div className="overflow-hidden" style={{ height: '220px' }}>
                <img src={u.img} alt={u.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-col gap-3 px-7 py-6 flex-1" style={{ backgroundColor: '#146071' }}>
                <h3 className="font-extrabold text-white"
                  style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: '1.15rem' }}>
                  {u.title}
                </h3>
                <p className="text-white text-sm leading-relaxed" style={{ opacity: 0.85 }}>{u.desc}</p>
                <p className="text-sm font-semibold" style={{ color: '#2bbdbd' }}>{u.ideal}</p>
              </div>
              <div className="px-7 py-4" style={{ backgroundColor: '#146071', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <a href={u.href} className="inline-block font-bold text-white text-sm px-5 py-2.5 rounded-xl transition-all hover:opacity-90"
                  style={{ backgroundColor: '#2bbdbd', boxShadow: '0 4px 14px rgba(43,189,189,0.4)' }}>
                  Ver plan →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Plan Bundle Section (shared pattern for Más Negocio + Estratégico) ────────
function PlanBundle({ img, tag, tagline, features, price, speed, note, id }) {
  return (
    <section id={id} className="w-full overflow-hidden" style={{ backgroundColor: '#f8fafc' }}>

      {/* Header centrado */}
      <div className="text-center px-6 pt-16 pb-10">
        <h2
          className="font-extrabold leading-none mb-3"
          style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.02em' }}
        >
          {tag.split('·').map((part, i) => i === 0
            ? <span key={i} className="text-gray-900">{part}</span>
            : <span key={i} style={{ color: '#2bbdbd' }}>·{part}</span>
          )}
        </h2>
        <p className="text-gray-500 font-medium" style={{ fontSize: '1.05rem' }}>
          {tagline}
        </p>
      </div>

      {/* Imagen con contenido superpuesto */}
      <div className="relative w-full" style={{ minHeight: '700px' }}>
        <img src={img} alt={tag} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(6,26,32,0.65) 0%, rgba(6,26,32,0.4) 55%, rgba(6,26,32,0.05) 100%)' }}
        />
        <div className="relative z-10 mx-auto flex flex-col justify-center h-full px-6 py-16" style={{ maxWidth: '1340px', minHeight: '700px' }}>
          <div style={{ maxWidth: '500px' }}>
            <ul className="flex flex-col gap-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: '#2bbdbd' }}>
                    <svg viewBox="0 0 12 12" width="10" height="10" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-white font-medium" style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)', opacity: 0.95 }}>{f}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl p-5 flex items-center justify-between gap-4 flex-wrap"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <div>
                <p className="text-white text-xs mb-0.5" style={{ opacity: 0.6 }}>Plan con {speed} Megas</p>
                <p className="text-white font-extrabold leading-none"
                  style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(2rem, 3vw, 2.5rem)' }}>
                  ${price.toLocaleString('en-US')}<span className="text-base font-semibold">/mes</span>
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <a href="https://wa.me/16012587695" target="_blank" rel="noopener noreferrer" className="font-bold text-white px-7 py-3 rounded-xl transition-all hover:opacity-90"
                  style={{ backgroundColor: '#2bbdbd', fontSize: '0.95rem', boxShadow: '0 4px 14px rgba(43,189,189,0.45)' }}>
                  ¡Lo quiero!
                </a>
                <a href="#planes" className="text-center text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Ver todos los planes →
                </a>
              </div>
            </div>
            {note && <p className="text-xs mt-4" style={{ color: 'rgba(255,255,255,0.4)' }}>{note}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Más Velocidad Section ─────────────────────────────────────────────────────
function MasVelocidad() {
  const slides = [
    {
      img: simetricoImg,
      title: 'ABIX Fiber simétrico',
      desc: 'Misma velocidad para subir y para bajar. Ideal para videoconferencias, nube intensiva y operaciones que dependen de enviar tanta información como reciben.',
      cta: 'Cuéntanos qué necesitas',
    },
    {
      img: wifiNegocioImg,
      title: 'WiFi en todo tu negocio',
      desc: 'Cada negocio es diferente. Un restaurante con terraza no se resuelve igual que una oficina. Diseñamos la cobertura WiFi que tu espacio necesita.',
      cta: 'Platiquemos',
    },
    {
      img: lineasMovilesImg,
      title: 'Líneas móviles',
      desc: 'Si tu equipo necesita líneas adicionales, encontramos el plan que se ajuste a tu operación.',
      cta: 'Platiquemos',
    },
    {
      img: hotelesGrandesImg,
      title: 'Empresas y Hoteles',
      desc: '¿Operas un hotel, una cadena o una empresa con más de 50 empleados? Tenemos soluciones dedicadas para ti.',
      special: true,
    },
  ]

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
  const GAP = isMobile ? 16 : 30
  const maxIndex = slides.length - visibleSlides

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCurrent((c) => (c >= maxIndex ? 0 : c + 1)), 5000)
  }

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [maxIndex])

  return (
    <section className="w-full py-20 px-6" style={{ backgroundColor: '#f8fafc' }}>
      <div className="mx-auto" style={{ maxWidth: '1340px' }}>
        <h2 className="text-center font-extrabold text-gray-900 mb-10"
          style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em' }}>
          ¿Necesitas más velocidad, más líneas{' '}
          <span style={{ color: '#2bbdbd' }}>o una solución a medida?</span>
        </h2>

        <div className={isMobile ? '-mx-6 px-6' : ''} style={{ touchAction: 'pan-y', overflow: 'hidden', padding: '16px 12px 24px' }}>
          <div
            style={{
              display: 'flex',
              gap: `${GAP}px`,
              transform: isMobile
                ? `translateX(calc(-${current} * (85% + ${GAP}px)))`
                : `translateX(calc(-${current} * (calc(100% / ${visibleSlides} + ${GAP * (visibleSlides - 1) / visibleSlides}px))))`,
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: 'transform',
            }}
          >
            {slides.map((s, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-2xl cursor-pointer shrink-0 flex flex-col bg-white"
                style={{
                  width: isMobile ? '85%' : `calc((100% - ${GAP * (visibleSlides - 1)}px) / ${visibleSlides})`,
                  boxShadow: current === i ? '0 20px 48px rgba(43,189,189,0.2)' : '0 4px 20px rgba(0,0,0,0.07)',
                  transform: current === i && !isMobile ? 'translateY(-6px)' : 'none',
                  transition: 'box-shadow 0.4s ease, transform 0.4s ease',
                  border: current === i ? '2px solid rgba(43,189,189,0.4)' : '2px solid transparent',
                }}
                onClick={() => { setCurrent(Math.max(0, Math.min(i, maxIndex))); resetTimer() }}
              >
                <div className="overflow-hidden">
                  <img src={s.img} alt={s.title}
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="px-6 py-6 flex flex-col gap-3 flex-1"
                  style={{ backgroundColor: s.special ? '#146071' : '#fff' }}>
                  <h3 className="font-extrabold"
                    style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: '1.1rem', color: s.special ? '#fff' : '#111827' }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1"
                    style={{ color: s.special ? 'rgba(255,255,255,0.75)' : '#64748b' }}>{s.desc}</p>
                  {s.special ? (
                    <div className="flex flex-col gap-2 mt-2">
                      <a href="/negocios#empresas" className="font-semibold text-sm underline underline-offset-2 transition-opacity hover:opacity-80"
                        style={{ color: '#a8eaea' }}>Ir a Empresas y Gobierno</a>
                      <a href="/negocios#hoteles" className="font-semibold text-sm underline underline-offset-2 transition-opacity hover:opacity-80"
                        style={{ color: '#a8eaea' }}>Ir a Hoteles y hospitalidad</a>
                    </div>
                  ) : (
                    <a href="https://wa.me/16012587695" target="_blank" rel="noopener noreferrer"
                      className="inline-block font-bold text-sm px-5 py-2.5 rounded-xl transition-all hover:opacity-90 text-center mt-2"
                      style={{ backgroundColor: '#2bbdbd', color: '#fff', boxShadow: '0 4px 14px rgba(43,189,189,0.35)' }}>
                      {s.cta}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button key={i} onClick={() => { setCurrent(i); resetTimer() }}
              className="rounded-full transition-all duration-500"
              style={{ width: i === current ? '28px' : '10px', height: '10px', backgroundColor: i === current ? '#2bbdbd' : '#cbd5e1' }}
              aria-label={`Ir a slide ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Fibra No Llega Section ────────────────────────────────────────────────────
function FibraNoLlega() {
  const products = [
    {
      img: toGoImg,
      tag: 'ABIX TO GO',
      tagColor: '#2bbdbd',
      title: 'Abix To Go',
      price: '$119',
      desc: 'Para el negocio que opera en movimiento o necesita conectividad temporal: food trucks, tours, stands en eventos, operaciones de temporada.',
      equipo: 'Equipo MiFi: desde $999 con primer mes incluido.',
      bullets: ['Sin contratos', 'Plug & play', 'Portátil'],
    },
    {
      img: lteImg,
      tag: 'ABIX LTE',
      tagColor: '#146071',
      title: 'Abix LTE',
      price: '$299',
      desc: 'Para el negocio que necesita internet fijo en una zona donde la fibra no ha llegado. Se instala un router, se conecta y funciona.',
      equipo: 'Equipo router: desde $1,499 con primer mes incluido.',
      bullets: ['Sin cableado', 'Activación rápida', 'Red 4.5G'],
    },
  ]

  return (
    <section className="w-full py-20 px-6" style={{ backgroundColor: '#fff' }}>
      <div className="mx-auto" style={{ maxWidth: '1340px' }}>
        <div className="text-center mb-14">
          <h2 className="font-extrabold text-gray-900"
            style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em' }}>
            ¿La fibra aún no llega{' '}
            <span style={{ color: '#2bbdbd' }}>a tu negocio?</span>
          </h2>
          <p className="text-gray-500 mt-3" style={{ fontSize: '1.05rem' }}>
            ABIX también llega ahí. Conectamos tu negocio con internet inalámbrico, listo para operar.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((p) => (
            <div key={p.title} className="group flex flex-col rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.08)', backgroundColor: '#fff', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 48px rgba(20,96,113,0.18)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)' }}>
              <div className="relative overflow-hidden" style={{ height: '300px' }}>
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,30,40,0.65) 0%, transparent 55%)' }} />
                <div className="absolute top-4 left-4">
                  <span className="font-extrabold text-white px-4 py-1.5 rounded-full text-xs tracking-widest"
                    style={{ fontFamily: "'Montserrat Alternates', sans-serif", backgroundColor: p.tagColor }}>
                    {p.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                  {p.bullets.map((b) => (
                    <span key={b} className="text-white text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.25)' }}>
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-7 py-6 flex flex-col gap-3 flex-1">
                <h3 className="font-extrabold text-gray-900"
                  style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: '1.3rem' }}>
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{p.desc}</p>
                <p className="text-gray-400 text-xs">{p.equipo}</p>
                <div className="flex items-center justify-between gap-4 mt-2">
                  <div>
                    <span className="text-gray-400 text-sm">Desde </span>
                    <span className="font-extrabold" style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: '2rem', color: '#2bbdbd' }}>
                      {p.price}
                    </span>
                    <span className="text-gray-400 text-sm">/mes</span>
                  </div>
                  <a href="https://wa.me/16012587695" target="_blank" rel="noopener noreferrer" className="font-bold text-white px-6 py-3 rounded-xl transition-all hover:opacity-90"
                    style={{ backgroundColor: '#2bbdbd', fontSize: '0.95rem', boxShadow: '0 4px 14px rgba(43,189,189,0.35)', whiteSpace: 'nowrap' }}>
                    Lo quiero
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Diferenciadores ──────────────────────────────────────────────────────────
function Diferenciadores() {
  return (
    <section className="w-full py-20 px-6" style={{ backgroundColor: '#061a20' }}>
      <div className="mx-auto" style={{ maxWidth: '1340px' }}>
        <div className="text-center mb-14">
          <h2 className="font-extrabold text-white"
            style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em' }}>
            Lo que nos hace <span style={{ color: '#2bbdbd' }}>diferentes</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {difs.map((d) => (
            <div key={d.title} className="rounded-2xl p-7 flex flex-col gap-4"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ fontSize: '2rem' }}>{d.icon}</span>
              <h3 className="font-extrabold text-white"
                style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: '1rem' }}>
                {d.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Closing ───────────────────────────────────────────────────────────────────
function ClosingNegocios() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="mx-auto flex flex-col items-center gap-6" style={{ maxWidth: '1340px' }}>
        <img src={logoAbix} alt="ABIX" style={{ height: '64px', width: 'auto' }} />
        <img src={vasAAmarImg} alt="Vas a amar tu internet" style={{ maxWidth: '360px', width: '100%', height: 'auto' }} />
        <p className="text-gray-500 text-center" style={{ fontSize: '1.05rem', maxWidth: '480px' }}>
          Conecta tu negocio hoy. Fibra óptica con línea telefónica incluida en la Riviera Maya.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/16012587695" target="_blank" rel="noopener noreferrer" className="font-bold text-white px-10 py-3.5 rounded-2xl transition-all hover:opacity-90 hover:scale-105 text-center"
            style={{ backgroundColor: '#2bbdbd', fontSize: '1.05rem', boxShadow: '0 6px 24px rgba(43,189,189,0.4)' }}>
            Lo quiero
          </a>
          <a href="https://wa.me/16012587695" target="_blank" rel="noopener noreferrer"
            className="font-bold text-white px-10 py-3.5 rounded-2xl transition-all hover:opacity-90 hover:scale-105 flex items-center justify-center gap-2"
            style={{ backgroundColor: '#25D366', fontSize: '1.05rem', boxShadow: '0 6px 24px rgba(37,211,102,0.35)' }}>
            <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.571a.75.75 0 0 0 .93.906l5.889-1.545A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.372l-.36-.214-3.733.979.997-3.645-.234-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
            </svg>
            Escríbenos
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroNegocios() {
  return (
    <section className="w-full relative pt-16" style={{ backgroundColor: '#146071', minHeight: '580px', overflow: 'visible' }}>
      <div className="relative mx-auto flex flex-row items-end justify-between px-6"
        style={{ maxWidth: '1340px', minHeight: '580px' }}>

        {/* Text — centrado verticalmente */}
        <div className="flex flex-col justify-center py-16 self-center" style={{ maxWidth: '500px', zIndex: 2 }}>
          <h1 className="font-extrabold text-white leading-tight mb-4"
            style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.02em' }}>
            El internet que tu negocio necesita.<br />
            <span style={{ color: '#a8eaea' }}>Todos los días.</span>
          </h1>
          <p className="mb-5" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
            Fibra óptica con línea telefónica ilimitada incluida para tu negocio en la Riviera Maya.
          </p>
          <div className="mb-7">
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', fontWeight: 600 }}>Planes para negocios desde:</p>
            <p className="font-extrabold text-white leading-none"
              style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>
              Desde $599
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://wa.me/16012587695" target="_blank" rel="noopener noreferrer"
              className="font-bold text-white inline-flex items-center justify-center gap-2 rounded-2xl transition-all hover:opacity-90"
              style={{ backgroundColor: '#25D366', fontSize: '1rem', padding: '0.9rem 2rem', boxShadow: '0 4px 16px rgba(37,211,102,0.35)' }}>
              <svg viewBox="0 0 24 24" fill="white" width="20" height="20" className="shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.571a.75.75 0 0 0 .93.906l5.889-1.545A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.372l-.36-.214-3.733.979.997-3.645-.234-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              Escríbenos
            </a>
            <a href="tel:9984270010"
              className="font-bold inline-flex items-center justify-center gap-2 rounded-2xl transition-all hover:opacity-90 whitespace-nowrap"
              style={{ color: '#fff', fontSize: '0.95rem', padding: '0.9rem 1.5rem', backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12.13 19.79 19.79 0 0 1 1.41 3.5 2 2 0 0 1 3.39 1.31h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.21a16 16 0 0 0 6 6l1.27-.85a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              o llámanos al 998 427 0010
            </a>
          </div>
        </div>

        {/* Imagen que sobresale por abajo */}
        <div className="hidden md:block flex-shrink-0 self-end" style={{ height: '920px', marginBottom: '-80px' }}>
          <img src={personajeHeroImg} alt="ABIX Negocios" className="h-full w-auto object-contain object-bottom" />
        </div>

      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Negocios() {
  return (
    <>
      <Navbar />
      <HeroNegocios />
      <ConectaTuNegocio />
      <PlanesNegocios />
      <PlanBundle
        img={masNegocioImg}
        id="mas-negocio"
        tag="PLAN ABIX · MÁS NEGOCIO"
        tagline="La mesa que se queda a ver el segundo tiempo es la mesa que pide otra ronda."
        features={[
          'Internet 100% Fibra alta velocidad',
          'Suma más de 100 canales HD a tu negocio',
          'Llamadas ilimitadas a móviles y celulares',
          'Aumenta tu ticket promedio',
          'Mantén a tus clientes cómodos y conectados',
        ]}
        price={948}
        speed={300}
      />
      <PlanBundle
        img={estrategicoImg}
        id="estrategico"
        tag="PLAN ABIX · ESTRATÉGICO"
        tagline="El internet de tu negocio, la línea de tu mostrador y el celular tuyo y de tu mano derecha. Todo con ABIX."
        features={[
          'Internet 100% Fibra alta velocidad',
          '2 Líneas móviles de 12 Gb',
          'Llamadas ilimitadas a México, USA y Canadá',
          'Redes sociales ilimitadas',
          '1 Línea fija con llamadas ilimitadas',
        ]}
        price={997}
        speed={300}
      />
      <MasVelocidad />
      <FibraNoLlega />
      <Diferenciadores />
      <ClientesSection />
      <ClosingNegocios />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
