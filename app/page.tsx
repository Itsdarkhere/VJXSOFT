import Email from "@/components/Email";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Process from "@/components/Process";
import Hero from "@/components/Hero";
import CookieModal from "@/components/CookieModal";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />

      <Process />

      <Contact />
      <CookieModal />
      <Blogs />

      <Email />
    
    </main>
  );
}
