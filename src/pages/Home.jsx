
import code from '../assets/Images/code.jpg'
import About from './About'
import Contact from './Contact'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5'
import Services from './Services'
import Projects from './Projects'



export default function Home() {
  return (
    <main className="bg-backdrop pt-14 sm:pt-16 md:pt-0">
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center py-16 sm:py-24 md:py-32 overflow-hidden">
        <img src={code} alt="code" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-dark/70 to-dark/90" aria-hidden="true" />
        <div className='relative z-10 text-center text-white max-w-4xl mx-auto px-4'>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 tracking-tight px-2">Welcome to My Portfolio</h1>
          <p className="text-base sm:text-lg md:text-xl text-green-100 mb-6 sm:mb-8 px-2">I build modern web apps with React.js and robust backends.</p>
          <a href="#projects" className="inline-block bg-backdrop text-primary font-semibold px-6 py-3 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 mb-10">View my work</a>
          <div className="flex gap-4 text-lg items-center justify-center md:text-2xl text-green-200 opacity-90">
          <a
            href="https://www.facebook.com/chedres"
            target="_blank"
            rel="noopener noreferrer"
            className="leading-loose hover:scale-110 transition-transform"
            aria-label="Facebook"
          >
            <IoLogoFacebook />
          </a>
          <a
            href="https://www.twitter.com/chedres"
            target="_blank"
            rel="noopener noreferrer"
            className="leading-loose hover:scale-110 transition-transform"
            aria-label="Twitter"
          >
            <IoLogoTwitter />
          </a>
          <a
            href="https://www.instagram.com/chedres"
            target="_blank"
            rel="noopener noreferrer"
            className="leading-loose hover:scale-110 transition-transform"
            aria-label="Instagram"
          >
            <IoLogoInstagram />
          </a>
          <a
            href="https://www.youtube.com/chedres"
            target="_blank"
            rel="noopener noreferrer"
            className="leading-loose hover:scale-110 transition-transform"
            aria-label="YouTube"
          >
            <IoLogoYoutube />
          </a>
        </div>
        </div>        
      </section>
      <section className="py-12 md:py-16 lg:py-20">
        <About />
      </section>
      <section className="py-12 md:py-16 lg:py-20">
        <Services />
      </section>
      <section className="py-12 md:py-16 lg:py-20">
        <Projects />
      </section>
      <section className="py-12 md:py-16 lg:py-20">
        <Contact />
      </section>
  
      </main>
  )
}
