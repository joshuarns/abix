import nuevoImg from '@/assets/img/NUEVO.png'
import familiaImg from '@/assets/img/abix-familia.jpg'
import familiaMobileImg from '@/assets/img/abix-familia-mobile.png'

const perks = [
  { text: '2 líneas móviles de 12GB, redes sociales y llamadas ilimitadas', bold: true },
  { text: 'Internet ABIX 150+ 100% fibra simétrico', bold: false },
  { text: 'Un módulo de WiFi adicional', bold: false },
  { text: 'Entretenimiento con más de 100 canales de TV', bold: false },
  { text: 'Teléfono fijo con llamadas ilimitadas', bold: false },
]

const CheckIcon = () => (
  <span className="shrink-0 flex items-center justify-center rounded-full mt-0.5" style={{ width: '22px', height: '22px', backgroundColor: '#2bbdbd' }}>
    <svg viewBox="0 0 12 12" fill="none" width="12" height="12">
      <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
)

export default function FamiliaSection() {
  return (
    <section className="w-full overflow-hidden" style={{ backgroundColor: '#ffffff' }}>

      {/* Header */}
      <div className="text-center px-6 pt-16 pb-10">
        <div className="inline-flex items-center gap-3 mb-3">
          <img src={nuevoImg} alt="Nuevo" style={{ height: '100px', width: 'auto' }} />
          <h2
            className="font-extrabold leading-none"
            style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.02em' }}
          >
            ABIX FAMILIA <span style={{ color: '#2bbdbd' }}>TOTAL</span>
          </h2>
        </div>
        <p className="font-bold text-gray-900 mt-2" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
          Conexión, entretenimiento y comunicación para tu familia — ahora con 2 líneas móviles.
        </p>
        <p className="text-gray-500 mt-2" style={{ fontSize: '0.95rem' }}>
          Internet, WiFi, Teléfono ilimitado, TV y 2 líneas móviles. Un solo plan, un solo pago.
        </p>
      </div>

      {/* ── MOBILE ── */}
      <div className="md:hidden" style={{ backgroundColor: '#061a20' }}>
        <div className="relative w-full" style={{ height: '60vw', minHeight: '260px', backgroundImage: `url(${familiaMobileImg})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundAttachment: 'fixed' }}>
          <div className="absolute bottom-0 left-0 right-0" style={{ height: '60%', background: 'linear-gradient(to top, #061a20 0%, transparent 100%)' }} />
        </div>

        <div className="px-6 pt-4 pb-10 flex flex-col gap-6">
          <ul className="flex flex-col gap-3">
            {perks.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-white leading-snug" style={{ fontSize: '0.92rem', fontWeight: p.bold ? 700 : 400 }}>
                  {p.text}
                </span>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl p-6 flex flex-col gap-4"
            style={{ backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <div>
              <p className="text-white font-extrabold leading-none"
                style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: '2.5rem' }}>
                Desde $999<span className="text-lg font-semibold">/mes*</span>
              </p>
              <p style={{ fontSize: '0.82rem', color: '#2bbdbd', marginTop: '4px', fontWeight: 600 }}>
                Ahorra más de $250 al mes
              </p>
            </div>
            <a
              href="https://wa.me/16012587695" target="_blank" rel="noopener noreferrer"
              className="w-full text-center font-bold py-3.5 rounded-2xl transition-all hover:opacity-90"
              style={{ backgroundColor: '#2bbdbd', color: '#fff', fontSize: '1rem', boxShadow: '0 4px 16px rgba(43,189,189,0.4)' }}
            >
              ¡Lo quiero!
            </a>
          </div>
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block relative w-full" style={{ minHeight: '700px', backgroundImage: `url(${familiaImg})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(6,26,32,0.65) 0%, rgba(6,26,32,0.4) 50%, rgba(6,26,32,0.05) 100%)' }} />

        <div className="relative z-10 mx-auto flex flex-col justify-center h-full px-6 py-16" style={{ maxWidth: '1340px', minHeight: '700px' }}>
          <div style={{ maxWidth: '560px' }}>

            <ul className="flex flex-col gap-3.5 mb-10">
              {perks.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 flex items-center justify-center rounded-full mt-0.5" style={{ width: '24px', height: '24px', backgroundColor: '#2bbdbd' }}>
                    <svg viewBox="0 0 12 12" fill="none" width="12" height="12">
                      <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-white leading-snug" style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)', fontWeight: p.bold ? 700 : 400 }}>
                    {p.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl p-6 flex flex-col gap-5"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <div>
                <p className="text-white font-extrabold leading-none"
                  style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
                  Desde $999<span className="font-semibold" style={{ fontSize: '1rem' }}>/mes*</span>
                </p>
                <p style={{ fontSize: '0.9rem', color: '#2bbdbd', marginTop: '6px', fontWeight: 600 }}>
                  Ahorra más de $250 al mes
                </p>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href="https://wa.me/16012587695" target="_blank" rel="noopener noreferrer"
                  className="font-bold py-3 px-8 rounded-2xl transition-all hover:opacity-90 hover:scale-105"
                  style={{ backgroundColor: '#2bbdbd', color: '#fff', fontSize: '0.95rem', boxShadow: '0 4px 16px rgba(43,189,189,0.4)', whiteSpace: 'nowrap' }}
                >
                  ¡Lo quiero!
                </a>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)' }}>
                  *Precio sujeto a cobertura disponible
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}
