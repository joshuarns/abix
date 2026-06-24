import empresasImg from '@/assets/img/empresas.png'
import negociosImg from '@/assets/img/portrait-barista-girl-asian-female-cafe-worker-shows-okay-ok-sign-approval-recommend-smth-happ.jpg'
import hotelesImg from '@/assets/img/hoteles.png'

const segments = [
  {
    img: empresasImg,
    icon: '🏪',
    tag: 'EMPRESAS Y GOBIERNO',
    desc: 'Soluciones de alta densidad para operaciones que no pueden detenerse.',
    cta: 'Ver Soluciones',
    accent: '#146071',
    href: '#empresas',
  },
  {
    img: negociosImg,
    icon: '🏢',
    tag: 'NEGOCIOS Y COMERCIOS',
    desc: 'Tu negocio no puede parar. Nosotros tampoco.',
    cta: 'Ver Soluciones',
    accent: '#146071',
    href: '#negocios',
  },
  {
    img: hotelesImg,
    icon: '🌴',
    tag: 'HOTELES Y HOSPITALIDAD',
    desc: 'Tus huéspedes esperan lo mejor. Tu red también.',
    cta: 'Ver Soluciones',
    accent: '#146071',
    href: '#hoteles',
  },
]

export default function B2BSection() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="mx-auto" style={{ maxWidth: '1340px' }}>

        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="font-extrabold text-gray-900"
            style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            ¿No es para <span style={{ color: '#2bbdbd' }}>tu casa</span>?
          </h2>
          <p className="text-gray-500 mt-2" style={{ fontSize: '1.05rem' }}>
            También te tenemos algo.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {segments.map((s) => (
            <div
              key={s.tag}
              className="group relative rounded-2xl overflow-hidden flex flex-col"
              style={{
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 20px 48px rgba(20,96,113,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)'
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: '280px' }}>
                <img
                  src={s.img}
                  alt={s.tag}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle top gradient for breathing room */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 40%)' }}
                />
              </div>

              {/* Dark content block */}
              <div
                className="flex flex-col gap-3 px-7 py-6 flex-1"
                style={{ backgroundColor: s.accent }}
              >
                <div className="flex items-start gap-3">
                  <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>{s.icon}</span>
                  <h3
                    className="font-extrabold text-white leading-tight"
                    style={{
                      fontFamily: "'Montserrat Alternates', sans-serif",
                      fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {s.tag}
                  </h3>
                </div>
                <p className="text-white leading-relaxed" style={{ fontSize: '0.92rem', opacity: 0.85 }}>
                  {s.desc}
                </p>
              </div>

              {/* CTA — outside the dark block, bottom */}
              <div
                className="px-7 py-5"
                style={{ backgroundColor: s.accent, borderTop: '1px solid rgba(255,255,255,0.1)' }}
              >
                <a
                  href={s.href}
                  className="inline-block font-bold text-white text-sm px-6 py-2.5 rounded-xl transition-all hover:opacity-90 hover:scale-105"
                  style={{
                    backgroundColor: '#4caf50',
                    boxShadow: '0 4px 14px rgba(76,175,80,0.4)',
                  }}
                >
                  {s.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
