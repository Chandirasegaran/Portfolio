"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

const Experience = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.4,
      },
    }),
  }

  const responsibilities = [
    "Developed a backend for an Email Campaign system using Spring Boot, ensuring efficient email scheduling and delivery.",
    "Utilized ReactJS and Java Springboot as a full-stack developer, optimizing application design and reducing development time by 25%.",
    "Managed AWS deployment, ensuring scalable cloud infrastructure for high-availability applications and enhancing performance monitoring.",
    "Integrated Docker for containerization, optimizing application deployment and management across different environments.",
    "Lead the AI Video Annotation Project, overseeing cross-functional teams, meeting project deadlines, and ensuring high-quality deliverables through continuous project management.",
    "Currently working on a Cloud Gaming Project, focusing on backend optimization and cloud resource management.",
  ]

  return (
    <section id="experience" className="section-container">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          Work Experience
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <Card className="glass-card">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <motion.div className="bg-primary/10 p-3 rounded-full" whileHover={{ scale: 1.1, rotate: 10 }}>
                  <Briefcase className="h-6 w-6 text-primary" />
                </motion.div>
                <div>
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h3 className="text-xl font-bold">Associate Software Engineer</h3>
                      <p className="text-muted-foreground">Highbrow Technology Inc.</p>
                    </div>
                    <p className="text-sm text-muted-foreground">February 2024 - Present</p>
                  </div>

                  <ul className="mt-4 space-y-2 list-disc list-inside">
                    {responsibilities.map((item, index) => (
                      <motion.li key={index} custom={index} variants={listItem}>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

