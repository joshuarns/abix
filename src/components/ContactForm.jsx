import { useState } from 'react'
import { ChevronDown, Wifi, User, Phone, MapPin, Building2, Send } from 'lucide-react'

const services = [
  'Internet ABIX Fiber',
  'ABIX Hogar Plus',
  'ABIX TV',
  'ABIX Móvil',
  'WiFi Total (Mesh)',
  'ABIX LTE',
  'ABIX To Go',
]

const cities = ['Cancún', 'Playa del Carmen', 'Tulum', 'Puerto Morelos', 'Bacalar', 'Chetumal']

const colonias = {
  'Cancún': ['Cancún Centro', 'Puerto Cancún', 'Zona Hotelera', 'El Cedral', 'Supermanzana 21', 'Las Américas', 'Región 94'],
  'Playa del Carmen': ['Centro', 'Playacar', 'Colosio', 'Ejidal', 'La Guadalupana'],
  'Tulum': ['Tulum Centro', 'Aldea Zamá', 'La Veleta', 'Región 15'],
  'Puerto Morelos': ['Centro', 'Villas Morelos', 'Leona Vicario'],
  'Bacalar': ['Centro', 'Los Lagos', 'Villa del Lago'],
  'Chetumal': ['Centro', 'Las Palmas', 'David Gustavo'],
}

export default function ContactForm() {
  const [form, setForm] = useState({ service: '', name: '', phone: '', city: '', colonia: '' })
  const [submitted, setSubmitted] = useState(false)

  const set = (field) => (e) => {
    const val = e.target.value
    setForm((prev) => ({
      ...prev,
      [field]: val,
      ...(field === 'city' ? { colonia: '' } : {}),
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const isValid = form.service && form.name.trim() && form.phone.trim() && form.city && form.colonia

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

      <div className="relative mx-auto" style={{ maxWidth: '620px' }}>

        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)' }}
          >
            Contratar ahora
          </span>
          <h2
            className="text-white font-extrabold"
            style={{ fontFamily: "'Montserrat Alternates', sans-serif", fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            ¿Quieres empezar a disfrutar <span style={{ color: '#2bbdbd' }}>de internet</span>?
          </h2>
          <p className="mt-3" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem' }}>
            Déjanos tus datos y un asesor te contacta en minutos.
          </p>
        </div>

        {/* Card */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl p-8 flex flex-col gap-5"
            style={{
              backgroundColor: 'rgba(255,255,255,0.07)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.25)',
            }}
          >

            {/* Servicio */}
            <Field icon={<Wifi className="w-4 h-4" />} label="¿Qué servicio te interesa?">
              <SelectInput value={form.service} onChange={set('service')} placeholder="Selecciona un servicio">
                {services.map((s) => <option key={s} value={s}>{s}</option>)}
              </SelectInput>
            </Field>

            {/* Nombre */}
            <Field icon={<User className="w-4 h-4" />} label="Tu nombre">
              <TextInput
                type="text"
                placeholder="¿Cómo te llamas?"
                value={form.name}
                onChange={set('name')}
              />
            </Field>

            {/* Teléfono */}
            <Field icon={<Phone className="w-4 h-4" />} label="WhatsApp">
              <TextInput
                type="tel"
                placeholder="Tu número de WhatsApp"
                value={form.phone}
                onChange={set('phone')}
              />
            </Field>

            {/* Ciudad */}
            <Field icon={<MapPin className="w-4 h-4" />} label="Ciudad">
              <SelectInput value={form.city} onChange={set('city')} placeholder="¿En qué ciudad vives?">
                {cities.map((c) => <option key={c} value={c}>{c}</option>)}
              </SelectInput>
            </Field>

            {/* Colonia */}
            <Field icon={<Building2 className="w-4 h-4" />} label="Colonia">
              <SelectInput
                value={form.colonia}
                onChange={set('colonia')}
                placeholder="¿De qué colonia eres?"
                disabled={!form.city}
              >
                {(colonias[form.city] || []).map((c) => <option key={c} value={c}>{c}</option>)}
              </SelectInput>
            </Field>

            {/* Submit */}
            <button
              type="submit"
              disabled={!isValid}
              className="flex items-center justify-center gap-2 font-bold py-4 rounded-2xl transition-all mt-2"
              style={{
                backgroundColor: isValid ? '#4caf50' : 'rgba(255,255,255,0.15)',
                color: isValid ? '#ffffff' : 'rgba(255,255,255,0.4)',
                fontSize: '1.05rem',
                boxShadow: isValid ? '0 8px 24px rgba(76,175,80,0.45)' : 'none',
                transform: isValid ? 'none' : 'none',
                cursor: isValid ? 'pointer' : 'not-allowed',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => { if (isValid) e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none' }}
            >
              <Send className="w-4 h-4" />
              Quiero ABIX
            </button>

            <p className="text-center" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
              Tu información es confidencial. No compartimos tus datos.
            </p>

          </form>
        ) : (
          /* Success state */
          <div
            className="rounded-3xl p-12 flex flex-col items-center gap-4 text-center"
            style={{
              backgroundColor: 'rgba(255,255,255,0.07)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
              style={{ backgroundColor: '#4caf50' }}
            >
              ✓
            </div>
            <h3 className="text-white font-extrabold" style={{ fontSize: '1.5rem', fontFamily: "'Montserrat Alternates', sans-serif" }}>
              ¡Listo, {form.name.split(' ')[0]}!
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.6 }}>
              Un asesor de ABIX te contactará vía WhatsApp en los próximos minutos.
            </p>
          </div>
        )}

      </div>
    </section>
  )
}

function Field({ icon, label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-2 text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.6)' }}>
        <span style={{ color: '#2bbdbd' }}>{icon}</span>
        {label}
      </label>
      {children}
    </div>
  )
}

function TextInput({ ...props }) {
  return (
    <input
      {...props}
      className="w-full rounded-xl px-4 py-3 font-medium outline-none transition-all"
      style={{
        backgroundColor: 'rgba(255,255,255,0.1)',
        border: '1px solid rgba(255,255,255,0.15)',
        color: '#ffffff',
        fontSize: '0.95rem',
      }}
      onFocus={(e) => {
        e.target.style.backgroundColor = 'rgba(255,255,255,0.15)'
        e.target.style.borderColor = '#2bbdbd'
        e.target.style.boxShadow = '0 0 0 3px rgba(43,189,189,0.2)'
      }}
      onBlur={(e) => {
        e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'
        e.target.style.borderColor = 'rgba(255,255,255,0.15)'
        e.target.style.boxShadow = 'none'
      }}
    />
  )
}

function SelectInput({ children, placeholder, value, onChange, disabled }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full rounded-xl px-4 py-3 font-medium outline-none appearance-none transition-all"
        style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.15)',
          color: value ? '#ffffff' : 'rgba(255,255,255,0.45)',
          fontSize: '0.95rem',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.5 : 1,
        }}
        onFocus={(e) => {
          e.target.style.backgroundColor = 'rgba(255,255,255,0.15)'
          e.target.style.borderColor = '#2bbdbd'
          e.target.style.boxShadow = '0 0 0 3px rgba(43,189,189,0.2)'
        }}
        onBlur={(e) => {
          e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'
          e.target.style.borderColor = 'rgba(255,255,255,0.15)'
          e.target.style.boxShadow = 'none'
        }}
      >
        <option value="" disabled style={{ backgroundColor: '#146071' }}>{placeholder}</option>
        {children}
      </select>
      <ChevronDown
        className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
        style={{ color: '#2bbdbd' }}
      />
    </div>
  )
}
