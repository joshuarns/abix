import logoAbix from '@/assets/logo-abix.png'
import { MapPin, Phone, Mail } from 'lucide-react'

const links = {
  Residencial: [
    { label: 'ABIX Fiber', href: '#' },
    { label: 'ABIX Hogar Plus', href: '#' },
    { label: 'WiFi Total (Mesh)', href: '#' },
    { label: 'ABIX TV', href: '#' },
    { label: 'ABIX Móvil', href: '#' },
  ],
  Empresas: [
    { label: 'Empresas y Gobierno', href: '#' },
    { label: 'Negocios y Comercios', href: '#' },
    { label: 'Hoteles y Hospitalidad', href: '#' },
    { label: 'ABIX LTE', href: '#' },
    { label: 'ABIX To Go', href: '#' },
  ],
  ABIX: [
    { label: 'Quiénes somos', href: '#' },
    { label: 'Cobertura', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Trabaja con nosotros', href: '#' },
    { label: 'Aviso de privacidad', href: '#' },
  ],
  Soporte: [
    { label: 'Centro de ayuda', href: '#' },
    { label: 'Reportar falla', href: '#' },
    { label: 'Estado de la red', href: '#' },
    { label: 'Pago en línea', href: '#' },
    { label: 'Contacto', href: '#' },
  ],
}

const socials = [
  { key: 'instagram', href: '#', label: 'Instagram' },
  { key: 'facebook', href: '#', label: 'Facebook' },
  { key: 'youtube', href: '#', label: 'YouTube' },
]

const badges = [
  { label: 'Fibra 100% propia', icon: '🔗' },
  { label: 'Sin contratos', icon: '✓' },
  { label: 'Soporte 24/7', icon: '🕐' },
  { label: '+6,000 familias', icon: '❤' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0a1e26' }}>

      {/* Top trust bar */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div
          className="mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-3"
          style={{ maxWidth: '1340px' }}
        >
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-3">
              <span
                className="flex items-center justify-center rounded-full shrink-0 text-sm"
                style={{ width: '36px', height: '36px', backgroundColor: 'rgba(43,189,189,0.15)', color: '#2bbdbd' }}
              >
                {b.icon}
              </span>
              <span className="font-semibold text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer body */}
      <div
        className="mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        style={{ maxWidth: '1340px' }}
      >

        {/* Brand column — 2 cols */}
        <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col gap-6">
          <img src={logoAbix} alt="ABIX" style={{ height: '44px', width: 'auto', filter: 'brightness(0) invert(1)' }} />

          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: '280px' }}>
            Internet de fibra óptica 100% propio. Conectando hogares y empresas del Caribe Mexicano desde Cancún hasta Tulum.
          </p>

          {/* Contact info */}
          <ul className="flex flex-col gap-3">
            {[
              { icon: MapPin, text: 'Cancún, Quintana Roo, México' },
              { icon: Phone, text: '800 ABIX FIBER' },
              { icon: Mail, text: 'hola@abix.mx' },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2.5">
                <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: '#2bbdbd' }} />
                <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)' }}>{text}</span>
              </li>
            ))}
          </ul>

          {/* Social */}
          <div className="flex gap-3">
            {socials.map(({ key, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex items-center justify-center rounded-xl transition-all hover:scale-110"
                style={{
                  width: '38px', height: '38px',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.7)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2bbdbd'
                  e.currentTarget.style.borderColor = '#2bbdbd'
                  e.currentTarget.style.color = '#fff'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                }}
              >
                <SocialIcon name={key} />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(links).map(([section, items]) => (
          <div key={section} className="flex flex-col gap-4">
            <h4
              className="font-extrabold text-white text-sm tracking-wide"
              style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}
            >
              {section}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#2bbdbd'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* WhatsApp CTA flotante — dentro del footer */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div
          className="mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ maxWidth: '1340px' }}
        >
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} ABIX. Todos los derechos reservados.
          </p>

          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 font-bold text-white px-5 py-2.5 rounded-xl transition-all hover:opacity-90 hover:scale-105"
            style={{
              backgroundColor: '#25D366',
              fontSize: '0.9rem',
              boxShadow: '0 4px 16px rgba(37,211,102,0.35)',
            }}
          >
            <WhatsAppIcon />
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>

    </footer>
  )
}

function SocialIcon({ name }) {
  if (name === 'instagram') return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
  if (name === 'facebook') return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.571a.75.75 0 0 0 .93.906l5.889-1.545A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.372l-.36-.214-3.733.979.997-3.645-.234-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
    </svg>
  )
}
