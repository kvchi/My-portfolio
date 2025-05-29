import  { useState } from 'react'
import { contactLinkData } from '../data/contactLinkData'


export default function Contact() {

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    address: "",
    services: "",
  })

  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name] :e.target.value}))
  }

  return (
    <main className="bg-backdrop">
       <section className='relative bg-backdrop flex items-center justify-center py-20 px-2  md:pt-10'>
       <div className='relative z-0 text-center text-primary '>
       <h1 className='text-xl md:text-2xl font-bold mb-4 bg-primary text-green-200 inline-block p-2 rounded-sm'>CONTACT</h1>
       <p className='text-xl md:text-2xl text-center text-balance leading-relaxed'>We&apos;re here to answer any questions you may have about our services or to discuss how we can help you achieve your goals.Feel free to reach out to us using the form below or contact us directly via email or phone. We look forward to hearing from you!</p>
       </div>
       </section>
       <section className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 py-10 text-balance">
        {contactLinkData.map((el,i) => ( <aside data-aos={i % 2 === 0 ? "zoom-in-left" : "zoom-out-right"} data-aos-delay={(i+1)*900} data-aos-duration="1000" key={el.id} className="bg-backdrop p-4 md:p-6 rounded-md flex flex-col gap-4 md:gap-6 items-center text-center hover:-translate-y-4 border-2 border-primary/5 hover:border-primary/30">
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
      <div className=' container mx-auto flex relative justify-center items-center '>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md bg-primary shadow-lg shadow-dark p-4 mb-8">
          <div data-aos="fade-up" data-aos-delay="1400" className='flex items-center gap-1 border-b border-green-100 text-green-200 p-2'>
          {/* <IoPersonOutline /> */}
          <input type="text" value={inputs.name} onChange={handleChange} required
          placeholder='Name e.g Kvchi'
          className='flex-1 p-1 outline-none bg-backdrop rounded-sm' />
          </div>
          <div data-aos="fade-up" data-aos-delay="1400" className="flex items-center gap-1 border-b border-green-100 text-green-200 p-2">
            {/* <TbMailForward /> */}
            <input type="email" value={inputs.email} name='email' onChange={handleChange} required placeholder='JohnDoe@mail.com' className="flex-1 p-1 outline-none rounded-sm bg-backdrop" />
          </div>
          <div data-aos="fade-down" data-aos-delay="1000" className='flex items-center gap-1 border-b border-green-100 text-green-200 p-2'>
          {/* <MdOutlineLocationOn /> */}
          <input type="text" value={inputs.address} onChange={handleChange} required
          placeholder='e.g FCT,Abuja Jikwoyi Phase 3'
          className='flex-1 p-1 outline-none rounded-sm bg-backdrop' />
          </div>
          <div data-aos="fade-down" data-aos-delay="1000" className='flex items-center gap-1 border-b border-green-100 text-green-200 p-2'>
          {/* <LiaLaptopCodeSolid  /> */}
          <input type="text" value={inputs.services} onChange={handleChange} required
          placeholder='e.g web devlopment'
          className='flex-1 p-1 outline-none rounded-sm bg-backdrop' />
          </div>
          <div data-aos="fade-down" data-aos-delay="1000" className='col-span-1 md:col-span-2 flex items-center gap-1 border-b border-green-100 text-green-200 p-2'>
      <textarea value={inputs.message} onChange={handleChange} required
        placeholder='Enter your message here...'
        className='flex-1 p-1 outline-none bg-backdrop rounded-sm resize-none' rows="5"></textarea>
    </div>
    <div data-aos="fade-in"
    data-aos-delay="1600"
    className='col-span-1 md:col-span-2 flex justify-center'>
      <button type="submit" className='bg-backdrop text-primary py-2 px-4 rounded-md mt-4 hover:bg-green-200 transition'>
        Submit
      </button>
    </div>    
  </form>
      </div>
    </main>
  )
}
