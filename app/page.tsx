import Email from "@/components/Email";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Process from "@/components/Process";
import Hero from "@/components/Hero";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />

      <Process />

      <Contact />

      <Blogs />

      <Email />

      {/* <section className="w-full bg-white flex justify-center px-6">
        <div className="w-full max-w-7xl py-24 flex flex-col gap-6">
          <h5 className=" font-bold text-2xl text-indigo-400 leading-tight">Miksi VJXSOFT?</h5>
          <h6 className=" text-xl text-gray-300 lg:text-gray-500">
            VJXSOFT tarjoaa kaiken osaamisen mitä pienyritys kaipaa digitaalisessa markkinoinnissa. 
            Palvelemme kerralla vain muutamaa asiakasta, jotta voimme keskittyä laatuun ja asiakkaan tarpeisiin.
          </h6>
        </div>
      </section> */}
      
    </main>
  );
}
