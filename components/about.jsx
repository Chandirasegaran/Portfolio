"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="section-container">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          About Me
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <Card className="glass-card overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg mb-4">
                    Software Engineer with 2.5+ years of experience designing and building scalable backend services
                    with Java, Spring Boot and Microservices, plus high-performance Rust services. I've built REST APIs,
                    an API gateway, multi-tenant distributed systems and optimization engines (3D bin packing,
                    constraint-based recommendation) on PostgreSQL, MySQL and MongoDB.
                  </p>
                  <p className="text-lg">
                    I care about clean design, testable and maintainable code, and on-time delivery. My experience spans
                    building backend systems end to end to leading a 30+ member, 7-team project in Agile/Scrum.
                  </p>
                </div>
                <motion.div
                  className="flex justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
                    <img
                      src="/me.png"
                      alt="Chandirasegaran"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.div
                  className="text-center p-4 rounded-lg bg-primary/5"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.1)" }}
                >
                  <h3 className="font-bold text-lg mb-2">Location</h3>
                  <p>Pondicherry, India</p>
                </motion.div>
                <motion.div
                  className="text-center p-4 rounded-lg bg-primary/5"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.1)" }}
                >
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="break-all">chandirasegaransegar@gmail.com</p>
                </motion.div>
                <motion.div
                  className="text-center p-4 rounded-lg bg-primary/5"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.1)" }}
                >
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <p>+91 9442019821</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default About

