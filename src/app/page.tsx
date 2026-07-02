import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-white relative z-10">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Skills />
      <Resume />
      <Contact />
    </main>
  );
}
