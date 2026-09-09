import { contactLinkData } from '../data/contactLinkData'
import { socialLinkData } from '../data/socialLinkData'


export default function Contact() {
  return (
    <main className="bg-backdrop min-h-screen">
       <section className='relative bg-backdrop flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6'>
       <div className='relative z-0 text-center text-primary container mx-auto'>
       <h1 className='text-lg sm:text-xl md:text-2xl font-bold mb-4 bg-primary text-green-200 inline-block p-2 rounded-sm'>CONTACT</h1>
       <p className='text-base sm:text-lg md:text-xl text-center text-balance leading-relaxed max-w-3xl mx-auto'>Have a role, project, or collaboration in mind? Choose one of the verified contact options below. Email opens your email application so you can send a message directly.</p>
       </div>
       </section>
       <section className="container mx-auto px-4 sm:px-6 flex justify-center py-8 md:py-12 text-balance">
        {contactLinkData.map((el,i) => ( <aside data-aos={i % 2 === 0 ? "zoom-in-left" : "zoom-out-right"} data-aos-delay={(i+1)*200} data-aos-duration="600" key={el.id} className="bg-backdrop p-4 sm:p-5 md:p-6 rounded-lg flex flex-col gap-3 md:gap-4 items-center text-center hover:-translate-y-2 sm:hover:-translate-y-3 border-2 border-primary/10 hover:border-primary/30 transition-transform">
                <span className="text-3xl md:text-5xl text-primary">
                  {el.icon}
                </span>
                <h2 className="text-lg md:text-xl font-semibold text-dark/70">
                  {el.title}
                </h2>
                <p className="text-sm md:text-base text-dark/50">
                  {el.description}
                </p>
                </aside>
              ))}
                
      </section>
      <section aria-labelledby="contact-actions-heading" className="container mx-auto px-4 sm:px-6 pb-12 md:pb-16">
        <div className="max-w-3xl mx-auto bg-primary shadow-lg shadow-dark/30 p-5 sm:p-8 rounded-lg text-center">
          <h2 id="contact-actions-heading" className="text-xl sm:text-2xl font-bold text-green-100 mb-3">Get in touch</h2>
          <p className="text-green-100 mb-6">No message form is active. Use email, LinkedIn, or GitHub to contact or learn more about my work.</p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            {socialLinkData.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.newTab ? "_blank" : undefined}
                rel={link.newTab ? "noopener noreferrer" : undefined}
                aria-label={link.ariaLabel}
                className="min-h-11 inline-flex items-center justify-center gap-2 bg-backdrop text-primary font-semibold px-5 py-3 rounded-md hover:bg-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition"
              >
                {link.icon}
                <span>{link.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
