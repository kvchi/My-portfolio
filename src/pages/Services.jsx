
import { featuresData } from '../data/featuresData'

export default function Services() {
  return (
    <main className="bg-backdrop min-h-screen">
    <section className='relative bg-backdrop flex items-center justify-center py-12 sm:py-16 md:py-20'>
    <div className='relative z-0 text-center text-primary container mx-auto px-4 sm:px-6'>
    <h1 className='text-lg sm:text-xl md:text-2xl font-bold mb-4 bg-primary text-green-200 inline-block p-2 rounded-sm'>SERVICES.</h1>
    <p className='text-base sm:text-lg md:text-xl text-center text-balance leading-relaxed max-w-3xl mx-auto'>Welcome to my Services page! I offer a comprehensive suite of web development services designed to bring your vision to life. From custom website design and development to responsive web applications, I provide solutions that are tailored to meet your specific needs.</p>
    </div>
    </section>
    <section className="container mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 py-8 md:py-12">
     {featuresData.map((el,i) => ( <aside data-aos={i % 2 === 0 ? "zoom-in-left" : "zoom-out-right"} data-aos-delay={(i+1)*200} data-aos-duration="600" key={el.id} className="bg-backdrop p-4 sm:p-5 md:p-6 rounded-lg flex flex-col gap-3 md:gap-4 items-center text-center hover:-translate-y-2 sm:hover:-translate-y-3 border-2 border-primary/10 hover:border-primary/30 transition-transform">
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
