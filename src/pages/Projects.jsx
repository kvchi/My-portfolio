import { featuredProject, projectData } from '../data/projectData'
import { IoArrowForward } from 'react-icons/io5'
import Reveal from '../components/Reveal'

const actionClass = "min-h-11 inline-flex items-center justify-center rounded-md px-5 py-3 font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

function renderProjectActions(title, liveUrl, sourceUrl, compact = false) {
  return (
    <div className={`flex flex-col sm:flex-row flex-wrap gap-3 ${compact ? "mt-auto pt-4" : "mt-6"}`}>
      <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={`${actionClass} motion-action project-action gap-2 bg-primary text-green-100 hover:bg-dark focus-visible:outline-primary`}>
        Live demo<span className="sr-only"> for {title} (opens in a new tab)</span><IoArrowForward className="action-arrow" aria-hidden="true" />
      </a>
      <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className={`${actionClass} motion-action project-action gap-2 border border-primary text-primary hover:bg-primary/10 focus-visible:outline-primary`}>
        Source code<span className="sr-only"> for {title} (opens in a new tab)</span><IoArrowForward className="action-arrow" aria-hidden="true" />
      </a>
    </div>
  );
}

function renderProjects(Heading) {
  const ProjectHeading = Heading === "h1" ? "h2" : "h3";
  const DetailHeading = Heading === "h1" ? "h3" : "h4";

  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative bg-backdrop py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal className="max-w-3xl text-center mx-auto text-primary">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary mb-2">Project proof</p>
          <Heading id="projects-heading" data-page-heading={Heading === "h1" ? true : undefined} data-section-heading tabIndex="-1" className="section-heading-focus text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Featured case study and selected projects</Heading>
          <p className="text-base sm:text-lg leading-relaxed">A closer look at my strongest end-to-end project, followed by concise examples of frontend work. Learning exercises and interface recreations are labelled clearly.</p>
        </Reveal>

        <article className="mt-10 md:mt-14 overflow-hidden rounded-2xl border border-primary/15 bg-white/60 shadow-lg shadow-primary/10">
          <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <Reveal variant="fade-right" className="relative min-h-64 lg:min-h-full bg-primary/10 overflow-hidden">
              <img src={featuredProject.image} width={featuredProject.imageWidth} height={featuredProject.imageHeight} alt={featuredProject.imageAlt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
              <span className="absolute left-4 top-4 rounded-full bg-dark/90 px-3 py-2 text-sm font-bold text-green-100">Featured case study</span>
            </Reveal>
            <Reveal variant="fade-left" delay={70} className="p-5 sm:p-8 lg:p-10 text-primary">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">{featuredProject.status}</p>
              <ProjectHeading className="mt-2 text-2xl sm:text-3xl font-bold text-balance">{featuredProject.title}</ProjectHeading>
              <p className="mt-4 text-base sm:text-lg leading-relaxed">{featuredProject.summary}</p>
              <p className="mt-4 leading-relaxed"><strong>My role:</strong> {featuredProject.role}</p>
              {renderProjectActions(featuredProject.title, featuredProject.liveUrl, featuredProject.sourceUrl)}
            </Reveal>
          </div>
          <Reveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-primary/15 border-t border-primary/15">
            {featuredProject.sections.map((section) => (
              <section key={section.title} className="bg-backdrop p-5 sm:p-6 text-primary">
                <DetailHeading className="font-bold text-lg mb-3">{section.title}</DetailHeading>
                {section.text ? <p className="leading-relaxed">{section.text}</p> : (
                  <ul className="space-y-2 text-sm sm:text-base">
                    {section.items.map((item) => <li key={item} className="flex gap-2"><span aria-hidden="true" className="text-primary/60">•</span><span>{item}</span></li>)}
                  </ul>
                )}
              </section>
            ))}
          </Reveal>
        </article>

        <section aria-labelledby="selected-projects-heading" className="mt-14 md:mt-20">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary mb-2">Selected projects</p>
            <ProjectHeading id="selected-projects-heading" className="text-2xl sm:text-3xl font-bold text-primary">Additional interface work</ProjectHeading>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-8">
            {projectData.map((project, index) => (
              <Reveal as="article" key={project.id} delay={index * 70} className="project-card rounded-xl overflow-hidden border border-primary/15 bg-white/50 flex flex-col">
                <div className="overflow-hidden">
                  <img src={project.image} width={project.imageWidth} height={project.imageHeight} alt={project.imageAlt} loading="lazy" decoding="async" className="project-image w-full aspect-video object-cover" />
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-1 text-left text-primary">
                  <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wide">
                    <span className="rounded-full bg-primary/10 px-3 py-1.5">{project.type}</span>
                    <span className="rounded-full border border-primary/20 px-3 py-1.5">{project.status}</span>
                  </div>
                  <DetailHeading className="text-xl sm:text-2xl font-bold mt-4">{project.title}</DetailHeading>
                  <p className="mt-3 leading-relaxed">{project.purpose}</p>
                  <p className="mt-3 text-sm leading-relaxed"><strong>My role:</strong> {project.role}</p>
                  <ul aria-label={`${project.title} technologies`} className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((technology) => <li key={technology} className="text-sm rounded-md bg-primary/10 px-2.5 py-1.5">{technology}</li>)}
                  </ul>
                  {renderProjectActions(project.title, project.liveUrl, project.sourceUrl, true)}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

export function ProjectsSection() {
  return renderProjects("h2");
}

export default function Projects() {
  return <main id="main-content" className="bg-backdrop z-0 min-h-screen">{renderProjects("h1")}</main>;
}
