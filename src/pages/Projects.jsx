
import { projectData } from '../data/projectData'



export default function Projects() {
  return (
    <main className="bg-backdrop">
    <section className='relative bg-backdrop flex items-center py-20 '>
    <div className='relative z-10 text-center text-primary '>
    <h1 className='text-xl md:text-2xl font-bold mb-4 bg-primary text-green-200 inline-block p-2 rounded-sm'>PROJECTS.</h1>
    <p className='text-xl md:text-2xl text-center text-balance leading-relaxed mx-4 md:mx-6'> Welcome to my Projects section! Here, you&apos;ll find a curated selection of my recent work, showcasing a diverse range of web development projects. Each project highlights my skills in front-end development, user experience design, and problem-solving. Click on any project title to explore the live version and see the code in action.</p>
    <section className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 py-10">
        {
            projectData.map((el,i) =>( 
              <aside data-aos={i % 2 === 0 ? "zoom-in-left" : "zoom-out-right"} 
              data-aos-delay={i *200} data-aos-duration="600" key={el.id} className=" p-4 md:p-6 rounded-md flex flex-col gap-4 md:gap-6 items-center text-center hover:-translate-y-4">
              <img src={el.image} alt='' className="  left-o top-0 mb-4 rounded-md w-full h-full object-cover" />  
              <a
                  href={el.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary border-b-2 border-primary rounded-sm text-xl md:text-3xl text-center font-medium cursor-pointer"
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
