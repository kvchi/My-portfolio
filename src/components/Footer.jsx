import React from "react";
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
    <footer className="bg-primary py-8 px-4 relative">
      <img
        src={coding2}
        alt="codes"
        className="absolute left-0 top-0 w-full h-full object-cover opacity-15 transform scale-80"
      />
      <div className="container mx-auto grid grid-cols md:grid-cols-4 gap-4 relative">
        <div className="col-span-2 flex flex-col gap-2">
        <Link to={"/"} className="flex gap-3 items-center">
          <PiWebhooksLogoBold className="text-green-200 text-xl md:text-2xl" />
          <h1 className="text-backdrop font-bold text-xl md:text-2xl">
            KvchiDcoder
          </h1>
        </Link>
        <p className="text-green-200 text-base md:text-lg leading-loose">
          {" "}
          My expertise in ReactJS enables me to build seamless user experiences
          and efficient front-end architectures. Additionally, My passion for
          coding and continuous learning drives me to stay updated with the
          latest trends and technologies in both frontend and backend web
          development.
        </p>
        <div className="flex gap-4 text-lg md:text-2xl text-green-200 opacity-90%">
          <Link
            href={"https://www.facebook.com/chedres"}
            target="_blank"
            rel="noopener noreferrer"
            className="leading-loose"
          >
            <IoLogoFacebook />
          </Link>
          <Link
            href={"https://www.twitter.com/chedres"}
            target="_blank"
            rel="noopener noreferrer"
            className="leading-loose"
          >
            <IoLogoTwitter />
          </Link>
          <Link
            href={"https://www.instagram.com/chedres"}
            target="_blank"
            rel="noopener noreferrer"
            className="leading-loose"
          >
            <IoLogoInstagram />
          </Link>
          <Link
            href={"https://www.youtube.com/chedres"}
            target="_blank"
            rel="noopener noreferrer"
            className="leading-loose"
          >
            <IoLogoYoutube />
          </Link>
        </div>
        </div>
        <div className="flex flex-col md:pl-14 pt-4 ">
          {
            footerLinkData.slice(0, 4).map(el => <Link key={el.id} to={el.link} 
                className='flex items-center text-green-200 text-base md:text-lg hover:translate-x-2 py-1 px-2'>
                    {el.icon}
                <span className='ml-2'>{ el.title }</span></Link>)
          }
        </div>
        <div className="flex flex-col md:p-4">
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
