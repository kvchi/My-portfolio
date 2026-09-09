
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import code from '../assets/Images/code.jpg'
import { AboutSection } from './About'
import { ContactSection } from './Contact'
import { ProjectsSection } from './Projects'
import { socialLinkData } from '../data/socialLinkData'
import WhatIDo from '../components/WhatIDo'



export default function Home() {
  const { hash, state, key } = useLocation()

  useEffect(() => {
    const sectionId = hash.slice(1)
    const validSections = new Set(['home', 'about', 'what-i-do', 'projects', 'contact'])

    if (!validSections.has(sectionId)) return undefined

    const animationFrame = window.requestAnimationFrame(() => {
      const target = document.getElementById(sectionId)
      if (!target) return

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const scrollImmediately = reduceMotion || state?.immediateSectionScroll || key === 'default'

      if (scrollImmediately) {
        const previousScrollBehavior = document.documentElement.style.scrollBehavior
        document.documentElement.style.scrollBehavior = 'auto'
        target.scrollIntoView({ block: 'start' })
        document.documentElement.style.scrollBehavior = previousScrollBehavior
      } else {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      target.querySelector('[data-section-heading]')?.focus({ preventScroll: true })
    })

    return () => window.cancelAnimationFrame(animationFrame)
  }, [hash, state, key])

  return (
    <main className="home-page bg-backdrop">
      <section id="home" aria-labelledby="home-heading" className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center py-16 sm:py-24 md:py-32 overflow-hidden">
        <img src={code} alt="code" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-dark/70 to-dark/90" aria-hidden="true" />
        <div className='relative z-10 text-center text-white max-w-4xl mx-auto px-4'>
          <h1 id="home-heading" data-section-heading tabIndex="-1" className="section-heading-focus text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 tracking-tight px-2">Welcome to My Portfolio</h1>
          <p className="text-base sm:text-lg md:text-xl text-green-100 mb-6 sm:mb-8 px-2">Frontend Developer building accessible, high-performance React experiences—with demonstrated full-stack project delivery.</p>
          <a href="#projects" className="inline-block bg-backdrop text-primary font-semibold px-6 py-3 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 mb-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">View my work</a>
          <div className="flex gap-4 text-lg items-center justify-center md:text-2xl text-green-200 opacity-90">
          {socialLinkData.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.newTab ? "_blank" : undefined}
              rel={link.newTab ? "noopener noreferrer" : undefined}
              className="w-11 h-11 flex items-center justify-center rounded-sm hover:scale-110 transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-100"
              aria-label={link.ariaLabel}
            >
              {link.icon}
            </a>
          ))}
        </div>
        </div>        
      </section>
      <AboutSection />
      <WhatIDo />
      <ProjectsSection />
      <ContactSection />
  
      </main>
  )
}
