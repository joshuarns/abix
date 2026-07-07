import heroPerson from '@/assets/img/personaje hero.png'

/* ── HERO ORIGINAL — comentado ─────────────────────────────────────────────
export default function HeroOriginal() { ... }
─────────────────────────────────────────────────────────────────────────── */

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100vh', backgroundColor: '#2bbdbd' }}
    >
      <style>{`
        @keyframes fade-up { from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:translateY(0) } }
        @keyframes float   { 0%,100% { transform:translateY(0) } 50% { transform:translateY(-18px) } }

        .h-fade-1 { animation: fade-up .65s ease both .1s }
        .h-fade-2 { animation: fade-up .65s ease both .25s }
        .h-fade-3 { animation: fade-up .65s ease both .4s }
        .h-fade-4 { animation: fade-up .65s ease both .55s }
        .h-fade-5 { animation: fade-up .65s ease both .7s }
        .h-person  { animation: float 6s ease-in-out infinite }

        @media (min-width: 768px) {
          .h-person { height: 90vh !important; width: auto !important; max-width: none !important; }
        }
      `}</style>

      {/* Decoraciones de fondo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Círculo grande esquina superior derecha */}
        <div className="absolute rounded-full" style={{
          width: '600px', height: '600px',
          top: '-200px', right: '-150px',
          backgroundColor: 'rgba(255,255,255,0.08)'
        }} />
        {/* Círculo pequeño esquina inferior izquierda */}
        <div className="absolute rounded-full" style={{
          width: '300px', height: '300px',
          bottom: '-80px', left: '-80px',
          backgroundColor: 'rgba(6,26,32,0.1)'
        }} />
        {/* Línea diagonal decorativa */}
        <div className="absolute" style={{
          width: '2px', height: '260px',
          top: '10%', left: '48%',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0) 100%)',
          transform: 'rotate(20deg)',
        }} />
      </div>

      {/* Contenido */}
      <div
        className="relative z-10 w-full min-h-screen flex flex-col md:flex-row items-center"
        style={{ maxWidth: '1340px', margin: '0 auto', padding: '0 2rem' }}
      >

        {/* ── LEFT: Copy ── */}
        <div
          className="flex flex-col gap-5 pt-28 pb-8 md:pt-0 md:pb-0 md:pr-12"
          style={{ flex: '0 0 auto', width: '100%', maxWidth: '540px' }}
        >


          {/* Headline */}
          <div className="h-fade-2">
            <h1
              className="font-extrabold leading-tight"
              style={{
                fontFamily: "'Montserrat Alternates', sans-serif",
                fontSize: 'clamp(2.4rem, 5.5vw, 5rem)',
                letterSpacing: '-0.03em',
                color: '#fff',
              }}
            >
              Con ABIX<br />
              vas a{' '}
              <span
                className="relative inline-block"
                style={{ color: '#e02020' }}
              >
                amar
                {/* Subrayado decorativo */}
                <svg
                  className="absolute left-0 w-full"
                  style={{ bottom: '-6px', height: '6px' }}
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path d="M0 6 Q25 0 50 4 Q75 8 100 2" stroke="#e02020" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>{' '}
              <span style={{ color: '#061a20' }}>tu internet</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className="h-fade-3 leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'rgba(6,26,32,0.75)', maxWidth: '420px' }}
          >
            Para que trabajes, juegues y compartas
            <br />
            <strong style={{ color: '#061a20' }}>sin pensar en tu conexión.</strong>
          </p>

          {/* Divider */}
          <div className="h-fade-3" style={{ width: '48px', height: '3px', backgroundColor: 'rgba(6,26,32,0.25)', borderRadius: '9999px' }} />

          {/* Hero image — mobile only, between subtitle and price */}
          <div className="md:hidden h-fade-4 flex items-end justify-center" style={{ height: '80vw', maxHeight: '420px' }}>
            <img
              src={heroPerson}
              alt="Persona con ABIX"
              className="h-person object-contain object-bottom"
              style={{ height: '100%', width: 'auto' }}
            />
          </div>

          {/* Price */}
          <div className="h-fade-4 flex items-baseline gap-2">
            <span style={{ fontSize: '0.95rem', color: 'rgba(6,26,32,0.65)', fontWeight: 600 }}>Desde</span>
            <span
              className="font-extrabold leading-none"
              style={{
                fontFamily: "'Montserrat Alternates', sans-serif",
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                color: '#061a20',
              }}
            >
              $499
            </span>
            <span style={{ fontSize: '0.95rem', color: 'rgba(6,26,32,0.65)', fontWeight: 600 }}>/mes</span>
          </div>

          {/* CTAs */}
          <div className="h-fade-5 flex flex-col sm:flex-row gap-3">
            <a
              href="#contratar"
              className="font-bold text-white inline-flex items-center justify-center gap-2 rounded-2xl transition-all hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: '#005665', fontSize: '1rem', padding: '1rem 2rem' }}
            >
              Lo quiero
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold inline-flex items-center justify-center gap-2 rounded-2xl transition-all hover:scale-105"
              style={{
                backgroundColor: 'rgba(255,255,255,0.3)',
                color: '#061a20',
                border: '2px solid rgba(6,26,32,0.2)',
                fontSize: '1rem',
                padding: '1rem 2rem',
              }}
            >
              <WhatsAppIcon />
              Escríbenos
            </a>
          </div>

        </div>

        {/* ── RIGHT: Image (desktop only) ── */}
        <div
          className="relative flex-1 hidden md:flex items-end justify-center md:justify-end self-stretch"
          style={{ minHeight: '55vw', maxHeight: '100vh' }}
        >
          {/* Sombra/halo detrás de la persona */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: 0,
              right: '5%',
              width: '70%',
              height: '70%',
              background: 'radial-gradient(ellipse at 50% 90%, rgba(6,26,32,0.2) 0%, transparent 70%)',
            }}
          />

          <img
            src={heroPerson}
            alt="Persona con ABIX"
            className="h-person relative z-10 object-contain object-bottom"
            style={{ height: '62vw', maxHeight: '88vh', width: 'auto' }}
          />

          {/* Floating badge — familias */}
          {/* <div
            className="absolute z-20 hidden md:flex items-center gap-3 px-4 py-3 rounded-2xl"
            style={{
              bottom: '28%',
              left: '0',
              backgroundColor: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 8px 32px rgba(6,26,32,0.15)',
            }}
          >
            <div className="flex -space-x-2">
              {['#e02020', '#2bbdbd', '#146071'].map((c, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: c }}
                >
                  {['M', 'S', 'J'][i]}
                </div>
              ))}
            </div>
            <div>
              <p className="font-bold text-xs" style={{ color: '#061a20' }}>+6,000 familias</p>
              <p className="text-xs" style={{ color: '#146071' }}>ya tienen ABIX ❤</p>
            </div>
          </div> */}
        </div>

      </div>

      {/* Ola inferior */}
      <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '60px' }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>

    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.571a.75.75 0 0 0 .93.906l5.889-1.545A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.372l-.36-.214-3.733.979.997-3.645-.234-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
    </svg>
  )
}
