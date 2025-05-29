import { cssLogo, htmlLogo, javaScriptLogo, nextjs, reactLogo, tailwindcss } from "../assets/Images";


export default function progressBar() {
  return (
    <div className='z-50 items-center w-max p-10 gap-10 md:mx-auto lg:mx-0'>
        <section className="my-1">
  <h2 className="text-2xl font-bold mb-6 text-primary">Technologies I Work With</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <div className="flex items-center gap-3">
      <img src={htmlLogo} alt="HTML" className="w-6 h-6" />
      <span>HTML5</span>
    </div>
    <div className="flex items-center gap-3">
      <img src={cssLogo} alt="CSS" className="w-6 h-6" />
      <span>CSS3</span>
    </div>
    <div className="flex items-center gap-3">
      <img src={javaScriptLogo} alt="JavaScript" className="w-6 h-6" />
      <span>JavaScript</span>
    </div>
    <div className="flex items-center gap-3">
      <img src={reactLogo} alt="React" className="w-6 h-6" />
      <span>React.js</span>
    </div>
    <div className="flex items-center gap-3">
      <img src={nextjs} alt="Next.js" className="w-6 h-6" />
      <span>Next.js</span>
    </div>
    <div className="flex items-center gap-3">
      <img src={tailwindcss} alt="Tailwind" className="w-6 h-6" />
      <span>Tailwind CSS</span>
    </div>
    {/* Add more as needed */}
  </div>
</section>

    </div>
  )
}

