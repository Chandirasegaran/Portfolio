"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 from-primary/10 to-transparent dark:from-primary/5 dark:to-transparent -z-10"></div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 py-12 flex flex-col items-center text-center"
      >
        <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-primary">Chandirasegaran</span>
        </motion.h1>

        <motion.h2 variants={item} className="text-xl md:text-2xl mb-6 text-muted-foreground">
          Associate Software Engineer
        </motion.h2>

        <motion.p variants={item} className="max-w-2xl mx-auto text-lg mb-8">
          Experienced in full-stack development, cloud computing, and DevOps. Skilled in Java, Python, Spring Boot,
          ReactJS, and AWS.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap justify-center gap-4 mb-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" asChild>
              <a href="/Chandirasegaran-Resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div variants={item} className="flex justify-center space-x-6 mb-16">
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/chandirasegaran"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href="https://linkedin.com/in/chandirasegaran"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href="mailto:chandirasegaransegar@gmail.com"
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <Button variant="ghost" size="icon" className="rounded-full" asChild>
          <a href="#about">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll Down</span>
          </a>
        </Button>
      </motion.div>
    </section>
  )
}

export default Hero

