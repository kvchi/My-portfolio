import { cssLogo, htmlLogo, javaScriptLogo, nextjs, reactLogo, tailwindcss } from "../assets/Images";


export default function progressBar() {
  return (
    <div className="z-50 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
  <section className="my-4">
    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary text-center md:text-left">
      Technologies I Work With
    </h2>

    <div className="grid justify-center sm:justify-start grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-6 mx-auto">
      <div className="flex items-center gap-3">
        <img src={htmlLogo} alt="HTML" className="w-6 h-6 sm:w-8 sm:h-8" />
        <span className="text-sm sm:text-base">HTML5</span>
      </div>
      <div className="flex items-center gap-3">
        <img src={cssLogo} alt="CSS" className="w-6 h-6 sm:w-8 sm:h-8" />
        <span className="text-sm sm:text-base">CSS3</span>
      </div>
      <div className="flex items-center gap-3">
        <img src={javaScriptLogo} alt="JavaScript" className="w-6 h-6 sm:w-8 sm:h-8" />
        <span className="text-sm sm:text-base">JavaScript</span>
      </div>
      <div className="flex items-center gap-3">
        <img src={reactLogo} alt="React" className="w-6 h-6 sm:w-8 sm:h-8" />
        <span className="text-sm sm:text-base">React.js</span>
      </div>
      <div className="flex items-center gap-3">
        <img src={nextjs} alt="Next.js" className="w-6 h-6 sm:w-8 sm:h-8" />
        <span className="text-sm sm:text-base">Next.js</span>
      </div>
      <div className="flex items-center gap-3">
        <img src={tailwindcss} alt="Tailwind" className="w-6 h-6 sm:w-8 sm:h-8" />
        <span className="text-sm sm:text-base">Tailwind CSS</span>
      </div>
    </div>
  </section>
</div>

  )
}

