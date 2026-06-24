import imgEstable from '@/assets/img/SENAL-ESTABLE-DESKTOP.png'
import imgSimetrica from '@/assets/img/SENAL-SIMERICA-DESKTOP.png'
import imgLocal from '@/assets/img/SOMOS-DE-AQUI-DESKTOP.png'

const cards = [
  {
    img: imgEstable,
    alt: 'Mujer en videollamada',
    title: 'Señal estable',
    desc: 'Trabaja, juega y comparte\nsin interrupciones.',
  },
  {
    img: imgSimetrica,
    alt: 'Joven jugando en computadora',
    title: 'Señal simétrica',
    desc: 'Sube y descarga\ncon la misma rapidez.',
  },
  {
    img: imgLocal,
    alt: 'Hombre con smartphone',
    title: 'Somos de aquí',
    desc: 'Estamos cerca de ti\ncuando nos necesitas.',
  },
]

export default function FiberSection() {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="mx-auto" style={{ maxWidth: '1340px' }}>

        {/* Header */}
        <div className="text-center mb-10">
          <h2
            className="font-extrabold text-gray-900"
            style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            ABIX <span style={{ color: '#2bbdbd' }}>Fiber</span>
          </h2>
          <p className="text-gray-600 mt-2" style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)' }}>
            Internet residencia 100% Fibra Óptica
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl overflow-hidden shadow-md flex flex-col"
            >
              {/* Photo */}
              <div className="w-full overflow-hidden" style={{ height: '260px' }}>
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Text block */}
              <div className="flex flex-col gap-2 p-6" style={{ backgroundColor: '#146071' }}>
                <h3
                  className="text-white font-bold"
                  style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)', fontFamily: "'Montserrat Alternates', sans-serif" }}
                >
                  {card.title}
                </h3>
                <p className="text-white" style={{ fontSize: 'clamp(0.85rem, 1.1vw, 1rem)', whiteSpace: 'pre-line', lineHeight: 1.6 }}>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <a
            href="#por-que-abix"
            className="font-semibold transition-colors hover:bg-[#2bbdbd] hover:text-white"
            style={{
              border: '2px solid #2bbdbd',
              color: '#2bbdbd',
              borderRadius: '9999px',
              padding: '0.75rem 2.5rem',
              fontSize: '1rem',
            }}
          >
            Conoce por qué es el mejor internet
          </a>
        </div>

      </div>
    </section>
  )
}
