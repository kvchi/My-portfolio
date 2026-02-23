
import { projectData } from '../data/projectData'



export default function Projects() {
  return (
    <main className="bg-backdrop z-0 min-h-screen">
    <section id="projects" className='relative bg-backdrop flex items-center py-12 sm:py-16 md:py-20 scroll-mt-24'>
    <div className='relative z-0 text-center text-primary w-full container mx-auto px-4 sm:px-6'>
    <h1 className='text-lg sm:text-xl md:text-2xl font-bold mb-4 bg-primary text-green-200 inline-block p-2 rounded-sm'>PROJECTS.</h1>
    <p className='text-base sm:text-lg md:text-xl text-center text-balance leading-relaxed mx-2 sm:mx-4 md:mx-6'>  Welcome to my Projects section! Here, you&apos;ll find a curated selection of my recent work, showcasing a diverse range of web development projects. Each project highlights my skills in front-end development, user experience design, and problem-solving. Click on any project title to explore the live version and see the code in action.</p>
    <section className="container mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 py-8 md:py-12">
        {
            projectData.map((el,i) =>( 
              <aside data-aos={i % 2 === 0 ? "zoom-in-left" : "zoom-out-right"} 
              data-aos-delay={i * 150} data-aos-duration="500" key={el.id} className="p-4 sm:p-5 md:p-6 rounded-lg flex flex-col gap-3 md:gap-4 items-center text-center hover:-translate-y-2 sm:hover:-translate-y-3 transition-transform border border-primary/5 hover:border-primary/20 bg-white/50">
              <img src={el.image} alt={el.title} className="w-full aspect-video object-cover rounded-md mb-4" />  
              <a
                  href={el.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary border-b-2 border-primary rounded-sm text-lg sm:text-xl md:text-2xl text-center font-medium cursor-pointer hover:opacity-80 transition-opacity break-words"
                >
                  {el.title}
                </a>
              
            </aside>

            ))
        }

    </section>
    </div>
    </section>
    </main>
  )
}
