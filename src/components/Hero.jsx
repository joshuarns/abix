import heroPerson from '@/assets/img/personaje hero.png'

/* ── HERO ORIGINAL — comentado ─────────────────────────────────────────────
export default function HeroOriginal() {
  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: '#2bbdbd', minHeight: '100vh' }}>
      <div className="w-full min-h-screen flex flex-col-reverse md:flex-row items-stretch">
        <div className="flex items-end justify-center md:flex-1">
          <img src={heroPerson} alt="Persona con dispositivos ABIX"
            className="w-full md:w-auto object-contain object-bottom"
            style={{ maxHeight: '55vh', width: '100%', objectPosition: 'bottom' }} />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 px-6 pt-24 pb-6 md:pt-0 md:flex-1">
          <h1 className="text-white font-extrabold text-center leading-tight"
            style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(1.75rem, 4vw, 3.25rem)' }}>
            Con ABIX<br/>vas a <span style={{ color: '#e02020' }}>amar</span> tu internet
          </h1>
          <p className="text-white font-semibold text-center" style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.1rem)', lineHeight: 1.6 }}>
            Para que trabajes, juegues y compartas<br/>sin pensar en tu conexión.
          </p>
          <p className="text-white font-bold text-center" style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.875rem)' }}>Desde $499</p>
          <div className="flex flex-col items-center gap-3 w-full mt-1">
            <a href="#contratar" className="font-bold text-[#e02020] bg-white border-2 border-[#e02020] hover:bg-[#e02020] hover:text-white transition-colors text-center"
              style={{ borderRadius: '9999px', padding: '0.75rem 2.5rem', fontSize: '1rem', minWidth: '200px' }}>
              Quiero contratar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
─────────────────────────────────────────────────────────────────────────── */

