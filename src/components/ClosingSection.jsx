import familyImg from '@/assets/img/vas-a-amar-a-abix-desktop.png'
import logoAbix from '@/assets/logo-abix.png'

export default function ClosingSection() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="mx-auto" style={{ maxWidth: '1340px' }}>

        {/* Banner image con texto encima */}
        <div
          className="relative w-full overflow-hidden rounded-3xl mb-16"
          style={{ minHeight: '380px' }}
        >
          {/* Imagen */}
          <img
            src={familyImg}
            alt="Familia disfrutando ABIX"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Overlay — solo sobre la zona del texto (derecha) */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to left, rgba(10,30,40,0.92) 0%, rgba(10,30,40,0.75) 40%, rgba(10,30,40,0) 70%)',
            }}
          />

          {/* Texto — centrado en mobile, derecha en desktop */}
          <div
            className="relative z-10 h-full flex items-center justify-center md:justify-end"
            style={{ minHeight: '380px', padding: '3rem 5%' }}
          >
            <div className="text-center md:text-right" style={{ maxWidth: '400px' }}>
              <h2
                className="text-white font-extrabold leading-tight mb-5"
                style={{
                  fontFamily: "'Montserrat Alternates', sans-serif",
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  letterSpacing: '-0.02em',
                }}
              >
                Vive el internet<br />como debe ser
              </h2>

              <ul className="flex flex-col gap-1 mb-5">
                {['Conecta.', 'Disfruta.', 'Comparte.', 'Vive.'].map((word) => (
                  <li
                    key={word}
                    className="text-white font-bold"
                    style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', opacity: 0.9 }}
                  >
                    {word}
                  </li>
                ))}
              </ul>

              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                Y deja que tu conexión simplemente funcione.
              </p>
            </div>
          </div>
        </div>

        {/* Logo + tagline + CTA */}
        <div className="flex flex-col items-center gap-5">
          <img src={logoAbix} alt="ABIX" style={{ height: '64px', width: 'auto' }} />

          <p
            className="font-extrabold flex items-center gap-2"
            style={{
              fontFamily: "'Montserrat Alternates', sans-serif",
              fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)',
              color: '#2bbdbd',
            }}
          >
            Vas a amar
            <HeartWifiIcon />
            tu internet
          </p>

          <a
            href="#contratar"
            className="font-bold text-white px-10 py-3.5 rounded-2xl transition-all hover:opacity-90 hover:scale-105"
            style={{
              backgroundColor: '#4caf50',
              fontSize: '1.05rem',
              boxShadow: '0 6px 24px rgba(76,175,80,0.4)',
            }}
          >
            Quiero contratar
          </a>
        </div>

      </div>
    </section>
  )
}

function HeartWifiIcon() {
  return (
    <svg viewBox="0 0 40 40" className="inline-block" style={{ width: '2rem', height: '2rem' }}>
      {/* Heart */}
      <path
        d="M20 34s-14-8.5-14-18a8 8 0 0 1 14-5.3A8 8 0 0 1 34 16c0 9.5-14 18-14 18z"
        fill="#e02020"
      />
      {/* Wifi arcs */}
      <path d="M14.5 20a7.5 7.5 0 0 1 11 0" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M17 22.5a3.5 3.5 0 0 1 6 0" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="20" cy="25.5" r="1.2" fill="white" />
    </svg>
  )
}
