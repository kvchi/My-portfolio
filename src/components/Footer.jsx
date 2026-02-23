
// import {coding} from '../assets/Images'
import { coding2 } from "../assets/Images";
import { Link } from "react-router-dom";
import { PiWebhooksLogoBold } from "react-icons/pi";
import { footerLinkData } from "../data/footerLinkData";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-primary py-8 sm:py-10 px-4 sm:px-6 relative">
      <img
        src={coding2}
        alt="codes"
        className="absolute left-0 top-0 w-full h-full object-cover opacity-15 scale-90 pointer-events-none"
      />
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative">
        <div className="sm:col-span-2 flex flex-col gap-3 sm:gap-4">
        <Link to={"/"} className="flex gap-3 items-center">
          <PiWebhooksLogoBold className="text-green-200 text-xl md:text-2xl" />
          <h1 className="text-backdrop font-bold text-xl md:text-2xl">
            KvchiDcoder
          </h1>
        </Link>
        <p className="text-green-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
          {" "}
          My expertise in ReactJS enables me to build seamless user experiences
          and efficient front-end architectures. Additionally, My passion for
          coding and continuous learning drives me to stay updated with the
          latest trends and technologies in both frontend and backend web
          development.
        </p>
        <div className="flex gap-4 text-lg md:text-2xl text-green-200 opacity-90">
          <a
            href="https://www.facebook.com/chedres"
            target="_blank"
            rel="noopener noreferrer"
            className="leading-loose hover:scale-110 transition-transform"
            aria-label="Facebook"
          >
            <IoLogoFacebook />
          </a>
          <a
            href="https://www.twitter.com/chedres"
            target="_blank"
            rel="noopener noreferrer"
            className="leading-loose hover:scale-110 transition-transform"
            aria-label="Twitter"
          >
            <IoLogoTwitter />
          </a>
          <a
            href="https://www.instagram.com/chedres"
            target="_blank"
            rel="noopener noreferrer"
            className="leading-loose hover:scale-110 transition-transform"
            aria-label="Instagram"
          >
            <IoLogoInstagram />
          </a>
          <a
            href="https://www.youtube.com/chedres"
            target="_blank"
            rel="noopener noreferrer"
            className="leading-loose hover:scale-110 transition-transform"
            aria-label="YouTube"
          >
            <IoLogoYoutube />
          </a>
        </div>
        </div>
        <div className="flex flex-col pt-4 md:pt-0 md:pl-8 lg:pl-14">
          {
            footerLinkData.slice(0, 4).map(el => <Link key={el.id} to={el.link} 
                className='flex items-center text-green-200 text-base md:text-lg hover:translate-x-2 py-1 px-2'>
                    {el.icon}
                <span className='ml-2'>{ el.title }</span></Link>)
          }
        </div>
        <div className="flex flex-col pt-4 md:pt-0 md:pl-8 lg:pl-14">
          {
            footerLinkData.slice(4).map(el => <Link target="_blank" rel="noopener noreferrer" key={el.id} to={el.link} 
                className='flex items-center text-green-200 text-base md:text-lg hover:translate-x-2 py-1 px-2'>
                    {el.icon}<span className='ml-2'>{ el.title }</span></Link>)
          }
        </div>
      </div>
    </footer>
  );
}
