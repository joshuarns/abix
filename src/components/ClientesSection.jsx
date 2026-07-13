const LOGOS = Array.from({ length: 18 })

export default function ClientesSection() {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="mx-auto" style={{ maxWidth: '1340px' }}>

        <h2
          className="text-center font-extrabold text-gray-900 mb-12"
          style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', letterSpacing: '-0.02em' }}
        >
          Ellos ya <span style={{ color: '#2bbdbd' }}>confían</span> en ABIX
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {LOGOS.map((_, i) => (
            <div
              key={i}
              className="rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: '#f1f5f9', height: '72px' }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
