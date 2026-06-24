import nuevoImg from '@/assets/img/NUEVO.png'
import hogarImg from '@/assets/img/abix-hogar-desktop.png'

const features = [
  { num: '01', label: 'Internet 100% fibra simétrico' },
  { num: '02', label: 'WiFi en toda tu casa' },
  { num: '03', label: 'Más de 100 canales de TV en HD' },
  { num: '04', label: 'Llamadas ilimitadas a móvil y celular' },
]

export default function HogarPlusSection() {
  return (
    <section className="w-full overflow-hidden" style={{ backgroundColor: '#f8fafc' }}>

      {/* Top strip — header centrado */}
      <div className="text-center px-6 pt-16 pb-10">
        <div className="inline-flex items-center gap-3 mb-3">
          <img src={nuevoImg} alt="Nuevo" style={{ height: '52px', width: 'auto' }} />
          <h2
            className="font-extrabold leading-none"
            style={{
              fontFamily: "'Montserrat Alternates', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              letterSpacing: '-0.02em',
            }}
          >
            ABIX HOGAR <span style={{ color: '#2bbdbd' }}>PLUS</span>
          </h2>
        </div>
        <p className="text-gray-500 font-medium" style={{ fontSize: '1.05rem' }}>
          La forma más completa de amar tu internet
        </p>
      </div>

      {/* Main block: imagen full-width con overlay de contenido */}
      <div className="relative w-full" style={{ minHeight: '560px' }}>

        {/* Imagen de fondo */}
        <img
          src={hogarImg}
          alt="Casa conectada ABIX Hogar Plus"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay oscuro gradiente */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(14,42,50,0.88) 0%, rgba(14,42,50,0.6) 55%, rgba(14,42,50,0.1) 100%)',
          }}
        />

        {/* Contenido sobre la imagen */}
        <div
          className="relative z-10 mx-auto flex flex-col justify-center h-full px-6 py-16"
          style={{ maxWidth: '1340px', minHeight: '560px' }}
        >
          <div className="w-full md:w-auto" style={{ maxWidth: '520px' }}>

            {/* Features list */}
            <ul className="flex flex-col gap-4 mb-10">
              {features.map((f) => (
                <li key={f.num} className="flex items-center gap-4">
                  <span
                    className="shrink-0 font-extrabold flex items-center justify-center rounded-full"
                    style={{
                      fontFamily: "'Montserrat Alternates', sans-serif",
                      width: '44px',
                      height: '44px',
                      backgroundColor: '#2bbdbd',
                      color: '#fff',
                      fontSize: '0.8rem',
                    }}
                  >
                    {f.num}
                  </span>
                  <span
                    className="text-white font-semibold"
                    style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)' }}
                  >
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>

            {/* Price + CTA */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              <div>
                <p className="text-white font-bold mb-0.5" style={{ fontSize: '1rem' }}>
                  Para que todos hagan lo suyo,
                </p>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                  Internet, entretenimiento y llamadas en una sola experiencia.
                </p>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>Todo desde</span>
                  <p
                    className="text-white font-extrabold leading-none"
                    style={{
                      fontFamily: "'Montserrat Alternates', sans-serif",
                      fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                    }}
                  >
                    $799<span className="text-lg font-semibold"> /mes*</span>
                  </p>
                </div>

                <a
                  href="#hogar-plus"
                  className="font-bold text-white px-8 py-3 rounded-xl transition-all hover:opacity-90 hover:scale-105 inline-block"
                  style={{
                    backgroundColor: '#4caf50',
                    fontSize: '1rem',
                    boxShadow: '0 4px 20px rgba(76,175,80,0.45)',
                  }}
                >
                  Quiero Hogar Plus
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}
