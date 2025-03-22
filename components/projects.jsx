"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Staff Timetable Optimization",
    description:
      "Automated staff allocation system that resolves conflicts, ensuring a digitalized and efficient scheduling process unique to the department's needs with a manual override feature.",
    technologies: ["PHP", "HTML", "CSS", "Bootstrap", "JavaScript", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Attendance Tracker",
    description:
      "Developed an Attendance Tracker application using Flutter to streamline attendance management for college classes. The app allows faculty to mark attendance digitally, view attendance records, and generate reports.",
    technologies: ["Flutter", "Dart", "Firebase"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Radio Streaming App",
    description:
      "Developed a Radio Streaming App using Flutter, providing users with seamless access to online radio stations. The app features a clean and intuitive interface, station browsing, and playback controls.",
    technologies: ["Flutter", "Dart", "API Integration"],
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Tic-tac-toe Game",
    description: "Developed a Tic-tac-toe game using Java with interactive gameplay and a user-friendly interface.",
    technologies: ["Java", "Swing"],
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    title: "Brick Breaker Game",
    description:
      "Developed a Brick Breaker game using HTML, CSS, and JavaScript, featuring interactive gameplay, smooth controls, and a responsive design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },
]

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3)

  const showMoreProjects = () => {
    setVisibleProjects(projects.length)
  }

  const showLessProjects = () => {
    setVisibleProjects(3)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  }

  return (
    <section id="projects" className="section-container">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {projects.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariant}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Card className="glass-card h-full flex flex-col">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p>{project.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          {visibleProjects < projects.length ? (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button onClick={showMoreProjects}>Show More Projects</Button>
            </motion.div>
          ) : (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" onClick={showLessProjects}>
                Show Less
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

