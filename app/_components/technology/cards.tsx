import CardHover  from "@/app/_components/ui/card-hover";

 const projects = [
 
  {
    title: "ReactJs",
    image:"/react.svg",
    tag:"FrameWork",
    description:
      "React is a JavaScript library for building user interfaces by creating reusable UI components and managing the state of complex web applications.",
    link: "https://react.dev",
  },
  {
    title: "NextJs",
    image:"/next.svg",
    tag:"Meta FrameWork",
    description:
      "Next.js is a React framework that enables server-side rendering, static site generation, and seamless routing for building fast and scalable web applications.",
    link: "https://nextjs.org/",
  },
  {
    title: "Svelte",
    image:"/svelte.svg",
    tag:"FrameWork",
    description:
      "Svelte is a framework that compiles components into highly optimized vanilla JavaScript, resulting in faster performance and smaller bundle sizes for web applications.",
    link: "https://svelte.dev",
  },
  {
    title: "SvelteKit",
    image:"/svelte.svg",
    tag:"FrameWork",
    description:
      "SvelteKit is a framework built on Svelte that provides a comprehensive solution for building fast, scalable web applications with features like server-side rendering and static site generation.",
    link: "https://kit.svelte.dev",
  },
  {
    title: "TypeScript",
    image:"/typescript.svg",
    tag:"Front End",
    description:
      "TypeScript is a statically typed superset of JavaScript that enhances code quality and developer productivity by adding type safety and modern features.",
    link: "https://www.typescriptlang.org",
  },
  {
    title: "Javascript",
    image:"/javascript.svg",
    tag:"Front End",
    description:
      "JavaScript is a versatile, high-level programming language used to create interactive and dynamic content on websites and web applications.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "Jest",
    image:"/jest.svg",
    tag:"Testing",
    description:
      "Jest is a JavaScript testing framework that provides a robust and easy-to-use environment for writing and running unit and integration tests with built-in support for mocking and code coverage..",
    link: "https://jestjs.io",
  },
   {
    title: "Webpack",
    image:"/webpack.svg",
    tag:"Bundling",
    description:
      "Webpack is a powerful module bundler for JavaScript applications that compiles and bundles code, assets, and dependencies into optimized files for efficient deployment.",
    link: "https://webpack.js.org",
  },
   {
    title: "Prisma",
    image:"/prisma.svg",
    tag:"ORM",
    description:
      "Prisma is an open-source ORM (Object-Relational Mapping) tool that simplifies database access and management with type-safe queries and schema-driven data modeling.",
    link: "https://www.prisma.io",
  },
];
 
export default function Cards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <CardHover items={projects} />
    </div>
  );
}
