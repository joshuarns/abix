import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function RevealSection({ children, className, style, delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    gsap.fromTo(
      el,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        delay,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      }
    )
  }, [])

  return (
    <div ref={ref} className={className} style={{ ...style, willChange: 'transform, opacity' }}>
      {children}
    </div>
  )
}
