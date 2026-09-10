
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import code from '../assets/Images/code.jpg'
import { AboutSection } from './About'
import { ContactSection } from './Contact'
import { ProjectsSection } from './Projects'
import { socialLinkData } from '../data/socialLinkData'
import { featuredProject } from '../data/projectData'
import WhatIDo from '../components/WhatIDo'



export default function Home() {
  const { hash, state, key } = useLocation()
  const githubLink = socialLinkData.find((link) => link.id === 'github')

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
        <img src={code} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-dark/70 to-dark/90" aria-hidden="true" />
        <div className='relative z-10 text-center text-white max-w-4xl mx-auto px-4'>
          <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.18em] text-green-100 mb-3">Jonathan Mkpuma</p>
          <h1 id="home-heading" data-section-heading tabIndex="-1" className="section-heading-focus text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 tracking-tight px-2 text-balance">Frontend Developer building accessible React experiences.</h1>
          <p className="text-base sm:text-lg md:text-xl text-green-100 max-w-3xl mx-auto mb-7 sm:mb-9 px-2 leading-relaxed">I create responsive, performance-minded interfaces and connect them to REST APIs. ShopSphare demonstrates my ability to deliver a tested full-stack commerce project from storefront to deployment.</p>
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3">
            <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer" className="min-h-11 inline-flex items-center justify-center bg-backdrop text-primary font-semibold px-6 py-3 rounded-lg hover:bg-white hover:shadow-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">View ShopSphare</a>
            {githubLink && (
            <a
              href={githubLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-11 inline-flex items-center justify-center border border-green-100 text-green-100 font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              View GitHub
            </a>
            )}
            <a href="#contact" className="min-h-11 inline-flex items-center justify-center border border-green-100 text-green-100 font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Contact me</a>
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
