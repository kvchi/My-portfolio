
// import {coding} from '../assets/Images'
import { coding2 } from "../assets/Images";
import { Link } from "react-router-dom";
import { PiWebhooksLogoBold } from "react-icons/pi";
import { footerLinkData } from "../data/footerLinkData";
import { socialLinkData } from "../data/socialLinkData";

export default function Footer() {
  return (
    <footer className="bg-primary py-8 sm:py-10 px-4 sm:px-6 relative">
      <img
        src={coding2}
        alt=""
        aria-hidden="true"
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
          Frontend Developer focused on accessible, responsive React interfaces,
          with demonstrated full-stack delivery through tested portfolio projects.
        </p>
        <div className="flex gap-4 text-lg md:text-2xl text-green-200 opacity-90">
          {socialLinkData.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.newTab ? "_blank" : undefined}
              rel={link.newTab ? "noopener noreferrer" : undefined}
              className="w-11 h-11 flex items-center justify-center rounded-sm hover:scale-110 transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-100"
              aria-label={link.ariaLabel}
            >
              {link.icon}
            </a>
          ))}
        </div>
        </div>
        <div className="flex flex-col pt-4 md:pt-0 md:pl-8 lg:pl-14">
          {
            footerLinkData.map(el => <Link key={el.id} to={el.link}
                className='flex items-center text-green-200 text-base md:text-lg hover:translate-x-2 py-1 px-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-100'>
                    {el.icon}
                <span className='ml-2'>{ el.title }</span></Link>)
          }
        </div>
        <div className="flex flex-col pt-4 md:pt-0 md:pl-8 lg:pl-14">
          {
            socialLinkData.map(el => <a
                key={el.id}
                href={el.href}
                target={el.newTab ? "_blank" : undefined}
                rel={el.newTab ? "noopener noreferrer" : undefined}
                className='flex items-center text-green-200 text-base md:text-lg hover:translate-x-2 py-1 px-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-100'>
                    {el.icon}<span className='ml-2'>{ el.title }</span></a>)
          }
        </div>
      </div>
    </footer>
  );
}
