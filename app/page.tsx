import Hero from "@/app/_components/hero"
import Nav from "@/app/_components/nav";
import Experience from "@/app/_components/projects";
import Technology from "@/app/_components/technology"
import Present from "@/app/_components/present";
import Contact from "@/app/_components/contact";
import Footer from "@/app/_components/footer";

export default function Home() {
  return (
   <main className="relative sm:px-10 px-5 flex flex-col justify-center items-center overflow-hidden bg-black-100">
    <div className="max-w-7xl m-auto">
      <Nav/>
      <Hero/>
      <Experience/>
      <Technology/>
      <Present/>
      <Contact/>
      <Footer/>
      </div>
    </main>
  );
}
