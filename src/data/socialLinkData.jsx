import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export const socialLinkData = [
  {
    id: "github",
    title: "GitHub",
    ariaLabel: "Jonathan Mkpuma on GitHub (opens in a new tab)",
    href: "https://github.com/kvchi",
    icon: <FaGithub />,
    newTab: true,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    ariaLabel: "Jonathan Mkpuma on LinkedIn (opens in a new tab)",
    href: "https://www.linkedin.com/in/jonathan-mkpuma-418053274",
    icon: <FaLinkedinIn />,
    newTab: true,
  },
  {
    id: "email",
    title: "Email me",
    ariaLabel: "Email Jonathan Mkpuma (opens your email application)",
    href: "mailto:Jonathanmkpuma4@gmail.com",
    icon: <MdOutlineMail />,
    newTab: false,
  },
];
