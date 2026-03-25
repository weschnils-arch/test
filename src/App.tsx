import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import LoadingScreen from './components/LoadingScreen'
import Header from './components/Header'
import PageContent from './components/PageContent'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [started, setStarted] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const smoothPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const rafId = useRef<number>(0)

  // Lenis smooth scroll
  useEffect(() => {
    if (!started) return
    const lenis = new Lenis({
      duration: 1.65,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    return () => lenis.destroy()
  }, [started])

  // Cursor tracking + mask update in single RAF loop
  const updateCursor = useCallback(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    smoothPos.current.x = lerp(smoothPos.current.x, mousePos.current.x, 0.08)
    smoothPos.current.y = lerp(smoothPos.current.y, mousePos.current.y, 0.08)

    const root = document.documentElement
    // Viewport coords for cursor ring
    root.style.setProperty('--cursor-x', `${smoothPos.current.x}px`)
    root.style.setProperty('--cursor-y', `${smoothPos.current.y}px`)
    // Page coords for mask (viewport + scroll offset)
    root.style.setProperty('--mask-x', `${smoothPos.current.x}px`)
    root.style.setProperty('--mask-y', `${smoothPos.current.y + window.scrollY}px`)

    rafId.current = requestAnimationFrame(updateCursor)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX
      mousePos.current.y = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)
    rafId.current = requestAnimationFrame(updateCursor)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId.current)
    }
  }, [updateCursor])

  // GSAP animations after start
  useEffect(() => {
    if (!started) return

    // Hero char-by-char reveal
    const heroChars = document.querySelectorAll('.layer-dark .hero-char')
    gsap.fromTo(
      heroChars,
      { y: '105%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 1.4,
        stagger: 0.02,
        ease: 'power3.out',
        delay: 0.3,
      }
    )

    // Red layer chars (immediate, no animation needed — they mirror)
    const redChars = document.querySelectorAll('.layer-red .hero-char')
    gsap.fromTo(
      redChars,
      { y: '105%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 1.4,
        stagger: 0.02,
        ease: 'power3.out',
        delay: 0.3,
      }
    )

    // Hero label
    gsap.fromTo(
      '.hero-label-inner',
      { y: '105%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.1 }
    )

    // Scroll reveals — only animate dark layer, red mirrors via position
    const revealElements = document.querySelectorAll('.layer-dark .scroll-reveal')
    revealElements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    // Also animate red layer reveals in sync
    const redReveals = document.querySelectorAll('.layer-red .scroll-reveal')
    redReveals.forEach((el, i) => {
      const darkEl = revealElements[i]
      if (!darkEl) return
      gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: darkEl,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    // Client name char reveals
    const scrollSplits = document.querySelectorAll('.layer-dark .scroll-split')
    scrollSplits.forEach((el) => {
      const chars = el.querySelectorAll('.char')
      gsap.fromTo(
        chars,
        { y: '105%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 1.2,
          stagger: 0.015,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    // Mirror for red layer
    const redSplits = document.querySelectorAll('.layer-red .scroll-split')
    redSplits.forEach((el, i) => {
      const darkEl = scrollSplits[i]
      if (!darkEl) return
      const chars = el.querySelectorAll('.char')
      gsap.fromTo(
        chars,
        { y: '105%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 1.2,
          stagger: 0.015,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: darkEl,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, [started])

  return (
    <>
      <LoadingScreen
        onComplete={() => setLoaded(true)}
        onStart={() => setStarted(true)}
        loaded={loaded}
      />

      {started && (
        <>
          <Header />
          <div className="page-wrapper" ref={wrapperRef}>
            <div className="layer-dark">
              <PageContent variant="dark" />
            </div>
            <div className="layer-red">
              <PageContent variant="red" />
            </div>
          </div>
          <Footer />
          <div className="custom-cursor" />
        </>
      )}
    </>
  )
}
