import PinCard from '@/app/_components/projects/card'

const pinCardItems=[{
    title:"harsh-ui",
    href:"https://twitter.com/mannupaaji",
    heading:"Harsh UI Component Library",
    description:"A Component library build on top of React with Storybook.",
    children:   <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        
},
{
    title:"Clean Architecture",
    href:"https://github.com/harshit77/nextjs-clean-architecture",
    heading:"Clean Architecture",
    description:"Todo app built on NextJs using Clean Architecture",
    children:   <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        
},
{
    title:"Blog",
    href:"https://github.com/harshit77/Blogs",
    heading:"DashMind Blog",
    description:"A blog app built on NextJs using prisma and nextAuth",
    children:   <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        
},
{
    title:"Microfrontend",
    href:"https://github.com/harshit77/Microfrontend",
    heading:"Microfrontend",
    description:"Basic Implementation of Microfrontend using Webpack Module Federation",
    children:   <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        
},{
    title:"Messaging Svelte App",
    href:"https://github.com/harshit77/Messaging-Svelte-App",
    heading:"Messaging Svelte App ",
    description:"Its a clone of MicroSoft Teams using Svelte Apollo GraphQL and Prisma 2",
    children:   <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        
}]

const Experience = () => {
  return (
    <div className="py-10" id="projects">
        <h1 className="heading  text-neutral-300">
            A Selection of
            <span className="text-purple"> Recent Projects</span>
        </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1">
      {pinCardItems.map(({children,...otherPinItem},index)=><PinCard key={index} {...otherPinItem}>{children}</PinCard>)}
      </div>
    </div>
  )
}

export default Experience