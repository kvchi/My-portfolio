import { HiOutlineUserCircle } from "react-icons/hi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { RiHomeOfficeLine } from "react-icons/ri";

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
        title:"Capabilities",
        link: "/services",
        external: false
    },
]
