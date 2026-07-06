import { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import redPropiaVideo from '@/assets/video/video-abix-razones.mp4'

const items = [
  {
    title: 'RED DE FIBRA PROPIA',
    content: 'Más de 300 km de fibra óptica construida y operada por ABIX. De Cancún a Tulum, cada metro de fibra es nuestro, es para ti.',
  },
  {
    title: 'CONEXIÓN DIRECTA',
    content: 'Nos conectamos directamente con los principales centros de internet en EEUU. Eso significa una conexión más rápida, estable y confiable.',
  },
  {
    title: 'SIEMPRE VIGILANTES',
    content: 'Monitoreamos la red para detectar fallas, atenderlas rápido y mantener tu servicio funcionando.',
  },
  {
    title: 'EXPERIENCIA PROBADA',
    content: 'Más de seis años construyendo la mejor red en Riviera Maya y más de 25 siendo pioneros del internet en México.',
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

          {/* Video */}
          <video
            className="w-full lg:w-1/2 rounded-2xl shrink-0 object-cover"
            style={{ aspectRatio: '16/9' }}
            src={redPropiaVideo}
            autoPlay
            muted
            loop
            playsInline
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
