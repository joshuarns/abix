import nuevoImg from '@/assets/img/NUEVO.png'
import familiaImg from '@/assets/img/abix-familia.png'
import familiaMobileImg from '@/assets/img/abix-familia-mobile.png'

const perks = [
  { text: 'Internet 100% fibra simétrico', bold: false },
  { text: 'Un módulo de WiFi adicional', bold: false },
  { text: 'Entretenimiento con más de 100 canales de TV', bold: false },
  { text: '2 líneas móviles con 12Gb, redes sociales y llamadas ilimitadas', bold: true },
  { text: 'Teléfono fijo con llamadas ilimitadas a móvil y celular', bold: false },
]

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
        <p className="font-bold text-gray-900 mt-1" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
          La conexión más completa que vas a amar.
        </p>
        <p className="text-gray-500 mt-1" style={{ fontSize: '0.95rem' }}>
          Todo en un solo plan: internet de alta velocidad, WiFi en cada cuarto,<br className="hidden md:block" />
          más de 100 canales y 2 celulares para tu familia
        </p>
      </div>

      {/* ── MOBILE ── */}
      <div className="md:hidden" style={{ backgroundColor: '#061a20' }}>
        <div className="relative w-full">
          <img src={familiaMobileImg} alt="ABIX Familia Total" className="w-full h-auto block" />
          <div className="absolute bottom-0 left-0 right-0" style={{ height: '45%', background: 'linear-gradient(to top, #061a20 0%, transparent 100%)' }} />
        </div>

        <div className="px-6 pt-4 pb-10 flex flex-col gap-6">
          {/* Perks */}
          <ul className="flex flex-col gap-3">
            {perks.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="shrink-0 flex items-center justify-center rounded-full mt-0.5"
                  style={{ width: '22px', height: '22px', backgroundColor: '#2bbdbd' }}
                >
                  <svg viewBox="0 0 12 12" fill="none" width="12" height="12">
                    <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span
                  className="text-white leading-snug"
                  style={{ fontSize: '0.92rem', fontWeight: p.bold ? 700 : 400 }}
                >
                  {p.text}
                </span>
              </li>
            ))}
          </ul>

          {/* Price + CTA */}
          <div className="rounded-2xl p-6 flex flex-col gap-4"
            style={{ backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <div>
              <p className="text-white font-extrabold leading-none"
                style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: '2.5rem' }}>
                Desde $999<span className="text-lg font-semibold">/mes*</span>
              </p>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>
                mucho menos de lo que pagarías por separado
              </p>
            </div>
            <a
              href="#contratar"
              className="w-full text-center font-bold py-3.5 rounded-2xl transition-all hover:opacity-90"
              style={{ backgroundColor: '#2bbdbd', color: '#fff', fontSize: '1rem', boxShadow: '0 4px 16px rgba(43,189,189,0.4)' }}
            >
              Quiero ABIX Familia
            </a>
          </div>
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block relative w-full" style={{ minHeight: '580px' }}>
        <img src={familiaImg} alt="ABIX Familia Total" className="absolute inset-0 w-full h-full object-cover object-top" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(6,26,32,0.92) 0%, rgba(6,26,32,0.65) 50%, rgba(6,26,32,0.1) 100%)' }} />

        <div className="relative z-10 mx-auto flex flex-col justify-center h-full px-6 py-16" style={{ maxWidth: '1340px', minHeight: '580px' }}>
          <div style={{ maxWidth: '540px' }}>

            {/* Perks list */}
            <ul className="flex flex-col gap-3.5 mb-10">
              {perks.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="shrink-0 flex items-center justify-center rounded-full mt-0.5"
                    style={{ width: '24px', height: '24px', backgroundColor: '#2bbdbd' }}
                  >
                    <svg viewBox="0 0 12 12" fill="none" width="12" height="12">
                      <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span
                    className="text-white leading-snug"
                    style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)', fontWeight: p.bold ? 700 : 400 }}
                  >
                    {p.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Price card */}
            <div className="rounded-2xl p-6 flex flex-col gap-5"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <div>
                <p className="text-white font-extrabold leading-none"
                  style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
                  Desde $999<span className="font-semibold" style={{ fontSize: '1rem' }}>/mes*</span>
                </p>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginTop: '6px' }}>
                  mucho menos de lo que pagarías por separado
                </p>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href="#contratar"
                  className="font-bold py-3 px-8 rounded-2xl transition-all hover:opacity-90 hover:scale-105"
                  style={{ backgroundColor: '#2bbdbd', color: '#fff', fontSize: '0.95rem', boxShadow: '0 4px 16px rgba(43,189,189,0.4)', whiteSpace: 'nowrap' }}
                >
                  Quiero ABIX Familia
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
