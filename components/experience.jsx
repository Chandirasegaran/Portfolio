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

  const jobs = [
    {
      title: "Software Engineer (Junior Product Hacker)",
      company: "Regere LLP",
      period: "December 2025 - Present",
      responsibilities: [
        "Engineered a multi-tenant 3D truck/container load-planning microservice in Rust (Axum, Tokio, PostgreSQL, AWS S3) with 21 REST endpoints, combining fleet generation, Best-Fit Decreasing bin packing and center-of-gravity balancing to return item placements and LIFO load sequences.",
        "Delivered stackable-cargo loading and CG repair (+1,600 LOC) using permutation and swap-based rebalancing, verified by ~180 unit and integration tests.",
        "Built transport-unit stacking for a stateless Rust yard recommendation service that ranks storage slots in a 3D yard grid via constraint validation and rule-based scoring, with OpenAPI docs and W3C distributed tracing.",
        "Designed a centralized API gateway for authentication, routing and service orchestration; implemented RBAC with permissions, resource ownership and session management.",
        "Built license lifecycle management and manufacturing-operations features with Next.js, Node.js and PostgreSQL, including Excel bulk upload and RSQL filtering.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company: "Highbrow Technology Inc.",
      period: "February 2024 - October 2025",
      responsibilities: [
        "Designed and deployed Spring Boot microservices with REST APIs, Spring Data JPA/Hibernate and Spring Security on AWS EC2 with CI/CD, improving scheduling efficiency and delivery reliability by 25%.",
        "Built a scalable online assessment platform with React and Next.js on secure backend REST APIs, reducing development time by 25%.",
        "Led the AI Video Annotation project across 7 teams (30+ members) in Agile/Scrum, defining SOPs, resolving blockers and delivering every milestone on time.",
        "Cut deployment time by 30% with Git, Docker and CI/CD pipelines; provisioned and tuned AWS EC2 GPU instances with performance monitoring.",
      ],
    },
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

        <div className="space-y-6">
          {jobs.map((job) => (
            <motion.div
              key={job.company}
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
                          <h3 className="text-xl font-bold">{job.title}</h3>
                          <p className="text-muted-foreground">{job.company}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">{job.period}</p>
                      </div>

                      <ul className="mt-4 space-y-2 list-disc list-inside">
                        {job.responsibilities.map((item, index) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

