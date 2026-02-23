import  { useState } from "react";
import { PiWebhooksLogoBold } from "react-icons/pi";
import { MdOutlineSearch } from "react-icons/md";
import { RiMenu4Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { headerLinkData } from "../data/headerLinkData";


export default function Header() {
  const { pathname } = useLocation();
  const [showNav, setShowNav] = useState(false);
  

  const toggleMenu = () => {
    setShowNav((prev) =>!prev);
  }

  return (
    <header className="fixed top-0 left-0 right-0 w-full px-4 py-3 sm:p-4 bg-primary z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center gap-2 sm:gap-4">
        <Link to={"/"} className="flex gap-1 items-center min-w-0">
          <PiWebhooksLogoBold className="text-green-200 text-lg sm:text-xl md:text-2xl shrink-0" />
          <h1 className="text-secondary font-bold text-lg sm:text-xl md:text-2xl truncate">
            KvchiDcoder
          </h1>
        </Link>
        <nav
          className={`absolute md:static top-full left-0 right-0 md:left-auto md:right-auto w-full md:w-max flex flex-col md:flex-row md:gap-2 md:justify-center flex-1 transition-all duration-300 bg-primary md:bg-transparent py-2 md:py-0 shadow-lg md:shadow-none ${
            showNav ? "left-0 z-20" : "left-full md:left-auto -z-10 md:z-auto"
          }`}
        >
          {headerLinkData.map((el) => {
            return (
              <Link
                key={el.id}
                to={el.url}
                onClick={() => {
                  setTimeout(() => {
                    toggleMenu();
                  }, 300);
                }}
                data-aos="fade-right"
              data-aos-delay="800"
              data-aos-duration="1000"
                className={`py-3 px-4 sm:px-6 md:py-2 md:px-4 ${
                  el.url === pathname
                    ? "text-green-200"
                    : "text-green-200 dark:text-green-100"
                } hover:text-green-100 hover:border-b-2 hover:border-white rounded-sm`}
              >
                {" "}
                {el.title}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-backdrop text-green-200 text-xl dark:text-green-100">
            <MdOutlineSearch />
          </div>
          <div
            onClick={() => setShowNav(!showNav)}
            className="w-8 h-8 rounded-sm flex md:hidden justify-center items-center cursor-pointer border border-green-300 bg-green-100 text-primary text-xl dark:bg-dark dark:text-green-100"
          >
            <RiMenu4Line />
          </div>
          
        </div>
      </div>
    </header>
  );
}
