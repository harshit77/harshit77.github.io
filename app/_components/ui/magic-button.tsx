import type { ElementType } from "react";
import Link from "next/link"

type MagicButtonProps ={
    title:string,
    href?:string,
    iconPosition?:"left" | "right",
    icon:React.ReactNode
    download?:boolean
    handleClick?:(event:React.MouseEvent<HTMLButtonElement>)=>void
}

const MagicButton = ({
    title,
    href,
    iconPosition="right",
    icon,
    handleClick
}:MagicButtonProps) => {
     let RenderedComponent:ElementType, elementSpecificProps;
   if(href) {
    RenderedComponent= Link;
    elementSpecificProps={
      href,
    }
  }
  else {
  RenderedComponent="button";
    elementSpecificProps={
      onClick:handleClick
    }
  }
  return (
     <RenderedComponent className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px]" {...elementSpecificProps}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center  bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl rounded-md gap-4">
            {iconPosition === "left" && icon}
            {title}
            {iconPosition === "right" && icon}
        </span>
      </RenderedComponent>
  )
}

export default MagicButton