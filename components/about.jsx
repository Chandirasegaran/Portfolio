"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

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
                    Associate Software Engineer with 1+ year of experience in full-stack development, cloud computing,
                    and DevOps. Skilled in Java, Python, Spring Boot, ReactJS, AWS, with experience in backend
                    development for an email campaign, lead for AI Video Annotation and a cloud gaming project.
                  </p>
                  <p className="text-lg">
                    I'm passionate about creating efficient, scalable solutions and continuously learning new
                    technologies. My experience spans from developing backend systems to leading cross-functional teams
                    on innovative projects.
                  </p>
                </div>
                <motion.div
                  className="flex justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
                    {/* <img
                      src="/placeholder.svg?height=256&width=256"
                      alt="Chandirasegaran"
                      className="object-cover w-full h-full"
                    /> */}

                    <Image
                    src={require('@/public/pic.png')}
                    alt="Chandirasegaran"
                    width={256}
                    height={256}
                    />
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  className="text-center p-4 rounded-lg bg-primary/5"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.1)" }}
                >
                  <h3 className="font-bold text-lg mb-2">Location</h3>
                  <p><a href="https://maps.app.goo.gl/u2SrimEGU3Zab9xS7" target="_blank">Pondicherry, India</a></p>
                </motion.div>
                <motion.div
                  className="text-center p-4 rounded-lg bg-primary/5"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.1)" }}
                >
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="break-all"><a href="mailto:chandirasegaransegar@gmail.com" >chandirasegaransegar@gmail.com</a></p>
                </motion.div>
                {/* <motion.div
                  className="text-center p-4 rounded-lg bg-primary/5"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.1)" }}
                >
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <p>+91 9442019821</p>
                </motion.div> */}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default About

