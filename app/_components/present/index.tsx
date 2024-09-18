"use client";
import React from "react";
import { motion } from "framer-motion";
import  LampContainer  from "@/app/_components/ui/lamp-effect";
import Card from "@/app/_components/present/card"
import FlipWords from "@/app/_components/ui/flip-words"

const cards=[{
  title:"Clean Architecture",
  description:"Clean Architecture is a software design philosophy proposed by Robert C. Martin (Uncle Bob) that emphasizes the separation of concerns and the independence of components. Its main goals are to make software systems more maintainable, flexible, and scalable. <a href='https://github.com/harshit77/nextjs-clean-architecture' class='text-white underline block'>Implemention details</a>",
  href:"https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"
},
{
  title:"Micro Frontend Architecture",
  description:"Micro Frontend Architecture is a design pattern that extends the concept of microservices to the frontend, aiming to break down a monolithic frontend application into smaller, independently deployable pieces. This approach can enhance scalability, maintainability, and team autonomy.<a href='https://github.com/harshit77/Microfrontend' class='text-white underline block'>Implemention details</a>",
  href:"https://micro-frontends.org/"
}]

const words = ["Clean", "Beautiful", "Modern","Maintainable","Expandable"];

export default function Present() {
  return (
    <div className="flex flex-col space-y-10 bg-grid-small-black pt-10" id="pattern">
      <div className="text-4xl mx-auto font-normal text-neutral-400">
        Building
        <FlipWords words={words} className="text-purple" />
        Web using below <span className="text-white">Architectures</span>
      </div>
  
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 300 }}
        whileInView={{ opacity: 1, y: 200 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="-mt-40 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl flex gap-4"
      >
       {cards.map((card,index)=><Card key={index} {...card}/>)}
      </motion.h1>
    </LampContainer>
    </div>
  );
}
