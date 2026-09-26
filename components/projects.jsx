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
    title: "Load Optimization Engine",
    description:
      "Multi-tenant 3D truck/container load planner built at Regere: fleet generation, Best-Fit Decreasing bin packing, center-of-gravity repair and LIFO load sequencing behind 21 REST endpoints, backed by ~180 tests.",
    technologies: ["Rust", "Axum", "Tokio", "PostgreSQL", "AWS S3", "Docker"],
    github: "",
    demo: "",
  },
  {
    id: 2,
    title: "Yard Recommendation Service",
    description:
      "Stateless service built at Regere that ranks storage slots in a 3D equipment yard using constraint validation, transport-unit stacking rules and rule-based scoring, with OpenAPI docs and W3C distributed tracing.",
    technologies: ["Rust", "Axum", "OpenAPI", "Distributed Tracing"],
    github: "",
    demo: "",
  },
  {
    id: 3,
    title: "Email Campaign Microservices",
    description:
      "Spring Boot microservices for scheduling and delivering email campaigns, with REST APIs, JPA/Hibernate and Spring Security, deployed on AWS EC2 via CI/CD; improved delivery reliability by 25%.",
    technologies: ["Java", "Spring Boot", "Spring Security", "Hibernate", "AWS EC2"],
    github: "",
    demo: "",
  },
  {
    id: 4,
    title: "Expense Tracker",
    description:
      "Full-stack expense management app with Spring Boot REST APIs, Spring Data JPA/MySQL persistence and a React UI with real-time Firebase sync.",
    technologies: ["Java", "Spring Boot", "MySQL", "React", "Firebase"],
    github: "",
    demo: "https://expensetracker-segar.vercel.app/",
  },
  {
    id: 5,
    title: "Staff Timetable Optimization",
    description:
      "Automated, conflict-free staff allocation and timetable generation for a university department with a manual override feature, cutting manual scheduling time by 70%.",
    technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
    github: "https://github.com/Chandirasegaran/TimeTableScheduler-TTS",
    demo: "",
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
                  {(project.github || project.demo) && (
                    <CardFooter className="flex justify-between">
                      {project.github && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        </motion.div>
                      )}
                      {project.demo && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </CardFooter>
                  )}
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

