import React from "react";
import ProgressBar from "../components/ProgressBar";
import { me } from "../assets/Images";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="bg-backdrop py-40 pt-48 md:pt-10">
      <aside className="flex flex-col gap-4 md:flex-row md:items-center m-5">
        <img
          src={me}
          alt="me"
          className="object-cover bg-primary -scale-x-100 md:h-full md:w-auto ml-40 shadow-lg"
        />
        <div className="flex-1 flex flex-col items-start">
          <p className="py-2 px-2 text-green-200 bg-primary rounded-sm uppercase font-bold text-sm md:text-xl w-max mx-auto">
            About Me.
          </p>
          <h3 className="text-2xl md:text-2xl font-bold text-primary mx-auto">
            WEB DEVELOPER 
          </h3>
          <p className="text-primary max-w-screen-md mt-4 p-4 text-balance">
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
              className="w-max py-2 px-4 md:px-6 bg-dark border border-dark/80 hover:bg-white text-green-200 hover:text-dark/80 text-sm rounded-sm flex items-center gap-2 mx-auto"
              to={"/contact"}
            >
              Contact Me <IoArrowForward />
            </Link>
          
        </div>
      </aside>
    </section>
  );
}
