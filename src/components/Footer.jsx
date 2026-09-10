
import { coding2 } from "../assets/Images";
import { Link } from "react-router-dom";
import { PiWebhooksLogoBold } from "react-icons/pi";
import { footerLinkData } from "../data/footerLinkData";
import { socialLinkData } from "../data/socialLinkData";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="bg-primary py-8 sm:py-10 px-4 sm:px-6 relative">
      <img
        src={coding2}
        width="5760"
        height="3840"
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-0 w-full h-full object-cover opacity-10 scale-90 pointer-events-none"
      />
      <Reveal className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative">
        <div className="sm:col-span-2 flex flex-col gap-3 sm:gap-4">
        <Link to={"/"} aria-label="KvchiDcoder home" className="flex min-h-11 gap-3 items-center">
          <PiWebhooksLogoBold aria-hidden="true" className="text-green-200 text-xl md:text-2xl" />
          <span className="text-backdrop font-bold text-xl md:text-2xl">
            KvchiDcoder
          </span>
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
              className="footer-action motion-action w-11 h-11 flex items-center justify-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-100"
              aria-label={link.ariaLabel}
            >
              {link.icon}
              {link.newTab && <span className="sr-only">Opens in a new tab</span>}
            </a>
          ))}
        </div>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-col pt-4 md:pt-0 md:pl-8 lg:pl-14">
          {
            footerLinkData.map(el => <Link key={el.id} to={el.link}
                className='footer-link min-h-11 flex items-center text-green-200 text-base md:text-lg py-2 px-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-100'>
                    <span aria-hidden="true">{el.icon}</span>
                <span className='ml-2'>{ el.title }</span></Link>)
          }
        </nav>
        <nav aria-label="Social and contact links" className="flex flex-col pt-4 md:pt-0 md:pl-8 lg:pl-14">
          {
            socialLinkData.map(el => <a
                key={el.id}
                href={el.href}
                target={el.newTab ? "_blank" : undefined}
                rel={el.newTab ? "noopener noreferrer" : undefined}
                className='footer-link min-h-11 flex items-center text-green-200 text-base md:text-lg py-2 px-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-100'>
                    <span aria-hidden="true">{el.icon}</span><span className='ml-2'>{ el.title }</span>{el.newTab && <span className="sr-only"> (opens in a new tab)</span>}</a>)
          }
        </nav>
      </Reveal>
    </footer>
  );
}
