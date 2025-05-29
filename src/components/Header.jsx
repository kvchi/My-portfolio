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
    <header className="relative p-4 bg-primary z-10 ">
      <div className="container mx-auto flex justify-between items-center gap-4">
        <Link to={"/"} className="flex gap-1 items-center">
          <PiWebhooksLogoBold className="text-green-200 text-xl md:text-2xl" />
          <h1 className="text-secondary font-bold text-xl md:text-2xl">
            KvchiDcoder
          </h1>
        </Link>
        <nav
          className={`absolute md:static top-full ${
            showNav ? "left-0 z-20" : "left-full z-0"
          } w-full md:w-max flex flex-col md:flex-row md:gap-2 md:justify-center flex-1 transition-all duration-300 bg-primary`}
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
                className={`py-2 px-8 ${
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
