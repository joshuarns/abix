import tvImg from '@/assets/img/abix-tv desktop.png'
import movilImg from '@/assets/img/abix-movil-desktop.png'
import wifiImg from '@/assets/img/wifi-total-desktop.png'

const products = [
  {
    img: tvImg,
    tag: 'ABIX TV',
    tagline: 'Más de 100 canales HD',
    desc: 'Deportes, noticias, películas, series, infantiles y más. Todo en alta definición.',
    price: '$129',
    cta: 'Quiero ABIX TV',
    accent: '#146071',
  },
  {
    img: movilImg,
    tag: 'ABIX MÓVIL',
    tagline: 'Todos comunicados, en un solo lugar',
    desc: 'Pon a cada miembro de tu familia en contacto. Llamadas, datos y más desde un solo plan.',
    price: '$99',
    cta: 'Quiero ABIX MÓVIL',
    accent: '#146071',
  },
  {
    img: wifiImg,
    tag: 'WIFI TOTAL',
    tagline: 'Internet en toda tu casa',
    desc: 'Evaluamos tu hogar y te recomendamos la mejor cobertura para cada rincón.',
    price: '$129',
    cta: 'Quiero mejor WiFi',
    accent: '#146071',
  },
]

export default function ExperienciaDigitalSection() {
  return (
    <section className="w-full py-20 px-6" style={{ backgroundColor: '#f8fafc' }}>
      <div className="mx-auto" style={{ maxWidth: '1340px' }}>

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gray-500 font-medium mb-2" style={{ fontSize: '1rem' }}>
            ¿Ya tienes ABIX FIBER?
          </p>
          <h2
            className="font-extrabold text-gray-900"
            style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            Completa tu <span style={{ color: '#2bbdbd' }}>experiencia digital</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.tag}
              className="flex flex-col rounded-2xl overflow-hidden group"
              style={{
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                background: '#fff',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(20,96,113,0.18)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)'
              }}
            >
              {/* Tag header */}
              <div className="px-6 pt-6 pb-3">
                <span
                  className="inline-block font-extrabold tracking-wide"
                  style={{
                    fontFamily: "'Montserrat Alternates', sans-serif",
                    fontSize: '1.1rem',
                    color: '#0f172a',
                  }}
                >
                  {p.tag}
                </span>
                <p className="text-gray-500 text-sm mt-0.5">{p.tagline}</p>
              </div>

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.tag}
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Bottom content */}
              <div
                className="flex flex-col gap-3 px-6 py-5 flex-1"
                style={{ backgroundColor: p.accent }}
              >
                <p className="text-white text-sm leading-relaxed" style={{ opacity: 0.9 }}>
                  {p.desc}
                </p>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-white text-xs" style={{ opacity: 0.75 }}>Desde</span>
                    <p
                      className="text-white font-extrabold leading-tight"
                      style={{
                        fontFamily: "'Montserrat Alternates', sans-serif",
                        fontSize: '1.6rem',
                      }}
                    >
                      {p.price}<span className="text-sm font-semibold">/mes</span>
                    </p>
                  </div>
                  <a
                    href="#"
                    className="font-bold text-sm px-5 py-2.5 rounded-xl transition-all hover:opacity-90 hover:scale-105 whitespace-nowrap"
                    style={{
                      backgroundColor: '#4caf50',
                      color: '#fff',
                      boxShadow: '0 3px 10px rgba(76,175,80,0.4)',
                    }}
                  >
                    {p.cta}
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
