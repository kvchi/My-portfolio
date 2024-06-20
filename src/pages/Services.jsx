import React from 'react'
import { featuresData } from '../data/featuresData'

export default function Services() {
  return (
    <main className="bg-backdrop">
    <section className='relative bg-backdrop flex items-center justify-center py-10 pt-52 md:pt-6'>
    <div className='relative z-10 text-center text-primary '>
    <h1 className='text-xl md:text-2xl font-bold mb-4 bg-primary text-green-200 inline-block p-2 rounded-sm'>SERVICES.</h1>
    <p className='text-xl md:text-2xl text-center text-balance leading-relaxed'>Welcome to my Services page! I offer a comprehensive suite of web development services designed to bring your vision to life. From custom website design and development to responsive web applications, I provide solutions that are tailored to meet your specific needs.</p>
    </div>
    </section>
    <section className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 py-10">
     {featuresData.map((el,i) => ( <aside data-aos={i % 2 === 0 ? "zoom-in-left" : "zoom-out-right"} data-aos-delay={(i+1)*900} data-aos-duration="1000" key={el.id} className="bg-backdrop p-4 md:p-6 rounded-md flex flex-col gap-4 md:gap-6 items-center text-center hover:-translate-y-4 border-2 border-primary/5 hover:border-primary/30">
             <span className="text-3xl md:text-5xl text-primary">
               {el.icon}
             </span>
             <h5 className="text-lg md:text-xl font-semibold text-dark/70">
               {el.title}
             </h5>
             <p className="text-sm md:text-base text-dark/50">
               {el.description}
             </p>
             </aside>
           ))}

   </section>
 </main>
  )
}
