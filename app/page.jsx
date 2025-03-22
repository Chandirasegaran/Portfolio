import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Certificates from "@/components/certificates"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
    </div>
  )
}

