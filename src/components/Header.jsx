import { useEffect, useState } from "react";
import { PiWebhooksLogoBold } from "react-icons/pi";
import { RiMenu4Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { headerLinkData } from "../data/headerLinkData";
import Reveal, { revealSection } from "./Reveal";


export default function Header() {
  const { pathname, hash } = useLocation();
  const [showNav, setShowNav] = useState(false);
  const [desktopNavigation, setDesktopNavigation] = useState(() =>
    window.matchMedia("(min-width: 768px)").matches,
  );
  const navIsHidden = !desktopNavigation && !showNav;
  const skipHeaderEntrance = pathname !== "/" || Boolean(hash && hash !== "#home");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateNavigationMode = (event) => setDesktopNavigation(event.matches);
    mediaQuery.addEventListener("change", updateNavigationMode);
    return () => mediaQuery.removeEventListener("change", updateNavigationMode);
  }, []);

  const scrollToCurrentSection = (event, sectionHash) => {
    setShowNav(false);

    if (pathname !== "/" || hash !== sectionHash) return;

    const target = document.getElementById(sectionHash.slice(1));
    if (!target) return;

    event.preventDefault();
    revealSection(target);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    window.requestAnimationFrame(() => {
      target.querySelector("[data-section-heading]")?.focus({ preventScroll: true });
    });
  };
  

  return (
    <Reveal as="header" variant="header" duration={420} immediate={skipHeaderEntrance} className="fixed top-0 left-0 right-0 w-full px-4 py-3 sm:p-4 bg-primary z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center gap-2 sm:gap-4">
        <Link to="/#home" className="flex gap-1 items-center min-w-0" onClick={() => setShowNav(false)}>
          <PiWebhooksLogoBold className="text-green-200 text-lg sm:text-xl md:text-2xl shrink-0" />
          <span className="text-secondary font-bold text-lg sm:text-xl md:text-2xl truncate">
            KvchiDcoder
          </span>
        </Link>
        <nav
          id="primary-navigation"
          aria-hidden={navIsHidden || undefined}
          className={`mobile-nav absolute md:static top-full left-0 right-0 md:left-auto md:right-auto w-full md:w-max flex md:flex flex-col md:flex-row md:gap-2 md:justify-center flex-1 bg-primary md:bg-transparent py-2 md:py-0 shadow-lg md:shadow-none ${showNav ? "mobile-nav--open" : ""}`}
        >
          {headerLinkData.map((el) => {
            const isActive = pathname === "/" && (hash || "#home") === el.hash;

            return (
              <Link
                key={el.id}
                to={el.url}
                state={pathname !== "/" ? { immediateSectionScroll: true } : undefined}
                onClick={(event) => scrollToCurrentSection(event, el.hash)}
                tabIndex={navIsHidden ? -1 : undefined}
                aria-current={isActive ? "location" : undefined}
                className={`nav-link py-3 px-4 sm:px-6 md:py-2 md:px-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-100 ${
                  isActive
                    ? "is-active text-white"
                    : "text-green-200 dark:text-green-100"
                } hover:text-green-100 rounded-sm`}
              >
                {" "}
                {el.title}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowNav(!showNav)}
            aria-label={showNav ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={showNav}
            aria-controls="primary-navigation"
            className="menu-button motion-action w-11 h-11 rounded-sm flex md:hidden justify-center items-center border border-green-300 bg-green-100 text-primary text-xl dark:bg-dark dark:text-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-100"
          >
            <RiMenu4Line aria-hidden="true" />
          </button>
          
        </div>
      </div>
    </Reveal>
  );
}
