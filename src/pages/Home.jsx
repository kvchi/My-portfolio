import React from 'react'
import code from '../assets/Images/code.jpg'
import About from './About'
import Contact from './Contact'
import { Link } from 'react-router-dom'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5'
import Services from './Services'
import Projects from './Projects'



export default function Home() {
  return (
    <main className='bg-backdrop pt-10 md:pt-0'>
      <section className='relative bg-slate-500 flex items-center justify-center py-40'>
        <img src={code} alt="code" className="absolute left-0 top-0 w-full h-full object-cover opacity-50" />
        <div className='relative z-10 text-center text-green-200'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>Welcome to My Portfolio</h1>
          <p className='text-xl md:text-2xl p-2'>I am a Web Developer skilled in React.js and Backend Development</p>
          <div className="flex gap-4 text-lg items-center justify-center md:text-2xl text-green-200 opacity-90%">
          <Link
            href={"https://www.facebook.com/chedres"}
            target="_blank"
            rel="noopener noreferrer"
            className="leading-loose"
          >
            <IoLogoFacebook />
          </Link>
          <Link
            href={"https://www.twitter.com/chedres"}
            target="_blank"
            rel="noopener noreferrer"
            className="leading-loose"
          >
            <IoLogoTwitter />
          </Link>
          <Link
            href={"https://www.instagram.com/chedres"}
            target="_blank"
            rel="noopener noreferrer"
            className="leading-loose"
          >
            <IoLogoInstagram />
          </Link>
          <Link
            href={"https://www.youtube.com/chedres"}
            target="_blank"
            rel="noopener noreferrer"
            className="leading-loose"
          >
            <IoLogoYoutube />
          </Link>
        </div>
        </div>        
      </section>
      <section>
      <About />
      </section>
      <div className='mt-[-40%] md:mt-[-10%] lg:mt-[-5%]'>
      <Services />
      </div>
      <section className='mt-[-40px] md:mt-[20px] lg:mt-[10px]'>
      <Projects />
      </section>
      <section className='mt-[-120px] md:mt-[20px] lg:mt-[10px]'>
      <Contact />
      </section>
  
      </main>
  )
}
