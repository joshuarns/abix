import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FiberSection from '@/components/FiberSection'
import PlansSection from '@/components/PlansSection'
import DiferenciadoresSection from '@/components/DiferenciadoresSection'
import MeshSection from '@/components/MeshSection'
import HogarPlusSection from '@/components/HogarPlusSection'
import FamiliaSection from '@/components/FamiliaSection'
import ExperienciaDigitalSection from '@/components/ExperienciaDigitalSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import LteSection from '@/components/LteSection'
import B2BSection from '@/components/B2BSection'
import ContactForm from '@/components/ContactForm'
import ClosingSection from '@/components/ClosingSection'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

function usePageAnimations() {
  useEffect(() => {
    // Animate each section as it enters the viewport
    const sections = document.querySelectorAll('section')
    sections.forEach((section) => {
      // Header elements: h2, h3, p direct children of section or its first div
      const headings = section.querySelectorAll('h2, h3')
      const cards = section.querySelectorAll(
        '.rounded-2xl, .rounded-xl, [class*="Card"], li'
      )

      if (headings.length) {
        gsap.fromTo(
          headings,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.1,
            scrollTrigger: { trigger: section, start: 'top 88%', once: true },
          }
        )
      }

      if (cards.length) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.65, ease: 'power3.out', stagger: 0.08,
            scrollTrigger: { trigger: section, start: 'top 80%', once: true },
          }
        )
      }
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])
}

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/16012587695?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20ABIX"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110"
      style={{ bottom: '24px', right: '24px', width: '56px', height: '56px', backgroundColor: '#25D366' }}
      aria-label="Escríbenos por WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="white" width="30" height="30">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.571a.75.75 0 0 0 .93.906l5.889-1.545A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.372l-.36-.214-3.733.979.997-3.645-.234-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
      </svg>
    </a>
  )
}

export default function Home() {
  usePageAnimations()

  return (
    <>
      <Navbar />
      <Hero />
      <FiberSection />
      <PlansSection />
      <DiferenciadoresSection />
      <MeshSection />
      <HogarPlusSection />
      <FamiliaSection />
      <ExperienciaDigitalSection />
      <TestimonialsSection />
      <LteSection />
      <B2BSection />
      <ContactForm />
      <ClosingSection />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
