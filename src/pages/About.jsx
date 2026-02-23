
import ProgressBar from "../components/ProgressBar";
import { me } from "../assets/Images";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about" className="bg-backdrop py-12 sm:py-16 md:py-20 scroll-mt-24">
      <aside className="flex flex-col gap-6 lg:flex-row lg:items-center container mx-auto px-4 sm:px-6">
        <img
          src={me}
          alt="me"
          className="object-cover bg-primary -scale-x-100 w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 lg:ml-12 xl:ml-20 lg:w-auto lg:max-w-none shadow-lg rounded-lg"
        />
        <div className="flex-1 flex flex-col items-start w-full max-w-2xl mx-auto lg:mx-0">
          <p className="py-2 px-3 text-green-200 bg-primary rounded-sm uppercase font-bold text-sm md:text-lg w-max">
            About Me.
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-primary">
            WEB DEVELOPER 
          </h3>
          <p className="text-primary text-sm sm:text-base mt-4 p-2 sm:p-4 text-balance">
            I am a passionate and dedicated web developer with a strong focus on
            creating dynamic and responsive user interfaces using React.js. My
            expertise extends to backend development, where I leverage robust
            technologies to build secure and efficient server-side applications.
            Additionally, I have substantial experience in database creation and
            management, ensuring that data integrity and performance are always
            at the forefront of my projects. With a keen eye for detail and a
            commitment to continuous learning, I strive to deliver high-quality
            web solutions that meet and exceed client expectations.
          </p>
            <ProgressBar />
            <Link
              data-aos="fade-left"
              data-aos-delay="800"
              data-aos-duration="1000"
              className="w-max py-2 px-4 md:px-6 bg-dark border border-dark/80 hover:bg-white text-green-200 hover:text-dark/80 text-sm rounded-md flex items-center gap-2 mt-2"
              to={"/contact"}
            >
              Contact Me <IoArrowForward />
            </Link>
          
        </div>
      </aside>
    </section>
  );
}
