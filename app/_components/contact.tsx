"use client"

import MagicButton from "./ui/magic-button"
import {FaDownload} from "react-icons/fa";
import {RESUME_URL} from "@/lib/constants"


const Contact = () => {
  
   const handleClick=()=>{
    const anchorElement= document.createElement("a");
    anchorElement.href=RESUME_URL;
    anchorElement.download=RESUME_URL;
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
  }

  return (
      <div className="h-[30rem] bg-black bg-dot-white/[0.2] relative pt-20 flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black   [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col items-center space-y-4 w-9/12 sm:w-7/12">
      <p className="text-2xl sm:text-4xl font-bold relative text-center  text-white ">
          Ready to take <span className="text-purple">your</span> digital presence to the next level ?
      </p>
      <p  className="text-neutral-300 text-sm">Reach to me today and let&apos;s discuss how I can help ypu achieve your goals </p>
       <MagicButton title="Download Resume" icon={<FaDownload/>} handleClick={handleClick}/>
      </div>
    </div>

  )
}



export default Contact