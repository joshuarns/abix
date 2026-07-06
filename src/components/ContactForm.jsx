const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.824L.057 23.215a.75.75 0 00.917.917l5.39-1.465A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.712 9.712 0 01-4.953-1.355l-.355-.212-3.683 1.001 1.001-3.683-.212-.355A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 7l10 7 10-7" />
  </svg>
)

export default function ContactForm() {
  return (
    <section
      className="w-full py-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d4a58 0%, #146071 50%, #1a8a8a 100%)' }}
    >
      {/* Decorative circles */}
      <div className="absolute -top-24 -left-24 rounded-full opacity-10"
        style={{ width: '400px', height: '400px', backgroundColor: '#2bbdbd' }} />
      <div className="absolute -bottom-32 -right-16 rounded-full opacity-10"
        style={{ width: '500px', height: '500px', backgroundColor: '#2bbdbd' }} />

      <div className="relative mx-auto text-center" style={{ maxWidth: '620px' }}>

        <span
          className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
          style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)' }}
        >
          Vuélvete ABIX-lover
        </span>

        <h2
          className="text-white font-extrabold mb-3"
          style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}
        >
          ¿Quieres empezar a disfrutar <span style={{ color: '#2bbdbd' }}>de internet</span>?
        </h2>

        <p className="mb-10" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem' }}>
          Estamos a un clic de ti.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/16012587695"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 font-bold py-4 px-8 rounded-2xl transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: '#25D366', color: '#fff', fontSize: '1rem', boxShadow: '0 8px 24px rgba(37,211,102,0.4)' }}
          >
            <WaIcon />
            Escríbenos por WhatsApp
          </a>

          <a
            href="/contacto"
            className="flex items-center justify-center gap-3 font-bold py-4 px-8 rounded-2xl transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: '1rem', border: '1px solid rgba(255,255,255,0.25)', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
          >
            <MailIcon />
            Enviar un correo
          </a>
        </div>

      </div>
    </section>
  )
}
