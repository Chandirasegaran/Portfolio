"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const Education = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  }

  const educationData = [
    {
      degree: "M.Sc. Integrated Five Year Program",
      institution: "Pondicherry University",
      period: "July 2019 - May 2024",
      grade: "CGPA: 8.62",
      description: "Specializing in Programming, Data Structures, Algorithms, Database Systems, Computer Networks.",
    },
    {
      degree: "Higher Secondary in Computer Science",
      institution: "V.O.C. Govt. Higher Secondary School",
      period: "June 2017 - March 2019",
      grade: "",
      description: "",
    },
  ]

  return (
    <section id="education" className="section-container">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          Education
        </motion.h2>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariant}
            >
              <Card className="glass-card overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <motion.div className="bg-primary/10 p-3 rounded-full" whileHover={{ scale: 1.1, rotate: 10 }}>
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start gap-2">
                        <div>
                          <h3 className="text-xl font-bold">{edu.degree}</h3>
                          <p className="text-muted-foreground">{edu.institution}</p>
                        </div>
                        <div className="text-right min-w-[150px]">
                          <p className="text-sm text-muted-foreground">{edu.period}</p>
                          {edu.grade && <p className="text-sm font-medium ">{edu.grade}</p>}
                        </div>
                      </div>
                      {edu.description && <p className="mt-2">{edu.description}</p>}
                    </div>
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

export default Education
