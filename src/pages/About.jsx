
import ProgressBar from "../components/ProgressBar";
import { me } from "../assets/Images";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

function renderAbout(Heading) {
  const SkillsHeading = Heading === "h1" ? "h2" : "h3";

  return (
    <section id="about" aria-labelledby="about-heading" className="bg-backdrop py-12 sm:py-16 md:py-20">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center container mx-auto px-4 sm:px-6">
        <img
          src={me}
          width="447"
          height="559"
          alt="Portrait of Jonathan Mkpuma"
          className="object-cover bg-primary -scale-x-100 w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 lg:ml-12 xl:ml-20 lg:w-auto lg:max-w-none shadow-lg rounded-lg"
        />
        <div className="flex-1 flex flex-col items-start w-full max-w-2xl mx-auto lg:mx-0">
          <p className="py-2 px-3 text-green-200 bg-primary rounded-sm uppercase font-bold text-sm md:text-lg w-max">
            About Me.
          </p>
          <Heading id="about-heading" data-section-heading tabIndex="-1" className="section-heading-focus text-xl sm:text-2xl font-bold text-primary">
            FRONTEND DEVELOPER
          </Heading>
          <div className="text-primary text-base mt-4 p-2 sm:p-4 space-y-4 leading-relaxed">
            <p>I focus on frontend development with React and JavaScript, shaping reusable interfaces that stay clear, responsive, and usable across devices.</p>
            <p>I pay attention to semantic structure, keyboard access, responsive images, and performance. I also connect interfaces to REST APIs and handle the loading, error, authentication, and data states that make a user journey dependable.</p>
            <p>Through projects such as ShopSphare, I have delivered end-to-end work with Node.js, Express, databases, payments, transactional email, automated testing, and cloud deployment. This is demonstrated project experience, while frontend development remains my primary focus.</p>
            <p>I am seeking a frontend role where I can contribute thoughtful React work, learn from a strong team, and help build reliable experiences for real users.</p>
          </div>
            <ProgressBar Heading={SkillsHeading} />
            <Link
              data-aos="fade-left"
              data-aos-delay="800"
              data-aos-duration="1000"
              className="w-max py-2 px-4 md:px-6 bg-dark border border-dark/80 hover:bg-white text-green-200 hover:text-dark/80 text-sm rounded-md flex items-center gap-2 mt-2"
              to="/#contact"
            >
              Contact Me <IoArrowForward />
            </Link>
          
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return renderAbout("h2");
}

export default function About() {
  return <main className="bg-backdrop min-h-screen">{renderAbout("h1")}</main>;
}
