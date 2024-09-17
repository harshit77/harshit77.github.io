

import Image from "next/image"
import Spotlight from "@/app/_components/ui/spotlight"
import GridBackground from "@/app/_components/ui/grid-background";
import TextGenerateEffect  from "@/app/_components/ui/text-generate-effect";
import MagicButton from "@/app/_components/ui/magic-button";
import { FaCompass, FaDownload, FaGithub } from "react-icons/fa";
import Button from "@/app/_components/button";


const Hero = () => {
  return (
    <div className="pb-20 w-full">
      {/* <Spotlight
        className="top-10 left-70 w-[50vw] h-[80vh]"
        fill="white"
      /> */}
       <Spotlight
        className="top-30 left-80 w-[50vw] h-[80vh]"
        fill="white"
      />
      <Spotlight
        className="top-[50vh] left-[50vw] w-[50vw] h-[80vh]"
        fill="purple"
      />
      
      <GridBackground>
         <div className="space-y-4 p-4 max-w-7xl mx-auto relative z-10  w-full pt-20 md:pt-0 flex flex-col justify-center items-center ">
         <Image
        src="/profile-photo.svg"
        width={50}
        height={50}
        alt="Picture of the technology"
        />
          <TextGenerateEffect className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent" words="Transforming Concept into Seamless User Experience"/>
            <p className="text-sm md:text-xl lg:text-2xl text-neutral-300 md:tracking-wider text-center">
            Hi! I&apos;m <span className="font-bold">Harshit</span> , a Front-end developer based in India
            </p>
            <div className="flex gap-4">
              <MagicButton title="Start exploring"  icon={<FaCompass/>}/>
               <Button label="GitHub" href="https://github.com/harshit77" icon={<FaGithub/>}/>
                <Button label="Download Resume" href="/harshit_sahu_resume.pdf" icon={<FaDownload/>}/>
            </div>
        </div>
        </GridBackground> 
    </div>
  )
}

export default Hero