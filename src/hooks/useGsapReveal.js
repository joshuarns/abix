import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsapReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const {
      y = 40,
      opacity = 0,
      duration = 0.7,
      ease = 'power3.out',
      delay = 0,
      stagger = 0,
      selector = null,
    } = options

    const targets = selector ? el.querySelectorAll(selector) : [el]

    gsap.fromTo(
      targets,
      { y, opacity },
      {
        y: 0,
        opacity: 1,
        duration,
        ease,
        delay,
        stagger,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      }
    )

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return ref
}
