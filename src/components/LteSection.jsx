import toGoImg from '@/assets/img/abix-lte-to-go-desktop.png'
import lteImg from '@/assets/img/abix-lte-desktop.png'

const products = [
  {
    img: toGoImg,
    tag: 'ABIX TO GO',
    tagColor: '#2bbdbd',
    title: 'Abix To Go',
    price: '$249',
    desc: 'Solo enchúfalo y listo.',
    detail: '5, 10 ó 20 Mbps',
    badge: 'Sin instalación',
    cta: 'Ver planes',
    bullets: ['Sin contratos', 'Plug & play', 'Portátil'],
  },
  {
    img: lteImg,
    tag: 'ABIX LTE',
    tagColor: '#146071',
    title: 'Abix LTE',
    price: '$119',
    desc: 'Playa, cenote, carretera.',
    detail: 'Red 4.5G',
    badge: 'Sin obra',
    cta: 'Ver planes',
    bullets: ['Sin cableado', 'Activación inmediata', 'Red 4.5G'],
  },
]

export default function LteSection() {
  return (
    <section className="w-full py-20 px-6" style={{ backgroundColor: '#f8fafc' }}>
      <div className="mx-auto" style={{ maxWidth: '1340px' }}>

        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="font-extrabold text-gray-900"
            style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            ¿Vives donde <span style={{ color: '#2bbdbd' }}>la fibra aún no llega</span>?
          </h2>
          <p className="text-gray-500 mt-3" style={{ fontSize: '1.05rem' }}>
            ABIX también llega ahí. Sin instalación, sin obra, sin esperas.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((p) => (
            <div
              key={p.tag}
              className="group relative rounded-2xl overflow-hidden flex flex-col"
              style={{
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                background: '#fff',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 20px 48px rgba(20,96,113,0.18)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)'
              }}
            >
              {/* Image con overlay de tag */}
              <div className="relative overflow-hidden" style={{ height: '320px' }}>
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay bottom */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(10,30,40,0.65) 0%, transparent 55%)',
                  }}
                />

                {/* Tag pill */}
                <div className="absolute top-4 left-4">
                  <span
                    className="font-extrabold text-white px-4 py-1.5 rounded-full text-xs tracking-widest"
                    style={{
                      fontFamily: "'Montserrat Alternates', sans-serif",
                      backgroundColor: p.tagColor,
                      boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                    }}
                  >
                    {p.tag}
                  </span>
                </div>

                {/* Badge "sin instalación / sin obra" */}
                <div className="absolute top-4 right-4">
                  <span
                    className="font-bold text-white px-3 py-1.5 rounded-full text-xs"
                    style={{ backgroundColor: '#4caf50', boxShadow: '0 2px 10px rgba(76,175,80,0.4)' }}
                  >
                    {p.badge}
                  </span>
                </div>

                {/* Bottom bullets sobre la imagen */}
                <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                  {p.bullets.map((b) => (
                    <span
                      key={b}
                      className="text-white text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.25)' }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex items-end justify-between gap-4 px-7 py-6">
                <div className="flex flex-col gap-1">
                  <h3
                    className="font-extrabold text-gray-900"
                    style={{
                      fontFamily: "'Montserrat Alternates', sans-serif",
                      fontSize: '1.35rem',
                    }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{p.desc} <span className="font-semibold text-gray-600">{p.detail}</span></p>

                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-gray-400 text-sm">Desde</span>
                    <span
                      className="font-extrabold"
                      style={{
                        fontFamily: "'Montserrat Alternates', sans-serif",
                        fontSize: '2rem',
                        color: '#2bbdbd',
                      }}
                    >
                      {p.price}
                    </span>
                    <span className="text-gray-400 text-sm">/mes</span>
                  </div>
                </div>

                <a
                  href="#"
                  className="shrink-0 font-bold text-white px-6 py-3 rounded-xl transition-all hover:opacity-90 hover:scale-105"
                  style={{
                    backgroundColor: '#4caf50',
                    fontSize: '0.95rem',
                    boxShadow: '0 4px 14px rgba(76,175,80,0.35)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {p.cta}
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
