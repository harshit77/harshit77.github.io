"use client"
import type { MouseEvent,ElementType } from "react";
import Link from "next/link"
import { cn } from "@/lib/utils";

type ButtonProps={
    label:string,
    href?:string,
    to?:string,
    className?:string,
    icon?:React.ReactNode
    iconPosition?: "left" |"right",
    download?: boolean
    handleClick?:(event:MouseEvent<HTMLButtonElement>)=> void
}

const Button = ({label,href,to,className,icon, iconPosition="right",download,handleClick}:ButtonProps) => {
  let RenderedComponent:ElementType, elementSpecificProps;
  if(to) {
    RenderedComponent= Link;
    elementSpecificProps={
      href:to,
    }
  }
  else if(href) {
    RenderedComponent= "a";
    elementSpecificProps={
      href,
      download
    }
  }
  else {
  RenderedComponent="button";
    elementSpecificProps={
      handleClick
    }
  }
  
  return (
     <RenderedComponent className={cn("px-4 h-12 text-white flex justify-center items-center gap-2 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-sm bg-transparent hover:shadow-md",className)} {...elementSpecificProps}>
        {iconPosition==="left" && icon }
        {label}
        {iconPosition==="right" && icon }
      </RenderedComponent>
  )
}

export default Button