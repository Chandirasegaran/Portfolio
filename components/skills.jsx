"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "PHP"],
  },
  {
    category: "Frontend Development",
    skills: ["ReactJS", "HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    category: "Backend Development",
    skills: ["Java Springboot", "REST API", "Microservices"],
  },
  {
    category: "Mobile App Development",
    skills: ["Flutter", "Dart"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Git", "CI/CD", "Virtualization"],
  },
  {
    category: "Project Management",
    skills: ["Leadership", "Agile Methodology"],
  },
]

const Skills = () => {
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

  const skillVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.05 * i,
        duration: 0.3,
      },
    }),
  }

  return (
    <section id="skills" className="section-container">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariant}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="glass-card h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        custom={skillIndex}
                        variants={skillVariant}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(var(--primary), 0.2)",
                          transition: { duration: 0.2 },
                        }}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

