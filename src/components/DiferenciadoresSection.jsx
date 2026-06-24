import { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

const items = [
  {
    title: 'RED DE FIBRA PROPIA',
    content: 'Más de 300 km de fibra. Solo nuestra, solo para ti. No revendemos red de otros. De Cancún a Tulum, cada metro de fibra es nuestro.',
  },
  {
    title: 'CONEXIÓN DIRECTA',
    content: 'Tu conexión va directo al backbone de internet sin intermediarios. Menos saltos, menos latencia, más velocidad real.',
  },
  {
    title: 'SIEMPRE VIGILANTES',
    content: 'Monitoreo 24/7 de nuestra red. Detectamos y resolvemos problemas antes de que los notes. Tu internet siempre en óptimas condiciones.',
  },
  {
    title: 'EXPERIENCIA PROBADA',
    content: 'Años conectando hogares y empresas en el Caribe Mexicano. Sabemos lo que necesitas y cómo dártelo.',
  },
]

export default function DiferenciadoresSection() {
  const [open, setOpen] = useState(0)

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="mx-auto" style={{ maxWidth: '1340px' }}>

        {/* Title */}
        <h2
          className="font-extrabold text-gray-900 text-center mb-12"
          style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}
        >
          Lo que nos hace <span style={{ color: '#2bbdbd' }}>diferentes</span>
        </h2>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Video placeholder */}
          <div
            className="w-full lg:w-1/2 rounded-2xl shrink-0"
            style={{ backgroundColor: '#000', aspectRatio: '16/9' }}
          />

          {/* Accordion */}
          <div className="w-full lg:w-1/2 flex flex-col gap-3">
            {items.map((item, i) => {
              const isOpen = open === i
              return (
                <div key={item.title} className="overflow-hidden rounded-xl">
                  <button
                    onClick={() => setOpen(i)}
                    className="w-full flex items-center justify-between px-5 py-4 font-bold text-left transition-colors duration-200"
                    style={{
                      fontFamily: "'Montserrat Alternates', sans-serif",
                      fontSize: '0.95rem',
                      letterSpacing: '0.05em',
                      backgroundColor: isOpen ? '#2bbdbd' : '#c8c8c8',
                      color: isOpen ? '#ffffff' : '#ffffff',
                      borderRadius: isOpen ? '0.75rem 0.75rem 0 0' : '0.75rem',
                    }}
                  >
                    {item.title}
                    {isOpen
                      ? <ChevronUp className="w-5 h-5 shrink-0" />
                      : <ChevronDown className="w-5 h-5 shrink-0" />
                    }
                  </button>

                  {isOpen && (
                    <div
                      className="px-5 py-4 text-gray-600"
                      style={{
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                        borderRadius: '0 0 0.75rem 0.75rem',
                        border: '1px solid #e2e8f0',
                        borderTop: 'none',
                      }}
                    >
                      {item.content}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
