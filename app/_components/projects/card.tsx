"use client"

import {PinContainer} from "@/app/_components/ui/pin-card"

type PinCardProps={
    title:string,
    href:string,
    heading:string,
    description:string,
    children:React.ReactNode
}

const PinCard=({
    title,
    href,
    heading,
    description,
    children
}:PinCardProps)=> {
  return (
    <div className="h-[25rem] w-full flex items-center justify-center ">
      <PinContainer
        title={title}
        href={href}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {heading}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {description}
            </span>
          </div>
          {children}
        </div>
      </PinContainer>
    </div>
  );
}

export default PinCard