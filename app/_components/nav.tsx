"use client"

import FloatingNavBar from "@/app/_components/ui/floating-navbar";
import { FaHome,FaProjectDiagram,FaBootstrap,FaBrain } from "react-icons/fa";

const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome className="h-4 w-4 text-neutral-300 " />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <FaProjectDiagram className="h-4 w-4 text-neutral-300 " />,
    },
    {
      name: "Technologies",
      link: "#technologies",
      icon: (
        <FaBootstrap className="h-4 w-4 text-neutral-300" />
      ),
    },
     {
      name: "Pattern",
      link: "#pattern",
      icon: (
        <FaBrain className="h-4 w-4 text-neutral-300" />
      ),
    },
  ];

const Nav=()=>{
    return <FloatingNavBar navItems={navItems} className="px-4"/>
}

export default Nav