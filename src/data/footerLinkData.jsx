import { HiOutlineUserCircle } from "react-icons/hi";
import { IoLogoWhatsapp, IoPhonePortraitOutline } from "react-icons/io5";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { RiFacebookCircleLine, RiHomeOfficeLine, RiTwitterXLine } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";

export const footerLinkData = [
    {
        id:"2468",
        icon: <RiHomeOfficeLine />,
        title:"Home",
        link: "/",
        external: false
    },
    {
        id:"2467",
        icon: <HiOutlineUserCircle />,
        title:"About",
        link: "/about",
        external: false
    },
    {
        id:"2466",
        icon: <IoPhonePortraitOutline />,
        title:"Contact",
        link: "/contact",
        external: false
    },
    {
        id:"2465",
        icon: <LiaLaptopCodeSolid />,
        title:"Services",
        link: "/services",
        external: false
    },
    {
        id:"2464",
        icon: <SiInstagram />,
        title:"Instagram",
        link: "/https://instagram.com/kvchidcoder",
        external: true
    },
    {
        id:"2463",
        icon:<RiFacebookCircleLine />,
        title:"Facebook",
        link: "/https://facebook.com/kvchidcoder",
        external: true
    },
    {
        id:"2462",
        icon:<RiTwitterXLine />,
        title:"X",
        link: "/https://x.com/kvchidcoder",
        external: true
    },
    {
        id:"2461",
        icon:<IoLogoWhatsapp />,
        title:"Whatsapp",
        link: "/https://wa.me/+2349166750338/kvchidcoder",
        external: true
    },
]