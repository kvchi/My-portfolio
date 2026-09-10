import { contactLinkData } from '../data/contactLinkData'
import { socialLinkData } from '../data/socialLinkData'
import Reveal from '../components/Reveal'


function renderContact(Heading, Subheading) {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="contact-motion-bg bg-backdrop">
       <div className='relative bg-backdrop flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6'>
       <Reveal className='relative z-0 text-center text-primary container mx-auto'>
       <Heading id="contact-heading" data-section-heading tabIndex="-1" className='section-heading-focus text-lg sm:text-xl md:text-2xl font-bold mb-4 bg-primary text-green-200 inline-block p-2 rounded-sm'>CONTACT</Heading>
       <p className='text-base sm:text-lg md:text-xl text-center text-balance leading-relaxed max-w-3xl mx-auto'>Have a role, project, or collaboration in mind? Choose one of the verified contact options below. Email opens your email application so you can send a message directly.</p>
       </Reveal>
       </div>
       <div className="container mx-auto px-4 sm:px-6 flex justify-center py-8 md:py-12 text-balance">
        {contactLinkData.map((el, index) => ( <Reveal as="aside" variant="scale" delay={index * 70} key={el.id} className="contact-card bg-backdrop p-4 sm:p-5 md:p-6 rounded-lg flex flex-col gap-3 md:gap-4 items-center text-center border-2 border-primary/10">
                <span className="text-3xl md:text-5xl text-primary">
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
                
      </div>
      <div aria-labelledby="contact-actions-heading" className="container mx-auto px-4 sm:px-6 pb-12 md:pb-16">
        <Reveal variant="scale" className="max-w-3xl mx-auto bg-primary shadow-lg shadow-dark/30 p-5 sm:p-8 rounded-lg text-center">
          <Subheading id="contact-actions-heading" className="text-xl sm:text-2xl font-bold text-green-100 mb-3">Get in touch</Subheading>
          <p className="text-green-100 mb-6">No message form is active. Use email, LinkedIn, or GitHub to contact or learn more about my work.</p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            {socialLinkData.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.newTab ? "_blank" : undefined}
                rel={link.newTab ? "noopener noreferrer" : undefined}
                aria-label={link.ariaLabel}
                className="contact-action motion-action min-h-11 inline-flex items-center justify-center gap-2 bg-backdrop text-primary font-semibold px-5 py-3 rounded-md hover:bg-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition"
              >
                {link.icon}
                <span>{link.title}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function ContactSection() {
  return renderContact("h2", "h3");
}

export default function Contact() {
  return <main className="bg-backdrop min-h-screen">{renderContact("h1", "h2")}</main>;
}