const stats = [
  { value: '300', unit: 'Mbps', label: 'simétrico' },
  { value: '+6K', unit: '', label: 'familias conectadas' },
  { value: '24/7', unit: '', label: 'soporte local' },
]

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '100vh', backgroundColor: '#2bbdbd' }}>

      <style>{`
        @keyframes float-slow { 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(-22px) } }
        @keyframes float-med  { 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(-14px) } }
        @keyframes pulse-ring { 0%{ transform:scale(0.85); opacity:.6 } 100%{ transform:scale(1.6); opacity:0 } }
        @keyframes fade-up    { from{ opacity:0; transform:translateY(28px) } to{ opacity:1; transform:translateY(0) } }
        @keyframes shimmer    { 0%{ background-position:200% center } 100%{ background-position:-200% center } }

        .hero-fade-1 { animation: fade-up 0.7s ease both 0.1s }
        .hero-fade-2 { animation: fade-up 0.7s ease both 0.3s }
        .hero-fade-3 { animation: fade-up 0.7s ease both 0.5s }
        .hero-fade-4 { animation: fade-up 0.7s ease both 0.7s }
        .hero-fade-5 { animation: fade-up 0.7s ease both 0.9s }
        .hero-person { animation: float-slow 6s ease-in-out infinite }
        .hero-card-1 { animation: float-med 5s ease-in-out infinite 0.5s }
        .hero-card-2 { animation: float-med 5s ease-in-out infinite 1.2s }
        .hero-ring    { animation: pulse-ring 2.5s ease-out infinite }
        .hero-ring-2  { animation: pulse-ring 2.5s ease-out infinite 1.2s }
        .shimmer-text {
          background: linear-gradient(90deg, #ffffff 0%, #061a20 40%, #ffffff 60%, #061a20 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        @media (min-width: 768px) {
          .hero-person { height: 88vh !important; width: auto !important; }
        }
      `}</style>

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full" style={{ width:'680px', height:'680px', top:'-180px', left:'-120px', background:'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)' }} />
        <div className="absolute rounded-full" style={{ width:'500px', height:'500px', bottom:'-100px', right:'-80px', background:'radial-gradient(circle, rgba(6,26,32,0.25) 0%, transparent 70%)' }} />
        <div className="absolute rounded-full" style={{ width:'300px', height:'300px', top:'40%', left:'35%', background:'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)' }} />

        {/* Grid lines decorativas */}
        <svg className="absolute inset-0 w-full h-full opacity-5" style={{ stroke:'#061a20' }}>
          {[...Array(12)].map((_,i) => (
            <line key={`v${i}`} x1={`${i*9}%`} y1="0" x2={`${i*9}%`} y2="100%" strokeWidth="0.5"/>
          ))}
          {[...Array(8)].map((_,i) => (
            <line key={`h${i}`} x1="0" y1={`${i*14}%`} x2="100%" y2={`${i*14}%`} strokeWidth="0.5"/>
          ))}
        </svg>
      </div>

      {/* Layout principal */}
      <div className="relative z-10 w-full min-h-screen flex flex-col md:flex-row items-center" style={{ maxWidth:'1340px', margin:'0 auto', padding:'0 1.25rem' }}>

        {/* ── COPY (arriba en mobile, izquierda en desktop) ── */}
        <div className="flex-1 flex flex-col justify-center gap-4 pt-24 pb-4 md:pt-0 md:pb-0 md:gap-6 md:pr-8 w-full" style={{ maxWidth:'580px' }}>

          {/* Tag */}
          <div className="hero-fade-1">
            <span
              className="inline-flex items-center gap-2 font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
              style={{ fontSize:'0.65rem', backgroundColor:'rgba(43,189,189,0.15)', color:'#2bbdbd', border:'1px solid rgba(43,189,189,0.3)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2bbdbd] inline-block shrink-0" style={{ boxShadow:'0 0 6px #2bbdbd' }} />
              Internet Fibra Óptica · Cancún a Tulum
            </span>
          </div>

          {/* Headline */}
          <div className="hero-fade-2">
            <h1
              className="font-extrabold leading-none"
              style={{ fontFamily:"'Montserrat Alternates', sans-serif", fontSize:'clamp(2.6rem, 10vw, 5.5rem)', letterSpacing:'-0.03em' }}
            >
              <span className="text-white">Vas a </span>
              <span style={{ color:'#e02020' }}>amar</span>
              <br />
              <span className="shimmer-text">tu internet</span>
            </h1>
          </div>

          {/* Subtitle — oculto en mobile para ahorrar espacio */}
          <p className="hero-fade-3 leading-relaxed hidden sm:block" style={{ fontSize:'clamp(0.9rem, 1.4vw, 1.1rem)', maxWidth:'440px', color:'rgba(6,26,32,0.75)' }}>
            Internet de fibra óptica 100% propio. Para que trabajes, juegues y compartas
            <strong style={{ color:'#061a20' }}> sin pensar en la conexión.</strong>
          </p>

          {/* Price */}
          <div className="hero-fade-3 flex items-baseline gap-2">
            <span className="text-sm font-medium" style={{ color:'rgba(6,26,32,0.65)' }}>Desde</span>
            <span
              className="font-extrabold"
              style={{ fontFamily:"'Montserrat Alternates', sans-serif", fontSize:'clamp(1.75rem, 5vw, 3rem)', color:'#061a20' }}
            >
              $499
            </span>
            <span className="text-sm" style={{ color:'rgba(6,26,32,0.65)' }}>/mes</span>
          </div>

          {/* CTAs — full width en mobile */}
          <div className="hero-fade-4 flex flex-col sm:flex-row gap-3">
            <a
              href="#contratar"
              className="font-bold text-white inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl transition-all hover:scale-105"
              style={{ backgroundColor:'#061a20', fontSize:'1rem', padding:'0.875rem 1.75rem', transition:'all 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow='0 8px 30px rgba(43,189,189,0.5)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow='none'}
            >
              Quiero contratar
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl transition-all hover:scale-105"
              style={{ color:'#fff', backgroundColor:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)', fontSize:'1rem', padding:'0.875rem 1.75rem' }}
            >
              <WhatsAppIcon />
              Escríbenos
            </a>
          </div>

        </div>

        {/* ── IMAGEN (abajo en mobile, derecha en desktop) ── */}
        <div className="relative flex-1 flex items-end justify-center w-full" style={{ minHeight:'42vh' }}>

          {/* Anillo de luz */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{ width:'min(420px, 90vw)', height:'min(420px, 90vw)' }}>
            <div className="hero-ring absolute inset-0 rounded-full" style={{ border:'2px solid rgba(43,189,189,0.4)' }} />
            <div className="hero-ring-2 absolute inset-0 rounded-full" style={{ border:'2px solid rgba(43,189,189,0.25)' }} />
            <div className="absolute inset-0 rounded-full" style={{ background:'radial-gradient(circle at 50% 80%, rgba(43,189,189,0.15) 0%, transparent 70%)' }} />
          </div>

          {/* Persona */}
          <img
            src={heroPerson}
            alt="Persona con ABIX"
            className="hero-person relative z-10 object-contain object-bottom w-full"
            style={{ maxHeight:'42vh', maxWidth:'340px' }}
          />

          {/* Floating card — usuarios (solo md+) */}
          <div
            className="hero-card-2 absolute z-20 hidden md:flex items-center gap-3 px-4 py-3 rounded-2xl"
            style={{ bottom:'28%', left:'0%', backgroundColor:'rgba(255,255,255,0.06)', backdropFilter:'blur(16px)', border:'1px solid rgba(255,255,255,0.12)', boxShadow:'0 8px 32px rgba(0,0,0,0.3)' }}
          >
            <div className="flex -space-x-2">
              {['#e02020','#2bbdbd','#146071'].map((c,i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#061a20] flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor:c }}>
                  {['M','S','J'][i]}
                </div>
              ))}
            </div>
            <div>
              <p className="text-white text-xs font-bold">+6,000 familias</p>
              <p className="text-gray-400 text-xs">ya tienen ABIX ❤</p>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator — oculto en mobile */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 opacity-50">
        <span className="text-gray-400 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#2bbdbd] to-transparent" />
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
