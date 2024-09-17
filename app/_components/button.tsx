"use client"
import type { MouseEvent,ElementType } from "react";
import Link from "next/link"
import { cn } from "@/lib/utils";

type ButtonProps={
    label:string,
    href?:string,
    className?:string,
    icon?:React.ReactNode
    iconPosition?: "left" |"right"
    handleClick?:(event:MouseEvent<HTMLButtonElement>)=> void
}

const Button = ({label,href,className,icon, iconPosition="right",handleClick}:ButtonProps) => {
  let RenderedComponent:ElementType, elementSpecificProps;
  if(href) {
    RenderedComponent= Link;
    elementSpecificProps={
      href
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