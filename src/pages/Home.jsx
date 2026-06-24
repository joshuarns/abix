import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FiberSection from '@/components/FiberSection'
import PlansSection from '@/components/PlansSection'
import DiferenciadoresSection from '@/components/DiferenciadoresSection'
import MeshSection from '@/components/MeshSection'
import HogarPlusSection from '@/components/HogarPlusSection'
import ExperienciaDigitalSection from '@/components/ExperienciaDigitalSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import LteSection from '@/components/LteSection'
import B2BSection from '@/components/B2BSection'
import ContactForm from '@/components/ContactForm'
import ClosingSection from '@/components/ClosingSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FiberSection />
      <PlansSection />
      <DiferenciadoresSection />
      <MeshSection />
      <HogarPlusSection />
      <ExperienciaDigitalSection />
      <TestimonialsSection />
      <LteSection />
      <B2BSection />
      <ContactForm />
      <ClosingSection />
      <Footer />
    </>
  )
}
