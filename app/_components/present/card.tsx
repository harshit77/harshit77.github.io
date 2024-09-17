"use client"
import Link from "next/link"

type CardProps={
    title:string,
    description:string,
    href:string
}

const Card = ({title,description,href}:CardProps) => {
  return (
  <div className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 tracking-normal">   
        <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
         {title} 
        </p>
 
        <p className="text-sm text-neutral-400" dangerouslySetInnerHTML={{__html:description}}/>
      
        <Link href={href} className="rounded-full w-full p-5 text-white flex justify-center items-center mt-4 text-sm tracking-wider font-bold bg-zinc-800">
          <span>Read Now</span>
        </Link>
      </div>
  )
}

export default Card