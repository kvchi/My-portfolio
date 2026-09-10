
import { featuresData } from '../data/featuresData'
import Reveal from '../components/Reveal'

export default function Services() {
  return (
    <main className="bg-backdrop min-h-screen">
    <section className='relative bg-backdrop flex items-center justify-center py-12 sm:py-16 md:py-20'>
    <Reveal className='relative z-0 text-center text-primary container mx-auto px-4 sm:px-6'>
    <h1 className='text-lg sm:text-xl md:text-2xl font-bold mb-4 bg-primary text-green-200 inline-block p-2 rounded-sm'>CAPABILITIES.</h1>
    <p className='text-base sm:text-lg md:text-xl text-center text-balance leading-relaxed max-w-3xl mx-auto'>My primary focus is frontend development: building responsive React interfaces, connecting them to REST APIs, and supporting dependable delivery with accessibility, testing, and performance work.</p>
    </Reveal>
    </section>
    <section className="container mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 py-8 md:py-12">
     {featuresData.map((el, index) => ( <Reveal as="aside" delay={index * 70} key={el.id} className="bg-backdrop p-4 sm:p-5 md:p-6 rounded-lg flex flex-col gap-3 md:gap-4 items-center text-center border-2 border-primary/10">
             <span className="text-3xl md:text-5xl text-primary" aria-hidden="true">
               {el.icon}
             </span>
             <h2 className="text-lg md:text-xl font-semibold text-dark/70">
               {el.title}
             </h2>
             <p className="text-sm md:text-base text-dark/50">
               {el.description}
             </p>
             </Reveal>
           ))}

   </section>
 </main>
  )
}
