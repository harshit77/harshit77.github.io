

import Image from "next/image"
import Spotlight from "@/app/_components/ui/spotlight"
import GridBackground from "@/app/_components/ui/grid-background";
import TextGenerateEffect  from "@/app/_components/ui/text-generate-effect";
import MagicButton from "@/app/_components/ui/magic-button";
import { FaCompass, FaDownload, FaGithub } from "react-icons/fa";
import Button from "@/app/_components/button";
import {RESUME_URL} from "@/lib/constants"


const Hero = () => {

  return (
    <div className="pb-20 w-full">
       <Spotlight
        className="top-30 left-80 w-[50vw] h-[80vh]"
        fill="white"
      />
      <Spotlight
        className="top-[50vh] left-[50vw] w-[50vw] h-[80vh]"
        fill="purple"
      />
      
      <GridBackground>
         <div className="space-y-4 p-4 max-w-7xl mx-auto relative z-10  w-full md:pt-0 flex flex-col justify-center items-center ">
          <div className="relative h-40 w-40 flex justify-center items-center mt-10">
              <Image
                src="/profile-photo.png"
                layout="fill"
                objectFit="contain"
                alt="Profile Photo"
              />
            </div>
            
              <TextGenerateEffect className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent m-0" words="Bringing Concepts to Life with Seamless User Experiences"/>
                <p className="text-sm md:text-xl lg:text-2xl text-neutral-300 md:tracking-wider text-center">
                Hi! I&apos;m <span className="font-bold">Harshit</span> , a Front-end developer based in India
                </p>
                <div className="grid md:grid-cols-3 grid-cols-1  gap-4">
                    <MagicButton title="Start exploring" href="#projects"  icon={<FaCompass/>}/>
                    <Button label="GitHub" to="https://github.com/harshit77" icon={<FaGithub/>}/>
                    <Button label="Download Resume" href={RESUME_URL} download icon={<FaDownload/>}/>
                </div>
              </div>
        </GridBackground> 
    </div>
  )
}

export default Hero